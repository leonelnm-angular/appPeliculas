import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {


  public empty:boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  buscarPeli( texto: string) {
    let t: string = texto.trim();
    if ( t.length > 0 ) {
      this.router.navigate([ 'search', t ]);
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

}
