 



A <ClLinks  term={"call"}><i>call</i></ClLinks> is a *safe call* if each of the following is either *safe code* or *system code* (other than *system code* that results from *macro expansion* of *programmer code*): 



*•* the <ClLinks  term={"call"}><i>call</i></ClLinks>. 



*•* the definition of the <ClLinks  term={"function"}><i>function</i></ClLinks> being *called*. 



*•* the point of *functional evaluation* 



The following special cases require some elaboration: 



*•* If the <ClLinks  term={"function"}><i>function</i></ClLinks> being called is a *generic function*, it is considered <ClLinks  term={"safe"}><i>safe</i></ClLinks> if all of the following are *safe code* or *system code*: 



– its definition (if it was defined explicitly). 



– the <ClLinks  term={"method"}><i>method</i></ClLinks> definitions for all *applicable methods*. 



– the definition of its *method combination*. 



*•* For the form (coerce *x* ’function), where *x* is a *lambda expression*, the value of the *optimize quality* **safety** in the global environment at the time the <ClLinks  term={"coerce"}><b>coerce</b></ClLinks> is *executed* applies to the resulting <ClLinks  term={"function"}><i>function</i></ClLinks>. 



*•* For a call to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>, the value of the *optimize quality* **safety** in the *environment object* passed as the :environment <ClLinks  term={"argument"}><i>argument</i></ClLinks> applies to the resulting *generic function*. 



*•* For a call to <ClLinks  term={"compile"}><b>compile</b></ClLinks> with a *lambda expression* as the <ClLinks  term={"argument"}><i>argument</i></ClLinks>, the value of the *optimize quality* **safety** in the *global environment* at the time <ClLinks  term={"compile"}><b>compile</b></ClLinks> is *called* applies to the resulting *compiled function*. 



*•* For a call to <ClLinks  term={"compile"}><b>compile</b></ClLinks> with only one argument, if the original definition of the <ClLinks  term={"function"}><i>function</i></ClLinks> was <ClLinks  term={"safe"}><i>safe</i></ClLinks>, then the resulting *compiled function* must also be <ClLinks  term={"safe"}><i>safe</i></ClLinks>. 



*•* A <ClLinks  term={"call"}><i>call</i></ClLinks> to a <ClLinks  term={"method"}><i>method</i></ClLinks> by <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> must be considered <ClLinks  term={"safe"}><i>safe</i></ClLinks> if each of the following is *safe code* or *system code*: 



– the definition of the *generic function* (if it was defined explicitly).  







– the <ClLinks  term={"method"}><i>method</i></ClLinks> definitions for all *applicable methods*. 



– the definition of the *method combination*. 



– the point of entry into the body of the *method defining form*, where the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is established. 



– the point of *functional evaluation* of the name <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>. 



An *unsafe call* is a <ClLinks  term={"call"}><i>call</i></ClLinks> that is not a *safe call*. 



The informal intent is that the <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> can rely on a <ClLinks  term={"call"}><i>call</i></ClLinks> to be <ClLinks  term={"safe"}><i>safe</i></ClLinks>, even when *system code* is involved, if all reasonable steps have been taken to ensure that the <ClLinks  term={"call"}><i>call</i></ClLinks> is <ClLinks  term={"safe"}><i>safe</i></ClLinks>. For example, if a <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> calls <ClLinks  term={"mapcar"}><b>mapcar</b></ClLinks> from *safe code* and supplies a <ClLinks  term={"function"}><i>function</i></ClLinks> that was *compiled* as <ClLinks  term={"safe"}><i>safe</i></ClLinks>, the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to ensure that <ClLinks  term={"mapcar"}><b>mapcar</b></ClLinks> makes a *safe call* as well. 



