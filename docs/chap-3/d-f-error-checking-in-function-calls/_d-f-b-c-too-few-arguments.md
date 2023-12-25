 



It is not permitted to supply too few <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to a <ClLinks  term={"function"}><i>function</i></ClLinks>. Too few arguments means fewer <ClLinks  term={"argument"}><i>arguments</i></ClLinks> than the number of *required parameters* for the <ClLinks  term={"function"}><i>function</i></ClLinks>. 



If this <ClLinks  term={"situation"}><i>situation</i></ClLinks> occurs in a *safe call*, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> must be signaled; and in an *unsafe call* the <ClLinks  term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



