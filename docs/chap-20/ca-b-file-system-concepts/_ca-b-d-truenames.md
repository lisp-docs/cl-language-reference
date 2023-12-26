 



Many <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> permit more than one <ClLinks  term={"filename"}><i>filename</i></ClLinks> to designate a particular <ClLinks  term={"file"}><i>file</i></ClLinks>. 



Even where multiple names are possible, most <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> have a convention for generating a canonical <ClLinks  term={"filename"}><i>filename</i></ClLinks> in such situations. Such a canonical <ClLinks  term={"filename"}><i>filename</i></ClLinks> (or the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> representing such a <ClLinks  term={"filename"}><i>filename</i></ClLinks>) is called a <ClLinks  term={"truename"}><i>truename</i></ClLinks>. 



The <ClLinks  term={"truename"}><i>truename</i></ClLinks> of a <ClLinks  term={"file"}><i>file</i></ClLinks> may differ from other <ClLinks  term={"filename"}><i>filenames</i></ClLinks> for the file because of symbolic links, version numbers, logical device translations in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> translations within Common Lisp, or other artifacts of the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



The <ClLinks  term={"truename"}><i>truename</i></ClLinks> for a <ClLinks  term={"file"}><i>file</i></ClLinks> is often, but not necessarily, unique for each <ClLinks  term={"file"}><i>file</i></ClLinks>. For instance, a Unix <ClLinks  term={"file"}><i>file</i></ClLinks> with multiple hard links could have several <ClLinks  term={"truename"}><i>truenames</i></ClLinks>. 



