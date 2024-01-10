class ApiError extends Error {
    constructor (
        code, 
        message = 'Something went wrong', 
        errors = [],
        stack = '',
    ) {
        super(message);
        this.message = message;
        this.code = code;
    }
}

export {ApiError};