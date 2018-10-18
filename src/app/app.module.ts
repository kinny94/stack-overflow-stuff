import { YoutubeSearchService } from './services/youtube-services/youtube-search.service';
import { GetUsersService } from './services/github-services/get-users.service';
import { UserProfileService } from './services/stack-overflow-services/user-profile.service';
import { QuestionService } from './services/stack-overflow-services/question.service';
import { MaterialModule } from './material_modules/material_modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchResultsComponent } from './components/Stack_Overflow/search-results/search-results.component';
import { SearchService } from './services/stack-overflow-services/search.service';
import { QuestionComponent } from './components/Stack_Overflow/question-component/question-component.component';
import { SearchComponent } from './components/Stack_Overflow/search/search.component';
import { QuestionAnswersComponent } from './components/Stack_Overflow/question-answers/question-answers.component';
import { UserProfileComponent } from './components/Stack_Overflow/user-profile/user-profile.component';
import { TagQuestionsComponent } from './components/Stack_Overflow/tag-questions/tag-questions.component';
import { GithubSearchComponent } from './components/Github/github-search/github-search.component';
import { GithubSearchResultsComponent } from './components/Github/github-search-results/github-search-results.component';
import { GithubUserComponent } from './components/Github/github-user/github-user.component';
import { GithubSelectedUserService } from './services/github-services/github-selected-user.service';
import { GithubUserReposService } from './services/github-services/github-user-repos.service';
import { YoutubeSearchComponent } from './components/Youtube/youtube-search/youtube-search.component';
import {
   YoutubeSearchResultsComponent,
   YoutubeDialogComponent
  } from './components/Youtube/youtube-search-results/youtube-search-results.component';
import { MapComponent } from './components/map/map.component';

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
    TagQuestionsComponent,
    GithubSearchComponent,
    GithubSearchResultsComponent,
    GithubUserComponent,
    YoutubeSearchComponent,
    YoutubeSearchResultsComponent,
    YoutubeDialogComponent,
    MapComponent
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
      { path: 'github', component: GithubSearchComponent, pathMatch: 'full' },
      { path: 'github/user', component: GithubUserComponent, pathMatch: 'full'},
      { path: 'youtube', component: YoutubeSearchComponent, pathMatch: 'full'},
      { path: 'map', component: MapComponent, pathMatch: 'full' },
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: '**', component: SearchComponent }
    ])
  ],
  entryComponents: [
    YoutubeDialogComponent
  ],
  providers: [
    SearchService,
    QuestionService,
    UserProfileService,
    GithubSelectedUserService,
    GetUsersService,
    GithubUserReposService,
    YoutubeSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
