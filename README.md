# Jira JQL Query
Search JIRA issue by JQL

> ##### Only supports Jira Cloud. Does not support Jira Server (hosted)

## Usage

> ##### Note: this action requires [Jira Login Action](https://github.com/marketplace/actions/jira-login)

![JQL Query](../assets/example.gif?raw=true)

Example JQL action:

```yaml
- name: JIRA JQL Query
  id: jira-jql-query
  uses: shamrat17/jira-jql-query@master
  with:
    jql: issuekey=bb-1234
    fields: id,key,status
```

Here is full example workflow:

```yaml
on:
  push

name: Test JQL Query

jobs:
  test-jira-jql-query:
    name: JIRA JQL Query
    runs-on: ubuntu-latest
    steps:
    - name: Login
      uses: atlassian/gajira-login@master
      env:
        JIRA_BASE_URL: ${{ secrets.JIRA_BASE_URL }}
        JIRA_USER_EMAIL: ${{ secrets.JIRA_USER_EMAIL }}
        JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
        
    - name: JIRA JQL Query
      id: jira-jql-query
      uses: shamrat17/jira-jql-query@master
      with:
        jql: issuekey=bb-1234
        fields: id,key,status
```
----
## Action Spec:

### Environment variables
- None

### Inputs
- `jql` (required) - The JQL query wants to execute,
- `fields` - Fields we want to retrive. e.g. id,key,status

### Outputs
- `jqlResult` - JSON data containing JQL result 

### Reads fields from config file at $HOME/jira/config.yml
- `jql`
- `fields`

### Writes fields to config file at $HOME/jira/config.yml
- None