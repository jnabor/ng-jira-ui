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

  private JiraRoot: JiraResponse;

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
    this.JiraRoot = this.jiraService.getIssues();
    this.jiraService.dataChanged
      .subscribe(
        (jiraResponse: JiraResponse) => {
          this.JiraRoot = jiraResponse;
          console.log(this.JiraRoot);
        }
      );
  }

}
