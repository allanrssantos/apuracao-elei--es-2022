import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apuracao } from '../shared/models/apuracao';

@Injectable({
  providedIn: 'root',
})
export class ApuracaoService {
  //API que retorna os dados da apuração de presidentes e dados gerais da apuração 2º turno.
  private readonly API_P: string = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json';
  //API que retorna os dados da apuração de presidentes e dados gerais da apuração 1º turno.
  //private readonly API_P: string = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';


  //API que retorna os dados da apuração de Governador 2º turno.
  private readonly API_G: string = 'https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/sp/sp-c0003-e000547-r.json';
  //API que retorna os dados da apuração de Governador 1º turno.
  //private readonly API_G: string = 'https://resultados.tse.jus.br/oficial/ele2022/546/dados-simplificados/sp/sp-c0003-e000546-r.json';



  constructor(private httpClient: HttpClient) {}

  public getResultPresidente(): Observable<Apuracao> {
    const URL = this.API_P;
    return this.httpClient.get<Apuracao>(URL);
  }

  public getResultGovernador(): Observable<Apuracao> {
    const URL = this.API_G;
    return this.httpClient.get<Apuracao>(URL);
  }
}
