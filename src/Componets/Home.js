import React from 'react';
import { Carousel } from 'antd';
import image0 from "./img/gaming1.png";
import image1 from "./img/gaming2.jpg";
import image2 from "./img/gaming3.jpg";
import image3 from "./img/gaming4.jpg";
import './css/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
        <Carousel 
         autoplaySpeed={4000} 
         fade={true} 
         pauseOnDotsHover={true} 
         speed={5000} autoplay
         >
          <div>
            <img src={image0} width="100%" height="600px"></img>
          </div>
          <div>
            <img src={image1} width="100%" height="600px"></img>
          </div>
          <div>
            <img src={image2} width="100%" height="600px"></img>
          </div>
          <div>
            <img src={image3} width="100%" height="600px"></img>
          </div>
        </Carousel>
    );
  }
}


export default Home;