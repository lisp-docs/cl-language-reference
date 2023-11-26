**17.1 Sequence Concepts** 

A *sequence* is an ordered collection of *elements*, implemented as either a *vector* or a *list*. 

*Sequences* can be created by the *function* **make-sequence**, as well as other *functions* that create *objects* of *types* that are *subtypes* of **sequence** (*e.g.*, **list**, **make-list**, **mapcar**, and **vector**). 

A *sequence function* is a *function* defined by this specification or added as an extension by the *implementation* that operates on one or more *sequences*. Whenever a *sequence function* must construct and return a new *vector* , it always returns a *simple vector* . Similarly, any *strings* constructed will be *simple strings*. 

|\<p\>**concatenate length remove** \</p\>\<p\>**copy-seq map remove-duplicates count map-into remove-if** \</p\>\<p\>**count-if merge remove-if-not count-if-not mismatch replace** \</p\>\<p\>**delete notany reverse** \</p\>\<p\>**delete-duplicates notevery search** \</p\>\<p\>**delete-if nreverse some** \</p\>\<p\>**delete-if-not nsubstitute sort** \</p\>\<p\>**elt nsubstitute-if stable-sort** \</p\>\<p\>**every nsubstitute-if-not subseq** \</p\>\<p\>**fill position substitute** \</p\>\<p\>**find position-if substitute-if** \</p\>\<p\>**find-if position-if-not substitute-if-not find-if-not reduce**\</p\>|
| :- |


**Figure 17–1. Standardized Sequence Functions** 

