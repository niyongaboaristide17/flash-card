import { decodeAccessToken } from "../helper/jwtHandler";
import { findOneUserById } from '../services/user.service';

export const isAuthenticated = async (token: string): Promise<any> => {
	const t: string = token.split(' ')[1];
	try {
		
		const data: any = await decodeAccessToken(t);
		const user = await findOneUserById(Number(data.payload))

		if(user){
			return { isLoggedIn: true, user: user}
		}
		
		return { isLoggedIn: false}

	} catch (error) {
		return { isLoggedIn: false}
	}
}