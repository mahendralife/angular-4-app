export class User {
    constructor (
        public username?: string,
        public password?: string,
        public name?: string,
        public confirmPassword?: string,
        public email?: string,
        public term?: string
    ) {}
}