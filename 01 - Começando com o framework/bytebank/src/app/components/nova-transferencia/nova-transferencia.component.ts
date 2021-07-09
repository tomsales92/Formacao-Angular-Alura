import { Transferencia } from './../../models/transferencia.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

   valor!: number;
   destino!: number;

   constructor(
     private service: TransferenciaService,
     private router: Router
     ){}

  transferir(){
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia =  {
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpaCampo();
        this.router.navigateByUrl('extrato');

      },
      (error) => console.error(error)
    );
    this.limpaCampo();
  }

  limpaCampo()
  {
    this.valor = 0;
    this.destino = 0;
  }


  ngOnInit(): void {
  }

}
