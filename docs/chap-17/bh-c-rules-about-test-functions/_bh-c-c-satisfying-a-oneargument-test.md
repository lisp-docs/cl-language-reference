**17.2.2 Satisfying a One-Argument Test** 

When using one of the *functions* in Figure 17–3, the elements *E* of a *sequence S* are filtered not on the basis of the presence or absence of an object *O* under a two *argument predicate*, as with the *functions* described in Section 17.2.1 (Satisfying a Two-Argument Test), but rather on the basis of a one *argument predicate*. 

|\<p\>**assoc-if member-if rassoc-if** \</p\>\<p\>**assoc-if-not member-if-not rassoc-if-not** \</p\>\<p\>**count-if nsubst-if remove-if** \</p\>\<p\>**count-if-not nsubst-if-not remove-if-not** \</p\>\<p\>**delete-if nsubstitute-if subst-if** \</p\>\<p\>**delete-if-not nsubstitute-if-not subst-if-not** \</p\>\<p\>**find-if position-if substitute-if** \</p\>\<p\>**find-if-not position-if-not substitute-if-not**\</p\>|
| :- |


**Figure 17–3. Operators that have One-Argument Tests to be Satisfied** 

Sequences **17–3**

 

 

The element \<i\>E\<sub\>i\</sub\>\</i\> might not be considered directly. If a :key \<i\>argument\</i\> is provided, it is a \<i\>designator\</i\> for a \<i\>function\</i\> of one \<i\>argument\</i\> to be called with each \<i\>E\<sub\>i\</sub\>\</i\> as an \<i\>argument\</i\>, and \<i\>yielding\</i\> an \<i\>object Z\<sub\>i\</sub\>\</i\> to be used for comparison. (If there is no :key \<i\>argument\</i\>, \<i\>Z\<sub\>i\</sub\>\</i\>is \<i\>E\<sub\>i\</sub\>\</i\>.) 

\<i\>Functions\</i\> defined in this specification and having a name that ends in “-if” accept a first \<i\>argument\</i\> that is a \<i\>designator\</i\> for a \<i\>function\</i\> of one \<i\>argument\</i\>, \<i\>Z\<sub\>i\</sub\>\</i\>. An \<i\>E\<sub\>i\</sub\>\</i\>is said to \<i\>satisfy the test\</i\> if this :test \<i\>function\</i\> returns a \<i\>generalized boolean\</i\> representing \<i\>true\</i\>. 

\<i\>Functions\</i\> defined in this specification and having a name that ends in “-if-not” accept a first \<i\>argument\</i\> that is a \<i\>designator\</i\> for a \<i\>function\</i\> of one \<i\>argument\</i\>, \<i\>Z\<sub\>i\</sub\>\</i\>. An \<i\>E\<sub\>i\</sub\>\</i\>is said to \<i\>satisfy the test\</i\> if this :test \<i\>function\</i\> returns a \<i\>generalized boolean\</i\> representing \<i\>false\</i\>. 

