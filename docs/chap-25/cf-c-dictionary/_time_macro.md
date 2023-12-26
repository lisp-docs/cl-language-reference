**time** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"time"}><b>time</b></ClLinks> *form → \{result\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"time"}><b>time</b></ClLinks> evaluates <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the current <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> (lexical and dynamic). A call to <ClLinks styled={true} term={"time"}><b>time</b></ClLinks> can be compiled. 



<ClLinks styled={true} term={"time"}><b>time</b></ClLinks> prints various timing data and other information to <GlossaryTerm styled={true} term={"trace output"}><i>trace output</i></GlossaryTerm>. The nature and format of the printed information is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. Implementations are encouraged to provide such information as elapsed real time, machine run time, and storage management statistics. 



**Affected By:** 



The accuracy of the results depends, among other things, on the accuracy of the corresponding functions provided by the underlying operating system. 



The magnitude of the results may depend on the hardware, the operating system, the lisp implementation, and the state of the global environment. Some specific issues which frequently affect the outcome are hardware speed, nature of the scheduler (if any), number of competing processes (if any), system paging, whether the call is interpreted or compiled, whether functions called are compiled, the kind of garbage collector involved and whether it runs, whether internal data structures (e.g., hash tables) are implicitly reorganized, *etc.* 







 



 



**See Also:** 



<ClLinks styled={true} term={"get-internal-real-time"}><b>get-internal-real-time</b></ClLinks>, <ClLinks styled={true} term={"get-internal-run-time"}><b>get-internal-run-time</b></ClLinks> 



**Notes:** 



In general, these timings are not guaranteed to be reliable enough for marketing comparisons. Their value is primarily heuristic, for tuning purposes. 



For useful background information on the complicated issues involved in interpreting timing results, see *Performance and Evaluation of Lisp Programs*. 



