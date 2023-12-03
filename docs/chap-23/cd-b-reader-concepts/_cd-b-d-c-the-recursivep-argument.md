 

If *recursive-p* is supplied and not **nil**, it specifies that this function call is not an outermost call to **read** but an embedded call, typically from a *reader macro function*. It is important to distinguish such recursive calls for three reasons. 

1\. An outermost call establishes the context within which the #*n*= and #*n*# syntax is scoped. Consider, for example, the expression 

(cons ’#3=(p q r) ’(x y . #3#)) 

If the *single-quote reader macro* were defined in this way: 

(set-macro-character #\’ ;incorrect 

#’(lambda (stream char) 

(declare (ignore char)) 

(list ’quote (read stream)))) 

then each call to the *single-quote reader macro function* would establish independent contexts for the scope of **read** information, including the scope of identifications between markers like “#3=” and “#3#”. However, for this expression, the scope was clearly intended to be determined by the outer set of parentheses, so such a definition would be incorrect. The correct way to define the *single-quote reader macro* uses *recursive-p*: 

(set-macro-character #\’ ;correct 

#’(lambda (stream char) 

(declare (ignore char)) 

(list ’quote (read stream t nil t)))) 

2\. A recursive call does not alter whether the reading process is to preserve *whitespace*&#60;sub&#62;2&#60;/sub&#62; or not (as determined by whether the outermost call was to **read** or **read-preserving-whitespace**). Suppose again that *single-quote* were to be defined as shown above in the incorrect definition. Then a call to **read-preserving-whitespace** that read the expression ’foo*hSpacei* would fail to preserve the space character following the symbol foo because the *single-quote reader macro function* calls **read**, not **read-preserving-whitespace**, to read the following expression (in this case foo). The correct definition, which passes the value *true* for *recursive-p* to **read**, allows the outermost call to determine whether *whitespace*&#60;sub&#62;2&#60;/sub&#62; is preserved. 

3\. When end-of-file is encountered and the *eof-error-p* argument is not **nil**, the kind of error that is signaled may depend on the value of *recursive-p*. If *recursive-p* is *true*, then the end-of-file is deemed to have occurred within the middle of a printed representation; if *recursive-p* is *false*, then the end-of-file may be deemed to have occurred between *objects* rather than within the middle of one. 



 

 

