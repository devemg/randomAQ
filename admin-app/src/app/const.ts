export enum ExceptionCode {
    NotFoundException = 404,
    AlreadyExistException = 400,
    PasswordIncorrectException = 403,
    AwsException = 503,
    ForbbidenException = 403,
};

export const TipicalExceptions = [
    ExceptionCode.NotFoundException,
    ExceptionCode.AlreadyExistException,
    ExceptionCode.PasswordIncorrectException
];