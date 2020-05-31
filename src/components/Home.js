import React from "react";
import { Carousel, Card, Space, Rate, Typography, Tag, Tabs } from "antd";
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
import dataProcessor from "./data/Processors.json";
import "./styles/Home.less";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMother,
      dataProcessor,
      startSlice: 0,
      lastSlice: 4
    };
  }

  showSlides = (n, classP) => {
    var slides = document.getElementsByClassName(classP);
    this.setState({startSlice: this.state.startSlice + n});
    this.setState({lastSlice: this.state.lastSlice + n });
    
   if (this.state.lastSlice > slides.length) {
      this.setState({ startSlice: 0 });
      this.setState({ lastSlice: 4 });
    }
    if (this.state.startSlice + n < 0) {
      this.setState({ startSlice: 1 });
      this.setState({ lastSlice: 5 });
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
    const {TabPane} = Tabs;
    return (
      <Space direction="vertical" size="large">
        <CarouselProduct />
        <Tabs tabPosition="right">
          <TabPane tab="Motherboards" key="1">
          <h1>Motherboards</h1>
          <table>
          <tr>
            {this.state.dataMother.slice(this.state.startSlice, this.state.lastSlice).map((data) => 
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
                    classProduct="motherboards"
                    />
                </td>
              )}
            <td>
              <div className="next-btn">
                <RightOutlined
                  style={{ fontSize: 50 }}
                  onClick={() => this.showSlides(1, "motherboards")} />
              </div>
            </td>
              <div className="forward-btn">
               <LeftOutlined style={{fontSize:50}} 
                onClick={() => this.showSlides(-1, "motherboards")} />
              </div> 
          </tr>
        </table>
          </TabPane>
          <TabPane tab="Processors" key="2">
          <h1>Processors</h1>
          <table>
        <tr>
            {this.state.dataProcessor.slice(this.state.startSlice, this.state.lastSlice).map((data) => (
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
                    classProduct="processors"
                    />
                </td>
              ))}
              <td>
              <div className="next-btn">
                <RightOutlined
                  style={{ fontSize: 50 }}
                  onClick={() => this.showSlides(1, "processors")}
                />
              </div>
            </td>
            <div className="forward-btn">
               <LeftOutlined style={{fontSize:50}} 
                onClick={() => this.showSlides(-1, "motherboards")} />
              </div> 
          </tr>
        </table>
          </TabPane>
          <TabPane tab="RAM" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
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
    <div className={props.classProduct}>
      <Card
        hoverable={true}
        style={{ width: 250, height: 550
        
         }}
        cover={<img alt="Products" src={props.src} width="200px" height="250px" />}
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
