import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@src/lib/prisma";
import {User} from ".prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const users: User[] = await prisma.user.findMany()
    return res.status(200).json(users)
}