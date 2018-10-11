## Introduction

Rxjs is a library for composing asynchronous and event based programs by using observable sequences. It rovides one core types, the Observables, satellite types ( Observer, Schedules, Subjects ) and operators inspired by Array functions to allow handling asynchronous events as collections.

### Glossary

* Observer Pattern : The observer pattern  is a software design pattern in which an object, called the subject, maintains the list of its dependents, called obsevers, and notifies them automatically of any state change, usually by calling one of their methods.

* Iterator Pattern : In OOPS, the iterator patters is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers, in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.

* Pure Functions : A pure function is deterministic. This means, that given the same input, the function will always return the same output. 

### Features 

ReactiveX combines **Observer pattern** with the **iterator pattern** and functional programming with collections to fill the need for an ideal way of managing sequence of events.

The essential concepts in RxJs which solve async event management are: 
* Observable:  represents the idea of an invokable collection of future events.
* Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
* Subscription: represents the execution of an observable, is primarily useful for cancelling the execution.
* Operators: are pure functions that enable a functinal programming style of dealing with collections with operators like map, filter, concat, etc.
* Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple observers.
* Schedulers:  are centralized dispatchers to control concurrency, allowing us to coordinate when computation happends on eg. setTimeout or others.

#### First Example

```
var button = document.querySelector('button');
button.addEventListener( 'click', () => console.log());
```

Using Rxjs you create an observable instead.

```
var button = document.querySelector('button');
Rx.Observable.fromEvent( button, 'click' )
.subscribe(() =>  console.log('Clicked!'));
```

#### Purity
What makes Rxjs powerful is the ability to produce values using pure functions. That means your code is less prone to errors. Normally you would create an impure function, where other pieces of your code can mess up your state.

```
var count = 0;
var button = document.querySelector('button');
button.addEventListener('click', () => console.log(`Clicked ${ ++count } times` ));
```

But using Rxjs, you isolate the state.

```
var button = document.querySelector('button');
Rx.Observable.fromEvent( button, 'click' )
.scan( count => count + 1, 0 )
.subscribe( count =>  console.log( count ));
```
The scan opeator acts just like the reduce for arrays. It takes a value which is exposed to a callback. The returned value of the callback will then become the next value exposed the next time the callback runs.__

#### Flow

Rxjs has a whole range of operators that helps you control how the events flow through your observables.
This is how you would allow at most one click per second.

```
var count = 0;
var rate = 1000;

var lastClick = Date.now() - rate;
var button = document.querySelector('button');
button.addEventListener( 'click', () => {
  if( Date.now() - lastClick >= rate ){
    console.log( `Clicked ${ ++count } times `);
    lastClick  = Date.now();
  }
});
```

with RxJS

```
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
```
other flow control operators are filter, delay, debounceTime, take, takeUntil, distinct, distinctUntil

for usage in angular projects on a `button` with a click event

```
  private clickSubject = new Subject<void>();
  ngOnInit() {
    this.clickSubject.pipe(
      throttleTime( 1000 ),
      scan((count, val) => count + 1, 0 ),
    ).subscribe(
      count =>  console.log( count )
    )
    this.clickSubject.subscribe(() => {
      console.log('clicked');
    });    
  }

  onClick() {
    this.clickSubject.next();
  }
```

#### Values

You can transform the values passed through your observables.
```
Rx.Observable.fromEvent( button, 'click' )
  .throttleTime( 1000 )
  .map( event => event.clientX )
  .scan(( count, clientX ) => count + clientX, 0 )
  .subscribe( count => console.log( count ));
```

Other value producing operators are **pluck**, **pairwise**, **sample** etc

<hr />

## Observables


Observables are lazy push collections of multiple values. They fill the missing spot in the following table.

|        |  Single  |  Multiple  |
| -------|:--------:| ----------:|
| Pull   | Function | Iterator   |
| Push   | Promise  | Observable |

```
var observable = Rx.Observable.create(( observer ) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
```
The observable that pushes the values 1,2, 3 immediately ( synchronously ) when subscribed, and the value 4after one second has passed since the subscribe call, then completes. To invoke the observable and see these values, we need to subscribe to it.

