import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public p_cartelera: any[] = [];
  public p_populares: any[] = [];
  public p_infantiles: any[] = [];
  public p_latest: any[] = null;

  public anio = new Date().getFullYear();

  constructor( private _movieS: MoviesService) { }

  ngOnInit() {
    this.getCartelera();
    this.getPopulares();
    this.getInfantiles();
    this.getLatestMovie();
  }

  getCartelera() {
    this._movieS.getCartelera()
      .subscribe( (data: any) => (
        this.p_cartelera = data,
        console.log(this.p_cartelera)
      ));

  }

  getPopulares() {
    this._movieS.getPopulares()
      .subscribe ( data => (
        this.p_populares = data
      ))

  }

  getInfantiles() {
   this._movieS.getInfantiles()
      .subscribe ( data => (
        this.p_infantiles = data
        ))

  }

  getLatestMovie() {
    this._movieS.getLatestMovie()
      .subscribe( data => (
        this.p_latest = data,
        console.log(this.p_latest)
        
       ) )

  }

  showDetail() {
    
  }

}
