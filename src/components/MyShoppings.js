import React from 'react';
import {ConfigProvider, List} from 'antd';

 function MyShoppings() {
  return (
    <div>
      <ConfigProvider>
        <List />
      </ConfigProvider>
    </div>
  );
}

export default MyShoppings;


