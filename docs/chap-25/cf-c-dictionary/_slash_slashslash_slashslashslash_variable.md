**/, //, ///** <GlossaryTerm styled={true} term={"variable"}><i>Variable</i></GlossaryTerm> 



**Value Type:** 



a *proper list*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink>, <DictionaryLink styled={true} term={"//"}><b>//</b></DictionaryLink>, and <DictionaryLink styled={true} term={"///"}><b>///</b></DictionaryLink> are maintained by the *Lisp read-eval-print loop* to save the values of results that were printed at the end of the loop. 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the most recent <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that were printed, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"//"}><b>//</b></DictionaryLink> is the previous value of <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"///"}><b>///</b></DictionaryLink> is the previous value of <DictionaryLink styled={true} term={"//"}><b>//</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink>, <DictionaryLink styled={true} term={"//"}><b>//</b></DictionaryLink>, and <DictionaryLink styled={true} term={"///"}><b>///</b></DictionaryLink> are updated immediately prior to printing the *return value* of a top-level <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by the *Lisp read-eval-print loop*. If the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is aborted prior to its normal return, the values of <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink>, <DictionaryLink styled={true} term={"//"}><b>//</b></DictionaryLink>, and <DictionaryLink styled={true} term={"///"}><b>///</b></DictionaryLink> are not updated. 



**Examples:**
```lisp
 
(floor 22 7) *→* 3, 1 
(+ (\* (car /) 7) (cadr /)) *→* 22 

```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), **\*** (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), Section 25.1.1 (Top level loop) 







 



 



<b><sup>lisp-implementation-type, lisp-implementation</sup> version</b> <i>Function</i> 



**Syntax:** 



**lisp-implementation-type** *hno argumentsi → description* 



**lisp-implementation-version** *hno argumentsi → description* 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



**lisp-implementation-type** and **lisp-implementation-version** identify the current implementation of Common Lisp. 



**lisp-implementation-type** returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the generic name of the particular Common Lisp implementation. 



**lisp-implementation-version** returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the version of the particular Common Lisp implementation. 



If no appropriate and relevant result can be produced, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned instead of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. **Examples:**
```lisp
 
(lisp-implementation-type) 
*→* "ACME Lisp" 
<i><sup>or</sup>→</i> "Joe’s Common Lisp" 
(lisp-implementation-version) 
*→* "1.3a" 
*→* "V2" 
<i><sup>or</sup>→</i> "Release 17.3, ECO #6" 
**short-site-name, long-site-name** *Function* 

```
**Syntax:** 



**short-site-name** *hno argumentsi → description* 



**long-site-name** *hno argumentsi → description* 







 



 



**Arguments and Values:** 



*description*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



**short-site-name** and **long-site-name** return a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that identifies the physical location of the computer hardware, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no appropriate *description* can be produced. 



**Examples:**
```lisp

(short-site-name) 
*→* "MIT AI Lab" 
<i><sup>or</sup>→</i> "CMU-CSD" 
(long-site-name) 
*→* "MIT Artificial Intelligence Laboratory" 
<i><sup>or</sup>→</i> "CMU Computer Science Department" 

```
**Affected By:** 



The implementation, the location of the computer hardware, and the installation/configuration process. 



