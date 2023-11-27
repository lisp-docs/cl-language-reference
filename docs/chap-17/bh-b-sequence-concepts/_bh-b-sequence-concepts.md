 

A *sequence* is an ordered collection of *elements*, implemented as either a *vector* or a *list*. 

*Sequences* can be created by the *function* **make-sequence**, as well as other *functions* that create *objects* of *types* that are *subtypes* of **sequence** (*e.g.*, **list**, **make-list**, **mapcar**, and **vector**). 

A *sequence function* is a *function* defined by this specification or added as an extension by the *implementation* that operates on one or more *sequences*. Whenever a *sequence function* must construct and return a new *vector* , it always returns a *simple vector* . Similarly, any *strings* constructed will be *simple strings*. 

|&#60;p&#62;**concatenate length remove** &#60;/p&#62;&#60;p&#62;**copy-seq map remove-duplicates count map-into remove-if** &#60;/p&#62;&#60;p&#62;**count-if merge remove-if-not count-if-not mismatch replace** &#60;/p&#62;&#60;p&#62;**delete notany reverse** &#60;/p&#62;&#60;p&#62;**delete-duplicates notevery search** &#60;/p&#62;&#60;p&#62;**delete-if nreverse some** &#60;/p&#62;&#60;p&#62;**delete-if-not nsubstitute sort** &#60;/p&#62;&#60;p&#62;**elt nsubstitute-if stable-sort** &#60;/p&#62;&#60;p&#62;**every nsubstitute-if-not subseq** &#60;/p&#62;&#60;p&#62;**fill position substitute** &#60;/p&#62;&#60;p&#62;**find position-if substitute-if** &#60;/p&#62;&#60;p&#62;**find-if position-if-not substitute-if-not find-if-not reduce**&#60;/p&#62;|
| :- |


**Figure 17–1. Standardized Sequence Functions** 

