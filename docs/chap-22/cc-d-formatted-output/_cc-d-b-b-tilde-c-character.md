 

The next *arg* should be a *character* ; it is printed according to the modifier flags. 

~C prints the *character* as if by using **write-char** if it is a *simple character* . *Characters* that are not *simple* are not necessarily printed as if by **write-char**, but are displayed in an *implementation-defined*, abbreviated format. For example, 

(format nil "~C" #\A) *→* "A" 

(format nil "~C" #\Space) *→* " " 

~:C is the same as ~C for *printing characters*, but other *characters* are “spelled out.” The intent is that this is a “pretty” format for printing characters. For *simple characters* that are not *printing*, what is spelled out is the *name* of the *character* (see **char-name**). For *characters* that are not *simple* and not *printing*, what is spelled out is *implementation-defined*. For example, 

(format nil "~:C" #\A) *→* "A" 

(format nil "~:C" #\Space) *→* "Space" 

;; This next example assumes an implementation-defined "Control" attribute. 

(format nil "~:C" #\Control-Space) 

*→* "Control-Space" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "c-Space" 

~:@C prints what ~:C would, and then if the *character* requires unusual shift keys on the keyboard to type it, this fact is mentioned. For example, 

(format nil "~:@C" #\Control-Partial) *→* "Control-*∂* (Top-F)" 

This is the format used for telling the user about a key he is expected to type, in prompts, for instance. The precise output may depend not only on the implementation, but on the particular I/O devices in use. 



 

 

~@C prints the *character* in a way that the *Lisp reader* can understand, using #\ syntax. ~@C binds **\*print-escape\*** to **t**. 

