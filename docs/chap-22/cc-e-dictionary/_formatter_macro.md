**formatter** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"formatter"}><b>formatter</b></DictionaryLink> *control-string → function* 



**Arguments and Values:** 



*control-string*—a *format string*; not evaluated. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which has behavior equivalent to: 



#’(lambda (\*standard-output\* &amp;rest arguments) 



(apply #’format t *control-string* arguments) 



*arguments-tail*) 



where *arguments-tail* is either the tail of <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> which has as its <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> the argument that would be processed next if there were more format directives in the *control-string*, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no more <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> follow the most recently processed argument. 



**Examples:**
```lisp

(funcall (formatter "~&~A~A") \*standard-output\* ’a ’b ’c) 
▷ AB 
*→* (C) 



(format t (formatter "~&~A~A") ’a ’b ’c) 
▷ AB 
*→* NIL 

```
**Exceptional Situations:** 



Might signal an error (at macro expansion time or at run time) if the argument is not a valid *format string*. 



**See Also:** 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> 



