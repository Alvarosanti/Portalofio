'use client';
import {
	EmailShareButton,
	EmailIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
	TelegramShareButton,
	TelegramIcon
} from 'next-share';
import CodeIcon from '@mui/icons-material/Code';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import BiotechIcon from '@mui/icons-material/Biotech';

export default function About() {
	const handleClickDownloadResume = () => {
		fetch('Alvaro_Santisteban_Laura_Resume.pdf').then((response) => {
			response.blob().then((blob) => {
				const fileUrl = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileUrl;
				alink.download = 'Alvaro_Santisteban_Laura_Resume.pdf';
				alink.click();
			});
		});
	};

	return (
		<div className="container-fluid">
			<div id="about" className="row about-section">
				<div className="col-lg-4 about-card">
					<h3 className="font-weight-light">Qui&eacute;n soy?</h3>
					<span className="line mb-5" />
					<h5 className="mb-3">Desarrollador / Egresado en Ingenier&iacute;a Inform&aacute;tica</h5>
					<p className="mt-20">
						Tengo la capacidad de adaptarme rapido y afrontar los problemas de manera efectiva, tengo un
						gran interés de aprender todo el tiempo.
					</p>
					<button onClick={handleClickDownloadResume} className="btn btn-outline-danger">
						<i className="icon-down-circled2 " />Descargar CV
					</button>
				</div>
				<div className="col-lg-4 about-card">
					<h3 className="font-weight-light">Informaci&oacute;n Personal</h3>
					<span className="line mb-5" />
					<ul className="mt40 info list-unstyled">
						<li>
							<span>Nacimiento</span> : 12/07/1998
						</li>
						<li>
							<span>Email</span> :<a href="mailto: alvarosantisteban56@gmail.com">
								{' '}
								alvarosantisteban56@gmail.com
							</a>
						</li>
						<li>
							<span>Telegram</span> : <a href="https://t.me/alvarod12">@alvarod12 </a>
						</li>
						<li>
							<span>Ubicaci&oacute;n</span> : Lima, Per&uacute;
						</li>
						<li>
							<span>Github</span> : <a href='https://github.com/Alvarosanti'>github.com/alvarosanti</a>
						</li>
					</ul>
					<ul className="social-icons pt-3">
						<li className="social-item">
							<a href="mailto: alvarosantisteban56@gmail.com">
								<EmailIcon size={32} round />
							</a>
						</li>
						<li className="social-item">
							<LinkedinShareButton url={'https://www.linkedin.com/in/alvaro-santisteban/'}>
								<LinkedinIcon size={32} round />
							</LinkedinShareButton>
						</li>
						<li className="social-item">
							<TwitterShareButton
								url={'https://twitter.com/Alvaro00110001'}
								title={'Hola que tal, te saludo desde tu portafolio...'}
							>
								<TwitterIcon size={32} round />
							</TwitterShareButton>
						</li>
						<li className="social-item">
							<TelegramShareButton
								url={'https://t.me/alvarod12'}
								title={'Hola que tal, vengo desde tu portafolio...'}
							>
								<TelegramIcon size={32} round />
							</TelegramShareButton>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 about-card">
					<h3 className="font-weight-light">Experiencia</h3>
					<span className="line mb-5" />
					<div className="row">
						<div className="col-1 text-danger pt-1">
							<DesktopMacIcon />
						</div>
						<div className="col-10 ml-auto mr-3">
							<h6>HelpDesk</h6>
							<p className="subtitle"> Tickets, Server Onsite, Linux</p>
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col-1 text-danger pt-1">
							<CodeIcon />
						</div>
						<div className="col-10 ml-auto mr-3">
							<h6>FrontEnd Developer</h6>
							<p className="subtitle">Desarrollo en ReactJs</p>
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col-1 text-danger pt-1">
							<BiotechIcon />
						</div>
						<div className="col-10 ml-auto mr-3">
							<h6>Q.Asurance</h6>
							<p className="subtitle">Automatizacion</p>
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
