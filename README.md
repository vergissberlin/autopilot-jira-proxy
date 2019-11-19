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

## Autopilot webhooks

https://autopilot.docs.apiary.io/#reference/rest-hook-events/unregister-a-rest-hook

### Autopilot trigger

- contact_added
- contact_updated
- contact_unsubscribed
- contact_added_to_list
- contact_removed_from_list
- contact_entered_segment
- contact_left_segment

### Autopilot data

```json
{
  "event": "contact_added",
  "contact_id": "person_ED75BA78-2405-4564-B24C-F2B8F936C7C6",
  "contact": {
      "MailingPostalCode": "94913",
      "FirstName": "Tom",
      "Title": "CEO",
      "LastName": "Greyson",
      "LinkedIn": "tomgreyson",
      "owner_name": "James McKinsey",
      "MailingState": "CA",
      "Email": "trgreyson@gmail.com",
      "Website": "greysondesigns.com",
      "Fax": "3736162442",
      "NumberOfEmployees": 3000,
      "Company": "Greyson Designs",
      "Phone": "3738482121",
      "unsubscribed": false,
      "MailingCity": "San Rafael",
      "owner_first_name": "James",
      "Status": "Nurture",
      "MailingStreet": "Kendra Way",
      "MailingCountry": "United States",
      "Industry": "Technology",
      "LeadSource": "Trial Signup",
      "MobilePhone": "2345456677",
      "Twitter": "trgreyson",
      "Salutation": "Mr.",
      "custom": {"integer--Smog--Level": 4}
  }
}
```
