**gentemp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> &amp;optional *prefix package → new-symbol* 



**Arguments and Values:** 



*prefix*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The default is "T". 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



*new-symbol*—a <GlossaryTerm styled={true} term={"fresh"}><i>fresh</i></GlossaryTerm>, *interned symbol*. 



**Description:** 



<DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> creates and returns a *fresh symbol*, *interned* in the indicated <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is guaranteed to be one that was not previously <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. It is neither <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> nor <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, and has a *null property list*. 



The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *new-symbol* is the concatenation of the *prefix* and a suffix, which is taken from an internal counter used only by <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink>. (If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by that name is already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the counter is incremented as many times as is necessary to produce a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is not already the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a *symbol accessible* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>.) 



**Examples:**
```lisp

(gentemp) *→* T1298 
(gentemp "FOO") *→* FOO1299 
(find-symbol "FOO1300") *→* NIL, NIL 
(gentemp "FOO") *→* FOO1300 
(find-symbol "FOO1300") *→* FOO1300, :INTERNAL 
(intern "FOO1301") *→* FOO1301, :INTERNAL 
(gentemp "FOO") *→* FOO1302 
(gentemp) *→* T1303 

```
**Side Effects:** 



Its internal counter is incremented one or more times. 



<GlossaryTerm styled={true} term={"intern"}><i>Interns</i></GlossaryTerm> the *new-symbol* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Affected By:** 



The current state of its internal counter, and the current state of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 







 



 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *prefix* is not a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not a *package designator* . 



**See Also:** 



<DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> 



**Notes:** 



The function <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> is deprecated. 



If <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the result is an *external symbol* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. Otherwise, the result is an *internal symbol* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



The <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> internal counter is independent of <DictionaryLink styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>, the counter used by <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink>. There is no provision for accessing the <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> internal counter. 



Just because <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink> creates a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which did not previously exist does not mean that such a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> might not be seen in the future (*e.g.*, in a data file—perhaps even created by the same program in another session). As such, this symbol is not truly unique in the same sense as a <GlossaryTerm styled={true} term={"gensym"}><i>gensym</i></GlossaryTerm> would be. In particular, programs which do automatic code generation should be careful not to attach global attributes to such generated <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> (*e.g.*, <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>) and then write them into a file because such global attributes might, in a different session, end up applying to other <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that were automatically generated on another day for some other purpose. 



