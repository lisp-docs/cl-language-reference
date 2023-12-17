**formatter** *Macro* 



**Syntax:** 



**formatter** *control-string → function* 



**Arguments and Values:** 



*control-string*—a *format string*; not evaluated. 



*function*—a *function*. 



**Description:** 



Returns a *function* which has behavior equivalent to: 



#’(lambda (\*standard-output\* &amp;rest arguments) 



(apply #’format t *control-string* arguments) 



*arguments-tail*) 



where *arguments-tail* is either the tail of *arguments* which has as its *car* the argument that would be processed next if there were more format directives in the *control-string*, or else **nil** if no more *arguments* follow the most recently processed argument. 



**Examples:**
```lisp
 

(funcall (formatter "~&amp;~A~A") \*standard-output\* ’a ’b ’c) 

▷ AB 

→ (C) 



 

 

(format t (formatter "~&amp;~A~A") ’a ’b ’c) 

▷ AB 

→ NIL 


```
**Exceptional Situations:** 



Might signal an error (at macro expansion time or at run time) if the argument is not a valid *format string*. 



**See Also:** 



**format** 



