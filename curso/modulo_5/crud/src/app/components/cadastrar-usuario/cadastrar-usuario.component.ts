import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit{

  //cria o formGroup para cadastro do usuário utilizando os formControls
  userForm: FormGroup = new FormGroup({
    
    //Os campos começam em nulo e são obrigatórios
    id: new FormControl(),
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    profession: new FormControl(null, [Validators.required]),
    documentNumber: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    monthlyIncome: new FormControl(null, [Validators.required]),

    //Aqui é um formGroup aninhado dentro de outro formGroup
    address: new FormGroup({
      zipCode: new FormControl(null, [Validators.required]),  
      street: new FormControl(null, [Validators.required]),  
      number: new FormControl(null, [Validators.required]),  
      complement: new FormControl(null),  
      district: new FormControl(null, [Validators.required]),  
      city: new FormControl(null, [Validators.required]),  
      state: new FormControl(null, [Validators.required]),  
      country: new FormControl(null, [Validators.required]),  
    })
  })

  //Um exemplo de usuário cadastrado
  user: User = {
    id: '',
    name: 'Kauã',
    email: 'teste@gmail.com',
    profession: 'Programador',
    documentNumber: '123392374372',
    birthDate: '2004-04-02',
    monthlyIncome: 500,

    //Aqui é um formGroup aninhado dentro de outro formGroup
    address: {
      zipCode: '23935005',  
      street: 'Av. Carlos',  
      number: 2,  
      complement: '',  
      district: 'Belém',  
      city: 'Angra',  
      state: 'RJ',  
      country: 'Brasil',  
    }
  }

  ngOnInit(): void {
    //Quando inicializa a página, ele preenche os campos do formulário com os dados do user
    this.userForm.patchValue(this.user)  
  }


  //Criado o método para ser executado quando o botão de salvar do cadastro for clicado
  onSave(): void{
    //pega o usuário inteiro, mesmo se os campos não forem preenchidos
    const user = this.userForm.getRawValue()
    console.log(user);
    
  }
}
