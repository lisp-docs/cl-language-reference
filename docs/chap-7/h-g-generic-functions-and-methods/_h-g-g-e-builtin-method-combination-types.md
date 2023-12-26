 



The object system provides a set of built-in method combination types. To specify that a generic function is to use one of these method combination types, the name of the method combination type is given as the argument to the :method-combination option to <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> or to the :method-combination option to any of the other operators that specify generic function options. 



The names of the built-in method combination types are listed in Figure 7–2. 



|**+ append max nconc progn and list min or standard**|

| :- |





**Figure 7–2. Built-in Method Combination Types** 



The semantics of the **standard** built-in method combination type is described in Section 7.6.6.2 (Standard Method Combination). The other built-in method combination types are called simple built-in method combination types. 



The simple built-in method combination types act as though they were defined by the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. They recognize two roles for <ClLinks  term={"method"}><i>methods</i></ClLinks>: 



*•* An <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> has the keyword symbol :around as its sole <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . The meaning of :around <ClLinks  term={"method"}><i>methods</i></ClLinks> is the same as in standard method combination. Use of the functions <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> is supported in <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>. 



*•* A primary method has the name of the method combination type as its sole <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . For example, the built-in method combination type and recognizes methods whose sole <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is and; these are primary methods. Use of the functions <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> is not supported in <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm>. 



The semantics of the simple built-in method combination types is as follows: 



*•* If there are any <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>, the most specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> is called. It supplies the value or values of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



*•* Inside the body of an <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm>, the function <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can be used to call the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"no-next-method"}><b>no-next-method</b></DictionaryLink> is invoked if <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is used and there is no applicable method to call. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> may be used to determine whether a <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> exists. When the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> returns, the <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> can execute more code, perhaps based on the returned value or values. 







 



 



*•* If an <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> invokes <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, the next most specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> is called, if one is applicable. If there are no <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> or if <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> is called by the least specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm>, a Lisp form derived from the name of the built-in method combination type and from the list of applicable primary methods is evaluated to produce the value of the generic function. Suppose the name of the method combination type is <ClLinks  term={"operator"}><i>operator</i></ClLinks> and the call to the generic function is of the form 



(<i>generic-function a</i><sub>1</sub> <i>. . . a<sub>n</sub></i>) 



Let <i>M</i><sub>1</sub><i>, . . . , M<sub>k</sub></i> be the applicable primary methods in order; then the derived Lisp form is (<i>operator hM</i><sub>1</sub> <i>a</i><sub>1</sub> <i>. . . a<sub>n</sub>i. . .hM<sub>k</sub> a</i><sub>1</sub> <i>. . . a<sub>n</sub>i</i>) 



If the expression <i>hM<sub>i</sub> a</i><sub>1</sub> <i>. . . a<sub>n</sub>i</i> is evaluated, the method <i>M<sub>i</sub></i> will be applied to the arguments <i>a</i><sub>1</sub> <i>. . . a<sub>n</sub></i>. For example, if <i>operator</i> is or, the expression <i>hM<sub>i</sub> a</i><sub>1</sub> <i>. . . a<sub>n</sub>i</i> is evaluated only if <i>hM<sub>j</sub> a</i><sub>1</sub> <i>. . . a<sub>n</sub>i</i>, 1 <i>≤ j</i> &lt; <i>i</i>, returned nil. 



The default order for the primary methods is :most-specific-first. However, the order can be reversed by supplying :most-specific-last as the second argument to the :method-combination option. 



The simple built-in method combination types require exactly one <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> per method. An error is signaled if there are applicable methods with no <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> or with <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> that are not supported by the method combination type. An error is signaled if there are applicable <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> and no applicable primary methods. 



