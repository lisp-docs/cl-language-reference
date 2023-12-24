 



For any other *compound form* for which the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is a *symbol f* , the <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> expands into a call to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> named (setf *f* ). The first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> in the newly constructed *function form* is *newvalue* and the remaining <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are the remaining <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. This expansion occurs 



regardless of whether *f* or (setf *f* ) is defined as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> locally, globally, or not at all. For example, 



(setf (*f arg1 arg2* ...) *new-value*) 



expands into a form with the same effect and value as 



(let ((#:temp-1 arg1) ;force correct order of evaluation 



(#:temp-2 arg2) 



... 



(#:temp-0 *new-value*)) 



(funcall (function (setf *f* )) #:temp-0 #:temp-1 #:temp-2...)) 



A <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> named (setf *f* ) must return its first argument as its only value in order to preserve the semantics of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. 



