import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
import { UsuarioListar } from '../models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  ApiUrl = environment.UrlApi
  
  constructor(private client: HttpClient) { }

  GetUsuarios(): Observable<ResponseModel<UsuarioListar[]>> {
    return this.client.get<ResponseModel<UsuarioListar[]>>(this.ApiUrl);
  }
  
  DeleteUsuario(id: number | undefined): Observable<ResponseModel<UsuarioListar[]>> {
    return this.client.delete<ResponseModel<UsuarioListar[]>>(`${this.ApiUrl}/${id}`);
  }
}
