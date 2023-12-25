 



A <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> is a *safe call* if each of the following is either *safe code* or *system code* (other than *system code* that results from *macro expansion* of *programmer code*): 



*•* the <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm>. 



*•* the definition of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> being *called*. 



*•* the point of *functional evaluation* 



The following special cases require some elaboration: 



*•* If the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> being called is a *generic function*, it is considered <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm> if all of the following are *safe code* or *system code*: 



– its definition (if it was defined explicitly). 



– the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definitions for all *applicable methods*. 



– the definition of its *method combination*. 



*•* For the form (coerce *x* ’function), where *x* is a *lambda expression*, the value of the *optimize quality* **safety** in the global environment at the time the <DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> is *executed* applies to the resulting <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



*•* For a call to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, the value of the *optimize quality* **safety** in the *environment object* passed as the :environment <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> applies to the resulting *generic function*. 



*•* For a call to <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> with a *lambda expression* as the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>, the value of the *optimize quality* **safety** in the *global environment* at the time <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> is *called* applies to the resulting *compiled function*. 



*•* For a call to <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> with only one argument, if the original definition of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> was <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>, then the resulting *compiled function* must also be <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>. 



*•* A <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> by <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be considered <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm> if each of the following is *safe code* or *system code*: 



– the definition of the *generic function* (if it was defined explicitly).  







– the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definitions for all *applicable methods*. 



– the definition of the *method combination*. 



– the point of entry into the body of the *method defining form*, where the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is established. 



– the point of *functional evaluation* of the name <DictionaryLink styled={true} term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



An *unsafe call* is a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> that is not a *safe call*. 



The informal intent is that the <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> can rely on a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>, even when *system code* is involved, if all reasonable steps have been taken to ensure that the <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>. For example, if a <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> calls <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> from *safe code* and supplies a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that was *compiled* as <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is required to ensure that <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> makes a *safe call* as well. 



