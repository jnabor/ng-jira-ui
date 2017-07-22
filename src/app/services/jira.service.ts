import { Injectable } from '@angular/core';
import { Issue, JiraResponse } from '../shared/jira-issue.model';

@Injectable()
export class JiraService {

    private jsonFileURL: string = "../assets/bam.json";
    private JiraRoot: JiraResponse = require('../../assets/bam.json');

    getIssues() {
      return this.JiraRoot.issues.slice();
    }


}
