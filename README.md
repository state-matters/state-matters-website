# State Matters

[![Build Status](https://travis-ci.org/state-matters/state-matters-website.svg?branch=master)](https://travis-ci.org/state-matters/state-matters-website)

_[Contentful CMS][2] + [Express][3] + [React][5] + [Styled Components][4]_

## About

State matters is an organization concerned with improving awareness surrounding state government. We track bills, laws and issues that affect you on a local level.

## Setup

1.  Clone the repo locally `git clone https://github.com/state-matters/state-matters-website.git`
1.  Install dependencies `npm install`
1.  Get a development server(s) started `npm run start:dev`

## About the Codebase

The codebase is setup as a _React_ app served from an _Express_ server that pulls from _Contentful_ (a headless CMS). All this is a jargon-y way of saying that it's a single page web application. There are 3 important places to be concerned with when developing a new feature or maintaining an older one.

1.  The `api` folder

    This is the place where data flows from _Contentful_. It's the first step in presenting data from the _State Matters_ team to the user. The docs for _Contenful_ are linked above so I won't go into how to use that in depth. The api is just a proxy layer to prevent keys being used on the client and to normalize data fetched from the CMS.

2.  The `client/ducks` folder

    This folder is where client state lives. It's a standardized structure of redux apps. Each "duck" contains constants, actions, and a reducer. The actions call the api usually and return state to the app. This state should be normalized (everything is an object).

3.  The `client/pages` and `client/components` folders

    These folder are where UI live. Following true component architecture and to try and stay DRY, most components we reuse have been abstracted into the general `components` folder. Pages and site structure lives in the `pages` folder.

## Contributing

_Always work on from a branch based from the develop branch, never master_

1.  Open a Github issue and request feedback to form a plan of attack.
1.  Naming branches
    - If the merge is about a bug fix follow `fix/<concise-name-of-fix>`
    - If the merge is a new feature or an improvement to an existing feature follow `feature/<concise-name-of-feature>`
1.  Create a PR associated with that issue based on proposed solution.
1.  PR will be merged on approval.

[2]: https://www.contentful.com/developers/docs/references/content-delivery-api/
[3]: https://expressjs.com/en/4x/api.html
[4]: https://www.styled-components.com/docs
[5]: https://reactjs.org/
