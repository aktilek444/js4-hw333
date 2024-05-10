import { useState } from 'react'
import ModalCart from './Cart'

function Header() {
	const [state, setState] = useState(false)

	return (
		<header>
			<h1>Logo</h1>
			<nav>
				<ul>
					<li>Home</li>
					<li>Home</li>
					<li>Home</li>
					<li>Home</li>
				</ul>
			</nav>
			<button className='cart-button' onClick={() => setState(true)}>
				Cart
			</button>
			{state && <ModalCart setOpen={setState} />}
		</header>
	)
}

export default Header
