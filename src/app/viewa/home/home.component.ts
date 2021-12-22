import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cadastro } from 'src/app/models/user';
import { CadastroService } from 'src/app/cadastro/component.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cadastro: Cadastro = {
    usuario: '',
    senha:'',
    email:''

  }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createCadastro(): void{
    this.cadastroService.create(this.cadastro).subscribe (() =>{
      // this.cadastroService.showMessege('Usuário Cadastrado!')
    })
  }
    cancelarCadastro(): void{
      this.router.navigate([''])

    }
    tabelasCadastro(): void{
      this.router.navigate(['/cadastro/tabela'])
    }
    userModel = new User("brendon@gmail123", "brendo11")
    
    onSubmit(){
      console.log(this. userModel)
      }
    }
