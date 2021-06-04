export enum ExceptionCode {
    AlreadyExistException = 400, //BadRequestException
    UnauthorizedException = 401,
    PaymentRequiredException = 402,
    PasswordIncorrectException = 403, //ForbiddenException
    NotFoundException = 404,
    TokenNotFoundException = 406, //NotAcceptableException
    AwsException = 504,
    TokenExpiredException = 503
};


export const TipicalExceptions = [
    ExceptionCode.NotFoundException,
    ExceptionCode.AlreadyExistException,
    ExceptionCode.UnauthorizedException,
    ExceptionCode.AwsException
];