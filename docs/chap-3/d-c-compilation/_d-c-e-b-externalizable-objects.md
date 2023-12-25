 



The fact that the *file compiler* represents *literal objects* externally in a *compiled file* and must later reconstruct suitable equivalents of those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> when that <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is loaded imposes a need for constraints on the nature of the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that can be used as *literal objects* in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> to be processed by the *file compiler* . 



An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can be used as a *literal object* in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> to be processed by the *file compiler* is called an *externalizable object*. 



We define that two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> if they satisfy a two-place conceptual equivalence predicate (defined below), which is independent of the *Lisp image* so that the two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in different *Lisp images* can be understood to be equivalent under this predicate. Further, by inspecting the definition of this conceptual predicate, the programmer can anticipate what aspects of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> are reliably preserved by *file compilation*. 



The *file compiler* must cooperate with the <GlossaryTerm styled={true} term={"loader"}><i>loader</i></GlossaryTerm> in order to assure that in each case where an *externalizable object* is processed as a *literal object*, the <GlossaryTerm styled={true} term={"loader"}><i>loader</i></GlossaryTerm> will construct a *similar object*. 



The set of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are *externalizable objects* are those for which the new conceptual term “<GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm>” is defined, such that when a *compiled file* is *loaded*, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can be constructed which  







can be shown to be <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to the original <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which existed at the time the *file compiler* was operating. 



