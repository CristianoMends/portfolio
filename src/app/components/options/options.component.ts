import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.switchTheme();
    }
  }
  isDarkTheme = false;

  changeCssVariable(variable: string, value: string): void {
    document.documentElement.style.setProperty(variable, value);
  }

  switchTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.setDarkTheme();
    } else {
      this.setlightTheme();
    }
  }

  setSecondaryColor(color: string): void {
    this.changeCssVariable('--secondary-color', color);
  }
  setDarkTheme() {
    this.changeCssVariable('--backgroundColor', "#272727");
    this.changeCssVariable('--textColor', '#faf8f8');
    this.changeCssVariable('--headerColor', '#111');
    this.changeCssVariable('--iconColor', 'invert(1)');
    this.changeCssVariable('--formColor', '#111');
    this.changeCssVariable('--textTitleColor', '#ddd');
    this.changeCssVariable('--homeBgColor', '#0044ff');
  }
  setlightTheme() {
    this.changeCssVariable('--backgroundColor', "#faf8f8");
    this.changeCssVariable('--textColor', '#272727');
    this.changeCssVariable('--headerColor', '#fff');
    this.changeCssVariable('--iconColor', 'none');
    this.changeCssVariable('--formColor', '#fff');
    this.changeCssVariable('--textTitleColor', '#333');
    this.changeCssVariable('--homeBgColor', 'var(--backgroundColor)');
  }

}
