**upgraded-array-element-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, denoting the *null lexical environment* and the current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



Returns the *element type* of the most *specialized array* representation capable of holding items of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> denoted by *typespec*. 



The *typespec* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of (and possibly *type equivalent* to) the *upgraded-typespec*. 



If *typespec* is <DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>, the result is *type equivalent* to bit. If *typespec* is <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>, the result is *type equivalent* to base-char. If *typespec* is <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, the result is *type equivalent* to character. 



The purpose of <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> is to reveal how an implementation does its *upgrading*. 



The <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> is used to expand any *derived type specifiers* that are mentioned in the *typespec*. 



**See Also:** 



<DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> 



**Notes:** 



Except for storage allocation consequences and dealing correctly with the optional *environment argument*, <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink> could be defined as: 



(defun upgraded-array-element-type (type &amp;optional environment) 



(array-element-type (make-array 0 :element-type type))) 







 



 



