import {compare, hash} from 'bcrypt-ts'

export  const encrypt = async (word: string): Promise<string> => {
    return await hash(word, 8)
}

export const compareWord = async (word: string, compareWord: string): Promise<boolean> => {
    return await compare(word, compareWord);
}