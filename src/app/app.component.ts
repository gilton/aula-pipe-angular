import { Component, NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  valor: number = 10000;
  nomeMinusculo = "gilton nascimento";
  nomeMaiusculo = "GILTON NASCIMENTO"
  dataAtual = new Date();
  numero: number = 1500;
  decimal: number = 44500.45;
  p: number = 0.92;
  
  my_objeto: any = {
    nome: "gilton nascimento",
    idade: 39
  };

  raizQuadrada:number = 9;

  onSave(): void {
    this.valor = this.valor + 1;
  }

}
