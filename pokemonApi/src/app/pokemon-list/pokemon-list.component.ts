import { Component ,  OnInit} from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.type';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      console.log(data);
      this.pokemons = data.results;
    });
  }
}



