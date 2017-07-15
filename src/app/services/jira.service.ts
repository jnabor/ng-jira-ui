import { JiraIssue } from '../shared/jira-issue.model';

export class JiraService {
    public Name: string = 'BAM'


    public Issues: JiraIssue[] = [
        new JiraIssue("bam-1234", "Test issue 000"),
        new JiraIssue("bam-1235", "Test issue 001"),
        new JiraIssue("bam-1236", "Test issue 002"),
        new JiraIssue("bam-1237", "Test issue 003"),
        new JiraIssue("bam-1238", "Test issue 004"),
        new JiraIssue("bam-1239", "Test issue 005"),
        new JiraIssue("bam-1244", "Test issue 006"),
        new JiraIssue("bam-1254", "Test issue 007"),
        new JiraIssue("bam-1264", "Test issue 008"),
        new JiraIssue("bam-1274", "Test issue 009"),
        new JiraIssue("bam-1284", "Test issue 010"),
        new JiraIssue("bam-1294", "Test issue 020"),
        new JiraIssue("bam-1334", "Test issue 030"),
        new JiraIssue("bam-1434", "Test issue 040"),
        new JiraIssue("bam-1534", "Test issue 050"),
        new JiraIssue("bam-1634", "Test issue 060"),
        new JiraIssue("bam-1734", "Test issue 070"),
        new JiraIssue("bam-1834", "Test issue 080"),
        new JiraIssue("bam-1934", "Test issue 100"),
        new JiraIssue("bam-2234", "Test issue 200")
    ];

    getIssues(){
        return this.Issues.slice();
    }


}