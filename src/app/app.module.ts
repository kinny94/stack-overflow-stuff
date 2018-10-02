import { UserProfileService } from './services/user-profile.service';
import { QuestionService } from './services/question.service';
import { MaterialModule } from './material_modules/material_modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchService } from './services/search.service';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question-component/question-component.component';
import { SearchComponent } from './components/search/search.component';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: 'quwstion', component: QuestionComponent  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    QuestionComponent,
    SearchComponent,
    QuestionAnswersComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'question', component: QuestionComponent, pathMatch: 'full' },
      { path: 'stack-overflow/user', component: UserProfileComponent, pathMatch: 'full' },
      { path: '', component: SearchComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    SearchService,
    QuestionService,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
