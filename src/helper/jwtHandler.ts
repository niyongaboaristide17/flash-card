import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET_KEY = String(process.env.JWT_SECRET_KEY)
const JWT_LIFETIME = process.env.JWT_LIFETIME

export const generateAccessToken = (payload: any) => {
	return jwt.sign(
		{ ...payload },
		JWT_SECRET_KEY,
		{
			expiresIn: JWT_LIFETIME
		}
	)
}