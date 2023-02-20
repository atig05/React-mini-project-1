import React from 'react';
import CartItem from './CartItem.js';
class Cart extends React.Component{
	constructor(){
		super();
		this.state={
			products:[	{
				price:9999,
				title:'Phone',
				qty:1,
				img:'',
				id:1
				},
				{
				price:999,
				title:'Watch',
				qty:1,
				img:'',
				id:2
				},
				{price:99,
				title:'Toy',
				qty:1,
				img:'',
				id:3}
				]
				
		}
	}
	handleIncreaseQty=(props)=>{
		console.log("Increase ",props);
		const {products}=this.state;
		const index=products.indexOf(props);
		products[index].qty+=1;
		this.setState(
			{products:products}
		);
	}
	handleDecreaseQty=(props)=>{
		console.log("Decrease ",props);
		const {products}=this.state;
		const index=products.indexOf(props);
		if(products[index].qty===0) return;
		products[index].qty-=1;
		this.setState(
			{products:products}
		);
	}
	handleDeleteItem=(id)=>{
		//console.log("Decrease ",props);
		const {products}=this.state;
		const items=products.filter((item)=>item.id!==id)
		this.setState(
			{products:items}
		);
	}	
	render(){
	const {products}=this.state;
	return(
	
		<div className="cart">
			
			{
				products.map((product)=>{
					return <CartItem product={product} 
					key={product.id} 
					onIncreaseQty={this.handleIncreaseQty}
					onDecreaseQty={this.handleDecreaseQty}
					onDelete={this.handleDeleteItem}
					/>
			})
			}
			
		</div>
	)};
}



export default Cart;