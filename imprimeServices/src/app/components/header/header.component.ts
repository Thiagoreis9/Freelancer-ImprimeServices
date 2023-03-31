import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    header = document.getElementById('header');
    headerMenu= document.getElementById('headerMenu');
    content = document.getElementById('content');
    showSidebar = false;

    constructor(){

    }

    toggleSideBar(){
      this.showSidebar = !this.showSidebar;

      if(this.showSidebar){
        this.headerMenu!.style.marginLeft = '-5vw';
        this.headerMenu!.style.animationName = 'showSideBar';
        this.content!.style.filter = 'blur(2px)';
      } else{
        this.headerMenu!.style.marginLeft = '-100vw';
        this.headerMenu!.style.animationName = 'closeSideBar';
        this.content!.style.filter = '';

      }

    }

    closeSideBar(){
      if(this.showSidebar){
        this.toggleSideBar();
      }
    }



    ngOnInit(): void {
      this.header = document.getElementById('header');
      this.headerMenu= document.getElementById('headerMenu');
      this.content = document.getElementById('content');
      this.showSidebar = false;


      /*window.addEventListener('resize', function(event) {
        if(window.innerWidth > 1039){
          this.closeSidebar()
        }
      });*/


    }



}
