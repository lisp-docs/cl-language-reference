

 The *operators* in Figure 21–7 accept *stream arguments* that might be either *open* or *closed streams*. 

|&#60;p&#62;**broadcast-stream-streams file-author pathnamep** &#60;/p&#62;&#60;p&#62;**close file-namestring probe-file** &#60;/p&#62;&#60;p&#62;**compile-file file-write-date rename-file** &#60;/p&#62;&#60;p&#62;**compile-file-pathname host-namestring streamp** &#60;/p&#62;&#60;p&#62;**concatenated-stream-streams load synonym-stream-symbol delete-file logical-pathname translate-logical-pathname directory merge-pathnames translate-pathname directory-namestring namestring truename** &#60;/p&#62;&#60;p&#62;**dribble open two-way-stream-input-stream echo-stream-input-stream open-stream-p two-way-stream-output-stream echo-stream-ouput-stream parse-namestring wild-pathname-p ed pathname with-open-file** &#60;/p&#62;&#60;p&#62;**enough-namestring pathname-match-p**&#60;/p&#62;|
| :- |


**Figure 21–7. Operators that accept either Open or Closed Streams** 

The *operators* in Figure 21–8 accept *stream arguments* that must be *open streams*. 

|&#60;p&#62;**clear-input output-stream-p read-char-no-hang clear-output peek-char read-delimited-list file-length pprint read-line** &#60;/p&#62;&#60;p&#62;**file-position pprint-fill read-preserving-whitespace file-string-length pprint-indent stream-element-type finish-output pprint-linear stream-external-format force-output pprint-logical-block terpri** &#60;/p&#62;&#60;p&#62;**format pprint-newline unread-char fresh-line pprint-tab with-open-stream get-output-stream-string pprint-tabular write** &#60;/p&#62;&#60;p&#62;**input-stream-p prin1 write-byte** &#60;/p&#62;&#60;p&#62;**interactive-stream-p princ write-char** &#60;/p&#62;&#60;p&#62;**listen print write-line** &#60;/p&#62;&#60;p&#62;**make-broadcast-stream print-object write-string make-concatenated-stream print-unreadable-object y-or-n-p** &#60;/p&#62;&#60;p&#62;**make-echo-stream read yes-or-no-p** &#60;/p&#62;&#60;p&#62;**make-synonym-stream read-byte** &#60;/p&#62;&#60;p&#62;**make-two-way-stream read-char**&#60;/p&#62;|
| - |


**Figure 21–8. Operators that accept Open Streams only** 

Streams **21–5**

 

 

