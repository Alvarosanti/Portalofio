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

export default function Header1() {
	return (
		<header className="header">
			<div className="container">
				<ul className="social-icons pt-3">
					<li className="social-item">
						<EmailShareButton
							url={'"alvarosantisteban56@gmail.com"'}
							subject={'Hola que tal'}
							body="Te escribo por medio de tu portafolio... escribeme a"
						>
							<EmailIcon size={32} round />
						</EmailShareButton>
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
				<div className="header-content">
					<h4 className="header-subtitle">Hello, I am</h4>
					<h1 className="header-title">Alvaro Santisteban</h1>
					<h6 className="header-mono">Software Engineer | Developer</h6>
					<button className="btn btn-primary btn-rounded">
						<i className="ti-printer pr-2" />Print Resume
					</button>
				</div>
			</div>
		</header>
	);
}
