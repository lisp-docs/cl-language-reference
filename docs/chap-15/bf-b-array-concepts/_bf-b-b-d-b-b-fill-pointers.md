 



A *fill pointer* is a non-negative *integer* no larger than the total number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in a <ClLinks  term={"vector"}><i>vector</i></ClLinks> . Not all <ClLinks  term={"vector"}><i>vectors</i></ClLinks> have *fill pointers*. See the <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"make-array"}><b>make-array</b></ClLinks> and <ClLinks  term={"adjust-array"}><b>adjust-array</b></ClLinks>. 



An <ClLinks  term={"element"}><i>element</i></ClLinks> of a <ClLinks  term={"vector"}><i>vector</i></ClLinks> is said to be <ClLinks  term={"active"}><i>active</i></ClLinks> if it has an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <ClLinks  term={"array"}><i>array</i></ClLinks> that has no *fill pointer* , all <ClLinks  term={"element"}><i>elements</i></ClLinks> are considered <ClLinks  term={"active"}><i>active</i></ClLinks>. 



Only <ClLinks  term={"vector"}><i>vectors</i></ClLinks> may have *fill pointers*; multidimensional <ClLinks  term={"array"}><i>arrays</i></ClLinks> may not. A multidimensional <ClLinks  term={"array"}><i>array</i></ClLinks> that is displaced to a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has a *fill pointer* can be created. 



