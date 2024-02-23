import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: LoginComponent }

];
// platformBrowserDynamic()
// .bootstrapModule(AppModule)
//   .catch(err => console.error(err));


bootstrapApplication(AppComponent).catch(err => console.error(err))