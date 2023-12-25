 



A *sequence* is an ordered collection of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>, implemented as either a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*Sequences* can be created by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-sequence"}><b>make-sequence</b></DictionaryLink>, as well as other <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that create <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> (*e.g.*, <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-list"}><b>make-list</b></DictionaryLink>, <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink>, and <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>). 



A *sequence function* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> defined by this specification or added as an extension by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that operates on one or more *sequences*. Whenever a *sequence function* must construct and return a new <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , it always returns a *simple vector* . Similarly, any <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> constructed will be *simple strings*. 



|<p>**concatenate length remove** </p><p>**copy-seq map remove-duplicates count map-into remove-if** </p><p>**count-if merge remove-if-not count-if-not mismatch replace** </p><p>**delete notany reverse** </p><p>**delete-duplicates notevery search** </p><p>**delete-if nreverse some** </p><p>**delete-if-not nsubstitute sort** </p><p>**elt nsubstitute-if stable-sort** </p><p>**every nsubstitute-if-not subseq** </p><p>**fill position substitute** </p><p>**find position-if substitute-if** </p><p>**find-if position-if-not substitute-if-not find-if-not reduce**</p>|

| :- |





**Figure 17–1. Standardized Sequence Functions** 