```
var observable = Rx.Observable.create(( observer ) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
console.log('just before the subscribe')l
observable.subscribe({
  next: x=> console.log('something wrong occured: ' + err ),
  error: err => console.error('something wrong occured: ' + error ),
  complete: () => console.log('done'),
});
console.log('just after subscribe');
```

#### Push versus Pull
Pull and Push are two different protocols that describes how a data Producer can communicate with a data consumer.

In Pull Systems, the consumer determines when it receives data from the data producer. The producer itself is unware of when the data will be delivered to the consumer. Every JavaScript function is a pull system. The function is a producer of data, and the code that calls the function is consuming it by "pulling" out a single return value from its call.

|        |  Producer                               |  Consumer                                 |
| -------|:---------------------------------------:| -----------------------------------------:|
| Pull   | Passive: producers data when requested. | Active: decides when data is requested.   |
| Push   | Active: produces data at its own pace.  | Passive: reacts to receive data.          |

In Push system, the producer determines when to send data to the consumer. The consumer is unaware of when it will receive data.

Promises are the most common type of Push System. A Promise delivers a resolved value to registered callbacks, but unlike functions, it is the Promise whoch is in charge of determining precisely when the value ois "pushed" to the callbacks.

RxJS introduces Observables, a new push system for javascript. An Observable is a Producers of multiple values, "pushing" them to Observers.
* A **Function** is a lazily evaluated computation that synchronously returns a single value on invocation.
* A **generator** is a lazily evaluated computation that synchronously return zero to infinite values on iteration.
* A **Promise** is a computation that may or may not eventually return a single value.
* An **Observable** is a  lazily evaluated computation that can synchronously or asynchronously return zero to infinite values from the time it's invoked onwards.

#### Observable as generalizations of functions

Contrary to popular claims, Observables are not like EventEmitters not are they like Promises for mulitple values. Obervables may act like EventEmitters in some cases, namely when they are multicasted using RxJs Subjects, but usually they don't act like eventEmitters. Observables are liek functions with zero argument, but generalize those to allow multiple values.

```
var foo = Rx.Observable.create(( observer ) => {
  console.log('Hello')
  observer.next( 42 );
});

foo.subscribe((x) => {
  onsole.log(x);
})

foo.subscribe((y) => {
  console.log(y);
})
```

Output:
```
"Hello"
42
"Hello"
42
```

This happens because both functions and observables are lazy computations. If you dont call the function, the `console.log('Hello')` won't happen. Also with Observables, if you don't "call" it, the `console.log('Hello')` won't happen. Plus, "calling" or "subscribing" is an isolated operation: two function calls trigger two separate side effects, and two Observables subscribes trigger two separate side effects. As Opposed toe EventEmitters which share the side effects and have eager execution regardless of the existence of subscribers, Observables have no shared execution and are lazy.

*What is the difference between an Observable and a function? **Observables can "return" mulitple values over time**, something which functiona cannot.*

Funtions can return only one value. Observables, how ever can do this.
```
var foo  = Rx.Obsevables.create(( observer ) => {
  console.log('Hello');
  observer.next(42);
  observer.next(100); // return another value
  observer.next(200); // return yet another
  setTimeout(() => {
    observer.next(300); // async
  }, 3000)
});

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');
```
Output:

```
"before"
"Hello"
42
100
200
"after"
300
```
* function.call() means "give me one value synchronously".
* Observable.subscribe() means "give me any amount of values, either synchronously or asynchronously

### Anatomy of Observable
Observables are created using `Rx.Observable.create` or a creation operation, are subscribed to with an Observer, execute to deliver `next`/`error`/`complete` notifications to the observer, and their execution may be disposed.

Core Observables concerns:
* Creating Observables
* Subscribing Observables
* Executing the Observables
* Disposing Observables

#### Creating Observables
`Rx.observable.create` si an alias for the `Observable` constructor, and takes one argument: the `subscribe` function.

