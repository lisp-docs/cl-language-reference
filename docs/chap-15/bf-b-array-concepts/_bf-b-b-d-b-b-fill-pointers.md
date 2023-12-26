 



A <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is a non-negative *integer* no larger than the total number of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> . Not all <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink> and <DictionaryLink  term={"adjust-array"}><b>adjust-array</b></DictionaryLink>. 



An <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> is said to be <GlossaryTerm  term={"active"}><i>active</i></GlossaryTerm> if it has an index that is greater than or equal to zero, but less than the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> (if any). For an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that has no <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , all <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are considered <GlossaryTerm  term={"active"}><i>active</i></GlossaryTerm>. 



Only <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> may have <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm>; multidimensional <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> may not. A multidimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that is displaced to a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> that has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> can be created. 



