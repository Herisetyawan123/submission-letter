export interface ErrorInterface {
    code: number
    message: string
    error: string
    get: () => { code: number, error: string, message: string }
}

export type ErrorParamType = {
    code: number;
    error: string,
    message: string
}