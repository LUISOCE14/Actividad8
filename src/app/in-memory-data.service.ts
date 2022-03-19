import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',power: 10 },
      { id: 12, name: 'Narco',power: 5 },
      { id: 13, name: 'Bombasto',power: 15 },
      { id: 14, name: 'Celeritas',power: 7},
      { id: 15, name: 'Magneta',power: 20 },
      { id: 16, name: 'RubberMan',power: 4 },
      { id: 17, name: 'Dynama',power: 16 },
      { id: 18, name: 'Dr IQ',power: 14 },
      { id: 19, name: 'Magma',power: 1 },
      { id: 20, name: 'Tornado',power: 18 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    console.log(heroes.length);
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.power)) + 1 : 11;
  }
}