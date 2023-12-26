 



If **&amp;key** is present, all specifiers up to the next <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm> or the end of the <ClLinks  term={"list"}><i>list</i></ClLinks> are keyword parameter specifiers. When keyword parameters are processed, the same arguments are processed that would be made into a <ClLinks  term={"list"}><i>list</i></ClLinks> for a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> . It is permitted to specify both **&amp;rest** and **&amp;key**. In this case the remaining arguments are used for both purposes; that is, all remaining arguments are made into a <ClLinks  term={"list"}><i>list</i></ClLinks> for the <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> , and are also processed for the **&amp;key** parameters. If **&amp;key** is specified, there must remain an even number of arguments; see Section 3.5.1.6 (Odd Number of Keyword Arguments). These arguments are considered as pairs, the first argument in each pair being interpreted as a name and the second as the corresponding value. The first <ClLinks  term={"object"}><i>object</i></ClLinks> of each pair must be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>; see Section 3.5.1.5 (Invalid Keyword  







Arguments). The keyword parameter specifiers may optionally be followed by the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm> **&amp;allow-other-keys**. 



In each keyword parameter specifier must be a name *var* for the parameter variable. If the *var* appears alone or in a (*var init-form*) combination, the keyword name used when matching <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> whose <ClLinks  term={"name"}><i>name</i></ClLinks> is the <ClLinks  term={"same"}><i>same</i></ClLinks> (under <ClLinks  term={"string"}><b>string=</b></ClLinks>) as *var*’s. If the notation ((*keyword-name var*) *init-form*) is used, then the keyword name used to match <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> is *keyword-name*, which may be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in any <ClLinks  term={"package"}><i>package</i></ClLinks>. (Of course, if it is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>, it does not necessarily self-evaluate, so care must be taken when calling the function to make sure that normal evaluation still yields the keyword name.) Thus 



(defun foo (&amp;key radix (type ’integer)) ...) 



means exactly the same as 



(defun foo (&amp;key ((:radix radix)) ((:type type) ’integer)) ...) 



The keyword parameter specifiers are, like all parameter specifiers, effectively processed from left to right. For each keyword parameter specifier, if there is an argument pair whose name matches that specifier’s name (that is, the names are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>), then the parameter variable for that specifier is bound to the second item (the value) of that argument pair. If more than one such argument pair 



matches, the leftmost argument pair is used. If no such argument pair exists, then the *init-form* for that specifier is evaluated and the parameter variable is bound to that value (or to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if no *init-form* was specified). *supplied-p-parameter* is treated as for **&amp;optional** parameters: it is bound to <ClLinks  term={"true"}><i>true</i></ClLinks> if there was a matching argument pair, and to <ClLinks  term={"false"}><i>false</i></ClLinks> otherwise. 



Unless keyword argument checking is suppressed, an argument pair must a name matched by a parameter specifier; see Section 3.5.1.4 (Unrecognized Keyword Arguments). 



If keyword argument checking is suppressed, then it is permitted for an argument pair to match no parameter specifier, and the argument pair is ignored, but such an argument pair is accessible through the <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> if one was supplied. The purpose of these mechanisms is to allow sharing of argument lists among several <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expressions</i></GlossaryTerm> and to allow either the caller or the called <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> to specify that such sharing may be taking place. 



Note that if **&amp;key** is present, a keyword argument of :allow-other-keys is always permitted— regardless of whether the associated value is <ClLinks  term={"true"}><i>true</i></ClLinks> or <ClLinks  term={"false"}><i>false</i></ClLinks>. However, if the value is <ClLinks  term={"false"}><i>false</i></ClLinks>, other non-matching keywords are not tolerated (unless **&amp;allow-other-keys** was used). 



Furthermore, if the receiving argument list specifies a regular argument which would be flagged by :allow-other-keys, then :allow-other-keys has both its special-cased meaning (identifying whether additional keywords are permitted) and its normal meaning (data flow into the function in question). 



