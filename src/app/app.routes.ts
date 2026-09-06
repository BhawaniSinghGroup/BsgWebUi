import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home.page';
import { ContentPageComponent } from './pages/content.page';
import { ContactPageComponent } from './pages/contact.page';
import { ServicePageComponent } from './pages/service.page';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Bhawani Singh Group | Technology, Products & Ventures' },

    { path: 'about', component: ContentPageComponent, data: { page: 'about' }, title: 'About | Bhawani Singh Group' },

    { path: 'services', component: ContentPageComponent, data: { page: 'services' }, title: 'Services | Bhawani Singh Group' },

    { path: 'services/:slug', component: ServicePageComponent },

    { path: 'products', component: ContentPageComponent, data: { page: 'products' }, title: 'Products | Bhawani Singh Group' },

    { path: 'ventures', component: ContentPageComponent, data: { page: 'ventures' }, title: 'Ventures | Bhawani Singh Group' },

    { path: 'industries', component: ContentPageComponent, data: { page: 'industries' }, title: 'Industries | Bhawani Singh Group' },

    { path: 'insights', component: ContentPageComponent, data: { page: 'insights' }, title: 'Insights | Bhawani Singh Group' },

    { path: 'contact', component: ContactPageComponent, title: 'Start a Conversation | Bhawani Singh Group' },

    { path: '**', redirectTo: '' }
];