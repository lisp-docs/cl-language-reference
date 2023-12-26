**y-or-n-p, yes-or-no-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



<ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



**Arguments and Values:** 



*control*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



<ClLinks  term={"argument"}><i>arguments</i></ClLinks>—<GlossaryTerm styled={true} term={"format argument"}><i>format arguments</i></GlossaryTerm> for *control*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



These functions ask a question and parse a response from the user. They return <ClLinks  term={"true"}><i>true</i></ClLinks> if the answer is affirmative, or <ClLinks  term={"false"}><i>false</i></ClLinks> if the answer is negative. 



<ClLinks  term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> is for asking the user a question whose answer is either “yes” or “no.” It is intended that the reply require the user to answer a yes-or-no question with a single character. <ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> is also for asking the user a question whose answer is either “Yes” or “No.” It is intended that the reply require the user to take more action than just a single keystroke, such as typing the full word yes or no followed by a newline. 







 



 



<ClLinks  term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> types out a message (if supplied), reads an answer in some <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> manner (intended to be short and simple, such as reading a single character such as Y or N). <ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> types out a message (if supplied), attracts the user’s attention (for example, by ringing the terminal’s bell), and reads an answer in some <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> manner (intended to be multiple characters, such as YES or NO). 



If *format-control* is supplied and not <ClLinks  term={"nil"}><b>nil</b></ClLinks>, then a <ClLinks  term={"fresh-line"}><b>fresh-line</b></ClLinks> operation is performed; then a message is printed as if *format-control* and <ClLinks  term={"argument"}><i>arguments</i></ClLinks> were given to <ClLinks  term={"format"}><b>format</b></ClLinks>. In any case, <ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> and <ClLinks  term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> will provide a prompt such as “(Y or N)” or “(Yes or No)” if appropriate. 



All input and output are performed using *query I/O*. 



**Examples:**
```lisp
(y-or-n-p "(t or nil) given by") 
▷ (t or nil) given by (Y or N) Y 
→ true 
(yes-or-no-p "a ~S message" ’frightening) 
▷ a FRIGHTENING message (Yes or No) no 
→ false 
(y-or-n-p "Produce listing file?") 
▷ Produce listing file? 
▷ Please respond with Y or N. n 
→ false 
```
**Side Effects:** 



Output to and input from *query I/O* will occur. 



**Affected By:** 



**\*query-io\***. 



**See Also:** 



<ClLinks  term={"format"}><b>format</b></ClLinks> 



**Notes:** 



<ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> and <ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> do not add question marks to the end of the prompt string, so any desired question mark or other punctuation should be explicitly included in the text query. 







 



 



