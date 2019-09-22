import { Subject } from "rxjs";
import { log } from "./util";

const subject = new Subject<number>();

let i = 1;
setInterval(() => {
    subject.next(i++);
}, 2000);

subject.subscribe(data => {
    log(1, data);
});

setTimeout(() => {
    subject.subscribe(data => {
        log(2, data);
    });
}, 5000);
