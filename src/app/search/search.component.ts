import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  updateData: any;
  trendingName: string = 'Search';
  moviesAll: any[] = [];
  aosSearch: string = 'flip-up';
  subscrip!: Subscription;
  loading!: boolean;
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.subscrip = interval(1).subscribe({
      next: () => {
        this.loading = this._MoviesService.loading;
        this.moviesAll = this._MoviesService.searchMovies;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscrip.unsubscribe();
  }
}
