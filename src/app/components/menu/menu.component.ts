import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  activateMenu: boolean = true;
  desActivateMenu: boolean = false;

  showMenu() {
    this.activateMenu = !this.activateMenu;
    this.desActivateMenu = !this.desActivateMenu;
  }

  hiddenMenu(closedMenu: boolean) {
    this.activateMenu = !this.activateMenu;
    this.desActivateMenu = !this.desActivateMenu;
  }
}
