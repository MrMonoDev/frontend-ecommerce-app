import React from "react";
import { Carousel, Card, Space, Rate, Typography, Tag } from "antd";
import {
  ShoppingOutlined,
  HeartFilled,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import image0 from "./img/gaming1.png";
import image1 from "./img/gaming2.jpg";
import image2 from "./img/gaming3.jpg";
import image3 from "./img/gaming4.jpg";
import dataMother from "./data/Motherboards.json";
import "./styles/Home.less";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMother,
      startSlice: 0,
      lastSlice: 4,
    };
  }

  showSlides = (n) => {
    var slides = document.getElementsByClassName("mySlides");
    this.setState({ startSlice: 0 + n });
    this.setState({ lastSlice: 4 + n });

    if (this.state.lastSlice > slides.length) {
      this.setState({ startSlice: 0 });
      this.setState({ lastSlice: 4 });
    }
    if (this.state.startSlice < 0) {
      this.setState({ startSlice: slides.length - 4 });
      this.setState({ lastSlice: slides.length });
    }
  };
  colorChange = (color) => {
    if (color === "On request"){
      return "gold";
    }else{
      return "green";
    }
  };
  classChange = (status) =>{
    if(status === "On request"){
      return "first-status";
    }else{
      return "second-status";
    }
  };
  render() {
    return (
      <Space direction="vertical" size="large">
        <CarouselProduct />
        <h1>Motherboards</h1>
        <table>
          <tr>
            {this.state.dataMother
              .slice(this.state.startSlice, this.state.lastSlice)
              .map((data) => (
                <td>
                  <Product
                    title={data.title}
                    description={data.description}
                    src={data.path}
                    rate={data.rate}
                    price={data.price}
                    status={data.status}
                    oldprice={data.oldprice}
                    color={this.colorChange(data.status)}
                    statusPosition={this.classChange(data.status)}

                    
                  />
                </td>
              ))}
            <td>
              <div className="next-btn">
                <RightOutlined
                  style={{ fontSize: 50 }}
                  onClick={() => this.showSlides(1)}
                />
              </div>
            </td>
            {/* <div className="next-btn">
          <LeftOutlined style={{fontSize:50}} onClick={() => this.plusSlides(-1)} />
          </div> */}
          </tr>
        </table>
      </Space>
    );
  }
}

function CarouselProduct() {
  return (
    <div className="carousel-container">
      <Carousel
        autoplaySpeed={2000}
        fade={true}
        speed={3000}
        autoplay
        dotPosition="left"
        slidesToShow={3}
      >
        <div>
          <h4>New cooler Corsair</h4>
          <b>Keep cool your pc to get more playing.</b>
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
}

function Product(props) {
  const {Text} = Typography;
  const { Meta } = Card;
  return (
    <div className="mySlides">
      <Card
        hoverable={true}
        style={{ width: 250, height: 550 }}
        cover={<img alt="Motherboard" src={props.src} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
      <div className="shop-ico">
        <ShoppingOutlined style={{ fontSize: 15 }} />
      </div>
      <div className="love-ico">
        <HeartFilled style={{ fontSize: 15 }} />
      </div>
      <div className={props.statusPosition}>
        <Tag color={props.color}>{props.status}</Tag>
      </div>
      <div className="price">
        <Text>${props.price} MXN</Text>
      </div>
      <div className="oldprice">
        <Text delete>${props.oldprice} MXN</Text>
      </div>
      <div className="star-rate">
        <Rate disabled value={props.rate} />
      </div>
    </div>
  );
}

export default Home;
