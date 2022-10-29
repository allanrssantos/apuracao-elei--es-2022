import { Component, Input, OnInit } from '@angular/core';
import { Apuracao } from 'src/app/shared/models/apuracao';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() apuracao!: Apuracao;
  @Input() apuracaoGov!: Apuracao;
  value: number = 0;

  constructor() {}

  ngOnInit() {}
}
