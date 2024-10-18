import '../../index.css'
import Logo from '../../assets/img/logo_3.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

	const scrollHeight = {
		'--bs-scroll-height': "100px"
	}

	const gutterX = {
		'--bs-gutter-x': "0"
	}

  return (
    <div className="container-fluid" style={gutterX}>
			<nav className="navbar navbar-expand-lg" style={{backgroundColor: "#a8e1c7"}}>
				<div className="container-fluid px-5">
					<Link className="navbar-brand" to="/">
						<img src={Logo} alt="Logo" width="60%" />
					</Link>
					
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto my-2 my-lg-0" style={scrollHeight}>
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/">Blog</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Catálogo de Productos
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/category/general">General</Link></li>
									<li><Link className="dropdown-item" to="/category/digestivo">Sistema Digestivo</Link></li>
									<li><Link className="dropdown-item" to="/category/inmune">Sistema Inmune</Link></li>
									<li><Link className="dropdown-item" to="/category/nervioso">Sistema Nervioso</Link></li>
									<li><Link className="dropdown-item" to="/category/respiratorio">Sistema Respiratorio</Link></li>
									<li><Link className="dropdown-item" to="/category/oseo">Sistema Óseo y Articular</Link></li>
									<li><hr className="dropdown-divider" /></li>
									<li><Link className="dropdown-item" to="/">Todos los Productos</Link></li>
								</ul>
							</li>
							<li className="nav-item" id="login-logout">
								<a className="nav-link" aria-current="page" href="#">Login</a>
							</li>
							<CartWidget />
						</ul>
					</div>
				</div>
			</nav>		  
		</div>
  )
}

export default NavBar
