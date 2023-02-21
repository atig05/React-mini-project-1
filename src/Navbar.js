import React from 'react';

const Navbar=(props)=>{	
	const {products}=props;
	console.log(products);
	var c=0;
	for(var i=0;i<products.length;i++) 
		c+=products[i].qty;
	return (
		
		<div style={styles.nav}>
			<div style={styles.cartIconContainer} >
				<img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"/>
				<span style={styles.cartCount} >{c}</span>
			</div>
		</div>
	);
}


const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default Navbar;