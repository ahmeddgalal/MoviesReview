import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AOS from 'aos';
@Injectable({
  providedIn: 'root',
})
export class MoviesService  {
  loading!:boolean
  searchMovies: any[] = [];
  imgUrl: string = 'https://image.tmdb.org/t/p/original'; // img path
  ratString: string =
    'background-image: linear-gradient(to top,var(--orang-color)'; //rating style
  constructor(private _HttpClient: HttpClient) {}
  getMoviesData(keyWord: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/${keyWord}?api_key=48d62e7452a1f1a5e6018217ac27c50a`
    );
  }
  getSearch(keyword:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=48d62e7452a1f1a5e6018217ac27c50a&query=${keyword}`)
  }
  getMovieByID(id:string , keyword:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${keyword}/${id}?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US`)
  }
  aosAnimation():void {
    AOS.init();
  }
}
// ng build --output-path docs --base-href /movie-app-angular/