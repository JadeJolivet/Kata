export interface Pokemon {
   results: Pokemon[];
   name: string;
   url: string;
 }
 
 export interface PokemonResponse {
   count: number;
   next: string;
   previous: string;
   results: Pokemon[];
 }
 