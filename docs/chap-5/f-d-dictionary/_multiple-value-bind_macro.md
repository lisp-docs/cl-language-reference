**multiple-value-bind** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> (*\{var\}*\*) *values-form \{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*! \{result\}*\* 



Data and Control 



 



 



**Arguments and Values:** 



*var*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a variable; not evaluated. 



*values-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Creates new variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> for the *vars* and executes a series of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> that use these <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. The variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> created are lexical unless <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declarations are specified. 



*Values-form* is evaluated, and each of the *vars* is bound to the respective value returned by that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. If there are more *vars* than values returned, extra values of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> are given to the remaining *vars*. If there are more values than *vars*, the excess values are discarded. The *vars* are bound to the values over the execution of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, which make up an implicit <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>. The consequences are unspecified if a type <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> is specified for a *var*, but the value to which that *var* is bound is not consistent with the type <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



The <GlossaryTerm  term={"scope"}><i>scopes</i></GlossaryTerm> of the name binding and <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm> do not include the *values-form*. 



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



<GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*values-form*) 







 



 



