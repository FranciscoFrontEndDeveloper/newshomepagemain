import { Component, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Output() hiddenMenuBoolean = new EventEmitter();
  MenuBoolean: boolean = true
  hiddenMenu() {
    this.MenuBoolean = !this.MenuBoolean
    this.hiddenMenuBoolean.emit(this.MenuBoolean);
  }
}
