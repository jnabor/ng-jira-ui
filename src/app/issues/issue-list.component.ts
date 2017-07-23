import { Component, OnInit } from '@angular/core';
import { Issue, JiraResponse } from '../shared/jira-issue.model';
import { JiraService } from '../services/jira.service'
import { HttpModule, Headers, Http, JsonpModule, Jsonp, Response } from "@angular/http";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  private firebaseDB = 'https://ng-jira-backend.firebaseio.com/data.json';
  private JiraRoot: JiraResponse;

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
    this.jiraService.getIssuesRemDB( this.firebaseDB)
        .subscribe(
          (jiraRoot: JiraResponse) => {
            this.JiraRoot = jiraRoot;
            console.log(this.JiraRoot)
          },
          (error) => console.log(error)
        );
  }

}
