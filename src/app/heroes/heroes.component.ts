import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  @Input() phraseString: string = '';

  heroList: Hero[] = this.heroService.getAll();
  phrase: string = '';

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {

  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }


}
