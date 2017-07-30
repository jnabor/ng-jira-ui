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

    // taking json from firebase rest api
    //private firebaseDB = 'https://ng-jira-backend.firebaseio.com/data.json';
    //private remoteDB = this.firebaseDB;

    // taking directly from jira rest api
    //private jiraDB = 'https://jira.atlassian.com/rest/api/2/search?jql=project=BAM'
    //private JiraRootLoc: JiraResponse = require('../../assets/bam.json');

    // take local json file from jql rest api e.g. below, with project and sprint filter
    // https://sonabstudios.atlassian.net/rest/api/2/search?jql=project%20%3D%20OS%20AND%20Sprint%20%3D%202
    private JiraRootLoc: JiraResponse = require('../../assets/os_sprint2.json');
    private remoteDB = this.JiraRootLoc;


    //private JiraRootRem: JiraResponse;

    constructor(private http: Http, private json: Jsonp) {

      /*
      this.uploadtoFirebase(this.JiraRootLoc, this.firebaseDB)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
        */

        /*
      this.getIssuesRemDB(this.remoteDB)
        .subscribe(
          (jiraRoot: JiraResponse) => {
            this.JiraRootRem = jiraRoot;
            this.dataChanged.emit(this.JiraRootRem);
          },
          (error) => console.log(error)
        );
        */
    }

    private uploadtoFirebase(db: JiraResponse, dbRemoteAddress: string) {
      const header = new Headers({'Content-Type': 'application/json'})
      return this.http.put(dbRemoteAddress, db, { headers: header});
    }

    /*
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
    */

    public getIssues(): JiraResponse {
      return this.JiraRootLoc;
    }
}
