import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/UsuarioModel';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  
  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];
  
  constructor(private serviceUsuario:UsuarioService) {}

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe((response) => {
        this.usuarios = response.dados;
        this.usuariosGeral = response.dados;
      }
    );
  }

  search(busca:Event) {
    const target = busca.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nomeCompleto.toLowerCase().includes(value);
    })
  }

  delete(id:number | undefined)  {
    this.serviceUsuario.DeleteUsuario(id).subscribe((response) => {
      window.location.reload();
      }
    )
  }
}
