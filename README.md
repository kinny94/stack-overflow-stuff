### Glossary

* Ahead-of-time ( AOT ) compilation
The angular ahead-of-time compilation converts Angular HTML and Typescript code into effiecient Javascript code during the build phase, before the browser downloads and runs that code. This is the best compilation mode for production environments, with decreased load time increased performance compared to just-in-time compilation.

* Attribute directives
A category of directive that can listen to and modify the behaviour of other HTML elements, attributes, properties, and components. They are usually represented as HTML attributes, hence the name.

* Binding
The practice of setting a variable or property to a data value. Within Angular typically referesto data binding, which coordinates DOM object properties with data Object properties.

* Class Decorator
A decorator that appears immediately before a class defination, which declares the class to be of the given type, and provides metadata suitable to the type. examples `@Component()`, `@Directive()`, `@Pipe`, `@Injectable()`, `@NgModule()`

* Data binidng 
A process that allows apps to display data values to a user and respond to user actions. In data binding, you declare the relationship between HTML widget and a data source and let the framework handle the details. Data binding is an alternative to manually pushing application data values into HTML, attaching event listeners, pulling changed values from the screen, and updating application data values.

* Decorator
A function that modifies a class or property defination. Decorators are an experimental JS Language feature.

* Dependency Injection
A design pattern and mechanism for creating and developing some parts of an application to other parts of an application that require them. Dependencies are typically services in angular, but they also can be values, such as strings or functions.

* Directive
A class that can modify the structure of the DOM or modify attributes in the DOM and component data model. The directive class definition is immediately preceded by a `@Directive()` decorator that supplies metadata.

* Entry Point 
A Javascript symbol that makes parts of an npm package available for import by other code. 

* Injectable
An Angular class or other defination that provides a dependency using the dependency injection mechanism. An innjectable service class must be marked by the @Injectable() decorator.

* Lazy Loading
A process that speeds up application load time by splitting the application into multiple bindles and loading them on demand. for eg, dependencies can be lazy laoded as needed, as opposed to eager-loading modules that are required by the root modules and are thus loaded on launch. The router makes use of lazy laoding to load child views only when the parent view is activated.

* Pipe
A class which is preceded by the @Pipe{} decorator and which defines a function that transform input values to output values for display in a view. Angular defines various pipes and you can define new pipes.

* Provider
An object that implements one of the provider interface. A provider object defines how to obtain an injectable dependency associated with a DI token.

* Reactive forms
A framework for building Angular forms through the code in a component.

* Scoped Package
A way to group related npm packages. NgModules are delivered within the scoped packages whose names begin with the Angular scope name ```@angular```.

* Service
In angular, a class with the @Injectable() decorator that encapsulates non-UI Logic and code that can be reused across an application


### Javascript Modules 
An ES6 module is a file containing JS code. There's no special module keyword; a module mostly reads just like a script. There are two differences. 
1. ES6 modules are automatically strict-mode code, even if you don't write `use strict`.
2. You can use `import` and `export` in modules.

### Javascript Modules vs NgModules.
Javascript and Angular use modules to organize code, and though they organize it differently, Angular apps rely on both.
In Javascript, modules are individual files with Javascript code in them. To make what's in them available, you write an export statement, usually after the relevant code.

> ```export class AppComponent { ... }```
 
Javascript modules helpyou in namespace, preventing accidental global variables.

### NgModules
NgModules are class decorated with @NgModules. The @NgModules decorator's `import` array tells angular what other NgModules the current modules needs. The modules in the `imports` array are different than JS modules because they are NgModules rathen than regular Javascript modules. Classes with an @`NgModules` decorator are by convention kept in their own files, but makes them an `NgModule`isn't being in their own file, like JS modules, it's the presence of `@NgModule` and its metadata.

```
  /* These are JavaScript import statements. Angular doesn’t know anything about these. */
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  /* The @NgModule decorator lets Angular know that this is an NgModule. */
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [     /* These are NgModule imports. */
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```
NgModules configure the injector and the compiler and help organize related things together.
An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own components, directives, and pipes, making some of them public through the `exports` property, so that external components can use them.

NgModule metadata does the following:
1. Describes which components, directives and pipes belongs to the module.
2. Makes some of those components, directives and pipes public so that other module's component templates can use them.
3. Imports other modules with the components, directives, and pipes that components in the current module need.
4. Provides services that the other application components can use.

* Declarable Classes: These are the classes that you can add to a module's `declarations` list. They are the only classes that you can add to the declarations. 

