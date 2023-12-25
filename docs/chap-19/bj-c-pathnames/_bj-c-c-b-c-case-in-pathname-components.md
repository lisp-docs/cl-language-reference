 



<GlossaryTerm styled={true} term={"namestring"}><i>Namestrings</i></GlossaryTerm> always use local file system <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> conventions, but Common Lisp <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that manipulate <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> components allow the caller to select either of two conventions for representing <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> in component values by supplying a value for the :case keyword argument. Figure 19–2 lists the functions relating to <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> that permit a :case argument: 



|**make-pathname pathname-directory pathname-name pathname-device pathname-host pathname-type**|

| :- |





**Figure 19–2. Pathname functions using a :CASE argument** 



