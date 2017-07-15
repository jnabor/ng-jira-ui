import { Component, OnInit } from '@angular/core';
import { JiraIssue } from '../shared/jira-issue.model';
import { JiraService } from '../services/jira.service'

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  Issues: JiraIssue[];

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
    this.Issues = this.jiraService.getIssues();
  }

}