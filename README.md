# ny-times-books
## Project use case
Its new york times books application. More info can be found from the website https://developer.nytimes.com/get-started.

## Modules
It has two modules. They are nytimes-frontend and nytimes-backend modules.

**nytimes-frontend**
Its front end UI module.The user intrect this layer. Its developed using react.
Technology:
- react
- Typescript

**nytimes-backend**
Its backend RestAPI module.The frontend intrect this layer. Its developed using js.
Technology:
- js
- Nodejs
- express

## How to run the application

Clone this repo locally

### directory layout
    .
    ├── nytimes-books           # parent folder
    │   ├── nytimes-frontend    # frontend module
    │   ├── nytimes-backend     # backend module
    └── ...

**Configuration**:

**nytimes-frontend**:


```
..nytimes-books/nytimes-books-frontend/yarn install
..nytimes-books/nytimes-books-frontend/yarn start
```

You can view a website over at  http://localhost:8080/ . It runs on port 8080.

**nytimes-backend**:

```
..nytimes-books/nytimes-backend/yarn install
..nytimes-books/nytimes-backend/yarn start
```

Frontend/client can reach RestAPI over at  http://localhost:9090/ . It runs on port 9090.

#### Using the nytimes-books application :

- Make it sure frontend and backend are running.
- open the website in browser http://host:port
