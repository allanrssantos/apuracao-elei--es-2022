import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Candidatos } from './../../shared/models/candidatos';

@Component({
  selector: 'app-card-candidatos',
  templateUrl: './card-candidatos.component.html',
  styleUrls: ['./card-candidatos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCandidatosComponent implements OnInit {

  @Input() candidateList!: Candidatos[];
  @Input() candidateListGov!: Candidatos[];

  constructor() { }

  ngOnInit() {

  }

}
