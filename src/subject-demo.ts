import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import addItem from './util';

// Demonstration of how to use Subjects

export default function subjectsDemo() {
    let subject = new Subject();
    subject.subscribe(
        data => addItem('Subject Obs1: ' + data),
        err => addItem(err),
        () => addItem("Subject Observer 1 Completed")
    )

    subject.next('The first thing has been sent');

    let observer2 = subject.subscribe(data => addItem(" Subject OBS2 " + data));

    subject.next('Second thing has been sent');
    subject.next('Third thing thing has been sent');

    observer2.unsubscribe();
    subject.next('Final thing that has been sent');
    // You will observer 2 will not get the first thing message
}