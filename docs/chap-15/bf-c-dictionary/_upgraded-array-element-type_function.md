**upgraded-array-element-type** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, denoting the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> and the current <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*upgraded-typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the most *specialized array* representation capable of holding items of the <ClLinks  term={"type"}><i>type</i></ClLinks> denoted by *typespec*. 



The *typespec* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of (and possibly <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to) the *upgraded-typespec*. 



If *typespec* is <ClLinks  term={"bit"}><b>bit</b></ClLinks>, the result is <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to bit. If *typespec* is <ClLinks  term={"base-char"}><b>base-char</b></ClLinks>, the result is <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to base-char. If *typespec* is <ClLinks  term={"character"}><b>character</b></ClLinks>, the result is <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to character. 



The purpose of <ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> is to reveal how an implementation does its *upgrading*. 



The <ClLinks  term={"environment"}><i>environment</i></ClLinks> is used to expand any <GlossaryTerm styled={true} term={"derived type specifier"}><i>derived type specifiers</i></GlossaryTerm> that are mentioned in the *typespec*. 



**See Also:** 



<ClLinks  term={"array-element-type"}><b>array-element-type</b></ClLinks>, <ClLinks  term={"make-array"}><b>make-array</b></ClLinks> 



**Notes:** 



Except for storage allocation consequences and dealing correctly with the optional *environment argument*, <ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks> could be defined as: 



(defun upgraded-array-element-type (type &amp;optional environment) 



(array-element-type (make-array 0 :element-type type))) 







 



 



