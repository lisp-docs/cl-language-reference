 



The object system provides a number of predefined *metaclasses*. These include the *classes* <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, and <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>: 



*•* The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> is the default <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of *classes* defined by <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. 



*•* The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> are *classes* that have special implementations with restricted capabilities. Any <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that corresponds to a standard <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> might be an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The predefined <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> specifiers that are required to have corresponding *classes* are listed in Figure 4–8. It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether each of these *classes* is implemented as a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm>. 



*•* All *classes* defined by means of <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> are <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>. 











