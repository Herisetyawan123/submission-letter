import type { NextApiRequest, NextApiResponse } from 'next'
import blockMethod from "@src/helpers/blocker-method/block-method";
import ErrorResponse from "@src/view-models/error-response";
import prisma from "@src/lib/prisma";
import {encrypt} from "@src/utils/bcrypt-utils/bcrypt-utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = new ErrorResponse({
        code: 500,
        error: "internal server error",
        message: "method doesn't allowed to access"
    });

    if(req.method){
        if(blockMethod(['post'], req.method)){
            return res.status(response.code).json(response.get())
        }
    }

    const { name, nim, password } = req.body;
    if(!name || !nim || !password){
        const inValid = new ErrorResponse({
            code: 500,
            error: 'Internal Server Error',
            message: 'Please, insert all field!'
        })
        return res.status(inValid.code).json(inValid.get())
    }

    try {
        const hashPass = await encrypt(password)
        const resp = await prisma.user.create({
            data: {
                nim,
                name,
                email: nim+"@mail.unej.ac.id",
                password: hashPass,
            }
        })
        return res.status(201).json({
            code: 201,
            success: 'Data success to created',
            message: 'You are success to create account.'
        })
    }catch (e){
        const wrapError = (e as Error).message
        if(wrapError.toLowerCase().includes("unique") && wrapError.toLowerCase().includes("email"))
            return res.status(500).json(new ErrorResponse({
                code: 500,
                error: 'Internal Server Error',
                message: "Email has been already. Please use another email to signup."
            }))
        else
            return res.status(500).json(new ErrorResponse({
                code: 500,
                error: 'Internal Server Error',
                message: "Occurred Problem in Database server."
            }))
    }

}
