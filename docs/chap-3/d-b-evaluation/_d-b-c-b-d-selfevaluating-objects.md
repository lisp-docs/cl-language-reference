 



A <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is neither a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> nor a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is defined to be a *self-evaluating object<GlossaryTerm styled={true} term={"t"}><i>. </i></GlossaryTerm>Evaluating* such an *object yields* the *same object* as a result. 



Certain specific <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and *conses* might also happen to be “self-evaluating” but only as a special case of a more general set of rules for the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and *conses*; such <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are not considered to be *self-evaluating objects*. 



The consequences are undefined if *literal objects* (including *self-evaluating objects*) are destructively modified.  







