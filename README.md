[![Build Status](https://travis-ci.org/richardhendricksen/protractor-jasmine-ng-apimock-typescript-framework.svg?branch=master)](https://travis-ci.org/richardhendricksen/protractor-jasmine-ng-apimock-typescript-framework)
# Protractor-Jasmine-ng-apimock-typescript-framework
A frontend integration testframework consisting of Protractor, Jasmine, ng-apimock. Written in Typescript.

This framework uses Protractor for automating browser tests. The tests are written in Jasmine and use a Page Object model.
Ng-apimock is used to mock the backend.  
When running the tests it will serve the frontend, start the mocking server, run the tests and close everything after.  
The frontend will run on port 4200. The mocking server is hosted on port 3000.

### Run tests
`yarn it:ci`

### Mocks
Mocks are defined in the `mocks` folder. The folder structure resembles the endpoint path.
For example, GET endpoint using the following path:  
`/api/posts/`  
Will have the following folder structure:
```
.
└─ mocks
   ├─ data
   |  └─ GET-posts
   |     ├─  posts-empty.json
   |     └─  posts-2-items.json
   └─ endpoints
      └─ GET-posts.json 
```

### Example app
This framework uses a MEAN example app, which is included in the package.json. 
You can find it on my [Github](https://github.com/richardhendricksen/mean-example-app).

### Test development

#### Running tests
For test development use `yarn it:dev` to run the tests sequentially instead of in parallel. Also the browser will be visible.
You will have to serve the frontend yourself.

#### Linting
Run `yarn lint` or `ng lint it` to run tslint on the integration tests.  
