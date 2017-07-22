

export class Priority {
  self: string;
  iconUrl: string;
  name: string;
  id: string;
}

export class Customfield16730 {
  self: string;
  value: string;
  id: string;
}

export class Fields {
  customfield_12130: any;
  customfield_16732: any;
  customfield_12131: any;
  customfield_10230: any;
  customfield_14430: any;
  customfield_16730: Customfield16730;
  fixVersions: any[];
  customfield_12531: string;
  resolution: any;
  customfield_10510: string;
  customfield_11436: string;
  customfield_11435: string;
  customfield_11437: string;
  customfield_17130: any;
  lastViewed: any;
  customfield_10180: any;
  customfield_17531: any;
  customfield_17530: any;
  customfield_17930: any;
  priority: Priority;
}

export class Issue {
  public expand: string;
  public id: string;
  public self: string;
  public key: string;
  public fields: Fields;

}


export class JiraResponse {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: Issue[];
}

