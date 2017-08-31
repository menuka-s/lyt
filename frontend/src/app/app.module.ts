//Node/CoreAngular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Non-CoreAngular  Imports
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
