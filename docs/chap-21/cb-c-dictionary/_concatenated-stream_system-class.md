**concatenated-stream** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"concatenated-stream"}><b>concatenated-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *concatenated stream* is an *input stream* which is a *composite stream* of zero or more other *input streams*, such that the sequence of data which can be read from the *concatenated stream* is the same as the concatenation of the sequences of data which could be read from each of the constituent <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>. 



Input from a *concatenated stream* is taken from the first of the associated *input streams* until it reaches *end of file*<sub>1</sub>; then that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is discarded, and subsequent input is taken from the next *input stream*, and so on. An *end of file* on the associated *input streams* is always managed invisibly by the *concatenated stream*—the only time a client of a *concatenated stream* sees an *end of file* is 







 



 



when an attempt is made to obtain data from the *concatenated stream* but it has no remaining *input streams* from which to obtain such data. 



**See Also:** 



**concatenated-stream-streams**, <DictionaryLink styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink> 



