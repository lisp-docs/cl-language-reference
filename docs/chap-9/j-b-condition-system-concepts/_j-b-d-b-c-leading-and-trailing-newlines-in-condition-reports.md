 

It is recommended that a *report message* not begin with any introductory text, such as “Error: ” or “Warning: ” or even just *freshline* or *newline*. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 

It is recommended that a *report message* not be followed by a trailing *freshline* or *newline*. Such text is added, if appropriate to the context, by the routine invoking the *condition reporter* . 

(error "This is a message.~%") ; Not recommended 

(error "~&This is a message.") ; Not recommended 

(error "~&This is a message.~%") ; Not recommended 

(error "This is a message.") ; Recommended instead 

