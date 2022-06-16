import 'dotenv/config'
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND))

export const hash = (plaintText: string): string => {
	return bcrypt.hashSync(plaintText, salt)
}

export const compare = (cipherText: string, hash: string): boolean => {
	return bcrypt.compareSync(cipherText, hash)
}