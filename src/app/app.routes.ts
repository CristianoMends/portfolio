import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];
