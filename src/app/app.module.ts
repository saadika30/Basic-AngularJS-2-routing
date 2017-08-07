import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AccountComponent } from './account/account.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'animal', component: AnimalComponent },
  { path: 'account', component: AccountComponent },
  { path: 'adopt', component: AdoptionComponent },
    { path: '',
    redirectTo: '/animalComponent',
    pathMatch: 'full'
  },
  { path: '**', component: AnimalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AccountComponent,
    AdoptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
