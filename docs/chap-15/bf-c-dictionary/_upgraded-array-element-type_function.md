**upgraded-array-element-type** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, denoting the *null lexical environment* and the current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



Returns the *element type* of the most *specialized array* representation capable of holding items of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> denoted by *typespec*. 



The *typespec* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of (and possibly *type equivalent* to) the *upgraded-typespec*. 



If *typespec* is <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>, the result is *type equivalent* to bit. If *typespec* is <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>, the result is *type equivalent* to base-char. If *typespec* is <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, the result is *type equivalent* to character. 



The purpose of <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> is to reveal how an implementation does its *upgrading*. 



The <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is used to expand any *derived type specifiers* that are mentioned in the *typespec*. 



**See Also:** 



<ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks>, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks> 



**Notes:** 



Except for storage allocation consequences and dealing correctly with the optional *environment argument*, <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> could be defined as: 



(defun upgraded-array-element-type (type &amp;optional environment) 



(array-element-type (make-array 0 :element-type type))) 







 



 



