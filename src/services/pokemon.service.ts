import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonReseponse } from 'src/models/pokemon-reseponse';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<any>{
    return this.http
    .get<any>("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .pipe(
      map(response => response.results?.map((pokemon: PokemonReseponse) => pokemon))
    );
  }
}
