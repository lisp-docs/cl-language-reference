**trace, untrace** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> *\{function-name\}*\* *→ trace-result* 



<DictionaryLink styled={true} term={"untrace"}><b>untrace</b></DictionaryLink> *\{function-name\}*\* *→ untrace-result* 



**Arguments and Values:** 



*function-name*—a *function name*. 



*trace-result*—<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, unless no *function-names* are supplied, in which case *trace-result* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *function names*. 



*untrace-result*—<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> and <DictionaryLink styled={true} term={"untrace"}><b>untrace</b></DictionaryLink> control the invocation of the trace facility. 



Invoking <DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> with one or more *function-names* causes the denoted <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> to be “traced.” Whenever a traced <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is invoked, information about the call, about the arguments passed, and about any eventually returned values is printed to *trace output*. If <DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> is used with no *function-names*, no tracing action is performed; instead, a list of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> currently being traced is returned. 



Invoking <DictionaryLink styled={true} term={"untrace"}><b>untrace</b></DictionaryLink> with one or more function names causes those functions to be “untraced” (*i.e.*, no longer traced). If <DictionaryLink styled={true} term={"untrace"}><b>untrace</b></DictionaryLink> is used with no *function-names*, all <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> currently being traced are untraced. 



If a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be traced has been open-coded (*e.g.*, because it was declared <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>), a call to that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> might not produce trace output. 



**Examples:**
```lisp

(defun fact (n) (if (zerop n) 1 (\* n (fact (- n 1))))) 
*→* FACT 
(trace fact) 
*→* (FACT) 
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
*→* 6 

```
**Side Effects:** 



Might change the definitions of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> named by *function-names*. 



**Affected By:** 



Whether the functions named are defined or already being traced. 



**Exceptional Situations:** 



Tracing an already traced function, or untracing a function not currently being traced, should produce no harmful effects, but might signal a warning. 



**See Also:** 



**\*trace-output\***, <DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> and <DictionaryLink styled={true} term={"untrace"}><b>untrace</b></DictionaryLink> may also accept additional <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> argument formats. The format of the trace output is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



Although <DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> can be extended to permit non-standard options, <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> are nevertheless encouraged (but not required) to warn about the use of syntax or options that are neither specified by this standard nor added as an extension by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, since they could be symptomatic of typographical errors or of reliance on features supported in <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> other than the current <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



