export interface ResponseModel<T> {
    dados: T;
    mensagem: string;
    status: boolean;
}