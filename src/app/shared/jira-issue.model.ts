

export class Priority {
  public self: string;
  public iconUrl: string;
  public name: string;
  public id: string;
}

export class Customfield16730 {
  public self: string;
  public value: string;
  public id: string;
}

export class Creator {
  public active: any;
  public displayName: any;
  public emailAddress: any;
  public key: any;
  public name: any;
  public self: any;
  public timeZone: any;
}

export class Fields {
  public created: any;
  public creator: Creator;
  public customfield_12130: any;
  public customfield_16732: any;
  public customfield_12131: any;
  public customfield_10230: any;
  public customfield_14430: any;
  public customfield_16730: Customfield16730;
  public fixVersions: any[];
  public customfield_12531: string;
  public resolution: any;
  public customfield_10510: string;
  public customfield_11436: string;
  public customfield_11435: string;
  public customfield_11437: string;
  public customfield_17130: any;
  public lastViewed: any;
  public customfield_10180: any;
  public customfield_17531: any;
  public customfield_17530: any;
  public customfield_17930: any;
  public priority: Priority;
}

export class Issue {
  public expand: string;
  public id: string;
  public self: string;
  public key: string;
  public fields: Fields;

}


export class JiraResponse {
  public expand: string;
  public startAt: number;
  public maxResults: number;
  public total: number;
  public issues: Issue[];
}

