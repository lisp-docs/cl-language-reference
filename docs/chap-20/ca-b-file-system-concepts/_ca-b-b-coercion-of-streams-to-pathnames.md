 



A *stream associated with a file* is either a *file stream* or a *synonym stream* whose target is a *stream associated with a file*. Such streams can be used as *pathname designators*. 



Normally, when a *stream associated with a file* is used as a *pathname designator* , it denotes the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> used to open the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>; this may be, but is not required to be, the actual name of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 



Some functions, such as <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> and <ClLinks styled={true} term={"delete-file"}><b>delete-file</b></ClLinks>, coerce <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> to <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> in a different way that involves referring to the actual <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> that is open, which might or might not be the file whose name was opened originally. Such special situations are always notated specifically and are not the default. 



