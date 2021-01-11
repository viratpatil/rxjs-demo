import { of } from "rxjs";
import { pluck, map } from "rxjs/operators";
import addItem from "../util";

export default function mapOperatorDemo() {
    const obs = of({message: 'hi'}, {message: 'this is rxjs map operator'});

    // fetches value from property and returns new value 

    obs.pipe(pluck('message'), map(val => val.toUpperCase())).subscribe(v => addItem(v));
}