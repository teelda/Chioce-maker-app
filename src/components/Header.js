const Header = ({ title }) => {
	return (
		<div className="wrapper">
		    <header className="header">
			   <h1>{title}</h1>
		    </header>
		</div>
	)
}

Header.defaultProps = {
	title: 'Teeldah Choice Maker App',
}
export default Header