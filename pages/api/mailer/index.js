const nodemailer = require('nodemailer');

export default async function mailer(req, res) {
	const body = JSON.parse(req.body);
	const sendEmail = async () => {
		const config = {
			host: 'smtp.gmail.com',
			post: 587,
			auth: {
				user: 'alvaroportfoliomail@gmail.com',
				pass: 'jhhxbfvirvzzfvdi'
			}
		};

		const mensaje = {
			from: 'alvarosantisteban56@gmail.com',
			to: 'alvaroportfoliomail@gmail.com',
			subject: `Contacto - Portfolio - Hola soy, ${body.name} ✈️🛫`,
			text: `\nNombre: ${body.name}`,
			html: `
				<p>Mi nombre es, <strong>${body.name}</strong></p> 
				<p>Mi correo es: <strong>${body.email}</strong></p> 
				<p>Mensaje: <strong>${body.mesagge}</strong></p>
				`
		};

		const transport = nodemailer.createTransport(config);

		const info = await transport.sendMail(mensaje);
		console.log(info);
	};
	sendEmail();
	res.status(200).json('mail sent');
}
