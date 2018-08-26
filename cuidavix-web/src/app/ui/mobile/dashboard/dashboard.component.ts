import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../../model/colaborador';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario: Colaborador;

  constructor() { }

  ngOnInit() {
    this.usuario = UsuarioService.logado();
  }

}
