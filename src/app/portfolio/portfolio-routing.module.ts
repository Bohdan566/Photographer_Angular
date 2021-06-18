import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {WeddingPhotosComponent} from './components/wedding-photos/wedding-photos.component';
import {WalkingPhotosComponent} from './components/walking-photos/walking-photos.component';
import {PortraitPhotosComponent} from './components/portrait-photos/portrait-photos.component';
import {CitiesPhotosComponent} from './components/cities-photos/cities-photos.component';
import {AnimalsPhotosComponent} from './components/animals-photos/animals-photos.component';
import {NaturePhotosComponent} from './components/nature-photos/nature-photos.component';

const routes: Routes = [{
  path: '', component: PortfolioComponent, children: [{
    path: '', component: WeddingPhotosComponent
  },
    {
    path: 'wedding', component: WeddingPhotosComponent
  }, {
    path: 'walking', component: WalkingPhotosComponent
  }, {
    path: 'portraits', component: PortraitPhotosComponent
  }, {
    path: 'cities', component: CitiesPhotosComponent
  }, {
    path: 'animals', component: AnimalsPhotosComponent
  }, {
    path: 'nature', component: NaturePhotosComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
