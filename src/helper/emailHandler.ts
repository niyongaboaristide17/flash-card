import 'dotenv/config'
import sgMail from '@sendgrid/mail'
import { User } from '../models/User';
import { emailTemplate } from './emailTemplate';

sgMail.setApiKey(String(process.env.SENDGRID_API_KEY))

export const sendMail= async (user: User) => {
	const msg = {
		to: user.email,
		from: 'niyongaboaristide17@gmail.com', // Change to your verified sender
		subject: 'Thank you for registering!',
		text: 'Manage your falshcard',
		html: await emailTemplate(user),
	}
	await sgMail.send(msg)
}