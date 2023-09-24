import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private readonly DARK_THEME_CLASS = 'dark-theme'
  private readonly LIGHT_THEME_CLASS = 'light-theme'
  constructor() { }


  enableDarkMode() {
    document.body.classList.add(this.DARK_THEME_CLASS);
    document.body.classList.remove(this.LIGHT_THEME_CLASS);
  }
  enableLightMode() {
    document.body.classList.add(this.LIGHT_THEME_CLASS);
    document.body.classList.remove(this.DARK_THEME_CLASS);
  }

  setAutoMode() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      this.enableDarkMode()
    }
    else {
      this.enableLightMode()
    }
  }

  isDarkModeEnabled(): boolean {
    return document.body.classList.contains(this.DARK_THEME_CLASS)
  }
  isLightModeEnabled(): boolean {
    return document.body.classList.contains(this.LIGHT_THEME_CLASS)
  }
  toggleDarkMode() {
    if (this.isDarkModeEnabled()) {
      this.enableLightMode()
    }
    else {
      this.enableDarkMode();
    }
  }
}
