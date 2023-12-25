 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> has a variety of meanings. It is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> "NIL", it is <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> (and *generalized boolean*) *false*, it is the *empty list*, and it is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *empty type* (a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>). 



Within Common Lisp, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> can be notated interchangeably as either NIL or (). By convention, the choice of notation offers a hint as to which of its many roles it is playing.  







|**For Evaluation? Notation Typically Implied Role**|

| :- |

|<p>Yes nil use as a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. </p><p>Yes ’nil use as a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. </p><p>Yes ’() use as an *empty list* </p><p>No nil use as a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. No () use as an *empty list*.</p>|





**Figure 1–1. Notations for NIL** 



Within this document only, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is also sometimes notated as <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> to emphasize its role as a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. For example: 



(print ()) ;avoided 



(defun three nil 3) ;avoided 



’(nil nil) ;list of two symbols 



’(() ()) ;list of empty lists 



(defun three () 3) ;Emphasize empty parameter list. 



(append ’() ’()) → () ;Emphasize use of empty lists 



(not nil) → true ;Emphasize use as Boolean false 



(get ’nil ’color) ;Emphasize use as a symbol 



A <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is sometimes said to “be <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>” or “be <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>” in some circumstance. Since no <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> object can be the same as <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and all *function objects* represent <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when viewed as <ClLinks styled={true} term={"boolean"}><i>booleans</i></ClLinks>, it would be meaningless to say that the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> was literally <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and uninteresting to say that it was literally <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Instead, these phrases are just traditional alternative ways of saying that the 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> “returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>” or “returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>,” respectively. 



