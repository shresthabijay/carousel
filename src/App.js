import React, { Component } from 'react';
import Carousel from "./Components/Carousel"
import 'semantic-ui-css/semantic.css'
import bg1 from "./Assets/bg1.jpg"
import bg2 from "./Assets/bg2.jpg"
import bg3 from "./Assets/bg3.jpg"
import bg4 from "./Assets/bg4.jpg"

{/* Carousel Component has these props 
          1: height (default "100vh") [string] Can use css height declaration
          2: width (default "100vw") [string] Can use css width declaration
          3: fluid (default false) [boolean] if true it overides default height and width and sets to 100% and 100% 
                                    "i.e it fills the size of the container it is placed inside"
          4: dotVisible (default true) [boolean] makes dots of carousel visible/invisible
          5: arrowVisible (default true) [boolean] makes arrows of carousel visible/invisible 
          6: autoplay (default null) [int "in millisecond"] if null autoplay is off. 
          7: images (default null) [array of src path of images]*/}
          

let images=[bg1,bg2,bg3,bg4,bg1,bg2,bg3,bg4]
class App extends Component {

  render() {
    return (
        <div>     
          <Carousel images={images} />
          <div style={{height:"500px",width:"100vw"}}>
            <Carousel images={images} fluid />
          </div>
          <Carousel images={images} dotVisible={false} arrowVisible={false} autoplay={2000} />

        </div>
    );
  }
}

export default App;
