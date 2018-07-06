## Habitat - human to human real estate platform (server)

## Table of contents
* [Getting started](#getting-started)
* [Built with](#built-with)

## Getting started

1. Fork this repo
2. Clone it
```
git clone github.com/YOURGITHUBNAME/habitat-server.git && cd habitat-server
```

3. Install dependencies
```
npm i
```
4. Hook up a database of choice

5. Load sample data
```
npm run sample
```
This will load up a bunch of sample listings, which can be accessed at http://localhost:6969/listings

To drop listings

```
npm run nukeit
```
6. Start dev server
```
nodemon app.js
```

You are now ready to move to the client side, fork it from https://github.com/viiralt/habitat-client

## Built with

* [Koa](https://koajs.com/)
* [Mongo DB](www.mongodb.com)
* [Mongoose](http://mongoosejs.com/)

## Contributing

Contributions are more than welcome. Fork && PR. 

## Author

**Henri Viiralt** - [GitHub](https://github.com/viiralt/habitat-server/new/master?readme=1) - [LinkedIN](https://www.linkedin.com/in/viiralt/)

## License 

MIT

