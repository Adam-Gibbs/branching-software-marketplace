
# Path to Zero Marketplace Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/22fc2edb-b7e6-4ec6-ad56-bec088602bfb/deploy-status)](https://app.netlify.com/sites/branching-software-landing/deploys)

This is the frontend for [demo.branching.software](https://demo.branching.software). Backend can be found [here](https://git.cardiff.ac.uk/c1922904/branching-software-back).


## Project setup

#### Clone this project and cd into the relevent folder

```bash
  git clone git@git.cardiff.ac.uk:c1922904/branching-software-front.git
  cd branching-software-front
```

#### Install the dependencies

```bash
  npm install
```

#### Run without a local backend, with the hosted API

```bash
  npm run serveProd
```

#### Run with a local backend, with the local API

```bash
  npm run serve
```

#### Run the end to end tests

```bash
  npm run test:e2e
```
## Assumptions

#### Assumptions made while creating this project:

- This is primarily designed in its current state to be a demo application. As such many features will not be fully fleshed out, security may not be as strong and features (such as the generation of dummy data) will not find itself in the final project.
 
- This is a JAMstack implementation, as such it is deployed to Netlify's CDN and pre-rendered and some items (such as images) compressed.

- It will ingest an API, due to this APIs serverless implementation some requests could take a longer time when first run and cannot be guaranteed to be instant.

## Tech Stack

**Framework:** [VueJs](https://vuejs.org/)

**Languages:** [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://www.wikiwand.com/en/JavaScript/), [HTML](https://www.wikiwand.com/en/HTML/), [CSS](https://www.wikiwand.com/en/CSS/)

**Tools:** [Netlify](https://www.netlify.com/), [NPM](https://www.npmjs.com/), [Cypress](https://www.cypress.io/)

**Libraries:** [ApexCharts](https://apexcharts.com), [TailwindCSS](https://tailwindcss.com/), [FontAwesome](https://fontawesome.com/)

## Roadmap

- Implement a marketplace in which contractors and oraganisations can collaborate on net zero goals

- Offer printing off of pages to PDF in a report format

- Implement messaging between users from the marketplace to appear here

- Create a Dark mode theme and other settings for inclusivity and accessability

- Cusomisation of dahsoards and data displays

## Feedback

If you have any feedback, please reach out to us at contact@branching.software

