import React from 'react';

class CartItem extends React.Component{

	increaseQty =() => { this.setState({ qty: this.state.qty+1});}
	decreaseQty =() => { this.setState((prevState)=>{
		if(prevState.qty===0) return;
		return {
			
			qty:prevState.qty-1
		}
	});
	}
	render(){
		const {price,title,qty,img,id}=this.props.product;
		return(
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.Image} src={img}/>
				</div>
				<div className="right-block">
					<div style={{fontSize:25}}>{title}</div>
					<div style={{color:'#777'}}>Rs. {price}</div>
					<div style={{color:'#777'}}>Quantity. {qty}</div>
					<div className="cart-item-actions">
						<img alt="increase" className="action-icons"
						src="https://cdn-icons-png.flaticon.com/128/3024/3024515.png"  
						onClick={()=>{this.props.onIncreaseQty(this.props.product)}}/>
						
						<img alt="decrease" className="action-icons" 
						src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
						onClick={()=>{this.props.onDecreaseQty(this.props.product)} }/>
						
						<img alt="delete" className="action-icons" 
						src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
						onClick={()=>{this.props.onDelete(id)}}
						/>
					</div>
					
				</div>
			</div>
		);
	}
}

const styles = {
	Image: {
		height:110,
		width:120,
		borderRadius: 4,
		background:'#ccc'
	}
}

export default CartItem;