import { Observable } from "rxjs";
import { log } from "./util";

const observable = new Observable<number>((observer) => {
    let i = 1;
    setInterval(() => {
        observer.next(i++);
    }, 2000);
});

observable.subscribe(data => {
    log(1, data);
});

setTimeout(() => {
    observable.subscribe(data => {
        log(2, data);
    });
}, 5000);
