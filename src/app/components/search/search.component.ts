import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Cards } from 'src/app/models/Cards';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  busca: any;
  cardsList: Array<Object>;
  semRegistros: boolean;

  constructor(private route: ActivatedRoute, private service: PokemonTcgService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.busca = params['search'];
      this.service.getCards(this.busca).subscribe(busca => {
        if(busca.cards.length > 0) {
          this.cardsList = busca.cards;
          this.semRegistros = false;
        } else {
          this.semRegistros = true;
        }
      })
  });
  }

}
