'use client';

import { Form } from 'semantic-ui-react';

export default function Contact() {
	async function sendEmail(e) {
		e.preventDefault();
		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});
		try {
			fetch('/api/mailer', {
				method: 'post',
				body: JSON.stringify(formData)
			});
		} catch (error) {
			alert('Falla en la matrix');
		}
	}

	return (
		<div className="section contact" id="contact">
			<div id="map" className="map" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="contact-form-card">
							<h4 className="contact-title">Contacto</h4>
							<form method="post" onSubmit={sendEmail} action="">
								<div className="form-group">
									<input
										className="form-control"
										type="text"
										placeholder="Nombre *"
										name="name"
										required
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control"
										type="email"
										placeholder="Email *"
										name="email"
										required
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										id=" "
										placeholder="Mensaje *"
										name="mesagge"
										rows="5"
										required
									/>
								</div>
								<div className="form-group ">
									<button type="submit" className="form-control btn btn-primary">
										Enviar mensaje
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="contact-info-card">
							<h4 className="contact-title">Info.</h4>
							<div className="row mb-2">
								<div className="col-1 pt-1 mr-1">
									<i className="ti-mobile icon-md" />
								</div>
								<div className="col-10 ">
									<h6 className="d-inline">
										Tel&eacute;fono : <br /> <span className="text-muted">+51 967788705</span>
									</h6>
								</div>
							</div>
							<div className="row mb-2">
								<div className="col-1 pt-1 mr-1">
									<i className="ti-map-alt icon-md" />
								</div>
								<div className="col-10">
									<h6 className="d-inline">
										Ubicaci&oacute;n :<br /> <span className="text-muted">Lima, Per&uacute;</span>
									</h6>
								</div>
							</div>
							<div className="row mb-2">
								<div className="col-1 pt-1 mr-1">
									<i className="ti-envelope icon-md" />
								</div>
								<div className="col-10">
									<h6 className="d-inline">
										Email :<br />{' '}
										<a className="text-muted" href="mailto: alvarosantisteban56@gmail.com">
											alvarosantistebab56@gmai.com
										</a>
									</h6>
								</div>
							</div>
							<ul className="social-icons pt-4">
								<li className="social-item">
									<a className="social-link text-dark" href="#">
										<i className="ti-facebook" aria-hidden="true" />
									</a>
								</li>
								<li className="social-item">
									<a className="social-link text-dark" href="#">
										<i className="ti-twitter" aria-hidden="true" />
									</a>
								</li>
								<li className="social-item">
									<a className="social-link text-dark" href="#">
										<i className="ti-google" aria-hidden="true" />
									</a>
								</li>
								<li className="social-item">
									<a className="social-link text-dark" href="#">
										<i className="ti-instagram" aria-hidden="true" />
									</a>
								</li>
								<li className="social-item">
									<a className="social-link text-dark" href="#">
										<i className="ti-github" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
