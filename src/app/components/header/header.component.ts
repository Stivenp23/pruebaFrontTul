import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  classMenuBtn;
  classMenuItems;
  classMenuOpen;
  logo = '../assets/img/logo.png';
  items = [
    {
      label: 'INICIO',
      link: '/'
    },
    {
      label: 'SERVICIOS',
      link: '/'
    },
    {
      label: 'NUESTRO EQUIPO',
      link: '/'
    },
    {
      label: 'PORTAFOLIO',
      link: '/'
    },
    {
      label: 'CONTÁCTO',
      link: '/'
    },
    {
      label: 'TÉRMINO Y CONDICIONES',
      link: '/'
    },
  ];

  menu() {
    this.classMenuBtn = this.classMenuBtn ? '' : 'open';
    if (this.classMenuItems) {
      this.classMenuItems = '';
      this.classMenuOpen = '';
    } else {
      this.classMenuItems = 'site-nav--open';
      this.classMenuOpen = 'menu-open';
    }
  }
}
