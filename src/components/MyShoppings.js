import React, {useContext}from 'react';
import { ConfigProvider, List, Button, Typography} from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import './styles/MyShoppings.less';
import {ProductContext} from './ContextProducts';

function MyShoppings () {
  // eslint-disable-next-line
    const [cart, setcart] = useContext(ProductContext);
    const {Text, Title} = Typography;
    var total = 0;
    for (var item of cart){
        total += parseFloat(item.price);
    }
    return (
      <div className="shoppings">
      <ConfigProvider>
        <List 
        itemLayout="vertical"
        size="small"
        dataSource={cart}
        renderItem={item => (
          <List.Item
          key={item.title}
          actions={[
            <div className="shopDeleteIco"><DeleteOutlined style={{fontSize:25}} onClick={() => {
              const id = item.id;
              const productList = new Set(cart);
              for(let product of productList){
                if (id === product.id){
                  productList.delete(product);
                }
              }  
              setcart(Array.from(productList));
            }}/></div>
          ]}
          extra={
            <img 
            width={200}
            alt={item.title}
            src={item.path}
            />
          }
          >
          <List.Item.Meta
           title={item.title}
           description={item.description}
          />
          {<div className="shopPrice"><Title level={4}>${item.price} MXN</Title></div>}
          {<div className="shopOldPrice"><Text delete>${item.oldprice} MXN</Text></div>}
          </List.Item>
        )}/>
      </ConfigProvider>
      {cart.length > 0 ? <div className="shopBuy"><Button size="large" type="primary" block>Buy</Button><div className="shopTerms"><a href="#">Terms and conditions</a></div></div> : ""}
      {cart.length > 0 ? <div><div className="shopTotal"><Title level={3}>Total: </Title></div><div className="shopAmount"><Title level={4}>${total} MXN</Title></div></div> : ""}
      </div>
    );
  }

export default MyShoppings;
