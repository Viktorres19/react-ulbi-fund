import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__links">
				<Link to="/">Пости</Link>
				<Link to="/about">Про сайт</Link>
			</div>
		</div>
	);
};

export default Navbar
