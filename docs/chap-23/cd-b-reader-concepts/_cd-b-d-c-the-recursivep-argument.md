 



If *recursive-p* is supplied and not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, it specifies that this function call is not an outermost call to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> but an embedded call, typically from a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>. It is important to distinguish such recursive calls for three reasons. 



1\. An outermost call establishes the context within which the #*n*= and #*n*# syntax is scoped. Consider, for example, the expression 



(cons ’#3=(p q r) ’(x y . #3#)) 



If the *single-quote reader macro* were defined in this way: 



(set-macro-character #\’ ;incorrect 



#’(lambda (stream char) 



(declare (ignore char)) 



(list ’quote (read stream)))) 



then each call to the *single-quote reader macro function* would establish independent contexts for the scope of <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> information, including the scope of identifications between markers like “#3=” and “#3#”. However, for this expression, the scope was clearly intended to be determined by the outer set of parentheses, so such a definition would be incorrect. The correct way to define the *single-quote reader macro* uses *recursive-p*: 



(set-macro-character #\’ ;correct 



#’(lambda (stream char) 



(declare (ignore char)) 



(list ’quote (read stream t nil t)))) 



2\. A recursive call does not alter whether the reading process is to preserve <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> or not (as determined by whether the outermost call was to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> or <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks>). Suppose again that <ClLinks styled={true} term={"single-quote"}><i>single-quote</i></ClLinks> were to be defined as shown above in the incorrect definition. Then a call to <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks> that read the expression ’foo*⟨Space⟩* would fail to preserve the space character following the symbol foo because the *single-quote reader macro function* calls <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, not <ClLinks styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks>, to read the following expression (in this case foo). The correct definition, which passes the value <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> for *recursive-p* to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, allows the outermost call to determine whether <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> is preserved. 



3\. When end-of-file is encountered and the *eof-error-p* argument is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the kind of error that is signaled may depend on the value of *recursive-p*. If *recursive-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the end-of-file is deemed to have occurred within the middle of a printed representation; if *recursive-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, then the end-of-file may be deemed to have occurred between <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> rather than within the middle of one. 







 



 



