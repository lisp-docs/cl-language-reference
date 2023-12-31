 



If a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is converted to a <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm>, the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and :unspecific cause the field to be treated as if it were empty. That is, both <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and :unspecific cause the component not to appear in the <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm>. 



However, when merging a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> with a set of defaults, only a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> value for a component will be replaced with the default for that component, while a value of :unspecific will be left alone as if the field were “filled”; see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> and Section 19.2.3 (Merging Pathnames). 



