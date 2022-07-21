import { Subscription, delay } from 'rxjs';
import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.loading = true;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Function To Get Data From Api
  getSearch(keyword: string): void {
    if (keyword) {
      this._MoviesService.loading = false;
      this.subscription = this._MoviesService
        .getSearch(keyword)
        .pipe(delay(1300))
        .subscribe({
          next: (response) => {
            this._MoviesService.loading = true;
            this._MoviesService.searchMovies = response.results;
          },
        });
    }
  }
}