```
var observable = Rx.Observable.create(( observer ) => {
  var id = setInterval(() => {
    observer.next('hi');
  }, 1000);
})
```

*Observables can be created with create, but usually we use the so-called creation operators, like of, from, interval, etc.*

#### Subscribing to Observables
The Observable `observable` in the example can be *subscribed* to, like this:

```
observable.subscribe( x => console.log( x ));
```

Its not a conincidence that  `observable.subscribe` and `subscribe` in `Observable.create(function subscribe( observer ){...})` have the same name. In the library, they are different, but for practical purposes you can consider them  conceptually equal. This shows that `subscribe` calls are not shared among multiple Observers of the same Observable. When calling `observable.subscribe` with an Observer, the function `subscribe` in `Observable.create( function subscribe( observer ){ ... })` is run for that Observer. Each call to `observable.subscribe` triggeres its own independent setup for that given Observer.

*Subscribing to an observable is like  calling a function, providing callbacks where the data will be deivered to.*

A `subscribe` call is a simply a way to start an `Observable execution` and deliver values or events to an Observer of the execution.

#### Executing Observables
The code inside `Observable.credate( function subscribe( observer ){ ... })` represents an 'Observable execution`, a lazy computation that only happends for each Observer that subscriber. The execution producers multiple values over time, either synchronously or asynchronously.

There are three types of values on Observable Execution can deliver:
* **Next** notification: sends a value such as a number, a string, an object etc.
* **Error** notification: sends a javascript error or exception.
* **Complete** notification: does not send a value.

Next notifications are expressed best in the so-called Observable Grammer or contract, written as a regular expression:

```
next*( error | complete )?
```

*In an Observable Execution, zero to infinite Next notification may be delivered. If either an Error or complete notification is delivered, then nothing else can delivered afterwards.*

```
var observable = Rx.Observable.create( function subscribe( observer )){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next(4);  // Is not delivered because it would violate the contract
});
```

It is a good idea to wrap any code in `subscribe` with `try/catch` block that will deliver an Error notification if it catches an exception:

```
var observable = Rx.Observable.create( function subscribe( observer ){
  try{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  }catch( err ){
    observer.error( err );
  }
})
```

#### Disposing Observable Executions

Because Observable Executions may be infinite, and it's common for an Observer to want to abort execution in finite time, we need an API for cancelling an execution . Since each execution is exclusive to one observer only, once the Observer is done receiving values, it has to have a way to stop the execution, in order to avoid wasting compution power or memory resources. When `observable.subscribe` is called, the observer gets attached to the newly create Observable execution. This call also returns an object, the `subscrition`.

`var subscription= observable.subscrie( x => console.log( x ));`

The subscription representsthe ongoing execution, and has a minimal API which allows you to cancel the execution. with `subscription.unsubscribe` you can cancel the ongoing execution.

```
var observable = Rx.Observable.from([ 10, 20, 30 ]);
var subscription = observable.subscribe( x => console.log(x));
subscription.unsubscribe();
```

*When you subscribe, you get back a subscription, which represents the ongoing execution. Just call unsubscrieb() to cancel the execution.*

Each observable must define how to dispose resouces of that execution when  we create the Observable using `create()`. You can dot hat by returning a custom `unsubscribe` function from within `function subscribe()`.

```
var observable = Rx.Observable.create( function subscribe( observer ){
  var intervalId = setInterval(() => {
    observer.next('hi);
  }, 1000);


  return function unsubscribe(){
    clearInterval( intervalID );
  }
})
```

Just like observable.subscribe resembles `Observable.create(function subscribe() {...})`, the unsubscribe we return from subscribe is conceptually equal to `subscription.unsubscribe`. In fact, if we remove the ReactiveX types surrounding these concepts, we're left with rather straightforward JavaScript.

```
function subscribe(observer) {
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  return function unsubscribe() {
    clearInterval(intervalID);
  };
}

var unsubscribe = subscribe({next: (x) => console.log(x)});

// Later:
unsubscribe(); // dispose the resources
```
