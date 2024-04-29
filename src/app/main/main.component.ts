import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProjectsComponent } from '../projects/projects.component';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { SkillsComponent } from "../skills/skills.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [FooterComponent,HeaderComponent, ProjectsComponent, HomeComponent, AboutComponent, ContactsComponent, SkillsComponent]
})
export class MainComponent {

}
