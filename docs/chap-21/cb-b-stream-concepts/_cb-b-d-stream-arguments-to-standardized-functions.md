
 The <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> in Figure 21–7 accept *stream arguments* that might be either <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or *closed streams*. 



|<p>**broadcast-stream-streams file-author pathnamep** </p><p>**close file-namestring probe-file** </p><p>**compile-file file-write-date rename-file** </p><p>**compile-file-pathname host-namestring streamp** </p><p>**concatenated-stream-streams load synonym-stream-symbol delete-file logical-pathname translate-logical-pathname directory merge-pathnames translate-pathname directory-namestring namestring truename** </p><p>**dribble open two-way-stream-input-stream echo-stream-input-stream open-stream-p two-way-stream-output-stream echo-stream-ouput-stream parse-namestring wild-pathname-p ed pathname with-open-file** </p><p>**enough-namestring pathname-match-p**</p>|

| :- |





**Figure 21–7. Operators that accept either Open or Closed Streams** 



The <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> in Figure 21–8 accept *stream arguments* that must be *open streams*. 



|<p>**clear-input output-stream-p read-char-no-hang clear-output peek-char read-delimited-list file-length pprint read-line** </p><p>**file-position pprint-fill read-preserving-whitespace file-string-length pprint-indent stream-element-type finish-output pprint-linear stream-external-format force-output pprint-logical-block terpri** </p><p>**format pprint-newline unread-char fresh-line pprint-tab with-open-stream get-output-stream-string pprint-tabular write** </p><p>**input-stream-p prin1 write-byte** </p><p>**interactive-stream-p princ write-char** </p><p>**listen print write-line** </p><p>**make-broadcast-stream print-object write-string make-concatenated-stream print-unreadable-object y-or-n-p** </p><p>**make-echo-stream read yes-or-no-p** </p><p>**make-synonym-stream read-byte** </p><p>**make-two-way-stream read-char**</p>|

| - |





**Figure 21–8. Operators that accept Open Streams only** 







 



 



