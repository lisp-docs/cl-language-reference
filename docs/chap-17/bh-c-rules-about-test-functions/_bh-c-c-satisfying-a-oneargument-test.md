 

When using one of the *functions* in Figure 17–3, the elements *E* of a *sequence S* are filtered not on the basis of the presence or absence of an object *O* under a two *argument predicate*, as with the *functions* described in Section 17.2.1 (Satisfying a Two-Argument Test), but rather on the basis of a one *argument predicate*. 

|&#60;p&#62;**assoc-if member-if rassoc-if** &#60;/p&#62;&#60;p&#62;**assoc-if-not member-if-not rassoc-if-not** &#60;/p&#62;&#60;p&#62;**count-if nsubst-if remove-if** &#60;/p&#62;&#60;p&#62;**count-if-not nsubst-if-not remove-if-not** &#60;/p&#62;&#60;p&#62;**delete-if nsubstitute-if subst-if** &#60;/p&#62;&#60;p&#62;**delete-if-not nsubstitute-if-not subst-if-not** &#60;/p&#62;&#60;p&#62;**find-if position-if substitute-if** &#60;/p&#62;&#60;p&#62;**find-if-not position-if-not substitute-if-not**&#60;/p&#62;|
| :- |


**Figure 17–3. Operators that have One-Argument Tests to be Satisfied** 



 

 

The element &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; might not be considered directly. If a :key &#60;i&#62;argument&#60;/i&#62; is provided, it is a &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of one &#60;i&#62;argument&#60;/i&#62; to be called with each &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; as an &#60;i&#62;argument&#60;/i&#62;, and &#60;i&#62;yielding&#60;/i&#62; an &#60;i&#62;object Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; to be used for comparison. (If there is no :key &#60;i&#62;argument&#60;/i&#62;, &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;.) 

&#60;i&#62;Functions&#60;/i&#62; defined in this specification and having a name that ends in “-if” accept a first &#60;i&#62;argument&#60;/i&#62; that is a &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of one &#60;i&#62;argument&#60;/i&#62;, &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. An &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is said to &#60;i&#62;satisfy the test&#60;/i&#62; if this :test &#60;i&#62;function&#60;/i&#62; returns a &#60;i&#62;generalized boolean&#60;/i&#62; representing &#60;i&#62;true&#60;/i&#62;. 

&#60;i&#62;Functions&#60;/i&#62; defined in this specification and having a name that ends in “-if-not” accept a first &#60;i&#62;argument&#60;/i&#62; that is a &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of one &#60;i&#62;argument&#60;/i&#62;, &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. An &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is said to &#60;i&#62;satisfy the test&#60;/i&#62; if this :test &#60;i&#62;function&#60;/i&#62; returns a &#60;i&#62;generalized boolean&#60;/i&#62; representing &#60;i&#62;false&#60;/i&#62;. 

