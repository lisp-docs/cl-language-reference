 



It is not permitted to supply a keyword argument to a <ClLinks  term={"function"}><i>function</i></ClLinks> using a name that is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



If this <ClLinks  term={"situation"}><i>situation</i></ClLinks> occurs in a *safe call*, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an *unsafe call* the <ClLinks  term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



