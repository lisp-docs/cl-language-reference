 



The do (or doing) construct evaluates all <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in its clause. 



The return construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are immediately returned by the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> form. It is equivalent to the clause do (return-from *block-name value*), where *block-name* is the name specified in a named clause, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there is no named clause. 



For more information, see Section 6.1.5 (Unconditional Execution Clauses). 



