 



A *fill pointer* is a non-negative *integer* no larger than the total number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . Not all <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> have *fill pointers*. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> and <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>. 



An <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> is said to be <ClLinks styled={true} term={"active"}><i>active</i></ClLinks> if it has an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that has no *fill pointer* , all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are considered <ClLinks styled={true} term={"active"}><i>active</i></ClLinks>. 



Only <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> may have *fill pointers*; multidimensional <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> may not. A multidimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is displaced to a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that has a *fill pointer* can be created. 



