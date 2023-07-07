import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btn = document.getElementById("btnTop")

    btn?.addEventListener("click", function(){
      window.scrollTo(0,0)
    })
/*
    document.addEventListener('scroll', ocultar)

     function ocultar(){
      if(window.scrollY > 10){
        btn?.style.display = "flex"
      } else {
        btn?.style.display = "none"
      }
    }

    ocultar()*/
  }
}
