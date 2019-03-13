import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
                private route: Router,
                private _movieS: MoviesService) { 

    this.activeRoute.params
      .subscribe( params => {
        this.texto = params['texto'];
    })

    if (this.texto.length > 0) {
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

  getDetail( id: string ) {
    
    this.route.navigate([ '/movie', id])
    
  }

}
