import React from 'react';
import CartItem from './CartItem.js';
class Cart extends React.Component{
	constructor(){
		super();
		
	}
	render(){
	return(
		<div className="cart">
			
			<CartItem/>
			<CartItem/>
			<CartItem/>
		</div>
	)};
}



export default Cart;