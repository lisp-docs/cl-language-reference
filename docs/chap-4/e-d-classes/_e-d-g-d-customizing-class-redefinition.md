 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> for **update-instance-for-redefined-class** may be defined to specify actions to be taken when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is updated. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for **update-instance-for-redefined-class** are defined, they will be run after the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of **update-instance-for-redefined-class**. Because no initialization arguments are passed to **update-instance-for-redefined-class** when it is called by the system, the <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for <ClLinks  term={"slot"}><i>slots</i></ClLinks> that are filled by <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm> for **update-instance-for-redefined-class** will not be evaluated by <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> may be defined to customize <ClLinks  term={"class"}><i>class</i></ClLinks> redefinition. For more information, see Section 7.1.5 (Shared-Initialize). 



