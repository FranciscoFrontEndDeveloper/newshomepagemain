import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  activateMenu: boolean = true

  showMenu() {
    this.activateMenu = !this.activateMenu
    console.log(this.activateMenu)
  }
}
