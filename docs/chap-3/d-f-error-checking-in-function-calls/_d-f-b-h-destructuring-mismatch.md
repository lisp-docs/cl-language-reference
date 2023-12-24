 



When matching a *destructuring lambda list* against a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, the pattern and the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> must have compatible *tree structure*, as described in Section 3.4.4 (Macro Lambda Lists). 



Otherwise, in a *safe call*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> must be signaled; and in an *unsafe call* the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



