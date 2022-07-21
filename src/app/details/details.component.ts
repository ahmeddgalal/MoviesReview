import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: any;
  type:any
  movieDetails: Movie = {};
  ratString!: string;
  imgPath!: string;
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ratString = this._MoviesService.ratString;
    this.imgPath = this._MoviesService.imgUrl;
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.type = this._ActivatedRoute.snapshot.paramMap.get('type')
    this.getMoviesDetails();
  }
  getMoviesDetails() {
    this._MoviesService.getMovieByID(this.id,this.type).subscribe({
      next: (response) => {
        this.movieDetails = response;
        
      },
    });
  }
}
