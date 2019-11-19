# autopilot jira proxy

[![Greenkeeper badge](https://badges.greenkeeper.io/vergissberlin/autopilot-jira-proxy.svg)](https://greenkeeper.io/)

1. Create Jira tickets with autopilot webhooks

## Usage

### With node

```bash
npm install
npm start
```

### With Docker

```bash
docker build -t vergissberlin/autopilot-jira .
docker run -p 8080:8080 -d vergissberlin/autopilot-jira
```
