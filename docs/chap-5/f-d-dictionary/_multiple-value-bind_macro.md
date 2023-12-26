**multiple-value-bind** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> (*\{var\}*\*) *values-form \{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



*! \{result\}*\* 



Data and Control 



 



 



**Arguments and Values:** 



*var*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> naming a variable; not evaluated. 



*values-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Creates new variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> for the *vars* and executes a series of <ClLinks  term={"form"}><i>forms</i></ClLinks> that use these <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. The variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> created are lexical unless <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declarations are specified. 



*Values-form* is evaluated, and each of the *vars* is bound to the respective value returned by that <ClLinks  term={"form"}><i>form</i></ClLinks>. If there are more *vars* than values returned, extra values of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> are given to the remaining *vars*. If there are more values than *vars*, the excess values are discarded. The *vars* are bound to the values over the execution of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, which make up an implicit <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>. The consequences are unspecified if a type <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> is specified for a *var*, but the value to which that *var* is bound is not consistent with the type <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



The <ClLinks  term={"scope"}><i>scopes</i></ClLinks> of the name binding and <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> do not include the *values-form*. 



**Examples:**
```lisp
(multiple-value-bind (f r) 
    (floor 130 11) 
  (list f r)) *!* (11 9) 
```
**See Also:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> 



**Notes:** 



(multiple-value-bind (*\{var\}*\*) *values-form \{form\}*\*) 



*⌘* (multiple-value-call #’(lambda (&amp;optional *\{var\}*\* &amp;rest #1=#:ignore) 



(declare (ignore #1#)) 



<ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\*) 



*values-form*) 







 



 



