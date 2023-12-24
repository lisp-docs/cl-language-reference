**array-displacement** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"array-displacement"}><b>array-displacement</b></ClLinks> *array → displaced-to, displaced-index-offset* 



**Arguments and Values:** 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



*displaced-to*—an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*displaced-index-offset*—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>. 



**Description:** 



If the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a *displaced array*, returns the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of the :displaced-to and :displaced-index-offset options for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> (see the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> and <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>). If the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not a *displaced array*, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and 0 are returned. 



If <ClLinks styled={true} term={"array-displacement"}><b>array-displacement</b></ClLinks> is called on an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> for which a *non-nil object* was provided as the :displaced-to <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> or <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks>, it must return that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as its first value. It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks styled={true} term={"array-displacement"}><b>array-displacement</b></ClLinks> returns a *non-nil primary value* for any other <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**Examples:**
```lisp

(setq a1 (make-array 5)) → #<ARRAY 5 simple 46115576> 
(setq a2 (make-array 4 :displaced-to a1 
		     :displaced-index-offset 1)) 
→ #<ARRAY 4 indirect 46117134> 
(array-displacement a2) 
→ #<ARRAY 5 simple 46115576>, 1 
(setq a3 (make-array 2 :displaced-to a2 
		     :displaced-index-offset 2)) 
→ #<ARRAY 2 indirect 46122527> 



(array-displacement a3) 
→ #<ARRAY 4 indirect 46117134>, 2 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is not an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



