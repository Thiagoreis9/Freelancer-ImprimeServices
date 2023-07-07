import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contents',
  templateUrl: './page-contents.component.html',
  styleUrls: ['./page-contents.component.css']
})
export class PageContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  botaoWpp(){
    window.alert("Voce clicou no botão do whatsapp!")
  }
}
