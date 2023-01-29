import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'template-form',
    loadComponent: () => import('./forms-demo/template-driven-from/template-driven-from.component').then((m) => m.TemplateDrivenFromComponent)
  },
  {
    path: 'reactive-form',
    loadComponent: () => import('./forms-demo/reactive-form/reactive-form.component').then((m) => m.ReactiveFormComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
