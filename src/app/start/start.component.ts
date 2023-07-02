// import { Component, OnInit } from '@angular/core';
// import { HeroService } from '../service/hero.service';

// @Component({
//   selector: 'app-start',
//   templateUrl: './start.component.html',
//   styleUrls: ['./start.component.css']
// })
// export class StartComponent implements OnInit {

//   classes = this.heroService.courses;

//   constructor(private heroService: HeroService) {}

//   myfun(event: any): void {
//     console.log(event.checked);
//   }
  
//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  classes: any[] = [];
  darkMode = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.classes = this.heroService.courses;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}

