 



It is not permitted to supply too many <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. Too many arguments means more <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> than the number of *required parameters* plus the number of *optional parameters*; however, if the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> uses **&amp;rest** or **&amp;key**, it is not possible for it to receive too many arguments. 



If this <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> occurs in a *safe call*, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> must be signaled; and in an *unsafe call* the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> has undefined consequences. 



