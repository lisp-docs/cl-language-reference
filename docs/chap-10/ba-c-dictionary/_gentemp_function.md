**gentemp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> &amp;optional *prefix package → new-symbol* 



**Arguments and Values:** 



*prefix*—a <ClLinks  term={"string"}><i>string</i></ClLinks>. The default is "T". 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*new-symbol*—a <ClLinks  term={"fresh"}><i>fresh</i></ClLinks>, *interned symbol*. 



**Description:** 



<ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> creates and returns a *fresh symbol*, <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in the indicated <ClLinks  term={"package"}><i>package</i></ClLinks>. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is guaranteed to be one that was not previously <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>. It is neither <ClLinks  term={"bound"}><i>bound</i></ClLinks> nor <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, and has a *null property list*. 



The <ClLinks  term={"name"}><i>name</i></ClLinks> of the *new-symbol* is the concatenation of the *prefix* and a suffix, which is taken from an internal counter used only by <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks>. (If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by that name is already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks>, the counter is incremented as many times as is necessary to produce a <ClLinks  term={"name"}><i>name</i></ClLinks> that is not already the <ClLinks  term={"name"}><i>name</i></ClLinks> of a *symbol accessible* in <ClLinks  term={"package"}><i>package</i></ClLinks>.) 



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



<ClLinks  term={"intern"}><i>Interns</i></ClLinks> the *new-symbol* in <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Affected By:** 



The current state of its internal counter, and the current state of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 







 



 



**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *prefix* is not a <ClLinks  term={"string"}><i>string</i></ClLinks>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"package"}><i>package</i></ClLinks> is not a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**See Also:** 



<ClLinks  term={"gensym"}><b>gensym</b></ClLinks> 



**Notes:** 



The function <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> is deprecated. 



If <ClLinks  term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>, the result is an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks>. Otherwise, the result is an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of <ClLinks  term={"package"}><i>package</i></ClLinks>. 



The <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> internal counter is independent of <ClLinks  term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks>, the counter used by <ClLinks  term={"gensym"}><b>gensym</b></ClLinks>. There is no provision for accessing the <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> internal counter. 



Just because <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks> creates a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> which did not previously exist does not mean that such a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> might not be seen in the future (*e.g.*, in a data file—perhaps even created by the same program in another session). As such, this symbol is not truly unique in the same sense as a <ClLinks  term={"gensym"}><i>gensym</i></ClLinks> would be. In particular, programs which do automatic code generation should be careful not to attach global attributes to such generated <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> (*e.g.*, <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>) and then write them into a file because such global attributes might, in a different session, end up applying to other <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that were automatically generated on another day for some other purpose. 



