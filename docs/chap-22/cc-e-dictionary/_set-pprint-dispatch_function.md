**set-pprint-dispatch** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks> *type-specifier function* &amp;optional *priority table →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*type-specifier*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*priority*—a *real*. The default is 0. 



*table*—a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>. The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks>. 



 



 



**Description:** 



Installs an entry into the <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> which is *table*. 



*Type-specifier* is the <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> of the entry. The first action of <ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks> is to remove any pre-existing entry associated with *type-specifier*. This guarantees that there will never be two entries associated with the same <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>. Equality of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> is tested by <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>. 



Two values are associated with each <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>: a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and a *priority*. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> must accept two arguments: the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to which output is sent and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to be printed. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> should <GlossaryTerm styled={true} term={"pretty print"}><i>pretty print</i></GlossaryTerm> the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can assume that object satisfies the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> given by *type-specifier* . The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> must obey <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. Any values returned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> are ignored. 



*Priority* is a priority to resolve conflicts when an object matches more than one entry. 



It is permissible for <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. In this situation, there will be no *type-specifier* entry in *table* after <ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks> returns. 



**Exceptional Situations:** 



An error is signaled if *priority* is not a *real*. 



**Notes:** 



Since <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch tables</i></GlossaryTerm> are often used to control the pretty printing of Lisp code, it is common for the *type-specifier* to be an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> of the form 



(cons *car-type cdr-type*) 



This signifies that the corresponding object must be a cons cell whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> matches the *type specifier car-type* and whose <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> matches the *type specifier cdr-type*. The *cdr-type* can be omitted in which case it defaults to <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



