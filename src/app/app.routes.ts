import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'projects',
        component: ProjectsComponent    
    },
    {
        path:'skills',
        component: SkillsComponent
    }
];