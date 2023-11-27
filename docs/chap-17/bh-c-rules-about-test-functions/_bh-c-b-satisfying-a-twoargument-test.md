 

When an &#60;i&#62;object O&#60;/i&#62; is being considered iteratively against each &#60;i&#62;element E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; of a &#60;i&#62;sequence S&#60;/i&#62; by an &#60;i&#62;operator F&#60;/i&#62; listed in Figure 17–2, it is sometimes useful to control the way in which the presence of &#60;i&#62;O&#60;/i&#62; is tested in &#60;i&#62;S&#60;/i&#62; is tested by &#60;i&#62;F&#60;/i&#62;. This control is offered on the basis of a &#60;i&#62;function&#60;/i&#62; designated with either a :test or :test-not &#60;i&#62;argument&#60;/i&#62;. 

|&#60;p&#62;**adjoin nset-exclusive-or search** &#60;/p&#62;&#60;p&#62;**assoc nsublis set-difference count nsubst set-exclusive-or delete nsubstitute sublis** &#60;/p&#62;&#60;p&#62;**find nunion subsetp** &#60;/p&#62;&#60;p&#62;**intersection position subst** &#60;/p&#62;&#60;p&#62;**member pushnew substitute** &#60;/p&#62;&#60;p&#62;**mismatch rassoc tree-equal** &#60;/p&#62;&#60;p&#62;**nintersection remove union** &#60;/p&#62;&#60;p&#62;**nset-difference remove-duplicates**&#60;/p&#62;|
| :- |


**Figure 17–2. Operators that have Two-Argument Tests to be Satisfied** 

The object &#60;i&#62;O&#60;/i&#62; might not be compared directly to &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. If a :key &#60;i&#62;argument&#60;/i&#62; is provided, it is a &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of one &#60;i&#62;argument&#60;/i&#62; to be called with each &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; as an &#60;i&#62;argument&#60;/i&#62;, and &#60;i&#62;yielding&#60;/i&#62; an &#60;i&#62;object Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; to be used for comparison. (If there is no :key &#60;i&#62;argument&#60;/i&#62;, &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;.) 

The *function* designated by the :key *argument* is never called on *O* itself. However, if the function operates on multiple sequences (*e.g.*, as happens in **set-difference**), *O* will be the result of calling the :key function on an *element* of the other sequence. 

A :test &#60;i&#62;argument&#60;/i&#62;, if supplied to &#60;i&#62;F&#60;/i&#62;, is a &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of two &#60;i&#62;arguments&#60;/i&#62;, &#60;i&#62;O&#60;/i&#62; and &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. An &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is said (or, sometimes, an &#60;i&#62;O&#60;/i&#62; and an &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; are said) to &#60;i&#62;satisfy the test&#60;/i&#62; if this :test &#60;i&#62;function&#60;/i&#62; returns a &#60;i&#62;generalized boolean&#60;/i&#62; representing &#60;i&#62;true&#60;/i&#62;. 

A :test-not &#60;i&#62;argument&#60;/i&#62;, if supplied to &#60;i&#62;F&#60;/i&#62;, is &#60;i&#62;designator&#60;/i&#62; for a &#60;i&#62;function&#60;/i&#62; of two &#60;i&#62;arguments&#60;/i&#62;, &#60;i&#62;O&#60;/i&#62; and &#60;i&#62;Z&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;. An &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;is said (or, sometimes, an &#60;i&#62;O&#60;/i&#62; and an &#60;i&#62;E&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; are said) to &#60;i&#62;satisfy the test&#60;/i&#62; if this :test-not &#60;i&#62;function&#60;/i&#62; returns a &#60;i&#62;generalized boolean&#60;/i&#62; representing &#60;i&#62;false&#60;/i&#62;. 

If neither a :test nor a :test-not *argument* is supplied, it is as if a :test argument of #’eql was supplied. 

The consequences are unspecified if both a :test and a :test-not *argument* are supplied in the same *call* to *F*. 



 

 

