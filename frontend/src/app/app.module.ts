//Node Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

//App Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

//NgModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Parallax
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
