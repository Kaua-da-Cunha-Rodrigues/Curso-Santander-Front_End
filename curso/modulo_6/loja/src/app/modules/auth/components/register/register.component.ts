import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlState, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { first } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;

  //chama o service para usar o register
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.buildForm()  
  }

  buildForm(): void{
    //Esse validators é uma validação que indica que os campos devem ser obrigatórios. No caso do documentNumber, também verifica se o CPF é válido
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      profession: new FormControl(null, [Validators.required]),
      birthDate: new FormControl(null, [Validators.required]),
      documentNumber: new FormControl(null, [
        Validators.required,
        this.validateDocumentNumber
      ]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      income: new FormControl(null, [Validators.required])
    })
  }

  //chama o register do authService para registrar user
  register(): void{
    const user: User = this.form.getRawValue()
    this.authService
    .register(user)
    .pipe(first())
    .subscribe({
      complete: () =>{
        this.router.navigate(['auth', 'login'])
        
      },
      error: (err) =>{
        console.log(err);
        
      }
    })
  }

  //desestrutura o formControlState, pegando apenas o value. Essa parte foi pega pronta, apenas para verificar o CPF
  private validateDocumentNumber({ value }: FormControlState<string>) {
    if (!value) return { invalidDocument: true };

    value = value.replace(/[^\d]+/g, '');
    if (value == '') return { invalidDocument: true };

    // Elimina CPFs invalidos conhecidos
    if (value.length != 11 || value === value[0].repeat(value.length)) {
      return { invalidDocument: true };
    }

    // Valida 1o digito
    let add = 0;

    for (let i = 0; i < 9; i++) {
      add += parseInt(value.charAt(i)) * (10 - i);
    }

    let rev = 11 - (add % 11);

    if (rev == 10 || rev == 11) rev = 0;

    if (rev != parseInt(value.charAt(9))) return { invalidDocument: true };

    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(value.charAt(i)) * (11 - i);
    }

    rev = 11 - (add % 11);

    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(value.charAt(10))) return { invalidDocument: true };

    return null;
  }
    
}
