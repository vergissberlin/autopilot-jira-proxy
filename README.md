# autopilot jira proxy

1. Create Jira tickets with autopilot webhooks

## Usage

### With node

```bash
npm install
npm start
```

### With Docker

#### Build

```bash
docker build -t docker.pkg.github.com/vergissberlin/autopilot-jira-proxy/api .
```

#### Run

```bash
docker run -p 8080:8080 -d docker.pkg.github.com/vergissberlin/autopilot-jira-proxy/api
```

#### Release

```bash
docker login docker.pkg.github.com --username vergissberlin
docker push docker.pkg.github.com/vergissberlin/autopilot-jira-proxy/api
```
