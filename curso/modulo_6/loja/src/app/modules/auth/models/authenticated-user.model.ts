import { User } from "./user.model";

//Como a api retorna um usuário com o token para acessar as outras funções, criamos essa interface
export interface AuhtenticatedUser{
    token: string,
    user: User
}