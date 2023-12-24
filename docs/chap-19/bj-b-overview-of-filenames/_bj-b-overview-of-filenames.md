 



There are many kinds of *file systems*, varying widely both in their superficial syntactic details, and in their underlying power and structure. The facilities provided by Common Lisp for referring to and manipulating <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> has been chosen to be compatible with many kinds of *file systems*, while at the same time minimizing the program-visible differences between kinds of *file systems*. 



Since *file systems* vary in their conventions for naming <ClLinks styled={true} term={"file"}><i>files</i></ClLinks>, there are two distinct ways to represent <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>: as <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks> and as <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>. 



