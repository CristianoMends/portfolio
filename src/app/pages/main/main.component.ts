import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomeComponent } from "../../components/home/home.component";
import { OptionsComponent } from "../../components/options/options.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { AboutComponent } from "../../components/about/about.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RepositoriesComponent } from "../../components/repositories/repositories.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, OptionsComponent, ProjectsComponent, AboutComponent, FooterComponent, RepositoriesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


}
