import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';


const routes: Routes = [{
  path: '',
  component: CardsComponent,
  children: [
    {
      path: ':id',
      component: CardDetailsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
