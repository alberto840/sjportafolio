import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home/home-page/home-page.component';
import { AboutPageComponent } from './views/about/about-page/about-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    }
];
