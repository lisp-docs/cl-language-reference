 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> for **update-instance-for-redefined-class** may be defined to specify actions to be taken when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is updated. If only *after methods* for **update-instance-for-redefined-class** are defined, they will be run after the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of **update-instance-for-redefined-class**. Because no initialization arguments are passed to **update-instance-for-redefined-class** when it is called by the system, the *initialization forms* for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that are filled by *before methods* for **update-instance-for-redefined-class** will not be evaluated by <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> may be defined to customize <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> redefinition. For more information, see Section 7.1.5 (Shared-Initialize). 



