class ApiError extends Error {
    constructor (
        code, 
        message = 'Something went wrong', 
        errors = [],
        stack = '',
    ) {
        this.message = message;
        this.code = code;
    }
}

export {ApiError};