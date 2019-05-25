import React from 'react'

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	}

	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header
