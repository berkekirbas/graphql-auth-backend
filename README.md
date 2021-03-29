# GraphQL-Auth-Backend

GraphQl Auth System Backend with Jwt 

## Prerequisites

- NodeJS
- Npm or Yarn Package Manager
- Mongo Database (Create a db from [mongoDB Atlas](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjpyNCyjI_sAhUDxhoKHTzbADIQFjAAegQIARAC&url=https%3A%2F%2Fwww.mongodb.com%2Fcloud%2Fatlas&usg=AOvVaw2qZS3NcCFqo-oOZ1RJCCuf) and then link your application)
- Configure config/config.js
Simple Code:

```javascript
module.exports = {
  NODE_ENV: 'development', # or 'production'
  SERVER_PORT: '8080', # or other port
  GRAPHQL_SERVER_PORT: '5000', # or other port
  MONGODB_SERVER_ADRESS:
    '', # Your mongoDB Connection Adress (Note: Must be create a Collections in mongoDb(for example name of user))
  SECRET_KEY: '', # Your secret key
}

```

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) to install Url Shortner

```bash
    npm install (or yarn add)
    npm run dev (or yarn dev)
```

## Building

When you build the project will be created dist directory

```bash
    npm run build(or yarn build)
    npm run start (or yarn start)
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
