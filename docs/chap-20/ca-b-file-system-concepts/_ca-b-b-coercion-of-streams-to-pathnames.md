 



A <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm> is either a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm> whose target is a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. Such streams can be used as <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designators</i></GlossaryTerm>. 



Normally, when a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm> is used as a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> , it denotes the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> used to open the <ClLinks  term={"file"}><i>file</i></ClLinks>; this may be, but is not required to be, the actual name of the <ClLinks  term={"file"}><i>file</i></ClLinks>. 



Some functions, such as <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> and <DictionaryLink  term={"delete-file"}><b>delete-file</b></DictionaryLink>, coerce <ClLinks  term={"stream"}><i>streams</i></ClLinks> to <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> in a different way that involves referring to the actual <ClLinks  term={"file"}><i>file</i></ClLinks> that is open, which might or might not be the file whose name was opened originally. Such special situations are always notated specifically and are not the default. 



