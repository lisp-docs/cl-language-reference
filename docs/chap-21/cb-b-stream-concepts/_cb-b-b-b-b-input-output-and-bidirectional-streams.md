 



A *stream*, whether a *character stream* or a *binary stream*, can be an *input stream* (source of data), an *output stream* (sink for data), both, or (*e.g.*, when “:direction :probe” is given to **open**) neither. 



Figure 21–2 shows *operators* relating to *input streams*. 



|<p>**clear-input read-byte read-from-string** </p><p>**listen read-char read-line** </p><p>**peek-char read-char-no-hang read-preserving-whitespace read read-delimited-list unread-char**</p>|

| :- |





**Figure 21–2. Operators relating to Input Streams.** 







 



 



Figure 21–3 shows *operators* relating to *output streams*. 



|<p>**clear-output prin1 write** </p><p>**finish-output prin1-to-string write-byte** </p><p>**force-output princ write-char** </p><p>**format princ-to-string write-line** </p><p>**fresh-line print write-string** </p><p>**pprint terpri write-to-string**</p>|

| :- |





**Figure 21–3. Operators relating to Output Streams.** 



A *stream* that is both an *input stream* and an *output stream* is called a *bidirectional stream*. See the *functions* **input-stream-p** and **output-stream-p**. 



Any of the *operators* listed in Figure 21–2 or Figure 21–3 can be used with *bidirectional streams*. In addition, Figure 21–4 shows a list of *operators* that relate specificaly to *bidirectional streams*. 



|**y-or-n-p yes-or-no-p**|

| :- |





**Figure 21–4. Operators relating to Bidirectional Streams.** 



