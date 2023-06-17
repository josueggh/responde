# Responde

Responde is a library for simulating various types of HTTP responses. It's great for testing how your application handles different server responses without needing an actual server.

## Features

- Simulate 1xx, 2xx, 3xx, 4xx, and 5xx HTTP status codes.
- Simulate network errors.
- Simulate delayed responses.
- Simulate variable responses.
- Simulate intermittent errors.
- Simulate malformed responses.

## Installation

To install the package, use npm:

```bash
npm install responde
```


## Usage

Here's an example of how to use responde:

```typescript
import { OK, InternalServerError, NetworkError, DelayedResponse, VariableResponse, IntermittentError, MalformedResponse } from 'responde';

// Simulate a successful response
OK({ message: 'Success' })
  .then(response => console.log(response));

// Simulate a server error
InternalServerError({ error: 'Server Error' })
  .then(response => console.log(response))
  .catch(error => console.error(error));

// Simulate a network error
NetworkError()
  .then(response => console.log(response))
  .catch(error => console.error(error));

// Simulate a delayed response
DelayedResponse(5000, { status: 200, body: { message: 'Delayed success' } })
  .then(response => console.log(response));

// Simulate a variable response
VariableResponse([
  { status: 200, body: { message: 'Success' } },
  { status: 500, body: { error: 'Server Error' } }
])
  .then(response => console.log(response));

// Simulate intermittent errors
IntermittentError(
  0.5, 
  { status: 200, body: { message: 'Success' } }, 
  { status: 500, body: { error: 'Server Error' } }
)
  .then(response => console.log(response));

// Simulate a malformed response
MalformedResponse()
  .then(response => console.log(response));

```

## Available Methods

Respondo-js provides a variety of methods to simulate different types of HTTP responses:

#### Successful Responses
- `OK(body: object)`
- `Created(body: object)`
- `Accepted(body: object)`
- `NonAuthoritativeInformation(body: object)`
- `NoContent()`
- `ResetContent()`
- `PartialContent(body: object)`

#### Informational Responses
- `Continue(body: object)`
- `SwitchingProtocols(body: object)`
- `Processing(body: object)`
- `EarlyHints(body: object)`

#### Redirection Messages
- `MultipleChoices(body: object)`
- `MovedPermanently(body: object)`
- `Found(body: object)`
- `SeeOther(body: object)`
- `NotModified()`
- `UseProxy(body: object)`
- `TemporaryRedirect(body: object)`
- `PermanentRedirect(body: object)`

#### Client Error Responses
- `BadRequest(body: object)`
- `Unauthorized(body: object)`
- `PaymentRequired(body: object)`
- `Forbidden(body: object)`
- `NotFound(body: object)`
- `MethodNotAllowed(body: object)`
- `NotAcceptable(body: object)`
- `ProxyAuthenticationRequired(body: object)`
- `RequestTimeout(body: object)`
- `Conflict(body: object)`

#### Server Error Responses
- `InternalServerError(body: object)`
- `NotImplemented(body: object)`
- `BadGateway(body: object)`
- `ServiceUnavailable(body: object)`
- `GatewayTimeout(body: object)`
- `HTTPVersionNotSupported(body: object)`

#### Other Responses
- `NetworkError()`
- `DelayedResponse(delay: number, response: object)`
- `IntermittentError(probability: number, successResponse: object, errorResponse: object)`
- `MalformedResponse()`

Each method returns a Promise that resolves to the simulated HTTP response. The body parameter is an object that gets converted to JSON and used as the body of the response. For methods that simulate error responses, the Promise rejects with the simulated error.

The DelayedResponse method takes an additional delay parameter, which is the number of milliseconds to delay before the Promise resolves.

The IntermittentError method takes additional probability, successResponse, and errorResponse parameters. probability is a number between 0 and 1 that determines the likelihood of the Promise rejecting with an error. successResponse and errorResponse are the responses to use when the Promise resolves successfully and when it rejects, respectively.

# Contributing to Responde

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
We use Github to host code, to track issues and feature requests, as well as accept pull requests. You can contribute in many ways, and here are a few methods:

1. **Reporting Bugs:** If you encounter any bugs or issues, please create a new issue in our [Github repository](https://github.com/josueggh/responde). Provide as much detail as you can about the issue. Screenshots, code snippets, and detailed explanations are all helpful.

2. **Suggest Enhancements:** If you have ideas for new features or improvements, we'd love to hear them! Please create a new issue and use the feature request template to share your ideas.

3. **Pull Requests:** If you'd like to contribute code, the best way is by making a pull request. If you're new to Github, [here is a tutorial on how to create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). Before creating a pull request, please make sure your code follows our coding conventions and passes all tests.

In all cases, after your contribution is reviewed and approved, it will be incorporated into the project!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](https://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Use a Consistent Coding Style

Please adhere to the coding conventions used throughout a project.

## Report bugs using Github's [issues](https://github.com/josueggh/responde/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/josueggh/responde/issues/new); it's that easy!

### Write bug reports with detail, background, and sample code

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
- Be specific!
- Give sample code if you can.
- What you expect would be the right behavior?
- Notes (possibly including why you think this might be happening, or things you tried that didn't work)

We hope you'll find these guidelines helpful. We're excited to see what you'll contribute!
