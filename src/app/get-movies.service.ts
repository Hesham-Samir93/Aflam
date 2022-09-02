import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private _Http:HttpClient) { 

  }
  getTrending(mediatype: string):Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=ab40527ef17824705da5e5b4101fd10a`)
  }
  getMovieDetails(id:any):Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ab40527ef17824705da5e5b4101fd10a&language=en-US`)
  }
  getCats(mediatype: string):Observable<any>
  {
    return this._Http.get(`https://api.themoviedb.org/3/movie/${mediatype}?api_key=ab40527ef17824705da5e5b4101fd10a&language=en-US&page=1`)
  }
}
//https://api.themoviedb.org/3/trending/movie/week?api_key=ab40527ef17824705da5e5b4101fd10a 

//https://api.themoviedb.org/3/movie/now_playing?api_key=ab40527ef17824705da5e5b4101fd10a&language=en-US&page=1
//now_playing
//popular
//top_rated