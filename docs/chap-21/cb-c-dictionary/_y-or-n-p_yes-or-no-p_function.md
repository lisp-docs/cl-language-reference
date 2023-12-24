**y-or-n-p, yes-or-no-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



<ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



**Arguments and Values:** 



*control*—a *format control*. 



<ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>—*format arguments* for *control*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



These functions ask a question and parse a response from the user. They return <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the answer is affirmative, or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if the answer is negative. 



<ClLinks styled={true} term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> is for asking the user a question whose answer is either “yes” or “no.” It is intended that the reply require the user to answer a yes-or-no question with a single character. <ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> is also for asking the user a question whose answer is either “Yes” or “No.” It is intended that the reply require the user to take more action than just a single keystroke, such as typing the full word yes or no followed by a newline. 







 



 



<ClLinks styled={true} term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> types out a message (if supplied), reads an answer in some <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> manner (intended to be short and simple, such as reading a single character such as Y or N). <ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> types out a message (if supplied), attracts the user’s attention (for example, by ringing the terminal’s bell), and reads an answer in some <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> manner (intended to be multiple characters, such as YES or NO). 



If *format-control* is supplied and not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, then a <ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> operation is performed; then a message is printed as if *format-control* and <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> were given to <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>. In any case, <ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> and <ClLinks styled={true} term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> will provide a prompt such as “(Y or N)” or “(Yes or No)” if appropriate. 



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



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> and <ClLinks styled={true} term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> do not add question marks to the end of the prompt string, so any desired question mark or other punctuation should be explicitly included in the text query. 







 



 



