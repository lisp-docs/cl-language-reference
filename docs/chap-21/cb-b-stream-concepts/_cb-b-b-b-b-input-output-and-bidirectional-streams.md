 

A *stream*, whether a *character stream* or a *binary stream*, can be an *input stream* (source of data), an *output stream* (sink for data), both, or (*e.g.*, when “:direction :probe” is given to **open**) neither. 

Figure 21–2 shows *operators* relating to *input streams*. 

|&#60;p&#62;**clear-input read-byte read-from-string** &#60;/p&#62;&#60;p&#62;**listen read-char read-line** &#60;/p&#62;&#60;p&#62;**peek-char read-char-no-hang read-preserving-whitespace read read-delimited-list unread-char**&#60;/p&#62;|
| :- |


**Figure 21–2. Operators relating to Input Streams.** 



 

 

Figure 21–3 shows *operators* relating to *output streams*. 

|&#60;p&#62;**clear-output prin1 write** &#60;/p&#62;&#60;p&#62;**finish-output prin1-to-string write-byte** &#60;/p&#62;&#60;p&#62;**force-output princ write-char** &#60;/p&#62;&#60;p&#62;**format princ-to-string write-line** &#60;/p&#62;&#60;p&#62;**fresh-line print write-string** &#60;/p&#62;&#60;p&#62;**pprint terpri write-to-string**&#60;/p&#62;|
| :- |


**Figure 21–3. Operators relating to Output Streams.** 

A *stream* that is both an *input stream* and an *output stream* is called a *bidirectional stream*. See the *functions* **input-stream-p** and **output-stream-p**. 

Any of the *operators* listed in Figure 21–2 or Figure 21–3 can be used with *bidirectional streams*. In addition, Figure 21–4 shows a list of *operators* that relate specificaly to *bidirectional streams*. 

|**y-or-n-p yes-or-no-p**|
| :- |


**Figure 21–4. Operators relating to Bidirectional Streams.** 

