import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/components/about/about.component';
import {PortfolioComponent} from './portfolio/components/portfolio/portfolio.component';
import {BookingComponent} from './booking/components/booking/booking.component';
import {LoginComponent} from './login/components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [{
  path: '', component: HomeComponent, children: [{
    path: 'home', component: HomeComponent
  }]
}, {
  path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
}, {
  path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
}, {
  path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
}, {
  path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
