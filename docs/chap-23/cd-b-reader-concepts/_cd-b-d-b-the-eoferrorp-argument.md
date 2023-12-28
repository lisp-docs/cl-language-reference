 



*Eof-error-p* in input function calls controls what happens if input is from a file (or any other input source that has a definite end) and the end of the file is reached. If *eof-error-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> (the default), an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled at end of file. If it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, then no error is signaled, and instead the function returns *eof-value*. 



Functions such as <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> that read the representation of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> rather than a single character always signals an error, regardless of *eof-error-p*, if the file ends in the middle of an object representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> signals an error. If a file ends in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> immediately followed by end-of-file, <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> reads the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> successfully and when called again will act according to *eof-error-p*. Similarly, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink> successfully reads the last line of a file even if that line is terminated by end-of-file rather than the newline character. Ignorable text, such as lines containing only <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> or comments, are not considered to begin an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; if <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> begins to read an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> but sees only such ignorable text, it does not consider the file to end in the middle of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Thus an *eof-error-p* argument controls what happens when the file ends between <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 







 



 



