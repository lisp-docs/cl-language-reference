**pprint-exit-if-list-exhausted** *Local Macro* 



**Syntax:** 



<ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> *⟨no arguments⟩ →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Description:** 



Tests whether or not the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> passed to the *lexically current logical block* has been exhausted; see Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). If this <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> has been reduced to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> terminates the execution of the *lexically current logical block* except for the printing of the suffix. Otherwise <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



Whether or not <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> is *implementation dependent*; however, the restrictions on redefinition and *shadowing* of <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> are the same as for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. The consequences of attempting to use <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> outside of <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> are undefined. 



**Exceptional Situations:** 



An error is signaled (at macro expansion time or at run time) if <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks> is used anywhere other than lexically within a call on <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. Also, the consequences of executing **pprint-if-list-exhausted** outside of the dynamic extent of the <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> which lexically contains it are undefined. 



**See Also:** 



<ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>, <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>. 







 



 



**pprint-fill, pprint-linear, pprint-tabular** 



