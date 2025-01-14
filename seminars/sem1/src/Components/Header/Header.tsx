import './Header.css'
import React from 'react'

interface Props {
  title: string
}

class Header extends React.Component<Props>{ 
	render() {
		return (
			<div className="mainPage__header">
				<h1 className="mainPage__title">{this.props.title}</h1>
			</div>
		)
	}
}

export default Header
