export class JiraIssue {
    public key: string;
    public summary: string;

    constructor(key: string, summary: string) {
        this.key = key;
        this.summary = summary;
    }
}