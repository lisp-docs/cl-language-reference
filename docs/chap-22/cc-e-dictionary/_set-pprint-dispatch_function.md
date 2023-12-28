**set-pprint-dispatch** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink> *type-specifier function* &amp;optional *priority table →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*type-specifier*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*priority*—a *real*. The default is 0. 



*table*—a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>. The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>. 



 



 



**Description:** 



Installs an entry into the <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> which is *table*. 



*Type-specifier* is the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> of the entry. The first action of <DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink> is to remove any pre-existing entry associated with *type-specifier*. This guarantees that there will never be two entries associated with the same <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>. Equality of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> is tested by <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 



Two values are associated with each <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm>: a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and a *priority*. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must accept two arguments: the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to which output is sent and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to be printed. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> should <GlossaryTerm styled={true} term={"pretty print"}><i>pretty print</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can assume that object satisfies the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given by *type-specifier* . The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must obey <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. Any values returned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> are ignored. 



*Priority* is a priority to resolve conflicts when an object matches more than one entry. 



It is permissible for <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. In this situation, there will be no *type-specifier* entry in *table* after <DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink> returns. 



**Exceptional Situations:** 



An error is signaled if *priority* is not a *real*. 



**Notes:** 



Since <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch tables</i></GlossaryTerm> are often used to control the pretty printing of Lisp code, it is common for the *type-specifier* to be an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> of the form 



(cons *car-type cdr-type*) 



This signifies that the corresponding object must be a cons cell whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> matches the *type specifier car-type* and whose <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> matches the *type specifier cdr-type*. The *cdr-type* can be omitted in which case it defaults to <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



