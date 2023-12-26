 



The do and doing constructs evaluate the supplied <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> wherever they occur in the expanded form of <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> argument can be any <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>. Each <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated in every iteration. Because every loop clause must begin with a <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm>, the keyword do is used when no control action other than execution is required. 



The return construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are immediately returned by the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> form. It is equivalent to the clause do (return-from *block-name value*), where *block-name* is the name specified in a named clause, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there is no named clause. 







 



 



