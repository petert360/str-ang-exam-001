import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Blue Granite', superPower: 'Control light', address: 'New York'},
    {id: 2, name: 'Blue Man', superPower: 'Control wind', address: 'Los Angeles'},
    {id: 3, name: 'Silver Twist', superPower: 'Control sound', address: 'Berlin'},
    {id: 4, name: 'Flying Ice', superPower: 'Super speed', address: 'Toronto'},
    {id: 5, name: 'Silent Truth', superPower: 'Control time', address: 'Paris'},
    {id: 6, name: 'Speedy Twist', superPower: 'Shapeshift', address: 'London'},
    {id: 7, name: 'Captain Hero', superPower: 'Super strength', address: 'Miami'},
    {id: 8, name: 'Lieutenant Falcon', superPower: 'Invisibility', address: 'Atlanta'},
    {id: 9, name: 'Flying Flame.', superPower: 'Super agility', address: 'Washinton'},
    {id: 10, name: 'Justice Blast', superPower: 'Control metal', address: 'Austin'}
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

  getAllAlternative(): Hero[] {
    return this.list;
  }
}
