export default function Resume() {
	return (
		<section className="section" id="resume">
			<div className="container">
				<h2 className="mb-5">
					<span className="text-danger">My</span> Resume
				</h2>
				<div className="row">
					<div className="col-md-6 col-lg-4">
						<div className="card">
							<div className="card-header">
								<div className="mt-2">
									<h4>Educaci&oacute;n</h4>
									<span className="line" />
								</div>
							</div>
							<div className="card-body">
								<h6 className="title text-danger">2016 - Present</h6>
								<p>Ing. Inform&aacute;tica</p>
								<p className="subtitle">
									Estudiante de la carrera Ingenier&iacute;a Inform&aacute;tica en la universidad
									Ricardo Palma.
								</p>
								<hr />
								{/* <h6 className="title text-danger">2016 - 2017</h6>
								<p>Diploma in Computer Engineering</p>
								<p className="subtitle">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas
									placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.
								</p>
								<hr />
								<h6 className="title text-danger">2015 - 2016</h6>
								<p>High School Degree</p>
								<p className="subtitle">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae,
									cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.
								</p> */}
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="card">
							<div className="card-header">
								<div className="mt-2">
									<h4>Experiencia</h4>
									<span className="line" />
								</div>
							</div>
							<div className="card-body">
								<h6 className="title text-danger">2020 - 2021</h6>
								<p>Software Engineer Trainee</p>
								<p className="subtitle">Serpost -</p>
								<hr />
								<h6 className="title text-danger">2021 - Presente</h6>
								<p>Front-end Developer</p>
								<p className="subtitle">Mandu -</p>
								<hr />
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="card">
							<div className="card-header">
								<div className="pull-left">
									<h4 className="mt-2">Skills</h4>
									<span className="line" />
								</div>
							</div>
							<div className="card-body pb-2">
								<h6>hTL5 &amp; CSS3</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '97%' }}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
								<h6>JavaScript</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '80%' }}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
								<h6>SQL</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '70%' }}
										aria-valuenow="75"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
							</div>
						</div>
						{/* <div className="card">
							<div className="card-header">
								<div className="pull-left">
									<h4 className="mt-2">Languages</h4>
									<span className="line" />
								</div>
							</div>
							<div className="card-body pb-2">
								<h6>English</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '80%' }}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
								<h6>French</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '45%' }}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
								<h6>Spanish</h6>
								<div className="progress mb-3">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: '67%' }}
										aria-valuenow="50"
										aria-valuemin="0"
										aria-valuemax="100"
									/>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
