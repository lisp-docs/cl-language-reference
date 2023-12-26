 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> for **update-instance-for-redefined-class** may be defined to specify actions to be taken when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is updated. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for **update-instance-for-redefined-class** are defined, they will be run after the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of **update-instance-for-redefined-class**. Because no initialization arguments are passed to **update-instance-for-redefined-class** when it is called by the system, the <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that are filled by <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm> for **update-instance-for-redefined-class** will not be evaluated by <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> may be defined to customize <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> redefinition. For more information, see Section 7.1.5 (Shared-Initialize). 



