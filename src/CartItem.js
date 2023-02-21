import React from 'react';

const CartItem =(props)=>{

		const {price,title,qty,img,id}=props.product;
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
						onClick={()=>{props.onIncreaseQty(props.product)}}/>
						
						<img alt="decrease" className="action-icons" 
						src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
						onClick={()=>{props.onDecreaseQty(props.product)} }/>
						
						<img alt="delete" className="action-icons" 
						src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
						onClick={()=>{props.onDelete(id)}}
						/>
					</div>
					
				</div>
			</div>
		);
	
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