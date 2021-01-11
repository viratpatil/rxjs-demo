import observerDemo  from "./observer-demo";
import subjectsDemo from "./subject-demo";
import behaviourSubjectsDemo from './behaviour-subject';
import replaySubjectsDemo from './replay-subject';
import asyncSubjectDemo from './async-subject';
import { fromEvent } from "rxjs";
import mergeOperator from "./operators/merge-operator";
import mapOperatorDemo from "./operators/map-operator";
import pluckOperatorDemo from "./operators/pluck-operator";
import skipOperatorDemo from "./operators/skip-operator";

// Understanding Observable
function displayRadioValue() { 
    let ele: any = document.getElementsByName('choice'); 
       
    for(let i = 0; i < ele.length; i++) { 
        if(ele[i].checked && ele[i].value === 'obs') {
            observerDemo();
        } else if(ele[i].checked && ele[i].value === 'sub') {
            subjectsDemo();
        } else if(ele[i].checked && ele[i].value === 'rsub') {
            replaySubjectsDemo();
        } else if(ele[i].checked && ele[i].value === 'bsub') {
            behaviourSubjectsDemo();
        } else if(ele[i].checked && ele[i].value === 'asub') {
            asyncSubjectDemo();
        } else if (ele[i].checked && ele[i].value === 'mergeop') {
            mergeOperator();
        }
        else if (ele[i].checked && ele[i].value === 'mapop') {
            mapOperatorDemo();
        } else if (ele[i].checked && ele[i].value === 'pluckop') {
            pluckOperatorDemo();
        }else if (ele[i].checked && ele[i].value === 'skipuntilop') {
            skipOperatorDemo();
        }
    } 
}

const btn = document.getElementById('btn');
fromEvent(btn, 'click').subscribe(() => {
    var list = document.getElementById("output");

    // As long as <ul> has a child node , remove it
    while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
    }
    displayRadioValue();
});


