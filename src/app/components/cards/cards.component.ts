import { Component, OnInit } from '@angular/core';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private service: PokemonTcgService) { }

  ngOnInit() {
    this.service.getCards().subscribe(cards => {
      console.log(cards);
    })
  }

}
