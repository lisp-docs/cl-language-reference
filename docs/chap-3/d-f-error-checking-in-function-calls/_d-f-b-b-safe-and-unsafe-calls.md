 



A <ClLinks  term={"call"}><i>call</i></ClLinks> is a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm> if each of the following is either *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> (other than <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> that results from <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"programmer code"}><i>programmer code</i></GlossaryTerm>): 



*•* the <ClLinks  term={"call"}><i>call</i></ClLinks>. 



*•* the definition of the <ClLinks  term={"function"}><i>function</i></ClLinks> being *called*. 



*•* the point of <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> 



The following special cases require some elaboration: 



*•* If the <ClLinks  term={"function"}><i>function</i></ClLinks> being called is a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, it is considered <ClLinks  term={"safe"}><i>safe</i></ClLinks> if all of the following are *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm>: 



– its definition (if it was defined explicitly). 



– the <ClLinks  term={"method"}><i>method</i></ClLinks> definitions for all <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>. 



– the definition of its <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm>. 



*•* For the form (coerce *x* ’function), where *x* is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the global environment at the time the <DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> is *executed* applies to the resulting <ClLinks  term={"function"}><i>function</i></ClLinks>. 



*•* For a call to the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> passed as the :environment <ClLinks  term={"argument"}><i>argument</i></ClLinks> applies to the resulting <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*•* For a call to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> with a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> as the <ClLinks  term={"argument"}><i>argument</i></ClLinks>, the value of the <GlossaryTerm styled={true} term={"optimize quality"}><i>optimize quality</i></GlossaryTerm> **safety** in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> at the time <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> is *called* applies to the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. 



*•* For a call to <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> with only one argument, if the original definition of the <ClLinks  term={"function"}><i>function</i></ClLinks> was <ClLinks  term={"safe"}><i>safe</i></ClLinks>, then the resulting <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm> must also be <ClLinks  term={"safe"}><i>safe</i></ClLinks>. 



*•* A <ClLinks  term={"call"}><i>call</i></ClLinks> to a <ClLinks  term={"method"}><i>method</i></ClLinks> by <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> must be considered <ClLinks  term={"safe"}><i>safe</i></ClLinks> if each of the following is *safe code* or <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm>: 



– the definition of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> (if it was defined explicitly).  







– the <ClLinks  term={"method"}><i>method</i></ClLinks> definitions for all <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>. 



– the definition of the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm>. 



– the point of entry into the body of the *method defining form*, where the <ClLinks  term={"binding"}><i>binding</i></ClLinks> of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is established. 



– the point of <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> of the name <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"unsafe call"}><i>unsafe call</i></GlossaryTerm> is a <ClLinks  term={"call"}><i>call</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>. 



The informal intent is that the <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> can rely on a <ClLinks  term={"call"}><i>call</i></ClLinks> to be <ClLinks  term={"safe"}><i>safe</i></ClLinks>, even when <GlossaryTerm styled={true} term={"system code"}><i>system code</i></GlossaryTerm> is involved, if all reasonable steps have been taken to ensure that the <ClLinks  term={"call"}><i>call</i></ClLinks> is <ClLinks  term={"safe"}><i>safe</i></ClLinks>. For example, if a <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> calls <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink> from *safe code* and supplies a <ClLinks  term={"function"}><i>function</i></ClLinks> that was *compiled* as <ClLinks  term={"safe"}><i>safe</i></ClLinks>, the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is required to ensure that <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink> makes a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm> as well. 



