# TODO app

Prerequisites:

 - Ensure you have envsubst installed & available in your path.
 - Rename .local.env.sample to .local.env (in root)
 - `npm install -g @nrwl/cli`
 - `npm install`

From project root:

Serve API

	nx serve api

Then serve website in separate terminal with:

    nx serve todo

To build website for Production:

    nx run todo:build --args="--configuration=production"
    nx run api:build --args="--configuration=production"  

(This would be run from a CI like github actions with different environment variables. (.local.env not applied))

There is a POSTMAN collection in apps/api that has presets for various scenarios that is available for use. Just define API_URL global/env variable as `http://localhost:3333`

## Notes from author:

Time taken: 15 hours (Bit slow due to first React experience & express rustiness). Express (6hrs) React (9hrs).

Architectural choices
 - NX is a monorepo framework designed to house all services for a project within a single repository. I chose it as it elegantly enables the sharing of types & logic between front and backend and various other services adhering to the DRY principle. The CLI also offers handy features for environment values and build tooling.
 - It's been a few years since I've written raw express so I'm aware this may not be best practice, there's plenty of improvements I would like to make in a real project. Things like dependency injection, modularisation, declarative validation using decorators (class-validator, class transformer), supertest e2e tests for API would be a good start.
 - This is my first time writing React and due to time constraints (Got the test on Tuesday) I've not had sufficient time to research best practice either. I really enjoyed it though and I'd be excited to grow my skills, confident I can hit the ground running on it.

## About the Author

If you'd like to see more from me, my best work is available in a showcase repo [here](https://github.com/williamsandonz/showcase) (apps/web-api contains serverless/NestJs and apps/web is Angular). 

I'm the author of these two serverless plugins [here](https://www.npmjs.com/~williamsando) (Albeit hastily written to fulfil a purpose). And I contribute to other serverless plugins like serverless-s3-sync, serverless-certificate-creator, serverless-cloudfront-invalidate and serverless-export-env.
