**5.1.2.9 Other Compound Forms as Places** 

For any other *compound form* for which the *operator* is a *symbol f* , the **setf** *form* expands into a call to the *function* named (setf *f* ). The first *argument* in the newly constructed *function form* is *newvalue* and the remaining *arguments* are the remaining *elements* of *place*. This expansion occurs 

regardless of whether *f* or (setf *f* ) is defined as a *function* locally, globally, or not at all. For example, 

(setf (*f arg1 arg2* ...) *new-value*) 

expands into a form with the same effect and value as 

(let ((#:temp-1 arg1) ;force correct order of evaluation 

(#:temp-2 arg2) 

... 

(#:temp-0 *new-value*)) 

(funcall (function (setf *f* )) #:temp-0 #:temp-1 #:temp-2...)) 

A *function* named (setf *f* ) must return its first argument as its only value in order to preserve the semantics of **setf**. 

