 



A *stream associated with a file* is either a *file stream* or a *synonym stream* whose target is a *stream associated with a file*. Such streams can be used as *pathname designators*. 



Normally, when a *stream associated with a file* is used as a *pathname designator* , it denotes the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> used to open the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>; this may be, but is not required to be, the actual name of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. 



Some functions, such as <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> and <DictionaryLink styled={true} term={"delete-file"}><b>delete-file</b></DictionaryLink>, coerce <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> in a different way that involves referring to the actual <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> that is open, which might or might not be the file whose name was opened originally. Such special situations are always notated specifically and are not the default. 



