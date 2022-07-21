import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  subscribe!: Subscription ;
  trendingName: string = 'Trending Movies This Week';
  moviesAll: any[] = [];
  aosMovies: string = 'fade-right';
  loading: boolean = false;
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this.subscribe = this._MoviesService
      .getMoviesData('trending/movie/week')
      .pipe(delay(1300))
      .subscribe({
        next: (response) => {
          this.loading = true;
          this.moviesAll = response.results;
        },
        error: (err) => {
          this.loading = false;
          alert(err);
        },
      });
  }
}
