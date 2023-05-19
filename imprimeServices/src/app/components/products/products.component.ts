import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit( ): void {

    const splide = new Splide( '.splide', {
      type   : 'loop',
      perPage: 3,
      focus: 'center',
      breakpoints: {
        1200: {perPage: 2},
        900: {perPage: 1},
      },
      autoScroll: {
        pauseOnHover: false,
        speed: 0.5,
      },
    } ).mount( { AutoScroll } );
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
