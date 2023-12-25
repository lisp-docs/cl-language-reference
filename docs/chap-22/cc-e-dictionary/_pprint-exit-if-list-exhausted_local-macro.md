**pprint-exit-if-list-exhausted** *Local Macro* 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> *hno argumentsi →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Description:** 



Tests whether or not the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> passed to the *lexically current logical block* has been exhausted; see Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). If this <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> has been reduced to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> terminates the execution of the *lexically current logical block* except for the printing of the suffix. Otherwise <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



Whether or not <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment* is *implementation dependent*; however, the restrictions on redefinition and *shadowing* of <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> are the same as for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> in the *global environment*. The consequences of attempting to use <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> outside of <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> are undefined. 



**Exceptional Situations:** 



An error is signaled (at macro expansion time or at run time) if <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink> is used anywhere other than lexically within a call on <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. Also, the consequences of executing **pprint-if-list-exhausted** outside of the dynamic extent of the <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> which lexically contains it are undefined. 



**See Also:** 



<DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>. 







 



 



**pprint-fill, pprint-linear, pprint-tabular** 



