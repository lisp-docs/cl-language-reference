 



A <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is neither a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> nor a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> is defined to be a *self-evaluating object<ClLinks  term={"t"}><i>. </i></ClLinks>Evaluating* such an *object yields* the *same object* as a result. 



Certain specific <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> and *conses* might also happen to be “self-evaluating” but only as a special case of a more general set of rules for the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> and *conses*; such <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are not considered to be <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating objects</i></GlossaryTerm>. 



The consequences are undefined if *literal objects* (including <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating objects</i></GlossaryTerm>) are destructively modified.  







