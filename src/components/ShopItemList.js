import React from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react'; // 불러오기

const items = [
  {
    name: '생수',
    price: 850,
    quantity: 0,
  },
  {
    name: '신라면',
    price: 900,
    quantity: 0,
  },
  {
    name: '포카칩',
    price: 1500,
    quantity: 0,
  },
  {
    name: '새우깡',
    price: 1000,
    quantity: 0,
  },
];

// **** onPut 함수 추가됨
const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{itemList}</div>;
};

// **** inject, observer 적용
export default inject(({ market }) => ({
  onPut: market.put,
}))(observer(ShopItemList));