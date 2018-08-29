import React from "react"
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types"


const styleLeft={
    position:"absolute",
    top:"50%",
    left:"2%"
}

const styleRight={
    position:"absolute",
    top:"50%",
    right:"2%"
}

export const LeftArrow=(props)=>{

    if(!props.visible) return null

    return(
        <Icon inverted color="grey" style={styleLeft} link size="huge" name="arrow alternate circle left outline" onClick={props.goToPrevious}></Icon>
    )
}

export const RightArrow=(props)=>{

    if(!props.visible) return null

    return(
        <Icon inverted color="grey" style={styleRight} link size="huge" name="arrow alternate circle right outline" onClick={props.goToNext}></Icon>
    )
}

LeftArrow.defaultProps={
    visible:true
}

RightArrow.defaultProps={
    visible:true
}