import React, {useState, useEffect} from 'react';
import { ConfigProvider, List, Button, Typography, Modal} from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import './styles/MyShoppings.less';
import store from '../redux/store';
import * as actions from '../redux/actions'

function MyShoppings () {
  // eslint-disable-next-line
    const [cart, setCart] = useState([]);
    const {Text, Title} = Typography;
    var total = 0;
    for (var item of cart){
        total += parseFloat(item.price);
    }
    const [terms, setterms] = useState(false);
    const showTerms = () =>{
      setterms(true);
    }
    const termsOk = () => {

    }
    const termsCancel = () => {
      setterms(false);
    }

    useEffect(()=>{
      const list = store.getState().cart
      store.subscribe(()=>{
        const list = store.getState().cart
        setCart(list)
      })
      setCart(list)
    },[])

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
              const productList = store.getState().cart
              for(let product of productList){
                if (id === product.id){
                  store.dispatch(actions.removeFromCart(product))
                }
              }  
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
      <div className="totalCart">
        {cart.length > 0 ? <div className="amount"><Title level={3}>Total:</Title><Title level={4}>${total} MXN</Title></div> : ""}
        {cart.length > 0 ? <Button size="large" type="primary" style={{width:'180px'}}>Buy</Button> : ""}
        {cart.length > 0 ? <Button type="link" onClick={showTerms}>Terms and conditions</Button> : ""}
      </div>
      <div>
        <Modal
          title="Terms and Conditions"
          visible={terms}
          onCancel={termsCancel}
          footer={false}
        >
          <div className="termsNconditions">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <div className="buttonTerms">
              <Button type="link" size="small" onClick={termsCancel}>Decline</Button>
              <Button type="primary" size="small" onClick={termsOk}>Accept</Button>
            </div>
          </div>
        </Modal>
      </div>
      </div>
    );
  }

export default MyShoppings;
