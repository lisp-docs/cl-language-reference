 



The next *arg* should be a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; it is printed according to the modifier flags. 



&#126;C prints the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> as if by using <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> if it is a *simple character* . <ClLinks styled={true} term={"character"}><i>Characters</i></ClLinks> that are not <ClLinks styled={true} term={"simple"}><i>simple</i></ClLinks> are not necessarily printed as if by <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>, but are displayed in an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>, abbreviated format. For example, 



(format nil "&#126;C" #\A) → "A" 



(format nil "&#126;C" #\Space) → " " 



&#126;:C is the same as &#126;C for *printing characters*, but other <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are “spelled out.” The intent is that this is a “pretty” format for printing characters. For *simple characters* that are not <ClLinks styled={true} term={"printing"}><i>printing</i></ClLinks>, what is spelled out is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> (see <ClLinks styled={true} term={"char-name"}><b>char-name</b></ClLinks>). For <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that are not <ClLinks styled={true} term={"simple"}><i>simple</i></ClLinks> and not <ClLinks styled={true} term={"printing"}><i>printing</i></ClLinks>, what is spelled out is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. For example, 



(format nil "&#126;:C" #\A) → "A" 



(format nil "&#126;:C" #\Space) → "Space" 



;; This next example assumes an implementation-defined "Control" attribute. 



(format nil "&#126;:C" #\Control-Space) 



→ "Control-Space" 



<i><sup>or</sup>→</i> "c-Space" 



&#126;:@C prints what &#126;:C would, and then if the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> requires unusual shift keys on the keyboard to type it, this fact is mentioned. For example, 



(format nil "&#126;:@C" #\Control-Partial) → "Control-*∂* (Top-F)" 



This is the format used for telling the user about a key he is expected to type, in prompts, for instance. The precise output may depend not only on the implementation, but on the particular I/O devices in use. 







 



 



&#126;@C prints the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in a way that the *Lisp reader* can understand, using #\ syntax. &#126;@C binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



