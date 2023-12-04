 



The purpose of the *compiler macro* facility is to permit selective source code transformations as optimization advice to the *compiler* . When a *compound form* is being processed (as by the compiler), if the *operator* names a *compiler macro* then the *compiler macro function* may be 



invoked on the form, and the resulting expansion recursively processed in preference to performing the usual processing on the original *form* according to its normal interpretation as a *function form* or *macro form*. 



A *compiler macro function*, like a *macro function*, is a *function* of two *arguments*: the entire call *form* and the *environment*. Unlike an ordinary *macro function*, a *compiler macro function* can decline to provide an expansion merely by returning a value that is the *same* as the original *form*. The consequences are undefined if a *compiler macro function* destructively modifies any part of its *form* argument. 



The *form* passed to the compiler macro function can either be a *list* whose *car* is the function name, or a *list* whose *car* is **funcall** and whose *cadr* is a list (function *name*); note that this affects destructuring of the form argument by the *compiler macro function*. **define-compiler-macro** arranges for destructuring of arguments to be performed correctly for both possible formats. 



When **compile-file** chooses to expand a *top level form* that is a *compiler macro form*, the expansion is also treated as a *top level form* for the purposes of **eval-when** processing; see Section 3.2.3.1 (Processing of Top Level Forms). 



