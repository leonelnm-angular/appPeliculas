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
  public ready: boolean = true;
  public content: boolean = true;


  constructor(  private activeRoute: ActivatedRoute,
                private route: Router,
                private _movieS: MoviesService) { 

    this.activeRoute.params
      .subscribe( params => {
        this.texto = params['texto'];
        if (this.texto) {
          this.buscarPelicula(this.texto);
          
        }
        
    })
  }

  ngOnInit() {
  }

  buscarPelicula( texto: string ){
    this.peliculas = [];
    this.ready = false;
    // this.content = false;
    let t: string = texto.trim();
    if (texto.length > 0) {
      this._movieS.buscarPelicula( t ).subscribe (data => {
        this.peliculas = data;
        this.content = false;
        if (this.peliculas.length > 0) {
          this.content = true;
        }
      });
      this.ready = true;
    }

  }

  getDetail( id: string) {
    
    this.route.navigate([ '/movie', id])
    
  }

}
