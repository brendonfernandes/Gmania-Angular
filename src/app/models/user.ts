export interface Cadastro{
    id?: number
    usuario: string,
    senha: string,
    email: string
}
export class User {
    constructor(
        public email: string,
        public senha: string
    ) {}
}

   
    

