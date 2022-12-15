import React from 'react'
import resim1 from '../img1/img-1.jpg';
// import resim2 from '../img/img-2.jpg';
import './header.css'

function Header() {
	return (
		<div>
			<img src={resim1} alt="" className="resim" />
			{/* <img src="./img/img-1.jpg" alt="" className="resim" /> */}
		</div>
	)
}

export default Header
