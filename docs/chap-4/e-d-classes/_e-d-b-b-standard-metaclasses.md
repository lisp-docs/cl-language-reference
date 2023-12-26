 



The object system provides a number of predefined *metaclasses*. These include the *classes* <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, and <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>: 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of *classes* defined by <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink> is the <ClLinks  term={"class"}><i>class</i></ClLinks> whose <ClLinks  term={"instance"}><i>instances</i></ClLinks> are *classes* that have special implementations with restricted capabilities. Any <ClLinks  term={"class"}><i>class</i></ClLinks> that corresponds to a standard <ClLinks  term={"type"}><i>type</i></ClLinks> might be an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. The predefined <ClLinks  term={"type"}><i>type</i></ClLinks> specifiers that are required to have corresponding *classes* are listed in Figure 4–8. It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether each of these *classes* is implemented as a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm>. 



*•* All *classes* defined by means of <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> are <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>. 











