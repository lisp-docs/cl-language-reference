 



Merging takes a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> with unfilled components and supplies values for those components from a source of defaults. 



If a component’s value is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, that component is considered to be unfilled. If a component’s value is any *non-nil object*, including :unspecific, that component is considered to be filled. 



Except as explicitly specified otherwise, for functions that manipulate or inquire about <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> in the *file system*, the pathname argument to such a function is merged with <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink> before accessing the *file system* (as if by <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>). 







 



 



