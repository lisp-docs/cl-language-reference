 



Many *file systems* permit more than one <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> to designate a particular <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 



Even where multiple names are possible, most *file systems* have a convention for generating a canonical <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> in such situations. Such a canonical <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> (or the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> representing such a <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks>) is called a <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks>. 



The <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> may differ from other <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> for the file because of symbolic links, version numbers, logical device translations in the *file system*, *logical pathname* translations within Common Lisp, or other artifacts of the *file system*. 



The <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> for a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is often, but not necessarily, unique for each <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. For instance, a Unix <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> with multiple hard links could have several <ClLinks styled={true} term={"truename"}><i>truenames</i></ClLinks>. 



