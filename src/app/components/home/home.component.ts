import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

  section{
    margin-top:40px;
  }
  `]
})
export class HomeComponent implements OnInit {

  public p_cartelera: any[] = [];
  public p_populares: any[] = [];
  public p_infantiles: any[] = [];

  constructor( private _movieS: MoviesService) { }

  ngOnInit() {
    this.getCartelera();
  }

  getCartelera() {
    this._movieS.getCartelera()
      .subscribe( (data: any) => (
        this.p_cartelera = data,
        console.log(this.p_cartelera)
      ));

  }

}
