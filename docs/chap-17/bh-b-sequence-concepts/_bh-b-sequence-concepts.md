 



A *sequence* is an ordered collection of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>, implemented as either a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. 



*Sequences* can be created by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"make-sequence"}><b>make-sequence</b></DictionaryLink>, as well as other <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that create <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> that are <GlossaryTerm  term={"subtype"}><i>subtypes</i></GlossaryTerm> of <DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink> (*e.g.*, <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, <DictionaryLink  term={"make-list"}><b>make-list</b></DictionaryLink>, <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink>, and <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>). 



A <GlossaryTerm styled={true} term={"sequence function"}><i>sequence function</i></GlossaryTerm> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> defined by this specification or added as an extension by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> that operates on one or more *sequences*. Whenever a <GlossaryTerm styled={true} term={"sequence function"}><i>sequence function</i></GlossaryTerm> must construct and return a new <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , it always returns a <GlossaryTerm styled={true} term={"simple vector"}><i>simple vector</i></GlossaryTerm> . Similarly, any <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> constructed will be <GlossaryTerm styled={true} term={"simple string"}><i>simple strings</i></GlossaryTerm>. 



|<p>**concatenate length remove** </p><p>**copy-seq map remove-duplicates count map-into remove-if** </p><p>**count-if merge remove-if-not count-if-not mismatch replace** </p><p>**delete notany reverse** </p><p>**delete-duplicates notevery search** </p><p>**delete-if nreverse some** </p><p>**delete-if-not nsubstitute sort** </p><p>**elt nsubstitute-if stable-sort** </p><p>**every nsubstitute-if-not subseq** </p><p>**fill position substitute** </p><p>**find position-if substitute-if** </p><p>**find-if position-if-not substitute-if-not find-if-not reduce**</p>|

| :- |





**Figure 17–1. Standardized Sequence Functions** 



