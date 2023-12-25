 



A *fill pointer* is a non-negative *integer* no larger than the total number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . Not all <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> have *fill pointers*. See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink> and <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm> if it has an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that has no *fill pointer* , all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are considered <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm>. 



Only <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> may have *fill pointers*; multidimensional <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> may not. A multidimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is displaced to a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has a *fill pointer* can be created. 



