import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { OptionsComponent } from "./components/options/options.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ HttpClientModule, RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, ContactsComponent, FooterComponent, ProjectsComponent, OptionsComponent]
})
export class AppComponent {
  title = 'portifolio';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'instant' });
      }
    });
  }
}
