import { Subscription, delay } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent implements OnInit, OnDestroy {
  subscription!: Subscription ;
  trendingName: string = 'Trending Tv Shows This Week';
  moviesAll: any[] = [];
  aosTv: string = 'flip-left';
  loading:boolean =false
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this.subscription = this._MoviesService
      .getMoviesData('trending/tv/week')
      .pipe(delay(1300))
      .subscribe({
        next: (response) => {
          this.loading = true;
          this.moviesAll = response.results;
        },error:(err)=> {
          this.loading = false;
          alert(err)
        }
      });
  }
}
