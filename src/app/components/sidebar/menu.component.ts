import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar.component';



export class MenuComponent {
  currentLang = 'en';

  constructor(
    public menuService: SidebarComponent
  ) {}
}
