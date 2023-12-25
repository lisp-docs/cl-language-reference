 



If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, the ordered set of *applicable methods* for the changed set of <ClLinks  term={"argument"}><i>arguments</i></ClLinks> for <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> must be the same as the ordered set of *applicable methods* for the original <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the *generic function*, or else an error should be signaled. 



The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers. 



If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called with <ClLinks  term={"argument"}><i>arguments</i></ClLinks> that specify a different ordered set of <ClLinks  term={"applicable"}><i>applicable</i></ClLinks> methods and there is no *next method* available, the test for different methods and the associated error signaling (when present) takes precedence over calling <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks>.  







