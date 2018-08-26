import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../index/index.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent,
    children: [
      { path: 'welcome', component: null },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MobileModule { }
