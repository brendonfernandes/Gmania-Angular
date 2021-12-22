import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../models/user';
import { Observable } from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar'



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http:localhost:3001/cadastro"

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }
  showMessege(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: "bottom"

    });
  }
  create(cadastro: Cadastro): Observable <Cadastro>{
      return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }
}
