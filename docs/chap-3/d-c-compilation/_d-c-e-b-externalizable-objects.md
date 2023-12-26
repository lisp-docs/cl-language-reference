 



The fact that the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> represents *literal objects* externally in a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> and must later reconstruct suitable equivalents of those <ClLinks  term={"object"}><i>objects</i></ClLinks> when that <ClLinks  term={"file"}><i>file</i></ClLinks> is loaded imposes a need for constraints on the nature of the <ClLinks  term={"object"}><i>objects</i></ClLinks> that can be used as *literal objects* in <ClLinks  term={"code"}><i>code</i></ClLinks> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> . 



An <ClLinks  term={"object"}><i>object</i></ClLinks> that can be used as a *literal object* in <ClLinks  term={"code"}><i>code</i></ClLinks> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> is called an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm>. 



We define that two <ClLinks  term={"object"}><i>objects</i></ClLinks> are <ClLinks  term={"similar"}><i>similar</i></ClLinks> if they satisfy a two-place conceptual equivalence predicate (defined below), which is independent of the *Lisp image* so that the two <ClLinks  term={"object"}><i>objects</i></ClLinks> in different *Lisp images* can be understood to be equivalent under this predicate. Further, by inspecting the definition of this conceptual predicate, the programmer can anticipate what aspects of an <ClLinks  term={"object"}><i>object</i></ClLinks> are reliably preserved by *file compilation*. 



The <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> must cooperate with the <ClLinks  term={"loader"}><i>loader</i></ClLinks> in order to assure that in each case where an <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable object</i></GlossaryTerm> is processed as a *literal object*, the <ClLinks  term={"loader"}><i>loader</i></ClLinks> will construct a *similar object*. 



The set of <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <GlossaryTerm styled={true} term={"externalizable object"}><i>externalizable objects</i></GlossaryTerm> are those for which the new conceptual term “<ClLinks  term={"similar"}><i>similar</i></ClLinks>” is defined, such that when a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> is *loaded*, an <ClLinks  term={"object"}><i>object</i></ClLinks> can be constructed which  







can be shown to be <ClLinks  term={"similar"}><i>similar</i></ClLinks> to the original <ClLinks  term={"object"}><i>object</i></ClLinks> which existed at the time the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> was operating. 



