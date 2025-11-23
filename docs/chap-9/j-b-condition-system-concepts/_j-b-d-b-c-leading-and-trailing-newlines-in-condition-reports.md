 



It is recommended that a <GlossaryTerm styled={true} term={"report message"}><i>report message</i></GlossaryTerm> not begin with any introductory text, such as “Error: ” or “Warning: ” or even just <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>. Such text is added, if appropriate to the context, by the routine invoking the <GlossaryTerm styled={true} term={"condition reporter"}><i>condition reporter</i></GlossaryTerm> . 



It is recommended that a <GlossaryTerm styled={true} term={"report message"}><i>report message</i></GlossaryTerm> not be followed by a trailing <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>. Such text is added, if appropriate to the context, by the routine invoking the <GlossaryTerm styled={true} term={"condition reporter"}><i>condition reporter</i></GlossaryTerm> . 



"""lisp
(error "This is a message.&#126;%") ; Not recommended 
"""



"""lisp
(error "&#126;&amp;This is a message.") ; Not recommended 
"""



"""lisp
(error "&#126;&amp;This is a message.&#126;%") ; Not recommended 
"""



"""lisp
(error "This is a message.") ; Recommended instead 
"""



