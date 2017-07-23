import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, JsonpModule, Jsonp, Response} from '@angular/http';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issues/issue-list.component';
import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdCardModule,
         MdMenuModule,
         MdToolbarModule,
         MdIconModule,
         MdInputModule,
         MdGridListModule,
         MdTooltipModule,
         MdSnackBarModule,
         MdProgressBarModule,
         MdSlideToggleModule,
         MdTableModule } from '@angular/material';

import { DataSource } from '@angular/cdk';

import { JiraService } from './services/jira.service';
import { IssueComponent } from './issue/issue.component';
import { ToolbarComponent } from './toolbar/toolbar.component'

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCANF01qGOS7tEZzWGLFD84UGt0YGrcHaU',
  authDomain: 'ng-jira-backend.firebaseapp.com',
  databaseURL: 'https://ng-jira-backend.firebaseio.com',
  storageBucket: 'ng-jira-backend.appspot.com',
  messagingSenderId: '430374140615'
};

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdProgressBarModule,
    MdSlideToggleModule,
    MdTableModule
  ],
  providers: [JiraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
