**function** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents code to be executed when an appropriate number of arguments is supplied. A <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is produced by the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink>, or the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can be directly invoked by using it as the first argument to <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>, <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>, or <DictionaryLink styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink>. 



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



The list form of the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *type-specifier* can be used only for declaration and not for discrimination. Every element of this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that accepts arguments of the types specified by the *argj-types* and returns values that are members of the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> specified by *value-type*. The **&amp;optional**, **&amp;rest**, **&amp;key**, and **&amp;allow-other-keys** markers can appear in the list of argument types. The *type specifier* provided with **&amp;rest** is the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of each actual argument, not the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the corresponding variable. 



The **&amp;key** parameters should be supplied as lists of the form (*keyword type*). The <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> must be a valid keyword-name symbol as must be supplied in the actual arguments of a call. This is usually a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> but can be any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. When **&amp;key** is given in a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *type specifier lambda list*, the *keyword parameters* given are exhaustive unless **&amp;allow-other-keys** is also present. **&amp;allow-other-keys** is an indication that other keyword arguments might actually be supplied and, if supplied, can be used. For example, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-list"}><b>make-list</b></DictionaryLink> could be declared as follows:  







(function ((integer 0) &amp;key (:initial-element t)) list) 



The *value-type* can be a <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> *type specifier* in order to indicate the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of *multiple values*. Consider a declaration of the following form: 



(ftype (function (arg0-type arg1-type ...) val-type) f)) 



Any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (f arg0 arg1 ...) within the scope of that declaration is equivalent to the following: (the val-type (f (the arg0-type arg0) (the arg1-type arg1) ...)) 



That is, the consequences are undefined if any of the arguments are not of the specified <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> or the result is not of the specified <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. In particular, if any argument is not of the correct <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, the result is not guaranteed to be of the specified <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



Thus, an <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declaration for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> describes <GlossaryTerm styled={true} term={"call"}><i>calls</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, not the actual definition of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



Consider a declaration of the following form: 



(type (function (arg0-type arg1-type ...) val-type) fn-valued-variable) 



This declaration has the interpretation that, within the scope of the declaration, the consequences are unspecified if the value of fn-valued-variable is called with arguments not of the specified <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>; the value resulting from a valid call will be of type val-type. 



As with variable type declarations, nested declarations imply intersections of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>, as follows: 



*•* Consider the following two declarations of <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink>: 



(ftype (function (arg0-type1 arg1-type1 ...) val-type1) f)) 



and 



(ftype (function (arg0-type2 arg1-type2 ...) val-type2) f)) 



If both these declarations are in effect, then within the shared scope of the declarations, calls to f can be treated as if f were declared as follows: 



(ftype (function ((and arg0-type1 arg0-type2) (and arg1-type1 arg1-type2 ...) ...) (and val-type1 val-type2)) 



f)) 



It is permitted to ignore one or all of the <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> declarations in force. 



*•* If two (or more) type declarations are in effect for a variable, and they are both function declarations, the declarations combine similarly.  







