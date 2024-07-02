import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [SkillsComponent]
})
export class AboutComponent {



}
