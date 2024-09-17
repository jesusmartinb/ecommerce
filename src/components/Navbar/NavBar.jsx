import '../../index.css'
import Logo from '../../assets/img/logo_3.svg'

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
					<a className="navbar-brand">
						<img src={Logo} alt="Logo" width="60%" />
					</a>
					
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto my-2 my-lg-0" style={scrollHeight}>
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="index.html">Blog</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Catálogo de Productos
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">General</a></li>
									<li><a className="dropdown-item" href="#">Genérico</a></li>
									<li><a className="dropdown-item" href="#">Nutricósmética</a></li>
									<li><a className="dropdown-item" href="#">Sistema Circulatorio</a></li>
									<li><a className="dropdown-item" href="#">Sistema Digestivo</a></li>
									<li><a className="dropdown-item" href="#">Sistema Hormonal</a></li>
									<li><a className="dropdown-item" href="#">Sistema Inmune</a></li>
									<li><a className="dropdown-item" href="#">Sistema Nervioso</a></li>
									<li><a className="dropdown-item" href="#">Sistema Renal</a></li>
									<li><a className="dropdown-item" href="#">Sistema Reproductor</a></li>
									<li><a className="dropdown-item" href="#">Sistema Respiratorio</a></li>
									<li><a className="dropdown-item" href="#">Sistema Óseo y Articular</a></li>
									<li><a className="dropdown-item" href="#">Vitaminas, Minerales y AminoÁcidos</a></li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" href="#">Todos los Productos</a></li>
								</ul>
							</li>
							<li className="nav-item" id="login-logout">
								<a className="nav-link" aria-current="page" href="login.html">Login</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="carrito.html">
									<div id="img-carrito" className="carrito">
										<i className="fa-solid fa-cart-shopping">
											<span className="contador-carrito" id="contador-carrito"> 0 </span>
										</i> 
									</div>
									<div id="carrito"></div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>		  
		</div>
  )
}

export default NavBar
