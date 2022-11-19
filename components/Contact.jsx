'use client';

import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
	const [ openSuccess, setOpenSuccess ] = useState(false);
	const [ openError, setOpenError ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ mesagge, setMesagge ] = useState('');

	async function sendEmail(e) {
		e.preventDefault();
		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});
		fetch('/api/mailer', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		setName('');
		setEmail('');
		setMesagge('');
		setOpenSuccess(true);
	}

	const handleCloseSuccess = () => {
		setOpenSuccess(false);
	};

	const handleCloseError = () => {
		setOpenError(false);
	};

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangeMesagge = (e) => {
		setMesagge(e.target.value);
	};

	return (
		<div className="section-contacts">
			<div className="section contact" id="contact">
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
											value={name}
											onChange={handleChangeName}
											required
										/>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											type="email"
											placeholder="Email *"
											name="email"
											value={email}
											onChange={handleChangeEmail}
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
											cols="5"
											value={mesagge}
											onChange={handleChangeMesagge}
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
											Tel&eacute;fono : <br />{' '}
											<span className="text-muted">
												<a href="tel:+51 969369120">+51 969369120</a>
											</span>
										</h6>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-1 pt-1 mr-1">
										<i className="ti-map-alt icon-md" />
									</div>
									<div className="col-10">
										<h6 className="d-inline">
											Ubicaci&oacute;n :<br />{' '}
											<span className="text-muted">Lima, Per&uacute;</span>
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
					<Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
						<Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
							Mensaje enviado!
						</Alert>
					</Snackbar>
				</div>
			</div>
			<Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
				<Alert severity="error">Error al enviar el mensaje, int&eacute;ntalo mas tarde</Alert>;
			</Snackbar>
		</div>
	);
}
