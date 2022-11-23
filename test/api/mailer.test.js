import mailer from '../../pages/api/mailer/index';

test('send email contact', async () => {
	const req = {
		body: JSON.stringify({
            name: 'Bob Sponge',
			email: 'bobsponge123@gmail.com',
			mesagge: 'This is a test message jest',
		})
	};

	const json = jest.fn();

	const status = jest.fn(() => {
		return {
			json
		};
	});

	const res = { status };

	await mailer(req, res);
	console.log(json.mock.calls);
});
