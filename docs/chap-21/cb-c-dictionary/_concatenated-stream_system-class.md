**concatenated-stream** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"concatenated-stream"}><b>concatenated-stream</b></ClLinks>, <ClLinks  term={"stream"}><b>stream</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *concatenated stream* is an *input stream* which is a *composite stream* of zero or more other *input streams*, such that the sequence of data which can be read from the *concatenated stream* is the same as the concatenation of the sequences of data which could be read from each of the constituent <ClLinks  term={"stream"}><i>streams</i></ClLinks>. 



Input from a *concatenated stream* is taken from the first of the associated *input streams* until it reaches *end of file*<sub>1</sub>; then that <ClLinks  term={"stream"}><i>stream</i></ClLinks> is discarded, and subsequent input is taken from the next *input stream*, and so on. An *end of file* on the associated *input streams* is always managed invisibly by the *concatenated stream*—the only time a client of a *concatenated stream* sees an *end of file* is 







 



 



when an attempt is made to obtain data from the *concatenated stream* but it has no remaining *input streams* from which to obtain such data. 



**See Also:** 



**concatenated-stream-streams**, <ClLinks  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks> 



