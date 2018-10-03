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
import { SearchResultsComponent } from './components/Stack_Overflow/search-results/search-results.component';
import { SearchService } from './services/search.service';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/Stack_Overflow/question-component/question-component.component';
import { SearchComponent } from './components/Stack_Overflow/search/search.component';
import { QuestionAnswersComponent } from './components/Stack_Overflow/question-answers/question-answers.component';
import { UserProfileComponent } from './components/Stack_Overflow/user-profile/user-profile.component';
import { TagQuestionsComponent } from './components/Stack_Overflow/tag-questions/tag-questions.component';

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
    UserProfileComponent,
    TagQuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'stack-overflow/question', component: QuestionComponent, pathMatch: 'full' },
      { path: 'stack-overflow/user', component: UserProfileComponent, pathMatch: 'full' },
      { path: 'stack-overflow/tag/questions', component: TagQuestionsComponent, pathMatch: 'full' },
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: '**', component: SearchComponent }
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
