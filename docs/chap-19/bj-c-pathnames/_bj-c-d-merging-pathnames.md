 

Merging takes a *pathname* with unfilled components and supplies values for those components from a source of defaults. 

If a component’s value is **nil**, that component is considered to be unfilled. If a component’s value is any *non-nil object*, including :unspecific, that component is considered to be filled. 

Except as explicitly specified otherwise, for functions that manipulate or inquire about *files* in the *file system*, the pathname argument to such a function is merged with **\*default-pathname-defaults\*** before accessing the *file system* (as if by **merge-pathnames**). 



 

 

