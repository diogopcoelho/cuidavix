import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PrincipalComponent } from './ui/principal/principal.component';
import { DashboardComponent } from './ui/mobile/dashboard/dashboard.component';
import { IndexComponent } from './ui/mobile/index/index.component';
import { PerguntaComponent } from './ui/mobile/pergunta/pergunta.component';
import { DicaComponent } from './ui/mobile/dica/dica.component';
import { DesafioComponent } from './ui/mobile/desafio/desafio.component';
import { LoginComponent } from './ui/login/login.component';
import { UsuarioService } from './service/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarioComponent } from './ui/mario/mario.component'; // <-- NgModel lives here

registerLocaleData(localePt, 'pt-BR');


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexComponent,
    PrincipalComponent,
    DesafioComponent,
    PerguntaComponent,
    DicaComponent,
    LoginComponent,
    MarioComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false , useHash: true, onSameUrlNavigation: 'reload' }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, UsuarioService ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
