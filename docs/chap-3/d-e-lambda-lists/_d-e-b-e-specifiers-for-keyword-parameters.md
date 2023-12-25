 



If **&amp;key** is present, all specifiers up to the next *lambda list keyword* or the end of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> are keyword parameter specifiers. When keyword parameters are processed, the same arguments are processed that would be made into a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> for a *rest parameter* . It is permitted to specify both **&amp;rest** and **&amp;key**. In this case the remaining arguments are used for both purposes; that is, all remaining arguments are made into a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> for the *rest parameter* , and are also processed for the **&amp;key** parameters. If **&amp;key** is specified, there must remain an even number of arguments; see Section 3.5.1.6 (Odd Number of Keyword Arguments). These arguments are considered as pairs, the first argument in each pair being interpreted as a name and the second as the corresponding value. The first <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of each pair must be a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; see Section 3.5.1.5 (Invalid Keyword  







Arguments). The keyword parameter specifiers may optionally be followed by the *lambda list keyword* **&amp;allow-other-keys**. 



In each keyword parameter specifier must be a name *var* for the parameter variable. If the *var* appears alone or in a (*var init-form*) combination, the keyword name used when matching <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> (under <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>) as *var*’s. If the notation ((*keyword-name var*) *init-form*) is used, then the keyword name used to match <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> is *keyword-name*, which may be a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. (Of course, if it is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it does not necessarily self-evaluate, so care must be taken when calling the function to make sure that normal evaluation still yields the keyword name.) Thus 



(defun foo (&amp;key radix (type ’integer)) ...) 



means exactly the same as 



(defun foo (&amp;key ((:radix radix)) ((:type type) ’integer)) ...) 



The keyword parameter specifiers are, like all parameter specifiers, effectively processed from left to right. For each keyword parameter specifier, if there is an argument pair whose name matches that specifier’s name (that is, the names are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>), then the parameter variable for that specifier is bound to the second item (the value) of that argument pair. If more than one such argument pair 



matches, the leftmost argument pair is used. If no such argument pair exists, then the *init-form* for that specifier is evaluated and the parameter variable is bound to that value (or to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no *init-form* was specified). *supplied-p-parameter* is treated as for **&amp;optional** parameters: it is bound to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if there was a matching argument pair, and to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> otherwise. 



Unless keyword argument checking is suppressed, an argument pair must a name matched by a parameter specifier; see Section 3.5.1.4 (Unrecognized Keyword Arguments). 



If keyword argument checking is suppressed, then it is permitted for an argument pair to match no parameter specifier, and the argument pair is ignored, but such an argument pair is accessible through the *rest parameter* if one was supplied. The purpose of these mechanisms is to allow sharing of argument lists among several *lambda expressions* and to allow either the caller or the called *lambda expression* to specify that such sharing may be taking place. 



Note that if **&amp;key** is present, a keyword argument of :allow-other-keys is always permitted— regardless of whether the associated value is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. However, if the value is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, other non-matching keywords are not tolerated (unless **&amp;allow-other-keys** was used). 



Furthermore, if the receiving argument list specifies a regular argument which would be flagged by :allow-other-keys, then :allow-other-keys has both its special-cased meaning (identifying whether additional keywords are permitted) and its normal meaning (data flow into the function in question). 



