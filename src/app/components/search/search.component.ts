import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [``]
})
export class SearchComponent implements OnInit {
  
  private texto: string;
  public peliculas: any[] =[];

  constructor(  private activeRoute: ActivatedRoute,
                private _movieS: MoviesService) { 

    this.activeRoute.params
      .subscribe( params => {
        this.texto = params['texto'];
    })

    if (this.texto != null) {
      this._movieS.buscarPelicula( this.texto )
        .subscribe( data => (
          this.peliculas = data,
          console.log(this.peliculas)
          
        ));      
    }

  }

  ngOnInit() {
  }

  buscarPelicula( texto: string ){
    this.peliculas = [];

    this._movieS.buscarPelicula( texto ).subscribe (data => this.peliculas = data);
  }

}
