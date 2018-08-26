import { Component, OnInit } from '@angular/core';
import {executarPopover} from '../../core/funcoes.js';

@Component({
  selector: 'app-mario',
  templateUrl: './mario.component.html',
  styleUrls: ['./mario.component.css']
})
export class MarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    executarPopover('#zeballoon', 'ALOooooo');
  }

}
