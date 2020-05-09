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
        autoplaySpeed={2000}
        fade={true}
        pauseOnDotsHover={true}
        speed={3000}
        autoplay
        dotPosition="left"
      >
        <div>
          <h4>New cooler Corsair</h4>
          <b>Keep cool your pc to get more  playing.</b>
          <img src={image0} width="100%" height="500px"></img>
        </div>
        <div>
          <h4>New Ryzen technologie</h4>
          <b>Experience the other side of AI.</b>
          <img src={image1} width="100%" height="500px"></img>
        </div>
        <div>
          <h4>Nvidia as Never thought</h4>
          <b>Forget about bootle neck whith this brand new.</b>
          <img src={image2} width="100%" height="500px"></img>
        </div>
        <div>
          <h4>Gigabite your Processor's home</h4>
          <b>Low cost and high power.</b>
          <img src={image3} width="100%" height="500px"></img>
        </div>
      </Carousel>
    );
  }
}


export default Home;