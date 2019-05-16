# Frontend integration tests
The frontend integration tests use ng-apimock to mock the backend.  
The test script will start the frontend, the mocking server, run the tests and close everything after.  
The frontend will run on port 4200.
The mocking server is hosted on port 3000.

### Run tests
`yarn it:ci`

### Mocks
Mocks are defined in the `mocks` folder. The folder structure resembles the endpoint path.
For example, GET endpoint using the following path:  
`/api/user/{user}`  
Will have the following folder structure:
```
.
└─ mocks
   ├─ data
   |  └─ user
   |     ├─  user-default.json
   |     └─   user-default.json
   └─ endpoints
      └─ user
         └─ GET-user.json 
```

### Test development

#### Running tests
For test development use `yarn it:dev` to run the tests sequentially instead of in parallel. Also the browser will be visible.
You will have to start the frontend yourself though.

#### Linting
Run `yarn lint` or `ng lint it` to run tslint on the integration tests.  
