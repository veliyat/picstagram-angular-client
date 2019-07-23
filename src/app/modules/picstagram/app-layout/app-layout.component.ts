import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    //TODO: take the localstorage to a service
    //TODO: redirection done with window.location has to change
    //      in accordance to the app-routing.module.ts TODO
    localStorage.removeItem('user');
    window.location.href = '/'
  }
}
