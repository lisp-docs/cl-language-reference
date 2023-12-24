 



A <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, whether a *character stream* or a *binary stream*, can be an *input stream* (source of data), an *output stream* (sink for data), both, or (*e.g.*, when “:direction :probe” is given to <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>) neither. 



Figure 21–2 shows <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> relating to *input streams*. 



|<p>**clear-input read-byte read-from-string** </p><p>**listen read-char read-line** </p><p>**peek-char read-char-no-hang read-preserving-whitespace read read-delimited-list unread-char**</p>|

| :- |





**Figure 21–2. Operators relating to Input Streams.** 







 



 



Figure 21–3 shows <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> relating to *output streams*. 



|<p>**clear-output prin1 write** </p><p>**finish-output prin1-to-string write-byte** </p><p>**force-output princ write-char** </p><p>**format princ-to-string write-line** </p><p>**fresh-line print write-string** </p><p>**pprint terpri write-to-string**</p>|

| :- |





**Figure 21–3. Operators relating to Output Streams.** 



A <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is both an *input stream* and an *output stream* is called a *bidirectional stream*. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> **input-stream-p** and **output-stream-p**. 



Any of the <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> listed in Figure 21–2 or Figure 21–3 can be used with *bidirectional streams*. In addition, Figure 21–4 shows a list of <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> that relate specificaly to *bidirectional streams*. 



|**y-or-n-p yes-or-no-p**|

| :- |





**Figure 21–4. Operators relating to Bidirectional Streams.** 



