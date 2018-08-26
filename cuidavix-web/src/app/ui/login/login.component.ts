import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

profileForm = this.fb.group({
  login: ['', Validators.required],
  senha: ['', Validators.required]
});

  constructor(private fb: FormBuilder,
    private route: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.status === 'VALID') {
      if (UsuarioService.efetuarLogin(
        this.profileForm.get('login').value,
        this.profileForm.get('senha').value) ) {
          this.route.navigate(['/dashboard']);
        } else {
          console.log('Usuário ou Senha inválidos!');
        }
      }

  }

  get login() { return this.profileForm.get('login'); }

  get senha() { return this.profileForm.get('senha'); }

}
