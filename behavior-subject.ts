import { BehaviorSubject } from "rxjs";
import { log } from "./util";

const behaviorSubject = new BehaviorSubject(0);

let i = 1;
setInterval(() => {
    behaviorSubject.next(i++);
}, 2000);

behaviorSubject.subscribe(data => {
    log(2, data);
});

setTimeout(() => {
    behaviorSubject.subscribe(data => {
        log(2, data);
    });
}, 5000);
