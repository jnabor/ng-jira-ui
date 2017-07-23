import { Injectable } from '@angular/core';
import { Issue, JiraResponse } from '../shared/jira-issue.model';
import { HttpModule, Headers, Http, JsonpModule, Jsonp, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class JiraService {
    private firebaseDB = 'https://ng-jira-backend.firebaseio.com/data.json';
    private JiraRootLoc: JiraResponse = require('../../assets/bam.json');
    private JiraRootRem: JiraResponse;

    constructor(private http: Http, private json: Jsonp) {

      //this.uploadtoFirebase(this.JiraRootLoc, this.firebaseDB)
      //  .subscribe(
      //    (response) => console.log(response),
      //    (error) => console.log(error)
      //  );

      this.getIssuesRemDB( this.firebaseDB)
        .subscribe(
          (jiraRoot: JiraResponse) => {
            this.JiraRootRem = jiraRoot;
            console.log(this.JiraRootRem)
          },
          (error) => console.log(error)
        );
    }

    //private uploadtoFirebase(db: JiraResponse, dbRemoteAddress: string) {
    //  const header = new Headers({'Content-Type': 'application/json'})
    //  return this.http.put(dbRemoteAddress, db, { headers: header});
    //}

    public getIssuesRemDB(dbRemoteAddress: string) {
      return this.http.get(dbRemoteAddress)
        .map(
          (response: Response) => {
            const data = response.json();
            return data
          }
        );
    }

    public getIssues(): Issue[] {

      return this.JiraRootLoc.issues.slice();
    }
}
