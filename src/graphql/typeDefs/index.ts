import { userTypeDefs } from "./user";
import { queryTypeDefs } from "./query";
import { mutationTypeDefs } from "./mutation";
import { flashcardTypeDefs } from './flashcard';
import { authTypeDefs } from './auth';

export const typeDefs = [
	userTypeDefs, queryTypeDefs, mutationTypeDefs, flashcardTypeDefs, authTypeDefs
]