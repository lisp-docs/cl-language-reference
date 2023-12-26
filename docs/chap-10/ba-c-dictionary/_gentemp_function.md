**gentemp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> &amp;optional *prefix package → new-symbol* 



**Arguments and Values:** 



*prefix*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The default is "T". 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*new-symbol*—a <GlossaryTerm  term={"fresh"}><i>fresh</i></GlossaryTerm>, *interned symbol*. 



**Description:** 



<DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> creates and returns a *fresh symbol*, <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in the indicated <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is guaranteed to be one that was not previously <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. It is neither <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> nor <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, and has a *null property list*. 



The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the *new-symbol* is the concatenation of the *prefix* and a suffix, which is taken from an internal counter used only by <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink>. (If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by that name is already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, the counter is incremented as many times as is necessary to produce a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is not already the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a *symbol accessible* in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>.) 



**Examples:**
```lisp
(gentemp) → T1298 
(gentemp "FOO") → FOO1299 
(find-symbol "FOO1300") → NIL, NIL 
(gentemp "FOO") → FOO1300 
(find-symbol "FOO1300") → FOO1300, :INTERNAL 
(intern "FOO1301") → FOO1301, :INTERNAL 
(gentemp "FOO") → FOO1302 
(gentemp) → T1303 
```
**Side Effects:** 



Its internal counter is incremented one or more times. 



<GlossaryTerm  term={"intern"}><i>Interns</i></GlossaryTerm> the *new-symbol* in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Affected By:** 



The current state of its internal counter, and the current state of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 







 



 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *prefix* is not a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> 



**Notes:** 



The function <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> is deprecated. 



If <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, the result is an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. Otherwise, the result is an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



The <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> internal counter is independent of <DictionaryLink  term={"gensym-counter"}><b>\*gensym-counter\*</b></DictionaryLink>, the counter used by <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink>. There is no provision for accessing the <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> internal counter. 



Just because <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink> creates a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> which did not previously exist does not mean that such a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> might not be seen in the future (*e.g.*, in a data file—perhaps even created by the same program in another session). As such, this symbol is not truly unique in the same sense as a <GlossaryTerm  term={"gensym"}><i>gensym</i></GlossaryTerm> would be. In particular, programs which do automatic code generation should be careful not to attach global attributes to such generated <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> (*e.g.*, <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>) and then write them into a file because such global attributes might, in a different session, end up applying to other <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that were automatically generated on another day for some other purpose. 



