const core = require('@actions/core')
const Jira = require('./common/net/Jira')

module.exports = class {
  constructor ({ githubEvent, argv, config }) {
    this.Jira = new Jira({
      baseUrl: config.baseUrl,
      token: config.token,
      email: config.email,
    })

    this.config = config
    this.argv = argv
    this.githubEvent = githubEvent
  }

  async execute () {
    const { argv } = this
    const type = {};
    const jql = argv.jql
    const fields = argv.fields

    const jqlResult = await this.Jira.searchIssueByJQL(jql, fields)

    core.setOutput('jqlResult', JSON.stringify(jqlResult))
    console.log('jqlResult: ', JSON.stringify(jqlResult, null, 2))

    return {}
  }
}
