import _ from "lodash";
import { createFlashcard, findOneFlashcardById, markFlashcardAsDone } from '../../services/flashcard.service';
import { createUser, findOneUserByEmail } from '../../services/user.service';
import { User } from '../../models/User';
import { generateAccessToken } from '../../helper/jwtHandler';
import { compare } from '../../helper/encryption';
import { FlashcardInput, Flashcard } from '../../models/Flashcard';

export const Mutation = {
	createUser: async (parent: any, args: any, context: any) => {
		const user = args.input;
		return await createUser(user);
	},

	createFlashcard: async (parent: any, args: any, context: any) => {
		if (context.isLoggedIn === false) {
			throw new Error("UNAUTHORIZED REQUEST");
		}
		const flashcard: FlashcardInput = args.input;
		flashcard.userId = Number(context.user.id);
		return await createFlashcard(flashcard);
	},

	markFlashcardAsDone: async (parent: any, args: any, context: any) => {
		if (context.isLoggedIn === false) {
			throw new Error("UNAUTHENTICATED USER");
		}
		const flashcard: Flashcard | undefined | null = await findOneFlashcardById(Number(args.input));
		if (flashcard === null || flashcard === undefined) {
			throw new Error("FLASHCARD NOT FOUND");
		}
		if (flashcard.userId !== context.user.id) {
			throw new Error("UNAUTHORIZED NOT FOUND");
		}
		return await markFlashcardAsDone(Number(args.input))
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