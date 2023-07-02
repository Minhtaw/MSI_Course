import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
    private activateroute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  lectureId: any;
  lecture: any;
  classes = this.heroService.courses

  ngOnInit(): void {
    this.lectureId = this.activateroute.snapshot.paramMap.get('id');
    this.lecture = this.heroService.courses.find(x => x.id == this.lectureId);
  }
}
