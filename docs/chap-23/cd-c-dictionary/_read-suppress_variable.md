*∗***read-suppress***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*false*. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the *reader macros* which implement these notations to be able to skip over the printed representation of an *expression* despite the possibility that the syntax of the skipped *expression* may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is *false*, the *Lisp reader* operates normally. 



If the *value* of **\*read-suppress\*** is *true*, **read**, **read-preserving-whitespace**, **read-delimited-list**, and **read-from-string** all return a *primary value* of **nil** when they complete successfully; however, they continue to parse the representation of an *object* in the normal way, in order to skip over the *object*, and continue to indicate *end of file* in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to *read* <sub>2</sub> a following *object* or *token* will do so, but not signal an error if the *object* read is not of an appropriate type or syntax. The *standard syntax* and its associated *reader macros* will not construct any new *objects* (*e.g.*, when reading the representation of a *symbol*, no *symbol* will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid *potential numbers*, invalid patterns of *package markers*, and invalid uses of the *dot* character are suppressed. 



Dispatching macro characters (including *sharpsign*) 



*Dispatching macro characters* continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following *object*. It produces no *object*, but is treated as *whitespace*<sub>2</sub>. 







 



 



\## 



The ## notation always produces **nil**. 



No matter what the *value* of **\*read-suppress\***, parentheses still continue to delimit and construct *lists*; the #( notation continues to delimit *vectors*; and comments, *strings*, and the *single-quote* and *backquote* notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #*hSpacei* continue to signal errors. 



**Examples:**
```lisp

(let ((\*read-suppress\* t)) 
  (mapcar #’read-from-string 
	    ’("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" 
			       "#.(PRINT ’FOO)" "#3AHELLO" "#S(INTEGER)" 
			       "#\*ABC" "#\GARBAGE" "#RALPHA" "#3R444"))) 
→ (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) 
```
**See Also:** 



**read**, Chapter 2 (Syntax) 



**Notes:** 



*Programmers* and *implementations* that define additional *macro characters* are strongly encouraged to make them respect **\*read-suppress\*** just as *standardized macro characters* do. That is, when the *value* of **\*read-suppress\*** is *true*, they should ignore type errors when reading a following *object* and the *functions* that implement *dispatching macro characters* should tolerate **nil** as their infix *parameter* value even if a numeric value would ordinarily be required. 



