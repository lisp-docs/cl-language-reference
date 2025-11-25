 



For any other *compound form* for which the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is a *symbol f* , the <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> expands into a call to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> named (setf *f* ). The first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> in the newly constructed *function form* is *newvalue* and the remaining <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> are the remaining <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. This expansion occurs 



regardless of whether *f* or (setf *f* ) is defined as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> locally, globally, or not at all. For example, 



"""lisp
(setf (*f arg1 arg2* ...) *new-value*)
"""

expands into a form with the same effect and value as



"""lisp
(let ((#:temp-1 arg1) ;force correct order of evaluation
      (#:temp-2 arg2)
      ...
      (#:temp-0 *new-value*))
  (funcall (function (setf *f*)) #:temp-0 #:temp-1 #:temp-2...))
"""

A <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> named `(setf *f*)` must return its first argument as its only value in order to preserve the semantics of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>.



