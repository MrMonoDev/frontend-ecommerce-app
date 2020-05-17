import React from 'react';
import { Carousel, Card, Space } from 'antd';
import {HeartOutlined,QuestionOutlined,EllipsisOutlined} from '@ant-design/icons';
import image0 from "./img/gaming1.png";
import image1 from "./img/gaming2.jpg";
import image2 from "./img/gaming3.jpg";
import image3 from "./img/gaming4.jpg";
import product from "./img/Product1.png";
import './styles/Home.css';

class Home extends React.Component {
  render() {

    return (
      <Space direction="vertical" size="large">
      <CarouselProduct />
      <Space direction="horizontal" size="large">
      <Product />
      <Product />
      <Product />
      </Space>
      </Space>
    );
  }
}

function CarouselProduct () {
  return(
    <Carousel
        autoplaySpeed={2000}
        fade={true}
        speed={3000}
        autoplay
        dotPosition="left"
        centerMode={true}

      >
        <div className="carousel-cnt">
          <h4>New cooler Corsair</h4>
          <b>Keep cool your pc to get more  playing.</b>
          <img src={image0} width="100%" height="500px" alt="image1"></img>
        </div>
        <div className="carousel-cnt">
          <h4>New Ryzen technology</h4>
          <b>Experience the other side of AI.</b>
          <img src={image1} width="100%" height="500px" alt="image2"></img>
        </div>
        <div className="carousel-cnt">
          <h4>Nvidia as Never thought</h4>
          <b>Forget about bootle neck whith this brand new.</b>
          <img src={image2} width="100%" height="500px" alt="image3"></img>
        </div>
        <div className="carousel-cnt">
          <h4>Gigabite your Processor's home</h4>
          <b>Low cost and high power.</b>
          <img src={image3} width="100%" height="500px" alt="image4"></img>
        </div>
      </Carousel>

  );
};


function Product () {
  const {Meta} = Card;
  return (
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Motherboard"
        src={product}
      />
    }
    actions={[
      <HeartOutlined key="Like" />,
      <QuestionOutlined key="Comments" />,
      <EllipsisOutlined key="More" />,
    ]}
  >
    <Meta
      title="Z490M GAMING X (rev. 1.0)"
      description="Direct 11+1 Phases Power Design, 2-Way CrossFire™ Multi-Graphics, 
      Intel® GbE with cFosSpeed, USB 3.2 Gen2 Type-A ,USB 3.2 Gen2 Type-C™, M.2 with 
      Thermal Guard, Smart Fan 5, Dual Armor with Ultra Durable™ Design, RGB FUSION 2.0"
    />
  </Card>
  );
};


export default Home;