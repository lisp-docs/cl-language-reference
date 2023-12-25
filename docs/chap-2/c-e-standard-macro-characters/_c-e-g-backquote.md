
 



The <GlossaryTerm styled={true} term={"backquote"}><i>backquote</i></GlossaryTerm> introduces a template of a data structure to be built. For example, writing ‘(cond ((numberp ,x) ,@y) (t (print ,x) ,@y)) 



is roughly equivalent to writing 



(list ’cond 



(cons (list ’numberp x) y) 



(list\* ’t (list ’print x) y)) 



Where a comma occurs in the template, the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> following the comma is to be evaluated to produce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to be inserted at that point. Assume b has the value 3, for example, then evaluating the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> denoted by ‘(a b ,b ,(+ b 1) b) produces the result (a b 3 4 b). 



If a comma is immediately followed by an <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm>, then the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> following the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> is evaluated to produce a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. These <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are then “spliced” into place in the template. For example, if x has the value (a b c), then 



‘(x ,x ,@x foo ,(cadr x) bar ,(cdr x) baz ,@(cdr x)) 



*→* (x (a b c) a b c foo b bar (b c) baz b c)  







The backquote syntax can be summarized formally as follows. 



*•* ‘*basic* is the same as ’*basic*, that is, (quote *basic*), for any *expression basic* that is not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or a general <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



*•* ‘,<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is the same as <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, for any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, provided that the representation of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> does not begin with <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>. (A similar caveat holds for all occurrences of a form after a <GlossaryTerm styled={true} term={"comma"}><i>comma</i></GlossaryTerm>.) 



*•* ‘,@<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> has undefined consequences. 



*•* ‘(x1 x2 x3 ... xn . atom) may be interpreted to mean 



(append [x1] [x2] [x3] ... [xn] (quote atom)) 



where the brackets are used to indicate a transformation of an *xj* as follows: 



– [<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>] is interpreted as (list ‘<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>), which contains a backquoted form that must then be further interpreted. 



– [,<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>] is interpreted as (list <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



– [,@<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>] is interpreted as <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*•* ‘(x1 x2 x3 ... xn) may be interpreted to mean the same as the backquoted form ‘(x1 x2 x3 ... xn . <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>), thereby reducing it to the previous case. 



*•* ‘(x1 x2 x3 ... xn . ,form) may be interpreted to mean 



(append [x1] [x2] [x3] ... [xn] form) 



where the brackets indicate a transformation of an xj as described above. 



*•* ‘(x1 x2 x3 ... xn . ,@form) has undefined consequences. 



*•* ‘#(x1 x2 x3 ... xn) may be interpreted to mean (apply #’vector ‘(x1 x2 x3 ... xn)). 



Anywhere “,@” may be used, the syntax “,.” may be used instead to indicate that it is permissible to operate *destructively* on the *list structure* produced by the form following the “,.” (in effect, to use <DictionaryLink styled={true} term={"nconc"}><b>nconc</b></DictionaryLink> instead of <DictionaryLink styled={true} term={"append"}><b>append</b></DictionaryLink>). 



If the backquote syntax is nested, the innermost backquoted form should be expanded first. This means that if several commas occur in a row, the leftmost one belongs to the innermost <GlossaryTerm styled={true} term={"backquote"}><i>backquote</i></GlossaryTerm>. 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is free to interpret a backquoted *form F*<sub>1</sub> as any *form F*<sub>2</sub> that, when evaluated, will produce a result that is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> as the result implied by the above definition, provided that the side-effect behavior of the substitute *form F*<sub>2</sub> is also consistent with the  







description given above. The constructed copy of the template might or might not share <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> structure with the template itself. As an example, the above definition implies that 



‘((,a b) ,c ,@d) 



will be interpreted as if it were 



(append (list (append (list a) (list ’b) ’<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>)) (list c) d ’<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>) 



but it could also be legitimately interpreted to mean any of the following: 



(append (list (append (list a) (list ’b))) (list c) d) 



(append (list (append (list a) ’(b))) (list c) d) 



(list\* (cons a ’(b)) c d) 



(list\* (cons a (list ’b)) c d) 



(append (list (cons a ’(b))) (list c) d) 



(list\* (cons a ’(b)) c (copy-list d)) 



