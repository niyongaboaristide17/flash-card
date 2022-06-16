import { PrismaClient } from "@prisma/client";
import { hash } from "../helper/encryption";
import { User } from '../models/User';

const prisma = new PrismaClient()

export const createUser = async (user: User): Promise<User> => {
	return await prisma.user.create({
		data: {...user, password: hash(user.password)}
	})
}

export const findAllUsers = async (): Promise<User[]> => {
	return await prisma.user.findMany({
		include:{
			flashcards: true
		}
	})
}

export const findOneUserByEmail = async (email: string): Promise<User | undefined | null> => {
	return await prisma.user.findUnique(
		{
			where: { email: email}
		}
	)
}