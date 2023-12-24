 



A *sequence* is an ordered collection of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>, implemented as either a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*Sequences* can be created by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-sequence"}><b>make-sequence</b></ClLinks>, as well as other <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> that create <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> that are <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks> (*e.g.*, <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, <ClLinks styled={true} term={"make-list"}><b>make-list</b></ClLinks>, <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks>, and <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>). 



A *sequence function* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> defined by this specification or added as an extension by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that operates on one or more *sequences*. Whenever a *sequence function* must construct and return a new <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , it always returns a *simple vector* . Similarly, any <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> constructed will be *simple strings*. 



|<p>**concatenate length remove** </p><p>**copy-seq map remove-duplicates count map-into remove-if** </p><p>**count-if merge remove-if-not count-if-not mismatch replace** </p><p>**delete notany reverse** </p><p>**delete-duplicates notevery search** </p><p>**delete-if nreverse some** </p><p>**delete-if-not nsubstitute sort** </p><p>**elt nsubstitute-if stable-sort** </p><p>**every nsubstitute-if-not subseq** </p><p>**fill position substitute** </p><p>**find position-if substitute-if** </p><p>**find-if position-if-not substitute-if-not find-if-not reduce**</p>|

| :- |





**Figure 17–1. Standardized Sequence Functions** 



