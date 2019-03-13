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

  buscarPelicula(texto: string) {

    const url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&query=${ texto }&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, '')
      .pipe ( map(
        res => res['results']
      ));

  }

  getCartelera() {

    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&page=1&primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, '')
      .pipe ( map(
        res => res['results']
      ));

  }

  getPopulares() {

    const url = `${ this.urlMoviedb }/movie/popular?api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, '')
      .pipe (map (
        res => res['results']
      ))

  }

  getInfantiles() {

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&certification.lte=G&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, '')
      .pipe (map (
        res => res['results']
      ))

  }

  getLatestMovie() {

    const fecha = new Date();

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&primary_release_year=${ fecha.getFullYear() }&language=es&sort_by=vote_average.desc&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, '')
      .pipe (map (
        res => res['results']
      ))

  }

}
