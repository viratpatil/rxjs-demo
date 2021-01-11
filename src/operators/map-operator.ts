import { of } from "rxjs";
import { map } from "rxjs/operators";
import addItem from "../util";

export default function mapOperatorDemo() {
    const obs = of('hi', 'this is rxjs map operator');

    // obs.pipe(map(value => value.toUpperCase())).subscribe( v => {
    //     const val = `Actual value: ${v} uppercase ${v.toLowerCase()}`;
    //     addItem(val);
    // )}
   

    obs.pipe(map(value => value.toUpperCase())).subscribe(v => addItem(v));
}