The NgModule classes differ from JavaScript modules in the following key ways:
1. An NgModule bounds declarable classes only. Declarable are the only classes that matters to the Angular Compiler. 
2. Instead of defining all member classes in one giant files as in a Javascript module, you list the module's classes in the `@NgModule.declarations` list.
3. An NgModule can only export the declarable classes it owns or imports from other modules. It doesn't declare or export any other kind of classes. 
4. Unlinke Javascript modules, an NgModule can extend the entire application with services by adding providers to the` @NgModule.providers` list.

### Bootstrapping
An NgModule describes how the application parts fit together. Every applciation has atleast one Angular module, the root module that you bootstrap to launch the application. By convention, it usually called AppModule.

### Entry Components
An entry component is any component is any component that Angular loads imperatively, by type. You specify an entry component by bootstrapping it in an NgModule. or including it in a routing defination.

There are two main kinds of entry components
1. The bootstrapped root component.
2. A component you specify in a route defination.

#### A Bootstrapped Entry Component 
A bootstrapped entry component is an entry component that angular loads into DOM during the bootstrap process. OTher entry components are loaded dynamically by other means.
A bootstrapped component is necessarily an entry component because bootstrapping is an imperative process, this it needs to have an entry component.

#### A Routed Entry Component 
A route defination refers to a component by its type with `component: CustomerListComponent`
All router component must be entry components. Because this would require you to add the component in two places ( router and `entryComponents` ) the compiler is smart enough to recognize that this is a router defination and automatically add the router component into `entryComponent`.

For production apps you want to load the smallest code possible. The code should contain only classes that you actually need and exclude components that are never used. For this reason, angular compiler only generates code for the components which are reachable from the `entryComponents`. This means adding more refenreces to `@NgModule.declarations` does not imply that they will necessarily be included in the final bundle. 

### Features Modules
Features modules are NgModules for the purpose of organizing code.
Feature module is an organization best practice, as opposed to a concept of the core angular API. A feature module delivers a cohesive set of functionality focused on a specific application need such as a user workflow, routing, or forms. While you can do everything withhin the root module, feature modules help you partition the app into focused areas. A feature module collaborates with the root module and with other modules throught the services it provides and the components, directives, and pipe that it shares.

### Providers
A provider is an instruction to the DI System on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.
When you add a service provider to the root application injector, its available thoroughout the application. Additionally these providers are also available to all the classes in the app as long they have the lookup token.
You should always provide your service in the root injector unless there is a case where you want the servuce to be available only if the consumer imports a particular @NgModule.

* Limiting provider scope by lazy loading modules
In the basic CLI generated app, modulesare eagerly loaded which means that they're all loaded when the app launches. Angular uses an injector system to make things available between modules. In an eagerly loaded app, the root application injector makes all of the providers in all modules available throughout the app. This behaviour necessarily changes when you use lazy loading. Lazy loading is when you load modules only when you need them: for example, when routing. They aren't loaded right away like with eagerly loaded module. This means that any services listed in their provider arrays aren't available because the root injector doesn't know about these modules.
When the angular router lazy-loads a module it creates a new injector. This injector is a child of the root application injector. Imagine a tree of injectors; there is a single root injector and then a child injector for each lazy loaded module. The router adds all of the providers from the root injector to the child injector. When the router creates a component within the lazy-loaded context, Angular prefers service instances created from these providers to the service instances of the application root injector. Any component that lazy loaded a module's context, such as by router navigation, gets the local instance of the service, not the instance in the root aplication injector. Components in external modules continue to receive the instance created for the application root.

* Limiting provider scope with components
Another way to limit provider scope is by adding the service you want to limit to the component's `providers` array. Component providers and NgModule providers are inderpendent of each other. This method is helpful for when to eagerly load a module that needs a service all to itself. Providing a service in the components limits the service only to that component.

```
@Component({
/* . . . */
  providers: [UserService]
})

```

### Singleton services
* Providing a singleton services in Angular
There are two ways to make a service a single in angular.
* Declare that the service should be provided in the application root. 
* Include the service in the AppModule or in a module that is only imported by the AppModule.

Beginning with Angular 6.0, the preferred way to create a singleton services is to specify on the service that is hould be provides in the application root. This is done by setting `providedIn` to `root` on the service's `@Injectable` decorator

* for Root()
If a module provides both providers and declarations then loading it in a child injector such as a route, would duplicate the provider instances. The duplication of providers would cause issues as they would shadow the root instances, which are probably meant to be singletons. For this reason, angular provides a way to sepatrate providers out of the module so that the same module can be imported into the root module with `providers` and child modules without providers.

1. Create a static method  `forRoot()` on the module.
2. Place the providers into the  `forRoot()` method as follows.

### Lazy Loading
There are three main steps to setup lazy loaded feature module.
1. Create the feature module.
2. Create the feature module's routing module.
3. Configure the routes.

* Set up an app
> `ng new customer-app --routing`
