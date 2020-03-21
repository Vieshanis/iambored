import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoringComponent } from './boring/boring.component';


const routes: Routes = [
  { path: 'main', component:  BoringComponent},
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
