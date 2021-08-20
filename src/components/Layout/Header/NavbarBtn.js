import { Btn } from './style';
import { useContext } from 'react';
import CartContext from '../../../store/cart-contex';
const NavabrBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const NumberOfCards = cartCtx.item.reduce((curName, item) => {
    return curName + item.amount;
  }, 0);
  return (
    <Btn onClick={props.onClick}>
      <Btn.Icon />
      <Btn.Text>Cart</Btn.Text>
      <Btn.Num>{NumberOfCards}</Btn.Num>
    </Btn>
  );
};

export default NavabrBtn;
