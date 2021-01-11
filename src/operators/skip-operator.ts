import { of } from "rxjs";
import { Subject } from "rxjs";
import addItem from "../util";
import { skipUntil } from "rxjs/operators";

export default function skipOperatorDemo() {
    const obs1 = new Subject();
    const obs2 = new Subject();
    let i = 1;
    
    setInterval(() => {obs1.next(i++)}, 1000);
    setTimeout(() => {obs2.next('hi')}, 3000);

    let newObs = obs1.pipe(skipUntil(obs2));

    newObs.subscribe((value: any) => {
            addItem(value);
    });


    // first operator skips until second observer emits value

}