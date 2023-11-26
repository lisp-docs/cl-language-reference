 

A *designator* is an *object* that denotes another *object*. 

Where a *parameter* of an *operator* is described as a *designator* , the description of the *operator* is written in a way that assumes that the value of the *parameter* is the denoted *object*; that is, that the *parameter* is already of the denoted *type*. (The specific nature of the *object* denoted by a “&#10216;typeii designator*” or a “*designator* for a &#10216;type&#10217;” can be found in the Glossary entry for “&#10216;typeii designator* .”) 

For example, “**nil**” and “the *value* of **\*standard-output\***” are operationally indistinguishable as *stream designators*. Similarly, the *symbol* foo and the *string* "FOO" are operationally indistinguishable as *string designators*. 

Except as otherwise noted, in a situation where the denoted *object* might be used multiple times, it is *implementation-dependent* whether the *object* is coerced only once or whether the coercion occurs each time the *object* must be used. 





For example, **mapcar** receives a *function designator* as an argument, and its description is written as if this were simply a function. In fact, it is *implementation-dependent* whether the *function designator* is coerced right away or whether it is carried around internally in the form that it was given as an *argument* and re-coerced each time it is needed. In most cases, *conforming programs* cannot detect the distinction, but there are some pathological situations (particularly those involving self-redefining or mutually-redefining functions) which do conform and which can detect this difference. The following program is a *conforming program*, but might or might not have portably correct results, depending on whether its correctness depends on one or the other of the results: 

(defun add-some (x) 

(defun add-some (x) (+ x 2)) 

(+ x 1)) *→* ADD-SOME 

(mapcar ’add-some ’(1 2 3 4)) 

*→* (2 3 4 5) 

\<i\>\<sup\>or\</sup\>→\</i\> (2 4 5 6) 

In a few rare situations, there may be a need in a dictionary entry to refer to the *object* that was the original *designator* for a *parameter* . Since naming the *parameter* would refer to the denoted *object*, the phrase “the &#10216;parameter-nameii designator*” can be used to refer to the *designator* which was the *argument* from which the *value* of &#10216;parameter-name&#10217; was computed. 

