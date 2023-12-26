 



Wildcard <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> can be used with <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink> but not with <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, and return true from <DictionaryLink  term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink>. When examining wildcard components of a wildcard <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, conforming programs must be prepared to encounter any of the following additional values in any component or any element of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that is the directory component: 



*•* The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> :wild, which matches anything. 



*•* A <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> containing <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> special wildcard <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. 



*•* Any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, representing an <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> wildcard pattern. 







 



 



