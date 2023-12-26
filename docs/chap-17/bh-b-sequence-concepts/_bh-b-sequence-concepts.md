 



A *sequence* is an ordered collection of <ClLinks  term={"element"}><i>elements</i></ClLinks>, implemented as either a <ClLinks  term={"vector"}><i>vector</i></ClLinks> or a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



*Sequences* can be created by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"make-sequence"}><b>make-sequence</b></ClLinks>, as well as other <ClLinks  term={"function"}><i>functions</i></ClLinks> that create <ClLinks  term={"object"}><i>objects</i></ClLinks> of <ClLinks  term={"type"}><i>types</i></ClLinks> that are <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks  term={"sequence"}><b>sequence</b></ClLinks> (*e.g.*, <ClLinks  term={"list"}><b>list</b></ClLinks>, <ClLinks  term={"make-list"}><b>make-list</b></ClLinks>, <ClLinks  term={"mapcar"}><b>mapcar</b></ClLinks>, and <ClLinks  term={"vector"}><b>vector</b></ClLinks>). 



A <GlossaryTerm styled={true} term={"sequence function"}><i>sequence function</i></GlossaryTerm> is a <ClLinks  term={"function"}><i>function</i></ClLinks> defined by this specification or added as an extension by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that operates on one or more *sequences*. Whenever a <GlossaryTerm styled={true} term={"sequence function"}><i>sequence function</i></GlossaryTerm> must construct and return a new <ClLinks  term={"vector"}><i>vector</i></ClLinks> , it always returns a <GlossaryTerm styled={true} term={"simple vector"}><i>simple vector</i></GlossaryTerm> . Similarly, any <ClLinks  term={"string"}><i>strings</i></ClLinks> constructed will be <GlossaryTerm styled={true} term={"simple string"}><i>simple strings</i></GlossaryTerm>. 



|<p>**concatenate length remove** </p><p>**copy-seq map remove-duplicates count map-into remove-if** </p><p>**count-if merge remove-if-not count-if-not mismatch replace** </p><p>**delete notany reverse** </p><p>**delete-duplicates notevery search** </p><p>**delete-if nreverse some** </p><p>**delete-if-not nsubstitute sort** </p><p>**elt nsubstitute-if stable-sort** </p><p>**every nsubstitute-if-not subseq** </p><p>**fill position substitute** </p><p>**find position-if substitute-if** </p><p>**find-if position-if-not substitute-if-not find-if-not reduce**</p>|

| :- |





**Figure 17–1. Standardized Sequence Functions** 



