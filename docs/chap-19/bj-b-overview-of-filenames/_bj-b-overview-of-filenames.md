 



There are many kinds of *file systems*, varying widely both in their superficial syntactic details, and in their underlying power and structure. The facilities provided by Common Lisp for referring to and manipulating <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> has been chosen to be compatible with many kinds of *file systems*, while at the same time minimizing the program-visible differences between kinds of *file systems*. 



Since *file systems* vary in their conventions for naming <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm>, there are two distinct ways to represent <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>: as <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> and as <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>. 



