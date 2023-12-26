 



Some <ClLinks  term={"stream"}><i>streams</i></ClLinks>, called <GlossaryTerm styled={true} term={"file stream"}><i>file streams</i></GlossaryTerm>, provide access to <ClLinks  term={"file"}><i>files</i></ClLinks>. An <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"file-stream"}><b>file-stream</b></ClLinks> is used to represent a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



The basic operation for opening a <ClLinks  term={"file"}><i>file</i></ClLinks> is <ClLinks  term={"open"}><b>open</b></ClLinks>, which typically returns a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> (see its dictionary entry for details). The basic operation for closing a <ClLinks  term={"stream"}><i>stream</i></ClLinks> is <ClLinks  term={"close"}><b>close</b></ClLinks>. The macro <ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> is useful to express the common idiom of opening a <ClLinks  term={"file"}><i>file</i></ClLinks> for the duration of a given body of <ClLinks  term={"code"}><i>code</i></ClLinks>, and assuring that the resulting <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed upon exit from that body. 



