import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { SkillService } from '../../service/skill.service';
import Skill from '../../interface/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  providers: [SkillService],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {

  constructor(private skillService: SkillService) { }
  skills: Skill[] = [];
  ngAfterViewInit(): void {
    this.skillService.getSkills().subscribe({
      next: (res) => {
        this.skills = res;
      }
    })
  }

}
