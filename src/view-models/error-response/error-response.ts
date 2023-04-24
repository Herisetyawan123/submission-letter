import {ErrorInterface, ErrorParamType} from "./types";

export default class ErrorResponse implements ErrorInterface{
    code: number;
    error: string;
    message: string;

    constructor({code, error, message}: ErrorParamType) {
        this.error = error
        this.code = code
        this.message = message
    }

    get() {
        return {
            code: this.code,
            error: this.error,
            message: this.message
        };
    }



}