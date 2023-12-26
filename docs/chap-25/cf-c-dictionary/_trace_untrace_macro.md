**trace, untrace** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> *\{function-name\}*\* → trace-result 



<ClLinks styled={true} term={"untrace"}><b>untrace</b></ClLinks> *\{function-name\}*\* → untrace-result 



**Arguments and Values:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



*trace-result*—<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, unless no *function-names* are supplied, in which case *trace-result* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm>. 



*untrace-result*—<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> and <ClLinks styled={true} term={"untrace"}><b>untrace</b></ClLinks> control the invocation of the trace facility. 



Invoking <ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> with one or more *function-names* causes the denoted <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> to be “traced.” Whenever a traced <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is invoked, information about the call, about the arguments passed, and about any eventually returned values is printed to <GlossaryTerm styled={true} term={"trace output"}><i>trace output</i></GlossaryTerm>. If <ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> is used with no *function-names*, no tracing action is performed; instead, a list of the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> currently being traced is returned. 



Invoking <ClLinks styled={true} term={"untrace"}><b>untrace</b></ClLinks> with one or more function names causes those functions to be “untraced” (*i.e.*, no longer traced). If <ClLinks styled={true} term={"untrace"}><b>untrace</b></ClLinks> is used with no *function-names*, all <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> currently being traced are untraced. 



If a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be traced has been open-coded (*e.g.*, because it was declared <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks>), a call to that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> might not produce trace output. 



**Examples:**
```lisp
(defun fact (n) (if (zerop n) 1 (\* n (fact (- n 1))))) 
→ FACT 
(trace fact) 
→ (FACT) 
;; Of course, the format of traced output is implementation-dependent. 
(fact 3) 
▷ 1 Enter FACT 3 
▷ | 2 Enter FACT 2 
▷ | 3 Enter FACT 1 
▷ | | 4 Enter FACT 0 
▷ | | 4 Exit FACT 1 
▷ | 3 Exit FACT 1 
▷ | 2 Exit FACT 2 

▷ 1 Exit FACT 6 
→ 6 
```
**Side Effects:** 



Might change the definitions of the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> named by *function-names*. 



**Affected By:** 



Whether the functions named are defined or already being traced. 



**Exceptional Situations:** 



Tracing an already traced function, or untracing a function not currently being traced, should produce no harmful effects, but might signal a warning. 



**See Also:** 



**\*trace-output\***, <ClLinks styled={true} term={"step"}><b>step</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> and <ClLinks styled={true} term={"untrace"}><b>untrace</b></ClLinks> may also accept additional <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> argument formats. The format of the trace output is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



Although <ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> can be extended to permit non-standard options, <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> are nevertheless encouraged (but not required) to warn about the use of syntax or options that are neither specified by this standard nor added as an extension by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, since they could be symptomatic of typographical errors or of reliance on features supported in <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> other than the current <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



