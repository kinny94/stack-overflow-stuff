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

* Declarable Classes: These are the classes that you can add to a module's `declarations` list. They are the only classes that you can add to the declarations. 

The NgModule classes differ from JavaScript modules in the following key ways:
1. An NgModule bounds declarable classes only. Declarable are the only classes that matters to the Angular Compiler. 
2. Instead of defining all member classes in one giant files as in a Javascript module, you list the module's classes in the `@NgModule.declarations` list.
3. An NgModule can only export the declarable classes it owns or imports from other modules. It doesn't declare or export any other kind of classes. 
4. Unlinke Javascript modules, an NgModule can extend the entire application with services by adding providers to the` @NgModule.providers` list.

### Bootstrapping
An NgModule describes how the application parts fit together. Every applciation has atleast one Angular module, the root module that you bootstrap to launch the application. By convention, it usually called AppModule.
