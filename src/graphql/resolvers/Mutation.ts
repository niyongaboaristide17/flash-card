import _ from "lodash";
import { createFlashcard } from "../../services/flashcard.service";
import { createUser, findOneUserByEmail } from '../../services/user.service';
import { User } from '../../models/User';
import { generateAccessToken } from '../../helper/jwtHandler';
import { compare } from '../../helper/encryption';

export const Mutation = {
	createUser: async (parent: any, args: any, context: any) => {
		const user = args.input;
		return await createUser(user);
	},

	createFlashcard: async (parent: any, args: any) => {
		const flashcard = args.input;
		return await createFlashcard(flashcard);
	},

	login: async (parent: any, args: any) => {
		const user: User | undefined | null = await findOneUserByEmail(args.input.email)
		if (user) {
			
			if (compare(args.input.password, user.password)) {
				const accessToken = await generateAccessToken(user.id)
				return {
					accessToken,
				}
			}
		}
		throw new Error(`INVALID USER`)

	}
}