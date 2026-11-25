# Mfe2Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.4.

## Development server

Start the microfrontend development server with:

```bash
npm start
```

The single-spa entry is served at `http://localhost:4500/main.js` with CORS enabled.
Start `spa-root` with `npm start` and open `http://localhost:9000/mfe2` to mount the application. Changes are rebuilt automatically.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

This stores the production build in `dist/mfe2-angular/browser/`. The entry remains named `main.js` for the root import map; update the map to the deployed URL when hosting it outside local development.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
