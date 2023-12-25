 



The presence of a *compiler macro* definition for a <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> indicates that it is desirable for the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> to use the expansion of the *compiler macro* instead of the original *function form* or *macro form*. However, no language processor (compiler, evaluator, or other code walker) is ever required to actually invoke *compiler macro functions*, or to make use of the resulting expansion if it does invoke a *compiler macro function*. 



When the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> encounters a <ClLinks  term={"form"}><i>form</i></ClLinks> during processing that represents a call to a *compiler macro name* (that is not declared <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>), the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> might expand the *compiler macro*, and might use the expansion in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



When <ClLinks  term={"eval"}><b>eval</b></ClLinks> encounters a <ClLinks  term={"form"}><i>form</i></ClLinks> during processing that represents a call to a *compiler macro name* (that is not declared <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>), <ClLinks  term={"eval"}><b>eval</b></ClLinks> might expand the *compiler macro*, and might use the expansion in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



There are two situations in which a *compiler macro* definition must not be applied by any language processor: 



*•* The global function name binding associated with the compiler macro is shadowed by a lexical binding of the function name. 



*•* The function name has been declared or proclaimed <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> and the call form appears within the scope of the declaration. 



It is unspecified whether *compiler macros* are expanded or used in any other situations.
 