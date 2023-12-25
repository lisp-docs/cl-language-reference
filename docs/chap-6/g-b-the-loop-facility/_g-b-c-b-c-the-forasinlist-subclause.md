 



In the *for-as-in-list* subclause, the for or as construct iterates over the contents of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. It checks for the end of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> as if by using <ClLinks styled={true} term={"endp"}><b>endp</b></ClLinks>. The variable *var* is bound to the successive elements of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> in *form1* before each iteration. At the end of each iteration, the function *step-fun* is applied to the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>; the default value for *step-fun* is <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>. The *loop keywords* in and by serve as valid prepositions in this syntax. The for or as construct causes termination when the end of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is reached. 



