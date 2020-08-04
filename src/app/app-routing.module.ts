import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full',
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'cards/:id',
    component: CardDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
