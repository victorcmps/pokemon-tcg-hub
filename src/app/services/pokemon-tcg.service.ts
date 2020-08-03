import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../models/Cards';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {

  constructor(private http: HttpClient) { }

  getCards(busca?) {
    return this.http.get<Cards>(`/v1/cards${busca ? '?name=' + busca : ''}`);
  }
}
