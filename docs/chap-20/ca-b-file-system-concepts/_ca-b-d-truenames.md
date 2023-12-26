 



Many <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> permit more than one <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> to designate a particular <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. 



Even where multiple names are possible, most <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> have a convention for generating a canonical <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> in such situations. Such a canonical <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> (or the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> representing such a <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm>) is called a <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm>. 



The <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> may differ from other <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> for the file because of symbolic links, version numbers, logical device translations in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> translations within Common Lisp, or other artifacts of the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



The <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> for a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is often, but not necessarily, unique for each <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. For instance, a Unix <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> with multiple hard links could have several <GlossaryTerm  term={"truename"}><i>truenames</i></GlossaryTerm>. 



