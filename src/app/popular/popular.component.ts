import { Subscription, delay } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit, OnDestroy {
  subscription!: Subscription ;
  trendingName: string = 'Popular';
  moviesAll: any[] = [];
  aosPop: string = 'zoom-in';
  loading:boolean = false
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getTrendingMovies(): void {
    this.subscription = this._MoviesService
      .getMoviesData('movie/popular')
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
