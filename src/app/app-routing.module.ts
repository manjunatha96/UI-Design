import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeatilsComponent } from './Components/deatils/deatils.component';
import { InnerComponent } from './Components/inner/inner.component';
import { TableCheckboxComponent } from './Components/table-checkbox/table-checkbox.component';



const routes: Routes = [
  {path:'Deatils', component:DeatilsComponent},
  {path:'inner', component:InnerComponent},
  {path:'checkbox', component:TableCheckboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
