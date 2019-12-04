import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { StagiaireFormComponent } from './stagiaire-form/stagiaire-form.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {AgePipe} from './age.pipe';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {EvaluationHttpService} from './evaluation/evaluation-http-service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent,
    StagiaireFormComponent,
    HomeComponent,
    AgePipe,
    EvaluationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, EvaluationHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
