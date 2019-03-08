import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey = '62b64b795d7c06d49c7b5866641527c6';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(  private http: HttpClient) { }


  test() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&callback=JSONP_CALLBACK`;

console.log(url);


    return this.http.jsonp( url, '' )
      .pipe (map ( res => res));

  }
}
