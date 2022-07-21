import { delay, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit, OnDestroy {
  subscription!: Subscription ;
  trendingName: string = 'Trending All This Week';
  moviesAll: any[] = [];
  aosTrend: string = 'fade-up';
  loading:boolean = false
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.aosAnimation();
    this.getTrendingMovies();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this.subscription = this._MoviesService
      .getMoviesData('trending/all/week')
      .pipe(delay(1300))
      .subscribe({
        next: (response) => {
          this.loading = true
          this.moviesAll = response.results;
        },error:(err)=> {
          this.loading = false
          alert(err)
        }
      });
  }
}
