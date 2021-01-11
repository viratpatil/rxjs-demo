import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import addItem from './util';

export default function observerDemo() {
    var observable = Observable.create(function subs(observer: any) {
        try{
        observer.next('Hi');
        observer.next('How are you');
        setInterval(() => {
            observer.next("I am Good"); 
        }, 2000)
        } catch (err) {
            observer.error(err);
            
        }
    });

    const observer = observable.subscribe((value: any) => {
        addItem(value);
    }, (error: any) => addItem(error), 
    () => addItem('Completed!!!!!!'));

    let observer2: any; 
    setTimeout(() => {
        observer.unsubscribe();
        // cold Observable
        observer2 = observable.subscribe((x: any) =>  addItem("Sub 2: " + x));
        share
    }, 6001);

    setTimeout(() => {
        observer2.unsubscribe();

    }, 10001);
    
}