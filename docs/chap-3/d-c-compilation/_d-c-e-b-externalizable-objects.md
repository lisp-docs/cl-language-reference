 



The fact that the *file compiler* represents *literal objects* externally in a *compiled file* and must later reconstruct suitable equivalents of those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> when that <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is loaded imposes a need for constraints on the nature of the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that can be used as *literal objects* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to be processed by the *file compiler* . 



An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be used as a *literal object* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to be processed by the *file compiler* is called an *externalizable object*. 



We define that two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> if they satisfy a two-place conceptual equivalence predicate (defined below), which is independent of the *Lisp image* so that the two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in different *Lisp images* can be understood to be equivalent under this predicate. Further, by inspecting the definition of this conceptual predicate, the programmer can anticipate what aspects of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> are reliably preserved by *file compilation*. 



The *file compiler* must cooperate with the <ClLinks styled={true} term={"loader"}><i>loader</i></ClLinks> in order to assure that in each case where an *externalizable object* is processed as a *literal object*, the <ClLinks styled={true} term={"loader"}><i>loader</i></ClLinks> will construct a *similar object*. 



The set of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are *externalizable objects* are those for which the new conceptual term “<ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks>” is defined, such that when a *compiled file* is *loaded*, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can be constructed which  







can be shown to be <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to the original <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which existed at the time the *file compiler* was operating. 



