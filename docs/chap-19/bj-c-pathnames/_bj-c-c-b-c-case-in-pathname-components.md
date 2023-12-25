 



<ClLinks  term={"namestring"}><i>Namestrings</i></ClLinks> always use local file system <ClLinks  term={"case"}><i>case</i></ClLinks> conventions, but Common Lisp <ClLinks  term={"function"}><i>functions</i></ClLinks> that manipulate <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> components allow the caller to select either of two conventions for representing <ClLinks  term={"case"}><i>case</i></ClLinks> in component values by supplying a value for the :case keyword argument. Figure 19–2 lists the functions relating to <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> that permit a :case argument: 



|**make-pathname pathname-directory pathname-name pathname-device pathname-host pathname-type**|

| :- |





**Figure 19–2. Pathname functions using a :CASE argument** 



