import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import {Subject, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs';
import addItem from './util';

export default function asyncSubjectDemo() {
    let subject = new AsyncSubject();
    subject.subscribe(
        data => addItem('Async Subject Obs1: ' + data),
        () => addItem(" Async Subject Observer 1 Completed")
    )

    let i = 1;
    setInterval(()=>{
        subject.next(i++);
    }, 100)


    setTimeout(() => {
        subject.subscribe(data => addItem("Async Subject OBS2 " + data));
        subject.complete();
    }, 500);

    // Only last values will be send to observer after complete is triggered
}