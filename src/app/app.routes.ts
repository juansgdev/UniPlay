import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CanActivateGuard } from './guards/login/login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login'
    }, 
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [CanActivateGuard]
    }
];
