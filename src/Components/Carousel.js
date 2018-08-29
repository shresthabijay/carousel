import React, { Component } from 'react';
import {LeftArrow,RightArrow} from "./Arrow"
import Slide from "./Slide"
import Dots,{Dot} from "./Dot"


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state={
            images:this.props.images,
            currentIndex:0
        }

        let height=this.props.fluid?"100%":"100vh"
        let width=this.props.fluid?"100%":"100vw"

        this.styles={
            height:height,
            width:width,
            overflow:"hidden",
            whiteSpace:"no-wrap",
            padding:"0",
            position:"relative"
        }

        this.wrapperStyle={
            height:"100%",
            width:"100%",
            display:"flex",
            flexDirection: "row",
            flex:"no-wrap",
            whiteSpace:"no-wrap",
            transition:"all 650ms "
        }
        
    }

    componentDidMount=()=>{
        this.updateDimensions()
        window.addEventListener("resize",this.updateDimensions)

        let shouldAutoplay=this.props.autoplay || false;
        if(shouldAutoplay){

            let intervalTime=(this.props.autoplay>150)?this.props.autoplay:150
            setInterval(()=>{
                this.goToNextSlide()
            },intervalTime)
        }
    }

    renderSlides=()=>(
        this.state.images.map((img,key)=>
        <Slide key={key} image={img}/>
    ))
    
    goToNextSlide=()=>{
        if(this.state.currentIndex<this.state.images.length-1){
            this.setState(prevState=>{
                return {currentIndex:prevState.currentIndex+1}
            })
        }
        else{
            this.setState(prevState=>{
                return {currentIndex:0}
            })
        }    
    }

    componentWillUnmount(){
        window.removeEventListener("resize",this.updateDimensions)
    }

    goToPreviousSlide=()=>{
        if(this.state.currentIndex>0){
            this.setState(prevState=>{
                return {currentIndex:prevState.currentIndex-1}
            })
        }    
    }

    dotClickHandler=(index)=>{
        this.setState(()=>{
            return {currentIndex:index}
        })
    }

    updateDimensions=()=>{
        console.log("hello")
        let h=document.querySelector(".slider").clientHeight
        let w=document.querySelector(".slider").clientWidth
        this.setState(prevState=>({height:h,width:w}))
        console.log(w)
    }

    render() {

        let {dotVisible,arrowVisible} = this.props

        return (
            <div className="slider" style={this.styles}>
                <div className="slide-wrapper" style={{...this.wrapperStyle,transform:`translate(-${this.state.width*this.state.currentIndex}px,0)`}}>
                    {this.renderSlides()}
                </div>
                <Dots 
                    activeIndex={this.state.currentIndex} 
                    visible={dotVisible}
                    clickHandler={this.dotClickHandler} 
                    images={this.state.images}
                />
                <LeftArrow goToPrevious={this.goToPreviousSlide} visible={arrowVisible}/>
                <RightArrow goToNext={this.goToNextSlide} visible={arrowVisible}/>
            </div>
        );
    }
}

Carousel.defaultProps={
    height:"100vh",
    width:"100vw"
}

export default Carousel;