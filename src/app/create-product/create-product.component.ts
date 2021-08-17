import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createProductModel } from './create-product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  formulario!: FormGroup;

  inputsForm: createProductModel = {
    nome: ''
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required]
    })
  }

  insertProduct() {
    this.inputsForm.nome = this.formulario.get('nome').value;
    if (this.inputsForm.nome === null || this.inputsForm.nome === '') {
      alert("Digite alguma coisa viado")
    } else {
      console.log(this.inputsForm)
    }
  }

}
