# floww

My intention was to create some boilerplate to be able to work on the client side in the same repository as the server side.
I know this way will not convince everyone and it is not my intention.
I designed it because I needed it for myself to create a little project easier and quicker.
This boilerplate is using expressjs  but you can change it to use whatever you want, in fact you can even change the language and use golang, rust or any serverless language: the only thing you will have to do is to change the dev script to build/run the project with the compiler/interpeter of the language you have chosen.

## how it works ?

The `dev` script runs concurrently tsc, parcel and nodemon which generate the build folder.
The `build` script compile the typescript and transpile the files with parcel.

## structure

```
*build
*|-- public
*  |-- index.html
*  |-- app.js
*|-- *index.js

api
|-- index.ts
src
|-- app.ts
|-- index.html
index.ts
package.json
tsconfig.json
```

*build folder generates itself with the dev script*

* The `index.ts` is the entrypoint of the boilerplate, it serves the public folder which will be generated in the build folder. It also imports the router.

* The `src` folder which is composed of the front-end part: the page and its scripts

* The `api` folder which contain the endpoint and the handlers of the api you can access from the page

* The config files such as `package.json` and `tsconfig.json`

# dependencies

I am aware the actual dependencies are a little bit opinonated.

* Express -> Api and static files
* Parcel -> Bundler
* Typescript
* Nodemon 