import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET_KEY = String(process.env.JWT_SECRET_KEY)
const JWT_LIFETIME = process.env.JWT_LIFETIME

export const generateAccessToken = (payload: any) => {
	return jwt.sign(
		{ payload },
		JWT_SECRET_KEY,
		{
			expiresIn: JWT_LIFETIME
		}
	)
}

export const decodeAccessToken = async (token: string)=> {
	try {
		
		const data = jwt.verify(token, JWT_SECRET_KEY)
		return data;
		
	} catch (error) {
		throw new Error("UNAUTHORIZED ACCESS");
		
	}
}