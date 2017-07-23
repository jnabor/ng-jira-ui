import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../shared/jira-issue.model';
import { JiraService } from '../services/jira.service'
import { DatePipe } from '@angular/common';
import { MdTableModule } from '@angular/material';

@Component({
  selector: '[app-issue]',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input('issue') Issue: Issue;

  constructor(private jiraService: JiraService) { }

  ngOnInit() {

  }

}
