import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Report/add/add.component';
import { ListarComponent } from './Report/listar/listar.component';
import { CalculateComponent } from './Report/calculate/calculate.component';

const routes: Routes = [
  {path:'list',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'calculate',component:CalculateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
