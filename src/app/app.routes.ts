import { Routes } from '@angular/router';
import { TablaEjemploComponent } from './tabla-ejemplo/tabla-ejemplo.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tabla-ejemplo', pathMatch: 'full' },
    { path: 'tabla-ejemplo', component: TablaEjemploComponent }
];
