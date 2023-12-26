 



Merging takes a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> with unfilled components and supplies values for those components from a source of defaults. 



If a component’s value is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, that component is considered to be unfilled. If a component’s value is any *non-nil object*, including :unspecific, that component is considered to be filled. 



Except as explicitly specified otherwise, for functions that manipulate or inquire about <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, the pathname argument to such a function is merged with <DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink> before accessing the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> (as if by <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>). 







 



 



