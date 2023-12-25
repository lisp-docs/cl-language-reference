**gentemp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> &amp;optional *prefix package → new-symbol* 



**Arguments and Values:** 



*prefix*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. The default is "T". 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 



*new-symbol*—a <ClLinks styled={true} term={"fresh"}><i>fresh</i></ClLinks>, *interned symbol*. 



**Description:** 



<ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> creates and returns a *fresh symbol*, *interned* in the indicated <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is guaranteed to be one that was not previously <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. It is neither <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> nor <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, and has a *null property list*. 



The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *new-symbol* is the concatenation of the *prefix* and a suffix, which is taken from an internal counter used only by <ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks>. (If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by that name is already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, the counter is incremented as many times as is necessary to produce a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is not already the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a *symbol accessible* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>.) 



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



<ClLinks styled={true} term={"intern"}><i>Interns</i></ClLinks> the *new-symbol* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Affected By:** 



The current state of its internal counter, and the current state of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 







 



 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *prefix* is not a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not a *package designator* . 



**See Also:** 



<ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks> 



**Notes:** 



The function <ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> is deprecated. 



If <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, the result is an *external symbol* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. Otherwise, the result is an *internal symbol* of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



The <ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> internal counter is independent of <ClLinks styled={true} term={"gensym-counter"}><b>\*gensym-counter\*</b></ClLinks>, the counter used by <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks>. There is no provision for accessing the <ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> internal counter. 



Just because <ClLinks styled={true} term={"gentemp"}><b>gentemp</b></ClLinks> creates a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which did not previously exist does not mean that such a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> might not be seen in the future (*e.g.*, in a data file—perhaps even created by the same program in another session). As such, this symbol is not truly unique in the same sense as a <ClLinks styled={true} term={"gensym"}><i>gensym</i></ClLinks> would be. In particular, programs which do automatic code generation should be careful not to attach global attributes to such generated <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> (*e.g.*, <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks>) and then write them into a file because such global attributes might, in a different session, end up applying to other <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that were automatically generated on another day for some other purpose. 



