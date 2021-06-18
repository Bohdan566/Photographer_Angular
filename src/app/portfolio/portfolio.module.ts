import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WeddingPhotosComponent } from './components/wedding-photos/wedding-photos.component';
import { WalkingPhotosComponent } from './components/walking-photos/walking-photos.component';
import { PortraitPhotosComponent } from './components/portrait-photos/portrait-photos.component';
import { CitiesPhotosComponent } from './components/cities-photos/cities-photos.component';
import { AnimalsPhotosComponent } from './components/animals-photos/animals-photos.component';
import { NaturePhotosComponent } from './components/nature-photos/nature-photos.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    WeddingPhotosComponent,
    WalkingPhotosComponent,
    PortraitPhotosComponent,
    CitiesPhotosComponent,
    AnimalsPhotosComponent,
    NaturePhotosComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
