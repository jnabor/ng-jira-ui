import { Injectable, EventEmitter } from '@angular/core';
import { Issue, JiraResponse } from '../shared/jira-issue.model';
import { HttpModule, Headers, Http, JsonpModule, Jsonp, Response } from "@angular/http";
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { getTestBed } from '@angular/core/testing';

@Injectable()
export class JiraService {
    dataChanged = new EventEmitter<JiraResponse>();
    private firebaseDB = 'https://ng-jira-backend.firebaseio.com/data.json';
    //private JiraRootLoc: JiraResponse = require('../../assets/bam.json');
    private JiraRootRem: JiraResponse;

    constructor(private http: Http, private json: Jsonp) {

      //this.uploadtoFirebase(this.JiraRootLoc, this.firebaseDB)
      //  .subscribe(
      //    (response) => console.log(response),
      //    (error) => console.log(error)
      //  );

      this.getIssuesRemDB(this.firebaseDB)
        .subscribe(
          (jiraRoot: JiraResponse) => {
            this.JiraRootRem = jiraRoot;
            this.dataChanged.emit(this.JiraRootRem);
          },
          (error) => console.log(error)
        );
    }

    private uploadtoFirebase(db: JiraResponse, dbRemoteAddress: string) {
      const header = new Headers({'Content-Type': 'application/json'})
      return this.http.put(dbRemoteAddress, db, { headers: header});
    }

    private getIssuesRemDB(dbRemoteAddress: string) {
      //return this.http.get(dbRemoteAddress)
      dbRemoteAddress = dbRemoteAddress + '?callback=JSONP_CALLBACK';
      //return this.json.get(dbRemoteAddress)
      return this.json.get(dbRemoteAddress)
        .map(
          (response: Response) => {
            const data = response.json();
            return data
          }
        )
        .catch(
            (error: Response) => {
              console.log(error);
              return Observable.throw('Something went wrong');
            }
        );
    }

    public getIssues(): JiraResponse {
      return this.JiraRootRem;
    }
}
