import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoringComponent } from './boring/boring.component';
import { UsersComponent } from './users/users.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';


const routes: Routes = [
  {
    path: 'boring',
    component: BoringComponent,
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'exchangerates',
    component: ExchangeRatesComponent
  },
  { path: '**', redirectTo: 'boring', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
