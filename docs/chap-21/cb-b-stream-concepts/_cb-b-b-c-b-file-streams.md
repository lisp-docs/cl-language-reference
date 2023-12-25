 



Some <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>, called *file streams*, provide access to <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-stream"}><b>file-stream</b></DictionaryLink> is used to represent a *file stream*. 



The basic operation for opening a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>, which typically returns a *file stream* (see its dictionary entry for details). The basic operation for closing a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is <DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink>. The macro <DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> is useful to express the common idiom of opening a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> for the duration of a given body of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>, and assuring that the resulting <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is closed upon exit from that body. 



