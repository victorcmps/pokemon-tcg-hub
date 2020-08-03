import { Component, OnInit } from '@angular/core';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Cards } from 'src/app/models/Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardsList: Array<Object>;

  constructor(private service: PokemonTcgService) { }

  ngOnInit() {
    this.service.getCards().subscribe(cards => {
      this.cardsList = cards.cards.sort((a, b) => a.name.localeCompare(b.name));
    })
  }

}
