**formatter** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"formatter"}><b>formatter</b></ClLinks> *control-string → function* 



**Arguments and Values:** 



*control-string*—a *format string*; not evaluated. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which has behavior equivalent to: 



#’(lambda (\*standard-output\* &amp;rest arguments) 



(apply #’format t *control-string* arguments) 



*arguments-tail*) 



where *arguments-tail* is either the tail of <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> which has as its <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> the argument that would be processed next if there were more format directives in the *control-string*, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no more <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> follow the most recently processed argument. 



**Examples:**
```lisp
(funcall (formatter "~&~A~A") \*standard-output\* ’a ’b ’c) 
▷ AB 
→ (C) 

(format t (formatter "~&~A~A") ’a ’b ’c) 
▷ AB 
→ NIL 
```
**Exceptional Situations:** 



Might signal an error (at macro expansion time or at run time) if the argument is not a valid *format string*. 



**See Also:** 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> 



