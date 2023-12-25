 



Many *file systems* permit more than one <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> to designate a particular <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. 



Even where multiple names are possible, most *file systems* have a convention for generating a canonical <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> in such situations. Such a canonical <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> (or the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> representing such a <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm>) is called a <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> may differ from other <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> for the file because of symbolic links, version numbers, logical device translations in the *file system*, *logical pathname* translations within Common Lisp, or other artifacts of the *file system*. 



The <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is often, but not necessarily, unique for each <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. For instance, a Unix <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> with multiple hard links could have several <GlossaryTerm styled={true} term={"truename"}><i>truenames</i></GlossaryTerm>. 



