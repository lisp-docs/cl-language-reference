 



The fact that the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> represents *literal objects* externally in a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> and must later reconstruct suitable equivalents of those <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> when that <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is loaded imposes a need for constraints on the nature of the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that can be used as *literal objects* in <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> . 



An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that can be used as a *literal object* in <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> is called an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm>. 



We define that two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> if they satisfy a two-place conceptual equivalence predicate (defined below), which is independent of the *Lisp image* so that the two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in different *Lisp images* can be understood to be equivalent under this predicate. Further, by inspecting the definition of this conceptual predicate, the programmer can anticipate what aspects of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> are reliably preserved by *file compilation*. 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> must cooperate with the <GlossaryTerm  term={"loader"}><i>loader</i></GlossaryTerm> in order to assure that in each case where an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm> is processed as a *literal object*, the <GlossaryTerm  term={"loader"}><i>loader</i></GlossaryTerm> will construct a *similar object*. 



The set of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> are those for which the new conceptual term “<GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm>” is defined, such that when a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is *loaded*, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can be constructed which  







can be shown to be <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to the original <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which existed at the time the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> was operating. 



