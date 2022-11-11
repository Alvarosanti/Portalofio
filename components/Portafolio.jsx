export default function Portafolio() {
	return (
		<section className="section bg-custom-gray" id="portfolio">
			<div className="container">
				<h1 className="mb-5">
					<span className="text-danger">My</span> Portfolio
				</h1>
				<div className="portfolio">
					<div className="filters">
						<a href="#" data-filter=".new" className="active">
							New
						</a>
						<a href="#" data-filter=".advertising">
							Advertising
						</a>
						<a href="#" data-filter=".branding">
							Branding
						</a>
						<a href="#" data-filter=".web">
							Web
						</a>
					</div>
					<div className="portfolio-container">
						<div className="col-md-6 col-lg-4 web new">
							<div className="portfolio-item">
								<img
									src="assets/imgs/web-1.jpg"
									className="img-fluid"
									alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
								/>
								<div className="content-holder">
									<a className="img-popup" href="assets/imgs/web-1.jpg" />
									<div className="text-holder">
										<h6 className="title">WEB</h6>
										<p className="subtitle">Expedita corporis doloremque velit in totam!</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 web new">
							<div className="portfolio-item">
								<img
									src="assets/imgs/web-2.jpg"
									className="img-fluid"
									alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
								/>
								<div className="content-holder">
									<a className="img-popup" href="assets/imgs/web-2.jpg" />
									<div className="text-holder">
										<h6 className="title">WEB</h6>
										<p className="subtitle">Expedita corporis doloremque velit in totam!</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 advertising new">
							<div className="portfolio-item">
								<img
									src="assets/imgs/advertising-2.jpg"
									className="img-fluid"
									alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
								/>
								<div className="content-holder">
									<a className="img-popup" href="assets/imgs/advertising-2.jpg" />
									<div className="text-holder">
										<h6 className="title">ADVERSTISING</h6>
										<p className="subtitle">Expedita corporis doloremque velit in totam!</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 web">
							<div className="portfolio-item">
								<img
									src="assets/imgs/web-4.jpg"
									className="img-fluid"
									alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
								/>
								<div className="content-holder">
									<a className="img-popup" href="assets/imgs/web-4.jpg" />
									<div className="text-holder">
										<h6 className="title">WEB</h6>
										<p className="subtitle">Expedita corporis doloremque velit in totam!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
