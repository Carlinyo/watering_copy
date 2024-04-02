import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { LangSelectComponent } from '../lang-select/lang-select.component';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CustomButtonComponent, CommonModule, LangSelectComponent, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  createAccountButtonVariant: string = 'blue-button'
  navbarBackground: string = 'background: #02254C;'
  linkColor: string = 'color: #01A5C3;'
  textButtonColor: string = 'color: #00ABC7;'
  menu: boolean = false

  setBlueBackground() {
    this.navbarBackground = 'background: #00ABC7'
    this.linkColor = 'color: white;'
    this.createAccountButtonVariant = 'bold-blue-button'
    this.textButtonColor = 'color: #719AAD;'
  }

  setDarkBlueBackground() {

  }

  setWhiteBackground() {

  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const items: any = document.querySelector('.info-items')
    const offsetTop = items?.offsetTop
    if (window.scrollY >= offsetTop - 100) {
      this.setBlueBackground()
      if (window.scrollY <= offsetTop + 100) {
        window.scrollTo({
          top: offsetTop - 80,
          left: 0,
          behavior: "smooth"
        })
      }
    }
  }

  toggleMenu() {
    this.menu = !this.menu
  }

  get menuIcon() {
    return this.menu ? 'assets/images/Elements_Watering/close.png' : 'assets/images/Elements_Watering/menu.png'
  }
}
