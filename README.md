`vercel-api-starter`

## What is this?

This is a jumping off point for fresh API-style projects to be deployed on [vercel.com](https://vercel.com). It contains boilerplate so that I don't need to spend time setting this up for each new project.

## Key-Features

- Code-Organization: code is split into `api` which contain publicly exposed endpoints (see this [explanation of routing in Vercel](https://vercel.com/docs/configuration#routes) for more info) and `lib` which contains support logic for the public interface.
- Testing:
  - support logic in `lib` is unit-tested using [Jest](https://jestjs.io)
  - the public interface is tested from the outside via [Cypress](https://cypress.io)
- CI/CD:
  - code is deployed on push to the `main` branch
  - previews are deployed on open pull-requests
  - **unit** tests are run on every push (to `main` or pull-request branches)
  - **acceptance** tests are run on successful deployments (including previews)

## Getting Started

1. `npx degit https://github.com/tnez/vercel-api-starter#main your-new-proj`
2. ```
    cd your-new-proj
    npm ci
    git init
    git add .
    git commit -m "Initial commit."
   ```
3. Setup the project on Vercel: `npx vercel login` then `npx vercel dev`
4. Once you're all setup you can run `npm run e2e:open` and start developing against the acceptance specs.
