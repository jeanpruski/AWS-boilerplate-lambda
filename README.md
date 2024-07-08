# AWS-boilerplate-lambda

This project contains a simple example of an AWS Lambda function using Node.js 16.x to provide a customized message.

## Framework Configuration

- **Framework Version:** 3

## Provider Configuration

- **Name:** AWS
- **Runtime:** Node.js 16.x
- **Region:** EU (Paris)

## Functions

### hello

- **Handler:** handler.process

### Source Files

- **handler.js** : Main file containing the Lambda function logic.
- **services/tools_service.js** : Service containing separate business logic to retrieve the message.

## `hello` Function Details

The `hello` function is configured to respond to events with a customized message fetched from the `toolsService`.

## Deployment

Deploy the service to AWS:

```bash
serverless deploy
```

## Clean Up

Remove the deployed service from AWS:

```bash
serverless remove
```
