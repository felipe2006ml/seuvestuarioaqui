import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Array<any> = [
    {
      id: 1,
      marca: "Zara",
      fornecedor: "C&A",
      valorPago: 25.55,
      valorVenda: 55.55,
      tipo: "Blusa",
      cor: "Amarela",
      tamanho: "G",
      status: "Ativo"
    },
    {
      id: 2,
      marca: "Zara",
      fornecedor: "C&A",
      valorPago: 25.55,
      valorVenda: 55.55,
      tipo: "Blusa",
      cor: "Amarela",
      tamanho: "G",
      status: "Inativo"
    },
    {
      id: 3,
      marca: "Zara",
      fornecedor: "C&A",
      valorPago: 25.55,
      valorVenda: 55.55,
      tipo: "Blusa",
      cor: "Amarela",
      tamanho: "G",
      status: "Ativo"
    },
    {
      id: 4,
      marca: "Zara",
      fornecedor: "C&A",
      valorPago: 25.55,
      valorVenda: 55.55,
      tipo: "Blusa",
      cor: "Amarela",
      tamanho: "G",
      status: "Ativo"
    },
    {
      id: 5,
      marca: "Zara",
      fornecedor: "C&A",
      valorPago: 25.55,
      valorVenda: 55.55,
      tipo: "Blusa",
      cor: "Amarela",
      tamanho: "G",
      status: "Inativo"
    }
  ]

  vendas: Array<any> = [
    {
      id: 1,
      nome: "Calça Jeans 42",
      valor: 35.55,
      valorPago: 20
    },
    {
      id: 2,
      nome: "Blusa G 38",
      valor: 40,
      valorPago: 22
    },
    {
      id: 3,
      nome: "Blusa G 38",
      valor: 35.55,
      valorPago: 20
    },
    {
      id: 4,
      nome: "Blusa G 38",
      valor: 55,
      valorPago: 25
    },
    {
      id: 5,
      nome: "Blusa de Lã G 38",
      valor: 35.55,
      valorPago: 20
    },
  ]

  vendasEfetuadas: number = this.vendas.length;

  lucroTotal: number = this.calculoLucroTotal()
  lucroBruto: number = this.calculoLucroBruto()
  valorInvestido: number = this.calculoValorInvestido()

  produtosEstoque: number = this.calculoProdutosAtivos()

  constructor() { }

  ngOnInit(): void {
  }

  calculoLucroTotal() {
    let total = 0
    for (let i = 0; i < this.vendas.length; i++) {
      total += (this.vendas[i].valor) - (this.vendas[i].valorPago)
    }

    return Number(total.toFixed(2));
  }

  calculoLucroBruto() {
    let total = 0;
    for (let i = 0; i < this.vendas.length; i++) {
      total += (this.vendas[i].valor)
    }

    return Number(total.toFixed(2));
  }

  calculoValorInvestido() {
    let total = 0;
    for (let i = 0; i < this.vendas.length; i++) {
      total += (this.vendas[i].valorPago);
    }

    return Number(total.toFixed(2))
  }

  calculoProdutosAtivos() {
    let total = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].status === "Ativo") {
        total += 1;
      }
    }
    return total
  }

}
