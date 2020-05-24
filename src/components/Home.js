import React from 'react';
import { Carousel, Card, Space } from 'antd';
import { ShoppingOutlined} from '@ant-design/icons';
import image0 from "./img/gaming1.png";
import image1 from "./img/gaming2.jpg";
import image2 from "./img/gaming3.jpg";
import image3 from "./img/gaming4.jpg";
import dataMother from "./data/Motherboards.json"; 
import './styles/Home.less';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      dataMother
    };   
  }
  
  render() {
    console.log(dataMother);
    return (
      <Space direction="vertical" size="large">
      <CarouselProduct />
      <h1>Motherboards</h1>
      <Space>
          {this.state.dataMother.map((data) =>
          <div id={data.id}>
          <Product title={data.title} description={data.description} src={data.path}/>
          </div>
          )}
      </Space>
      <div className="pagination">
      </div>
      </Space>
    );
  }
}

function CarouselProduct () {
  return(
    <div className="carousel-container">
    <Carousel
        autoplaySpeed={2000}
        fade={true}
        speed={3000}
        autoplay
        dotPosition="left"

      >
        <div>
          <h4>New cooler Corsair</h4>
          <b>Keep cool your pc to get more  playing.</b>
          <img src={image0} alt="image1"></img>
        </div>
        <div>
          <h4>New Ryzen technology</h4>
          <b>Experience the other side of AI.</b>
          <img src={image1} alt="image2"></img>
        </div>
        <div>
          <h4>Nvidia as Never thought</h4>
          <b>Forget about bootle neck whith this brand new.</b>
          <img src={image2} alt="image3"></img>
        </div>
        <div>
          <h4>Gigabite your Processor's home</h4>
          <b>Low cost and high power.</b>
          <img src={image3} alt="image4"></img>
        </div>
      </Carousel>
      </div>

  );
};


function Product (props) {
  const {Meta} = Card;
  return (
    <div className="product-body">
    <Card
    hoverable={true}
    style={{ width: 250, height: 550 }}
    cover={
      <img
        alt="Motherboard"
        src={props.src}
      />
    }
  >
    <Meta
      title= {props.title}
      description= {props.description}
    />
  </Card>
  <div className="shop-ico">
  <ShoppingOutlined style={{fontSize:15 }} />
  </div>
  </div>
  );
};


export default Home;