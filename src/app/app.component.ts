import { Component } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { PokemonService } from 'src/services/pokemon.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularRxJs';

  constructor(private pokemonService: PokemonService, private ApiService: ApiService) {
  }

  pokemonRequest$ = this.pokemonService.getPokemons();
  secondLongCall$ = this.ApiService.getLongCall();

  pokemons$ = combineLatest([this.pokemonRequest$, this.secondLongCall$])
    .pipe(
      tap((pokemon) => console.log(pokemon)),
      map(([pokemonList, longCall]) => pokemonList
      .map((pokemon: any) => ({...pokemon, name: pokemon.name + " " + longCall.randomValue}))
    ))
}
