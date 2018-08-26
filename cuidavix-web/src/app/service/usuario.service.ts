import { Injectable } from '@angular/core';
import { Colaborador } from '../model/colaborador';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  static logado(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  static usuarios: Colaborador[] = [{
    nome: 'João do Caminhão',
    login: '12345678901',
    senha: '123',
    metaDiaria: 20,
    resultadoMetaDiaria: 9,
    pontuacao: 1100
  }];

  constructor() { }

  static getToken(): string {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser && currentUser.token;
    return token ? token : '';
  }

  static efetuarLogin(login: string, senha: string): boolean {
    debugger;
    let usuario = UsuarioService.usuarios.filter((value, index, array) => {
      return (value.login === login && value.senha === senha);
    } );
    if (usuario && usuario.length > 0) {
      localStorage.setItem('currentUser', JSON.stringify(usuario[0]));
      return true;
    }
    return false;
  }

  static logout(): void {
      // clear token remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  static isLoggedIn(): boolean {
    let token: String = this.getToken();
    return token && token.length > 0;
  }

}
