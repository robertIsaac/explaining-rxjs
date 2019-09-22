# explaining-rxjs
i will try to explain the difference between Observable, Subject and Behavior Subject
Observable is the simplest of them, Subject extends Observable, and Behavior Subject extends Subject

all of them have these features
1. can emit values by calling .next(value) method and that value will be passed to the subscriber
2. gets subribed to by calling the .subscribe((data) => ...) method and passing a function that will get triggered everytime a value get emitted
3. .subscribe() will return Subscription which have unsucribe method to stop getting values

## Observable
1. can instantiate it by using `const observable = new Observable(observer => { ... })`
2. you can emit value, complete or throw error only from inside its body eg. `observer.next(1)`
3. its body will get executed for every subscriber

see [this](https://github.com/robertIsaac/explaining-rxjs/blob/master/observable.ts) example
it will print these values after 10 seconds
```
subscriber 1 value after 2s is 1
subscriber 1 value after 4s is 2
subscriber 1 value after 6s is 3
subscriber 2 value after 7s is 1
subscriber 1 value after 8s is 4
subscriber 2 value after 9s is 2
subscriber 1 value after 10s is 5
```
so as you see subscriber 1 and 2 isn't in sync, there is a margin of 5 seconds gap between them

## subject
1. can instantiate it by using `const subject = new Subject()`
2. you can emit value, complete or throw error any where in the coe by calling it on subject eg `subject.next(1)`
3. it has no body, so its code will be executed only once

see [this](https://github.com/robertIsaac/explaining-rxjs/blob/master/subject.ts) example
it will print these values after 10 seconds
```
subscriber 1 value after 2s is 1
subscriber 1 value after 4s is 2
subscriber 1 value after 6s is 3
subscriber 2 value after 6s is 3
subscriber 1 value after 8s is 4
subscriber 2 value after 8s is 4
subscriber 1 value after 10s is 5
subscriber 2 value after 10s is 5
```
as you see here in oppsite to observable, both subscriber is in sync, so both get the same value in the same time, but subsriber 2 doesn't get the first two values


## behavior subject
1. can instantiate it by using `const behaviorSubject = new BeaviorSubject(0)` where 0 is the inital value and you must set it
2. you can emit value, complete or throw error any where in the coe by calling it on behaviorSubject eg `behaviorSubject.next(1)`
3. it will emit a value as soon as you subscribe to it (the latest value emitted or inital value if no values emitted yet)
4. it has an addtional method called `getValue()` which will return the latest values emitted to it

see [this](https://github.com/robertIsaac/explaining-rxjs/blob/master/subject.ts) example
it will print these values after 10 seconds
```
subscriber 1 value after 0s is 0
subscriber 1 value after 2s is 1
subscriber 1 value after 4s is 2
subscriber 2 value after 5s is 2
subscriber 1 value after 6s is 3
subscriber 2 value after 6s is 3
subscriber 1 value after 8s is 4
subscriber 2 value after 8s is 4
subscriber 1 value after 10s is 5
subscriber 2 value after 10s is 5
```
it's same as subject except that there is a value emitted from subriber 1 in 0s (the initial value) and from subriber 2 in 5s (the latest that was emitted)
