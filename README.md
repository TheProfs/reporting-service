# reporting-service
Node.js ReSTful API for all things reporting

## Installation

```bash
# Install dependencies
$ npm install
```

## Start

This project sends messages to various Slack channels. Therefore you need to
obtain a [Slack API Token][slack-token].

Obtain the token and then set it as an environmental variable:

```bash
# Set token
$ export SLACK_TOKEN="xoxp-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxxxxx"
# Start server
$ npm start
```

## Tests

Make sure the `dev` dependencies are installed and then:

```bash
$ npm test
```

## Authors

- [Nicholas Kyriakides][nicholaswmin]

## Owners

- [The Profs][TheProfs]

## License

The MIT License


[slack]: https://slack.com/
[slack-token]: https://api.slack.com/tokens
[nicholaswmin]: https://github.com/nicholaswmin
[TheProfs]: https://github.com/TheProfs
