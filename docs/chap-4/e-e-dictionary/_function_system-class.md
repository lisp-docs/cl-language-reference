**function** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents code to be executed when an appropriate number of arguments is supplied. A <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is produced by the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks>, or the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>. A <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can be directly invoked by using it as the first argument to <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks>, <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks>, or <ClLinks styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(function [*arg-typespec* [*value-typespec*]]) 



*arg-typespec::*=(*\{typespec\}*\* 



[&amp;optional *\{typespec\}*\*] 



[&amp;rest *typespec*] 



[&amp;key *\{*(*keyword typespec*)*\}*\*]) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



*value-typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



The list form of the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *type-specifier* can be used only for declaration and not for discrimination. Every element of this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that accepts arguments of the types specified by the *argj-types* and returns values that are members of the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> specified by *value-type*. The **&amp;optional**, **&amp;rest**, **&amp;key**, and **&amp;allow-other-keys** markers can appear in the list of argument types. The *type specifier* provided with **&amp;rest** is the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of each actual argument, not the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the corresponding variable. 



The **&amp;key** parameters should be supplied as lists of the form (*keyword type*). The <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> must be a valid keyword-name symbol as must be supplied in the actual arguments of a call. This is usually a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> but can be any <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. When **&amp;key** is given in a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *type specifier lambda list*, the *keyword parameters* given are exhaustive unless **&amp;allow-other-keys** is also present. **&amp;allow-other-keys** is an indication that other keyword arguments might actually be supplied and, if supplied, can be used. For example, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-list"}><b>make-list</b></ClLinks> could be declared as follows:  







(function ((integer 0) &amp;key (:initial-element t)) list) 



The *value-type* can be a <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> *type specifier* in order to indicate the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> of *multiple values*. Consider a declaration of the following form: 



(ftype (function (arg0-type arg1-type ...) val-type) f)) 



Any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (f arg0 arg1 ...) within the scope of that declaration is equivalent to the following: (the val-type (f (the arg0-type arg0) (the arg1-type arg1) ...)) 



That is, the consequences are undefined if any of the arguments are not of the specified <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> or the result is not of the specified <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. In particular, if any argument is not of the correct <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the result is not guaranteed to be of the specified <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



Thus, an <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> declaration for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> describes <ClLinks styled={true} term={"call"}><i>calls</i></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, not the actual definition of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



Consider a declaration of the following form: 



(type (function (arg0-type arg1-type ...) val-type) fn-valued-variable) 



This declaration has the interpretation that, within the scope of the declaration, the consequences are unspecified if the value of fn-valued-variable is called with arguments not of the specified <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>; the value resulting from a valid call will be of type val-type. 



As with variable type declarations, nested declarations imply intersections of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>, as follows: 



*•* Consider the following two declarations of <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>: 



(ftype (function (arg0-type1 arg1-type1 ...) val-type1) f)) 



and 



(ftype (function (arg0-type2 arg1-type2 ...) val-type2) f)) 



If both these declarations are in effect, then within the shared scope of the declarations, calls to f can be treated as if f were declared as follows: 



(ftype (function ((and arg0-type1 arg0-type2) (and arg1-type1 arg1-type2 ...) ...) (and val-type1 val-type2)) 



f)) 



It is permitted to ignore one or all of the <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> declarations in force. 



*•* If two (or more) type declarations are in effect for a variable, and they are both function declarations, the declarations combine similarly.  







