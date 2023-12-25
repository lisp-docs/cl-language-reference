 



This section describes the Common Lisp interface to file systems. The model used by this interface assumes that <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> are named by <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>, that a <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> can be represented by a *pathname object*, and that given a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> can be constructed that connects to a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> it represents. 



For information about opening and closing <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm>, and manipulating their contents, see Chapter 21 (Streams). 



Figure 20–1 lists some <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> that are applicable to <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> and directories. 



|<p>**compile-file file-length open** </p><p>**delete-file file-position probe-file** </p><p>**directory file-write-date rename-file** </p><p>**file-author load with-open-file**</p>|

| :- |





**Figure 20–1. File and Directory Operations** 



