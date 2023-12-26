 



Some <ClLinks  term={"stream"}><i>streams</i></ClLinks>, called <GlossaryTerm styled={true} term={"file stream"}><i>file streams</i></GlossaryTerm>, provide access to <ClLinks  term={"file"}><i>files</i></ClLinks>. An <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"file-stream"}><b>file-stream</b></DictionaryLink> is used to represent a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



The basic operation for opening a <ClLinks  term={"file"}><i>file</i></ClLinks> is <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, which typically returns a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> (see its dictionary entry for details). The basic operation for closing a <ClLinks  term={"stream"}><i>stream</i></ClLinks> is <DictionaryLink  term={"close"}><b>close</b></DictionaryLink>. The macro <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> is useful to express the common idiom of opening a <ClLinks  term={"file"}><i>file</i></ClLinks> for the duration of a given body of <ClLinks  term={"code"}><i>code</i></ClLinks>, and assuring that the resulting <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed upon exit from that body. 



