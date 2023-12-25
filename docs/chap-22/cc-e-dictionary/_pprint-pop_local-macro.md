**pprint-pop** *Local Macro* 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> *hno argumentsi → object* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> being printed in the *lexically current logical block* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Pops one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> being printed in the *lexically current logical block* , obeying <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> as described below. 



Each time <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> is called, it pops the next value off the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> passed to the *lexically current logical block* and returns it. However, before doing this, it performs three tests: 



*•* If the remaining ‘list’ is not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, “. ” is printed followed by the remaining ‘list.’ (This makes it easier to write printing functions that are robust in the face of malformed arguments.) 



*•* If <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, and <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> has already been called <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> times within the immediately containing logical block, “...” is printed. (This makes it easy to write printing functions that properly handle <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>.) 







 



 



*•* If <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, and the remaining list is a circular (or shared) reference, then “. ” is printed followed by an appropriate “#*n*#” marker. (This catches instances of <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> circularity and sharing in lists.) 



If either of the three conditions above occurs, the indicated output is printed on the *pretty printing stream* created by the immediately containing <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and the execution of the immediately containing <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> is terminated except for the printing of the suffix. 



If <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> is given a ‘list’ argument of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>—because it is not processing a list— <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> can still be used to obtain support for <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>. In this situation, the first and third tests above are disabled and <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> always returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. See Section 22.2.2 (Examples of using the Pretty Printer)—specifically, the **pprint-vector** example. 



Whether or not <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> outside of <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> are undefined. 



**Side Effects:** 



Might cause output to the *pretty printing stream* associated with the lexically current logical block. 



**Affected By:** 



<DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>. 



**Exceptional Situations:** 



An error is signaled (either at macro expansion time or at run time) if a usage of <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> occurs where there is no lexically containing <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



The consequences are undefined if <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink> is executed outside of the *dynamic extent* of this <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



**Notes:** 



It is frequently a good idea to call <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> before calling <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>. 