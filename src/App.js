
import Cart from './Cart.js';
import React from 'react'
import Navbar from './Navbar.js';
class App extends React.Component{
  	constructor(){
		super();
		this.state={
			products:[	{
				price:9999,
				title:'Phone',
				qty:1,
				img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
				id:1
				},
				{
				price:999,
				title:'Watch',
				qty:1,
				img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
				id:2
				},
				{price:99,
				title:'Toy',
				qty:1,
				img:'https://images.unsplash.com/photo-1616782910872-ea77b5bb991c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlsZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
				id:3}
				]
				
		}
	}
	getTotalPrice=(props)=>{
		const {products}=props;
		var p=0;
		for(var i=0;i<products.length;i++) p+= products[i].qty*products[i].price;
		return p;
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
	  return (
		<div className="App">
			<Navbar
				products={products}
			/>
			<Cart 
				products={products}
			    onIncreaseQty={this.handleIncreaseQty}
				onDecreaseQty={this.handleDecreaseQty}
				onDelete={this.handleDeleteItem}
			/>
			<div style={{fontSize:20, padding: 25}}>Total: {this.getTotalPrice(this.state)}</div>
		</div>
	  );
  }
}

export default App;
