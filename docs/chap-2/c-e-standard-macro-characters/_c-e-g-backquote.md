**2.4.6 Backquote**

 

The *backquote* introduces a template of a data structure to be built. For example, writing ‘(cond ((numberp ,x) ,@y) (t (print ,x) ,@y)) 

is roughly equivalent to writing 

(list ’cond 

(cons (list ’numberp x) y) 

(list\* ’t (list ’print x) y)) 

Where a comma occurs in the template, the *expression* following the comma is to be evaluated to produce an *object* to be inserted at that point. Assume b has the value 3, for example, then evaluating the *form* denoted by ‘(a b ,b ,(+ b 1) b) produces the result (a b 3 4 b). 

If a comma is immediately followed by an *at-sign*, then the *form* following the *at-sign* is evaluated to produce a *list* of *objects*. These *objects* are then “spliced” into place in the template. For example, if x has the value (a b c), then 

‘(x ,x ,@x foo ,(cadr x) bar ,(cdr x) baz ,@(cdr x)) 

*→* (x (a b c) a b c foo b bar (b c) baz b c)  



The backquote syntax can be summarized formally as follows. 

*•* ‘*basic* is the same as ’*basic*, that is, (quote *basic*), for any *expression basic* that is not a *list* or a general *vector* . 

*•* ‘,*form* is the same as *form*, for any *form*, provided that the representation of *form* does not begin with *at-sign* or *dot*. (A similar caveat holds for all occurrences of a form after a *comma*.) 

*•* ‘,@*form* has undefined consequences. 

*•* ‘(x1 x2 x3 ... xn . atom) may be interpreted to mean 

(append [x1] [x2] [x3] ... [xn] (quote atom)) 

where the brackets are used to indicate a transformation of an *xj* as follows: 

– [*form*] is interpreted as (list ‘*form*), which contains a backquoted form that must then be further interpreted. 

– [,*form*] is interpreted as (list *form*). 

– [,@*form*] is interpreted as *form*. 

*•* ‘(x1 x2 x3 ... xn) may be interpreted to mean the same as the backquoted form ‘(x1 x2 x3 ... xn . **nil**), thereby reducing it to the previous case. 

*•* ‘(x1 x2 x3 ... xn . ,form) may be interpreted to mean 

(append [x1] [x2] [x3] ... [xn] form) 

where the brackets indicate a transformation of an xj as described above. 

*•* ‘(x1 x2 x3 ... xn . ,@form) has undefined consequences. 

*•* ‘#(x1 x2 x3 ... xn) may be interpreted to mean (apply #’vector ‘(x1 x2 x3 ... xn)). 

Anywhere “,@” may be used, the syntax “,.” may be used instead to indicate that it is permissible to operate *destructively* on the *list structure* produced by the form following the “,.” (in effect, to use **nconc** instead of **append**). 

If the backquote syntax is nested, the innermost backquoted form should be expanded first. This means that if several commas occur in a row, the leftmost one belongs to the innermost *backquote*. 

An *implementation* is free to interpret a backquoted *form F*\<sub\>1\</sub\> as any *form F*\<sub\>2\</sub\> that, when evaluated, will produce a result that is the *same* under **equal** as the result implied by the above definition, provided that the side-effect behavior of the substitute *form F*\<sub\>2\</sub\> is also consistent with the  



description given above. The constructed copy of the template might or might not share *list* structure with the template itself. As an example, the above definition implies that 

‘((,a b) ,c ,@d) 

will be interpreted as if it were 

(append (list (append (list a) (list ’b) ’**nil**)) (list c) d ’**nil**) 

but it could also be legitimately interpreted to mean any of the following: 

(append (list (append (list a) (list ’b))) (list c) d) 

(append (list (append (list a) ’(b))) (list c) d) 

(list\* (cons a ’(b)) c d) 

(list\* (cons a (list ’b)) c d) 

(append (list (cons a ’(b))) (list c) d) 

(list\* (cons a ’(b)) c (copy-list d)) 

