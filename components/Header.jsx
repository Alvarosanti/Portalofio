'use client';

import {
	EmailIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
	TelegramShareButton,
	TelegramIcon
} from 'next-share';
import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

export default function Header1() {
	const el = useRef(null);
	const typed = useRef(null);
	useEffect(() => {
		const options = {
			strings: ['<a>Software Engineer</a>','<a>Developer</a>'],
			typeSpeed: 90,
			backSpeed: 50,
			startDelay: 1000,
			loop: true,
			loopCount: false,
			cursorChat: '|',
			backDelay: 900
		};

		typed.current = new Typed(el.current, options);
		return () => {
			typed.current.destroy();
		};
	}, []);

	const handleClickDownloadResume = () => {
		fetch('Alvaro_Santisteban_Laura_Resume.pdf').then((response) => {
			response.blob().then((blob) => {
				const fileUrl = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.target = '_blank';
				alink.href = fileUrl;
				// alink.download = 'Alvaro_Santisteban_Laura_Resume.pdf';
				alink.click();
			});
		});
	};

	return (
		<header className="header">
			<div className="container">
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
				<div className="header-content">
					<h4 className="header-subtitle">Hello, I am</h4>
					<h1 className="header-title">
						Alvaro Rodrigo
					</h1>
					<h6 className="header-mono">
						 <span style={{ whiteSpace: 'pre', maxWidth: "768px" }} ref={el} /> 
						{/* Software Engineer | Developer */}
						</h6>
					<button onClick={handleClickDownloadResume} className="btn btn-primary btn-rounded">
						<i className="ti-printer pr-2" />Ver Resumen&nbsp;
					</button>
				</div>
			</div>
		</header>
	);
}
