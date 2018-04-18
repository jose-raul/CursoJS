import { Component, OnInit } from '@angular/core';

import {Frase} from '../shared/frase.model';

import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a Frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)

  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log(this.tentativas)
    //console.log('Verificar Resposta: ', this.resposta)
      if (this.rodadaFrase.frasePtBr == this.resposta) {
        alert("Tradução Correta!")
        this.rodada++
        this.progresso = this.progresso + (100 / this.frases.length)
        this.rodadaFrase = this.frases[this.rodada]
        this.resposta = ''
        console.log(this.progresso)
      } else {
        alert("Tradução Incorreta! Tente Novamente!")
        this.tentativas--
      }

    }


}


