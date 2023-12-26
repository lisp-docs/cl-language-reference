 



This section describes the Common Lisp interface to file systems. The model used by this interface assumes that <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> are named by <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm>, that a <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> can be represented by a *pathname object*, and that given a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> can be constructed that connects to a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> whose <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> it represents. 



For information about opening and closing <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm>, and manipulating their contents, see Chapter 21 (Streams). 



Figure 20–1 lists some <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> that are applicable to <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> and directories. 



|<p>**compile-file file-length open** </p><p>**delete-file file-position probe-file** </p><p>**directory file-write-date rename-file** </p><p>**file-author load with-open-file**</p>|

| :- |





**Figure 20–1. File and Directory Operations** 



