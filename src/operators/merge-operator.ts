import { merge, of } from "rxjs";
import addItem from "../util";

export default function mergeOperator() {

    const obs1 = of('Hi', 'How are you ?');
    const obs2 = of('I am Fine', 'Thank You');

    const mergedObs = merge(obs1, obs2);

    mergedObs.subscribe( data => addItem(data));

}