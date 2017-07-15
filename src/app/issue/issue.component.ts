import { Component, OnInit, Input } from '@angular/core';
import { JiraIssue } from '../shared/jira-issue.model';
import { JiraService } from '../services/jira.service'

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input('issue') Issue: JiraIssue;

  constructor(private jiraService: JiraService) { }

  ngOnInit() {
  }

}
