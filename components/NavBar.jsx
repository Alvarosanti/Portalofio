import Image from 'next/image';

export default function NavBar() {
	return (
		<nav
			className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
			data-spy="affix"
			data-offset-top="510"
		>
			<div className="container">
				<button
					className="navbar-toggler ml-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="#home" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#about" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#resume" className="nav-link">
								Resume
							</a>
						</li>
					</ul>
					<ul className="navbar-nav brand">
						<Image
							width="170"
							height="170"
							alt={'profile_img_top_center'}
							src="https://res.cloudinary.com/dzsitpxzw/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1668205425/portafolio/profile_dli4mi.jpg"
							className="brand-img"
						/>
						<li className="brand-txt">
							<h5 className="brand-title">Alvaro Santisteban</h5>
							<div className="brand-subtitle">Software Engineer | Developer</div>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#portfolio" className="nav-link">
								Portfolio
							</a>
						</li>
						<li className="nav-item last-item">
							<a href="#contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
