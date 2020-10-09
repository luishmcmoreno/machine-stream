# MachineStream

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Running

The project can be runt by docker-compose or docker. Run `docker build -t angular-app .` and then `docker run -it --rm -p 9000:80 angular-app` or just `docker-compose up`.

## Folder structure

This project is structured in a way of separating very well dumb components from features. Please, find below a better explanation of each folder for each Angular Module:

- **pages**: The page component should get values from url params and render feature components;
- **features:** Features should communicate across services and feed the dumb components with the data;
- **dumb:** Dumb components should have inputs and outputs but no external dependencies. Given an input, it should produces always the same output, like a pure function. It can be named also as a pure component.
- **models:** Interfaces, types, enums, type safers, maps.
- **pipes:** Pipes are useds for mapping/transforming data, e.g. timestamps transformed into dates;
- **services:** State management of the project, communication between the project and the servers;
- **guards:** Route guards;

Using this structure, dumbs components are completely testable and predictable as they are not dependent from external dependencies. 

## CI/CD 

The code is hosted on a public repository on Github and Github Actions are being used to deploy it to netlify. The project can be accessed via: https://machine-stream-luis-moreno.netlify.app/

## Next Steps

- Create a filter system for the machines;
- Handle the Events Monitor for not accumulating too many events;
- Create a notifiction system to alert the user when a new event for a given machine popup's up;
- E2E tests, Unit tests;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
