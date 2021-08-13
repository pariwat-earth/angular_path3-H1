import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    component:AboutMeComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'protfolio',
    component: ProtfolioComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
