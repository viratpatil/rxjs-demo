import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import addItem from './util';

export default function replaySubjectsDemo() {
    let subject = new ReplaySubject(2);
    subject.subscribe(
        data => addItem('Replay Subject Obs1: ' + data),
        err => addItem(err),
        () => addItem(" Replay Subject Observer 1 Completed")
    )

    subject.next('The first thing has been sent');
    subject.next('The first another thing has been sent');
    subject.next('The something different has been sent');


    let observer2 = subject.subscribe(data => addItem("Replay Subject OBS2 " + data));

    subject.next('Second thing has been sent');
    subject.next('Third thing thing has been sent');

    observer2.unsubscribe();
    subject.next('Final thing that has been sent');

    // You will observer 2 will get last two already sent messages as we have used replay subject with count 2;
}


