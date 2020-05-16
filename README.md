# now-static-site-starter
> :zap: A template repo for building simple static sites with Eleventy and a headless CMS of choice to be deployed using Now.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/kriskuiper/now-static-site-starter)

## Prerequisites
If you want to deploy this project using Vercel (formerly Zeit Now) then please make sure you have created an account.

## Installation
1. Clone this repository
2. Install dependencies
3. Run a development server on [port 3000](http://localhost:3000)*

```
git clone git@github.com:kriskuiper/static-site-starter.git

yarn install

yarn now:dev
```

*Before running `yarn now:dev` please make sure that the project is connected to Vercel by running `yarn now:init`. This will take you through a little guide and makes sure that everything is set up correctly.

Alternitavely you can change the `$PORT` in the `dev:eleventy` script to a number like 3031 and just run `yarn dev`.

**NOTE:** You won't be able to use Now serverless functions when you only run `yarn dev`.
