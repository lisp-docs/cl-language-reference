 



A <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm> if each of the following is either *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> (other than <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> that results from <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"programmer code"}><i>programmer code</i></GlossaryTerm>): 



*•* the <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm>. 



*•* the definition of the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> being *called*. 



*•* the point of <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> 



The following special cases require some elaboration: 



*•* If the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> being called is a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, it is considered <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm> if all of the following are *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm>: 



– its definition (if it was defined explicitly). 



– the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> definitions for all <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>. 



– the definition of its <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm>. 



*•* For the form (coerce *x* ’function), where *x* is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the global environment at the time the <DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> is *executed* applies to the resulting <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



*•* For a call to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> passed as the :environment <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> applies to the resulting <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*•* For a call to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> with a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> as the <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> at the time <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> is *called* applies to the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. 



*•* For a call to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> with only one argument, if the original definition of the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> was <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>, then the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> must also be <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>. 



*•* A <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> to a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> by <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be considered <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm> if each of the following is *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm>: 



– the definition of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> (if it was defined explicitly).  







– the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> definitions for all <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>. 



– the definition of the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm>. 



– the point of entry into the body of the *method defining form*, where the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is established. 



– the point of <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> of the name <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"unsafe call"}><i>unsafe call</i></GlossaryTerm> is a <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>. 



The informal intent is that the <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> can rely on a <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> to be <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>, even when <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> is involved, if all reasonable steps have been taken to ensure that the <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> is <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>. For example, if a <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> calls <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink> from *safe code* and supplies a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that was *compiled* as <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>, the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is required to ensure that <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink> makes a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm> as well. 



