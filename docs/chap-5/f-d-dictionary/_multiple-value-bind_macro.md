**multiple-value-bind** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> (*\{var\}*\*) *values-form \{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*! \{result\}*\* 



Data and Control 



 



 



**Arguments and Values:** 



*var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a variable; not evaluated. 



*values-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Creates new variable <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> for the *vars* and executes a series of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that use these <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. The variable <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> created are lexical unless <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> declarations are specified. 



*Values-form* is evaluated, and each of the *vars* is bound to the respective value returned by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. If there are more *vars* than values returned, extra values of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> are given to the remaining *vars*. If there are more values than *vars*, the excess values are discarded. The *vars* are bound to the values over the execution of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, which make up an implicit <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink>. The consequences are unspecified if a type <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is specified for a *var*, but the value to which that *var* is bound is not consistent with the type <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"scope"}><i>scopes</i></GlossaryTerm> of the name binding and <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> do not include the *values-form*. 



**Examples:**
```lisp

(multiple-value-bind (f r) 
    (floor 130 11) 
  (list f r)) *!* (11 9) 

```
**See Also:** 



<DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> 



**Notes:** 



(multiple-value-bind (*\{var\}*\*) *values-form \{form\}*\*) 



*⌘* (multiple-value-call #’(lambda (&amp;optional *\{var\}*\* &amp;rest #1=#:ignore) 



(declare (ignore #1#)) 



<GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*values-form*) 







 



 



