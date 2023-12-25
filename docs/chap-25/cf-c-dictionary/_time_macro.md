**time** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"time"}><b>time</b></DictionaryLink> *form → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"time"}><b>time</b></DictionaryLink> evaluates <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> (lexical and dynamic). A call to <DictionaryLink styled={true} term={"time"}><b>time</b></DictionaryLink> can be compiled. 



<DictionaryLink styled={true} term={"time"}><b>time</b></DictionaryLink> prints various timing data and other information to *trace output*. The nature and format of the printed information is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. Implementations are encouraged to provide such information as elapsed real time, machine run time, and storage management statistics. 



**Affected By:** 



The accuracy of the results depends, among other things, on the accuracy of the corresponding functions provided by the underlying operating system. 



The magnitude of the results may depend on the hardware, the operating system, the lisp implementation, and the state of the global environment. Some specific issues which frequently affect the outcome are hardware speed, nature of the scheduler (if any), number of competing processes (if any), system paging, whether the call is interpreted or compiled, whether functions called are compiled, the kind of garbage collector involved and whether it runs, whether internal data structures (e.g., hash tables) are implicitly reorganized, *etc.* 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></DictionaryLink>, <DictionaryLink styled={true} term={"get-internal-run-time"}><b>get-internal-run-time</b></DictionaryLink> 



**Notes:** 



In general, these timings are not guaranteed to be reliable enough for marketing comparisons. Their value is primarily heuristic, for tuning purposes. 



For useful background information on the complicated issues involved in interpreting timing results, see *Performance and Evaluation of Lisp Programs*. 



