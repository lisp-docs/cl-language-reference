**pprint-pop** *Local Macro* 



**Syntax:** 



<ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> *⟨no arguments⟩ → object* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> being printed in the *lexically current logical block* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Pops one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> from the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> being printed in the *lexically current logical block* , obeying <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> and <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> as described below. 



Each time <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> is called, it pops the next value off the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> passed to the *lexically current logical block* and returns it. However, before doing this, it performs three tests: 



*•* If the remaining ‘list’ is not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, “. ” is printed followed by the remaining ‘list.’ (This makes it easier to write printing functions that are robust in the face of malformed arguments.) 



*•* If <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, and <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> has already been called <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> times within the immediately containing logical block, “...” is printed. (This makes it easy to write printing functions that properly handle <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>.) 







 



 



*•* If <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, and the remaining list is a circular (or shared) reference, then “. ” is printed followed by an appropriate “#*n*#” marker. (This catches instances of <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> circularity and sharing in lists.) 



If either of the three conditions above occurs, the indicated output is printed on the *pretty printing stream* created by the immediately containing <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and the execution of the immediately containing <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> is terminated except for the printing of the suffix. 



If <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> is given a ‘list’ argument of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>—because it is not processing a list— <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> can still be used to obtain support for <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>. In this situation, the first and third tests above are disabled and <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> always returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. See Section 22.2.2 (Examples of using the Pretty Printer)—specifically, the **pprint-vector** example. 



Whether or not <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the *global environment*. The consequences of attempting to use <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> outside of <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> are undefined. 



**Side Effects:** 



Might cause output to the *pretty printing stream* associated with the lexically current logical block. 



**Affected By:** 



<ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>. 



**Exceptional Situations:** 



An error is signaled (either at macro expansion time or at run time) if a usage of <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> occurs where there is no lexically containing <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



The consequences are undefined if <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks> is executed outside of the *dynamic extent* of this <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks>, <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. 



**Notes:** 



It is frequently a good idea to call <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> before calling <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>. 