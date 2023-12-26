 



Some <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm>, called <GlossaryTerm styled={true} term={"file stream"}><i>file streams</i></GlossaryTerm>, provide access to <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm>. An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"file-stream"}><b>file-stream</b></DictionaryLink> is used to represent a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



The basic operation for opening a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, which typically returns a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> (see its dictionary entry for details). The basic operation for closing a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. The macro <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> is useful to express the common idiom of opening a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> for the duration of a given body of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm>, and assuring that the resulting <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed upon exit from that body. 



