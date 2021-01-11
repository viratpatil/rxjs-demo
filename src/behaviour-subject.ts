import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import addItem from './util';

// Demonstration of how to use Behaviour Subjects

export default function behaviourSubjectsDemo() {
    let subject = new BehaviorSubject('B First');
    subject.subscribe(
        data => addItem('Behaviour Subject Obs1: ' + data),
        err => addItem(err),
        () => addItem(" Behaviour Subject Observer 1 Completed")
    )

    subject.next('The first thing has been sent');

    let observer2 = subject.subscribe(data => addItem("Behaviour Subject OBS2 " + data));

    subject.next('Second thing has been sent');
    subject.next('Third thing thing has been sent');

    observer2.unsubscribe();
    subject.next('Final thing that has been sent');

    // You will observer 2 will get the first thing message as we have used behaviour subject
}