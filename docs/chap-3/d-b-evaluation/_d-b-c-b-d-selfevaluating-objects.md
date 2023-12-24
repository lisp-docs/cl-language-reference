 



A <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is neither a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> nor a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is defined to be a *self-evaluating object<ClLinks styled={true} term={"t"}><i>. </i></ClLinks>Evaluating* such an *object yields* the *same object* as a result. 



Certain specific <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and *conses* might also happen to be “self-evaluating” but only as a special case of a more general set of rules for the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and *conses*; such <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are not considered to be *self-evaluating objects*. 



The consequences are undefined if *literal objects* (including *self-evaluating objects*) are destructively modified.  







