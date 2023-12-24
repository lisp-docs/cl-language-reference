 



This section describes the Common Lisp interface to file systems. The model used by this interface assumes that <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> are named by <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>, that a <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> can be represented by a *pathname object*, and that given a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> can be constructed that connects to a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> whose <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> it represents. 



For information about opening and closing <ClLinks styled={true} term={"file"}><i>files</i></ClLinks>, and manipulating their contents, see Chapter 21 (Streams). 



Figure 20–1 lists some <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> that are applicable to <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> and directories. 



|<p>**compile-file file-length open** </p><p>**delete-file file-position probe-file** </p><p>**directory file-write-date rename-file** </p><p>**file-author load with-open-file**</p>|

| :- |





**Figure 20–1. File and Directory Operations** 



