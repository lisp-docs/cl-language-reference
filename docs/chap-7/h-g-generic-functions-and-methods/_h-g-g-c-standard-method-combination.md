 



Standard method combination is supported by the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>. It is used if no other type of method combination is specified or if the built-in method combination type **standard** is specified. 



Primary methods define the main action of the effective method, while auxiliary methods modify that action in one of three ways. A primary method has no method <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>. 



An auxiliary method is a method whose <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is :before, :after, or :around. Standard method combination allows no more than one <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> per method; if a method definition specifies more than one <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> per method, an error is signaled. 



*•* A <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> has the keyword :before as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . A <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run before any <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm>. 



*•* An <GlossaryTerm styled={true} term={"after method"}><i>after method</i></GlossaryTerm> has the keyword :after as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . An <GlossaryTerm styled={true} term={"after method"}><i>after method</i></GlossaryTerm> specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run after <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm>. 



*•* An <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> has the keyword :around as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . An <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run instead of other <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>, but which might contain explicit <ClLinks  term={"code"}><i>code</i></ClLinks> which calls some of those *shadowed methods* (via <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>). 



The semantics of standard method combination is as follows: 



*•* If there are any <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>, the most specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> is called. It supplies the value or values of the generic function. 



*•* Inside the body of an <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm>, <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used to call the <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm>. When the next method returns, the <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> can execute more code, perhaps based on the returned value or values. The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is invoked if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used and there is no <GlossaryTerm styled={true} term={"applicable method"}><i>applicable method</i></GlossaryTerm> to call. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> may be used to determine whether a <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> exists. 







 



 



*•* If an <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> invokes <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, the next most specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> is called, if one is applicable. If there are no <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> or if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called by the least specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm>, the other methods are called as follows: 



– All the <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm> are called, in most-specific-first order. Their values are ignored. An error is signaled if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used in a <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm>. 



– The most specific primary method is called. Inside the body of a primary 



method, <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> may be used to call the next most specific primary 



method. When that method returns, the previous primary method can execute 



more code, perhaps based on the returned value or values. The generic function 



<ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is invoked if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used and there are no more 



applicable primary methods. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> may be used to 



determine whether a <GlossaryTerm styled={true} term={"next method"}><i>next method</i></GlossaryTerm> exists. If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is not used, only 



the most specific <GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm> is called. 



– All the <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> are called in most-specific-last order. Their values are 



ignored. An error is signaled if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used in an <GlossaryTerm styled={true} term={"after method"}><i>after method</i></GlossaryTerm>. 



*•* If no <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> were invoked, the most specific primary method supplies the value or values returned by the generic function. The value or values returned by the invocation of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> in the least specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> are those returned by the most specific primary method. 



In standard method combination, if there is an applicable method but no applicable primary method, an error is signaled. 



The <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm> are run in most-specific-first order while the <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> are run in least-specific-first order. The design rationale for this difference can be illustrated with an example. Suppose class *C*<sub>1</sub> modifies the behavior of its superclass, *C*<sub>2</sub>, by adding <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm>. Whether the behavior of the class *C*<sub>2</sub> is defined directly by methods on *C*<sub>2</sub> or is inherited from its superclasses does not affect the relative order of invocation of methods on instances of the class *C*<sub>1</sub>. Class *C*<sub>1</sub>’s <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> runs before all of class *C*<sub>2</sub>’s methods. Class *C*<sub>1</sub>’s <GlossaryTerm styled={true} term={"after method"}><i>after method</i></GlossaryTerm> runs after all of class *C*<sub>2</sub>’s methods. 



By contrast, all <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm> run before any other methods run. Thus a less specific <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> runs before a more specific primary method. 



If only primary methods are used and if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is not used, only the most specific method is invoked; that is, more specific methods shadow more general ones. 



