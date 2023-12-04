 



The presence of a *compiler macro* definition for a *function* or *macro* indicates that it is desirable for the *compiler* to use the expansion of the *compiler macro* instead of the original *function form* or *macro form*. However, no language processor (compiler, evaluator, or other code walker) is ever required to actually invoke *compiler macro functions*, or to make use of the resulting expansion if it does invoke a *compiler macro function*. 



When the *compiler* encounters a *form* during processing that represents a call to a *compiler macro name* (that is not declared **notinline**), the *compiler* might expand the *compiler macro*, and might use the expansion in place of the original *form*. 



When **eval** encounters a *form* during processing that represents a call to a *compiler macro name* (that is not declared **notinline**), **eval** might expand the *compiler macro*, and might use the expansion in place of the original *form*. 



There are two situations in which a *compiler macro* definition must not be applied by any language processor: 



*•* The global function name binding associated with the compiler macro is shadowed by a lexical binding of the function name. 



*•* The function name has been declared or proclaimed **notinline** and the call form appears within the scope of the declaration. 



It is unspecified whether *compiler macros* are expanded or used in any other situations.
 