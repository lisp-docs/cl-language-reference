 



It is recommended that a *report message* not begin with any introductory text, such as “Error: ” or “Warning: ” or even just <ClLinks styled={true} term={"freshline"}><i>freshline</i></ClLinks> or <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 



It is recommended that a *report message* not be followed by a trailing <ClLinks styled={true} term={"freshline"}><i>freshline</i></ClLinks> or <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 



(error "This is a message.&#126;%") ; Not recommended 



(error "&#126;&amp;This is a message.") ; Not recommended 



(error "&#126;&amp;This is a message.&#126;%") ; Not recommended 



(error "This is a message.") ; Recommended instead 



