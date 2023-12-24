 



Merging takes a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with unfilled components and supplies values for those components from a source of defaults. 



If a component’s value is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, that component is considered to be unfilled. If a component’s value is any *non-nil object*, including :unspecific, that component is considered to be filled. 



Except as explicitly specified otherwise, for functions that manipulate or inquire about <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> in the *file system*, the pathname argument to such a function is merged with <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks> before accessing the *file system* (as if by <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>). 







 



 



