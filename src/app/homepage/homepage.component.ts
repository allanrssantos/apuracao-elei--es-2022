import { Component, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs';
import { ApuracaoService } from '../services/apuracao.service';
import { Apuracao } from '../shared/models/apuracao';
import { Candidatos } from './../shared/models/candidatos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // variáveis
  apuracao!: Apuracao;
  apuracaoGov!: Apuracao;
  candidatos: Candidatos[] = [];
  candidatosGov: Candidatos[] = [];
  single!: any[] | any;

  // opções do gráfico
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'VOTOS EM "M"';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = '';
  barPadding: number = 8;
  showDataLabel: boolean = false;
  showGridLines: boolean = false;
  colorScheme: string | any = {
    domain: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA'],
  };

  constructor(private apuracaoService: ApuracaoService) {}

  ngOnInit() {
    this.presidentList();
    this.governadorList();
    this.refresh();
  }

  private presidentList() {
    this.apuracaoService
      .getResultPresidente()
      .pipe(
        switchMap((apuracao: Apuracao) => {
          this.apuracao = apuracao;
          this.resultado();
          return apuracao.cand;
        })
      )
      .subscribe((response: Candidatos) => {
        this.candidatos.push(response);
        return this.candidatos;
      });
  }

  private governadorList() {
    this.apuracaoService
      .getResultGovernador()
      .pipe(
        switchMap((apuracao: Apuracao) => {
          this.apuracaoGov = apuracao;
          return apuracao.cand;
        })
      )
      .subscribe((response: Candidatos) => {
        this.candidatosGov.push(response);
        return this.candidatosGov;
      });
  }

  refresh() {
    window.setTimeout(() => {
      location.reload();
    }, 30000);
  }

  resultado() {
    var single = [
      {
        name: 'BRANCOS',
        value: this.apuracao.vb,
      },
      {
        name: 'NULOS',
        value: this.apuracao.tvn,
      },
      {
        name: 'ABSTENÇÕES',
        value: this.apuracao.a,
      },
      {
        name: 'VÁLIDOS',
        value: this.apuracao.vv,
      },
      {
        name: 'COMPARECIMENTO',
        value: this.apuracao.c,
      },
    ];
    return Object.assign(this, { single });
  }

  onSelect(event: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(event)));
  }

  onActivate(event: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(event)));
  }

  onDeactivate(event: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(event)));
  }
}
