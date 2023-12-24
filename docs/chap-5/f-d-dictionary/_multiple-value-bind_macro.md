**multiple-value-bind** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> (*\{var\}*\*) *values-form \{declaration\}*\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



*! \{result\}*\* 



Data and Control 



 



 



**Arguments and Values:** 



*var*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a variable; not evaluated. 



*values-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Creates new variable <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> for the *vars* and executes a series of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that use these <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. The variable <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> created are lexical unless <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declarations are specified. 



*Values-form* is evaluated, and each of the *vars* is bound to the respective value returned by that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. If there are more *vars* than values returned, extra values of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> are given to the remaining *vars*. If there are more values than *vars*, the excess values are discarded. The *vars* are bound to the values over the execution of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, which make up an implicit <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>. The consequences are unspecified if a type <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> is specified for a *var*, but the value to which that *var* is bound is not consistent with the type <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



The <ClLinks styled={true} term={"scope"}><i>scopes</i></ClLinks> of the name binding and <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks> do not include the *values-form*. 



**Examples:**
```lisp

(multiple-value-bind (f r) 
    (floor 130 11) 
  (list f r)) *!* (11 9) 

```
**See Also:** 



<ClLinks styled={true} term={"let"}><b>let</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks> 



**Notes:** 



(multiple-value-bind (*\{var\}*\*) *values-form \{form\}*\*) 



*⌘* (multiple-value-call #’(lambda (&amp;optional *\{var\}*\* &amp;rest #1=#:ignore) 



(declare (ignore #1#)) 



<ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



*values-form*) 







 



 



