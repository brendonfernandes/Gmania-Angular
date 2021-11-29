import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './viewa/contato/contato.component';
import { HomeComponent } from './viewa/home/home.component';
import { SobreComponent } from './viewa/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
