 



Standard method combination is supported by the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>. It is used if no other type of method combination is specified or if the built-in method combination type **standard** is specified. 



Primary methods define the main action of the effective method, while auxiliary methods modify that action in one of three ways. A primary method has no method <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>. 



An auxiliary method is a method whose <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is :before, :after, or :around. Standard method combination allows no more than one <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> per method; if a method definition specifies more than one <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> per method, an error is signaled. 



*•* A *before method* has the keyword :before as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . A *before method* specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run before any *primary methods*. 



*•* An *after method* has the keyword :after as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . An *after method* specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run after *primary methods*. 



*•* An *around method* has the keyword :around as its only <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> . An *around method* specifies <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run instead of other *applicable methods*, but which might contain explicit <ClLinks  term={"code"}><i>code</i></ClLinks> which calls some of those *shadowed methods* (via <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>). 



The semantics of standard method combination is as follows: 



*•* If there are any *around methods*, the most specific *around method* is called. It supplies the value or values of the generic function. 



*•* Inside the body of an *around method*, <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> can be used to call the *next method*. When the next method returns, the *around method* can execute more code, perhaps based on the returned value or values. The *generic function* <ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is invoked if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used and there is no *applicable method* to call. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> may be used to determine whether a *next method* exists. 







 



 



*•* If an *around method* invokes <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks>, the next most specific *around method* is called, if one is applicable. If there are no *around methods* or if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is called by the least specific *around method*, the other methods are called as follows: 



– All the *before methods* are called, in most-specific-first order. Their values are ignored. An error is signaled if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used in a *before method*. 



– The most specific primary method is called. Inside the body of a primary 



method, <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> may be used to call the next most specific primary 



method. When that method returns, the previous primary method can execute 



more code, perhaps based on the returned value or values. The generic function 



<ClLinks  term={"no-next-method"}><b>no-next-method</b></ClLinks> is invoked if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used and there are no more 



applicable primary methods. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> may be used to 



determine whether a *next method* exists. If <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is not used, only 



the most specific *primary method* is called. 



– All the *after methods* are called in most-specific-last order. Their values are 



ignored. An error is signaled if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is used in an *after method*. 



*•* If no *around methods* were invoked, the most specific primary method supplies the value or values returned by the generic function. The value or values returned by the invocation of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> in the least specific *around method* are those returned by the most specific primary method. 



In standard method combination, if there is an applicable method but no applicable primary method, an error is signaled. 



The *before methods* are run in most-specific-first order while the *after methods* are run in least-specific-first order. The design rationale for this difference can be illustrated with an example. Suppose class *C*<sub>1</sub> modifies the behavior of its superclass, *C*<sub>2</sub>, by adding *before methods* and *after methods*. Whether the behavior of the class *C*<sub>2</sub> is defined directly by methods on *C*<sub>2</sub> or is inherited from its superclasses does not affect the relative order of invocation of methods on instances of the class *C*<sub>1</sub>. Class *C*<sub>1</sub>’s *before method* runs before all of class *C*<sub>2</sub>’s methods. Class *C*<sub>1</sub>’s *after method* runs after all of class *C*<sub>2</sub>’s methods. 



By contrast, all *around methods* run before any other methods run. Thus a less specific *around method* runs before a more specific primary method. 



If only primary methods are used and if <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> is not used, only the most specific method is invoked; that is, more specific methods shadow more general ones. 



