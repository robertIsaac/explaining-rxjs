const now = new Date().valueOf();

function differenceInSeconds(): number {
    return Math.round((new Date().valueOf() - now) / 1000);
}

export function log(subscriber: number, data: number) {
    console.log(`subscriber ${subscriber} value after ${differenceInSeconds()}s is ${data}`);
}
