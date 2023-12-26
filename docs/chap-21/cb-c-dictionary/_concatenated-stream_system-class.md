**concatenated-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"concatenated-stream"}><b>concatenated-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> is an *input stream* which is a <GlossaryTerm styled={true} term={"composite stream"}><i>composite stream</i></GlossaryTerm> of zero or more other *input streams*, such that the sequence of data which can be read from the <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> is the same as the concatenation of the sequences of data which could be read from each of the constituent <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm>. 



Input from a <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> is taken from the first of the associated *input streams* until it reaches <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>1</sub>; then that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is discarded, and subsequent input is taken from the next *input stream*, and so on. An <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> on the associated *input streams* is always managed invisibly by the <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm>—the only time a client of a <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> sees an <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm> is 







 



 



when an attempt is made to obtain data from the <GlossaryTerm styled={true} term={"concatenated stream"}><i>concatenated stream</i></GlossaryTerm> but it has no remaining *input streams* from which to obtain such data. 



**See Also:** 



**concatenated-stream-streams**, <DictionaryLink  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink> 



