import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { PagError2Component } from './components/pag-error2/pag-error2.component';


const routes: Routes = [
  {path: 'Error404', component:PagErrorComponent},
  {path:'Error',component:PagError2Component},
  {path:'**',pathMatch:'full',redirectTo:'Error404'},
  {path:'',pathMatch:'full',redirectTo:'Error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
