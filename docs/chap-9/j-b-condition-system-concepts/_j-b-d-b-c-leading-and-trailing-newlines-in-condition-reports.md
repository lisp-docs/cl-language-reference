 



It is recommended that a *report message* not begin with any introductory text, such as “Error: ” or “Warning: ” or even just <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 



It is recommended that a *report message* not be followed by a trailing <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 



(error "This is a message.&#126;%") ; Not recommended 



(error "&#126;&amp;This is a message.") ; Not recommended 



(error "&#126;&amp;This is a message.&#126;%") ; Not recommended 



(error "This is a message.") ; Recommended instead 



