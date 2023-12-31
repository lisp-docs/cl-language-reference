**y-or-n-p, yes-or-no-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"y-or-n-p"}><b>y-or-n-p</b></DictionaryLink> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



<DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> &amp;optional *control* &amp;rest *arguments → generalized-boolean* 



**Arguments and Values:** 



*control*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



<GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>—<GlossaryTerm styled={true} term={"format argument"}><i>format arguments</i></GlossaryTerm> for *control*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



These functions ask a question and parse a response from the user. They return <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the answer is affirmative, or <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if the answer is negative. 



<DictionaryLink  term={"y-or-n-p"}><b>y-or-n-p</b></DictionaryLink> is for asking the user a question whose answer is either “yes” or “no.” It is intended that the reply require the user to answer a yes-or-no question with a single character. <DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> is also for asking the user a question whose answer is either “Yes” or “No.” It is intended that the reply require the user to take more action than just a single keystroke, such as typing the full word yes or no followed by a newline. 







 



 



<DictionaryLink  term={"y-or-n-p"}><b>y-or-n-p</b></DictionaryLink> types out a message (if supplied), reads an answer in some <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> manner (intended to be short and simple, such as reading a single character such as Y or N). <DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> types out a message (if supplied), attracts the user’s attention (for example, by ringing the terminal’s bell), and reads an answer in some <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> manner (intended to be multiple characters, such as YES or NO). 



If *format-control* is supplied and not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, then a <DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> operation is performed; then a message is printed as if *format-control* and <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> were given to <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>. In any case, <DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> and <DictionaryLink  term={"y-or-n-p"}><b>y-or-n-p</b></DictionaryLink> will provide a prompt such as “(Y or N)” or “(Yes or No)” if appropriate. 



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



<DictionaryLink  term={"format"}><b>format</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> and <DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> do not add question marks to the end of the prompt string, so any desired question mark or other punctuation should be explicitly included in the text query. 







 



 



