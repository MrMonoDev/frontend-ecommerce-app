import React, { useState, useContext } from "react";
import { Carousel, Card, Space, Rate, Typography, Tag, Tabs } from "antd";
import {
  ShoppingOutlined,
  ShoppingFilled,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import image0 from "./img/gaming1.png";
import image1 from "./img/gaming2.jpg";
import image2 from "./img/gaming3.jpg";
import image3 from "./img/gaming4.jpg";
import "./styles/Home.less";
import dataProducts from "./data/Products.json";
import { ProductContext } from "./ContextProducts";


function Home(){

const { TabPane } = Tabs; 
const itemProduct = 
[{name:"Motherboards",type:"mothers",key:"1"},
{name:"Processors",type:"cpus",key:"2"}]
 
  return (
    <Space direction="vertical" size="large">
      <CarouselProduct />
      <Tabs tabPosition="right">
        {itemProduct.map(element => (
          <TabPane tab={element.name} key={element.key}>
            <Items
            itemTitle = {element.name}
            itemType= {element.type}
            />
          </TabPane>
        ))}
      </Tabs>
    </Space>
  );
} 

function Items(props) {

  const colorChange = (color) => {
    if (color === "On request") {
      return "gold";
    } else {
      return "green";
    }
  };
  const classChange = (status) => {
    if (status === "On request") {
      return "first-status";
    } else {
      return "second-status";
    }
  };

  return (
        <div>
          <h1>{props.itemTitle}</h1>
          {dataProducts.map(data => (
            data.class === props.itemType? 
            <Product
              productId={data.id}
              title={data.title}
              description={data.description}
              src={data.path}
              rate={data.rate}
              price={data.price}
              status={data.status}
              oldprice={data.oldprice}
              color={colorChange(data.status)}
              statusPosition={classChange(data.status)}
              classProduct="all"
              productType={dataProducts}
            />
          : ''))}
        </div>
  );
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

function changeAction(value) {
  switch (value) {
    case 0:
      return value + 1;
    case 1:
      return value - 1;
    default:
  }
}


function Product(props) {
  const [cart, setcart] = useContext(ProductContext);
  const { Text } = Typography;
  const { Meta } = Card;
  var [shopIco, setshopIco] = useState(()=>{
    for(let item of cart){
      if (item.title === props.title){
    return 1;
      }
    }
    return 0;
  });
  var [loveIco, setloveIco] = useState(0);
  
  return (
    <div id={props.productId} className={props.classProduct}>
      <Card
        hoverable={true}
        style={{ width: 250, height: 550 }}
        cover={
          <img alt="Products" src={props.src} width="200px" height="250px" />
        }
      >
        <Meta title={props.title} description={props.description} />
      </Card>
      <div
        className="shop-ico" 
        onClick={() => setshopIco((shopIco = changeAction(shopIco)))}
      >
        {shopIco === 0 ? (
          <ShoppingOutlined style={{ fontSize: 15 }} onClick={() => {
            const id = props.productId;
            for(let product of props.productType){
              if (id === product.id){
                setcart(cart => [...cart, product]);
              }
            }
          }} />
        ) : (
          <ShoppingFilled style={{ fontSize: 15 }} onClick={() => {
            const id = props.productId;
            const productList = new Set(cart);
            for(let product of productList){
               if (id === product.id){
                productList.delete(product);
              }
            }  
            setcart(Array.from(productList));        
          }} />
        )}
      </div>
      <div
        className="love-ico"
        onClick={() => setloveIco((loveIco = changeAction(loveIco)))}
      >
        {loveIco === 0 ? (
          <HeartOutlined style={{ fontSize: 15 }} />
        ) : (
          <HeartFilled style={{ fontSize: 15 }} />
        )}
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
