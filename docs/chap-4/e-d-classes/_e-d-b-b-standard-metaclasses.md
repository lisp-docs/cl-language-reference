 



The object system provides a number of predefined *metaclasses*. These include the *classes* <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, and <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>: 



*•* The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> is the default <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of *classes* defined by <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>. 



*•* The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink> is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> are *classes* that have special implementations with restricted capabilities. Any <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that corresponds to a standard <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> might be an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The predefined <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> specifiers that are required to have corresponding *classes* are listed in Figure 4–8. It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether each of these *classes* is implemented as a *built-in class*. 



*•* All *classes* defined by means of <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> are <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>. 











