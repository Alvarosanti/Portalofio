import '../scss/card.module.scss';
import '../styles/portafolio.css';
import Image from 'next/image';

export default function Portafolio() {
	return (
		<section className="section bg-custom-gray" id="portfolio">
			<div className="container">
				<h1 className="mb-5">
					<span className="text-danger">Mi</span> Portafolio
				</h1>
				<div className="portfolio">
					<div className="portfolio-container">
						<div className="portfolio-item">
							<Image
								width="470"
								height="470"
								src="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669152904/portafolio/marinera_sokwte.jpg"
								className="img-fluid"
								alt={'Academia Marinera'}
							/>
							<div className="content-holder">
								<a
									className="img-popup"
									href="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669152904/portafolio/marinera_sokwte.jp"
								/>
								<div className="text-holder">
									<h6 className="title">Academia de Marinera</h6>
									<p className="subtitle">
										SISTEMA DE GESTION DE INFORMACION PARA LA ACADEMIA DE MARINERA TUSUYPERU
									</p>
								</div>
							</div>
						</div>
						<div className="portfolio-item">
							<Image
								width="470"
								height="470"
								src="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1669153228/portafolio/logo1_shvwp0.svg"
								className="img-fluid"
								alt={'Decormolduras SAC'}
							/>
							<div className="content-holder">
								<a
									className="img-popup"
									href="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1669153228/portafolio/logo1_shvwp0.svg"
								/>
								<div className="text-holder">
									<h6 className="title">Empresa DECORMOLDURAS & ROSETONES S.A.C.</h6>
									<p className="subtitle">
										Sistema web para la Comercialización de Productos para la Empresa DECORMOLDURAS
										& ROSETONES S.A.C.
									</p>
								</div>
							</div>
						</div>
						<div className="portfolio-item">
							<Image
								width="470"
								height="470"
								src="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669153357/portafolio/avicola_wqcnh8.jpg"
								className="img-fluid"
								alt={'AvicolaN'}
							/>
							<div className="content-holder">
								<a
									className="img-popup"
									href="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669153357/portafolio/avicola_wqcnh8.jpg"
								/>
								<div className="text-holder">
									<h6 className="title">AV&Iacute;COLA</h6>
									<p className="subtitle">
										SISTEMA INFORMÁTICO DE GESTIÓN COMERCIAL PARA UNA AVÍCOLA “AVÍCOLA NANCY”
									</p>
								</div>
							</div>
						</div>
						<div className="portfolio-item">
							<Image
								width="470"
								height="470"
								src="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669153596/portafolio/pasteleria_qjltau.jpg"
								className="img-fluid"
								alt={'Pasteleria'}
							/>
							<div className="content-holder">
								<a
									className="img-popup"
									href="https://res.cloudinary.com/dzsitpxzw/image/upload/e_improve,w_300,h_450,c_thumb,g_auto/v1669153596/portafolio/pasteleria_qjltau.jpg"
								/>
								<div className="text-holder">
									<h6 className="title">Pasteler&iacute;a</h6>
									<p className="subtitle">
										SISTEMA WEB IMPLEMENTANDO MERN STACK PARA LA GESTIÓN DE PRODUCCIÓN Y VENTA DE LA
										EMPRESA LOS ALFAJORES DE LA LOLA
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
