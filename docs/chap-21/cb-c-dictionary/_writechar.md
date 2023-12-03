**write-char** *Function* 

**Syntax:** 

**write-char** *character* &optional *output-stream → character* 

**Arguments and Values:** 

*character*—a *character* . 

*output-stream* – an *output stream designator* . The default is *standard output*. 

**Description:** 

**write-char** outputs *character* to *output-stream*. 

**Examples:** 

(write-char #\a) 

&#9655; a 

*→* #\a 

(with-output-to-string (s) 

(write-char #\a s) 

(write-char #\Space s) 

(write-char #\b s)) 

*→* "a b" 

**Side Effects:** 

The *output-stream* is modified. 

**Affected By:** 

**\*standard-output\***, **\*terminal-io\***. 

**See Also:** 

**read-char**, **write-byte**, **write-sequence** 



 

 

**read-line** 

