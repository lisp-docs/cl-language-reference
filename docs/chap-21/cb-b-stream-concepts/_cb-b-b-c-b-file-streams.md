 



Some <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks>, called *file streams*, provide access to <ClLinks styled={true} term={"file"}><i>files</i></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"file-stream"}><b>file-stream</b></ClLinks> is used to represent a *file stream*. 



The basic operation for opening a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>, which typically returns a *file stream* (see its dictionary entry for details). The basic operation for closing a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is <ClLinks styled={true} term={"close"}><b>close</b></ClLinks>. The macro <ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> is useful to express the common idiom of opening a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> for the duration of a given body of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>, and assuring that the resulting <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed upon exit from that body. 



