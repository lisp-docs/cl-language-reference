 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> has a variety of meanings. It is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> "NIL", it is <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> (and *generalized boolean*) *false*, it is the *empty list*, and it is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *empty type* (a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>). 



Within Common Lisp, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> can be notated interchangeably as either NIL or (). By convention, the choice of notation offers a hint as to which of its many roles it is playing.  







|**For Evaluation? Notation Typically Implied Role**|

| :- |

|<p>Yes nil use as a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. </p><p>Yes ’nil use as a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. </p><p>Yes ’() use as an *empty list* </p><p>No nil use as a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. No () use as an *empty list*.</p>|





**Figure 1–1. Notations for NIL** 



Within this document only, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is also sometimes notated as <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> to emphasize its role as a <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. For example: 



(print ()) ;avoided 



(defun three nil 3) ;avoided 



’(nil nil) ;list of two symbols 



’(() ()) ;list of empty lists 



(defun three () 3) ;Emphasize empty parameter list. 



(append ’() ’()) *→* () ;Emphasize use of empty lists 



(not nil) *→ true* ;Emphasize use as Boolean false 



(get ’nil ’color) ;Emphasize use as a symbol 



A <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is sometimes said to “be <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>” or “be <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>” in some circumstance. Since no <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> object can be the same as <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and all *function objects* represent <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when viewed as <GlossaryTerm styled={true} term={"boolean"}><i>booleans</i></GlossaryTerm>, it would be meaningless to say that the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> was literally <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and uninteresting to say that it was literally <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Instead, these phrases are just traditional alternative ways of saying that the 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> “returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>” or “returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>,” respectively. 



