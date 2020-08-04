import { Component, OnInit } from '@angular/core';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { ActivatedRoute } from '@angular/router'
import { Cards } from 'src/app/models/Cards';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  cardDetails: Cards;

  constructor(private service: PokemonTcgService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.getCardById(id).subscribe(card => {
        this.cardDetails = card;
      })
    });

  }

}
