 



If the :report argument to <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> is used, a print function is defined that is called whenever the defined <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is printed while the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. This function is called the *condition reporter*; the text which it outputs is called a *report message*. 



When a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is printed and <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *condition reporter* for the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is invoked. <ClLinks styled={true} term={"condition"}><i>Conditions</i></ClLinks> are printed automatically by functions such as <ClLinks styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></ClLinks>, <ClLinks styled={true} term={"break"}><b>break</b></ClLinks>, and <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks>. 



When <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> should print in an abbreviated fashion according to the style of the implementation (*e.g.*, by <ClLinks styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></ClLinks>). It is not required that a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> can be recreated by reading its printed representation. 



No <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is provided for directly *accessing* or invoking *condition reporters*. 







 



 



