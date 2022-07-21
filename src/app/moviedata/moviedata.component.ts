import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedata',
  templateUrl: './moviedata.component.html',
  styleUrls: ['./moviedata.component.css'],
})
export class MoviedataComponent implements OnInit {
  @Input() trendingName!: string;
  @Input() movies: any;
  @Input() animationName!: string;
  @Input() loading!: boolean;
  imgPath: string = ''; // path image
  ratString: string = '';
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.imgPath = this._MoviesService.imgUrl;
    this.ratString = this._MoviesService.ratString;
  }
}
