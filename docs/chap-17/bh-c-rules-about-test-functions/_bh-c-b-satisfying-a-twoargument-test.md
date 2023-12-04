 



When an <i>object O</i> is being considered iteratively against each <i>element E<sub>i</sub></i> of a <i>sequence S</i> by an <i>operator F</i> listed in Figure 17–2, it is sometimes useful to control the way in which the presence of <i>O</i> is tested in <i>S</i> is tested by <i>F</i>. This control is offered on the basis of a <i>function</i> designated with either a :test or :test-not <i>argument</i>. 



|<p>**adjoin nset-exclusive-or search** </p><p>**assoc nsublis set-difference count nsubst set-exclusive-or delete nsubstitute sublis** </p><p>**find nunion subsetp** </p><p>**intersection position subst** </p><p>**member pushnew substitute** </p><p>**mismatch rassoc tree-equal** </p><p>**nintersection remove union** </p><p>**nset-difference remove-duplicates**</p>|

| :- |





**Figure 17–2. Operators that have Two-Argument Tests to be Satisfied** 



The object <i>O</i> might not be compared directly to <i>E<sub>i</sub></i>. If a :key <i>argument</i> is provided, it is a <i>designator</i> for a <i>function</i> of one <i>argument</i> to be called with each <i>E<sub>i</sub></i> as an <i>argument</i>, and <i>yielding</i> an <i>object Z<sub>i</sub></i> to be used for comparison. (If there is no :key <i>argument</i>, <i>Z<sub>i</sub></i>is <i>E<sub>i</sub></i>.) 



The *function* designated by the :key *argument* is never called on *O* itself. However, if the function operates on multiple sequences (*e.g.*, as happens in **set-difference**), *O* will be the result of calling the :key function on an *element* of the other sequence. 



A :test <i>argument</i>, if supplied to <i>F</i>, is a <i>designator</i> for a <i>function</i> of two <i>arguments</i>, <i>O</i> and <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said (or, sometimes, an <i>O</i> and an <i>E<sub>i</sub></i> are said) to <i>satisfy the test</i> if this :test <i>function</i> returns a <i>generalized boolean</i> representing <i>true</i>. 



A :test-not <i>argument</i>, if supplied to <i>F</i>, is <i>designator</i> for a <i>function</i> of two <i>arguments</i>, <i>O</i> and <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said (or, sometimes, an <i>O</i> and an <i>E<sub>i</sub></i> are said) to <i>satisfy the test</i> if this :test-not <i>function</i> returns a <i>generalized boolean</i> representing <i>false</i>. 



If neither a :test nor a :test-not *argument* is supplied, it is as if a :test argument of #’eql was supplied. 



The consequences are unspecified if both a :test and a :test-not *argument* are supplied in the same *call* to *F*. 







 



 



