 



The next *arg* should be a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; it is printed according to the modifier flags. 



&#126;C prints the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> as if by using <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> if it is a *simple character* . <GlossaryTerm styled={true} term={"character"}><i>Characters</i></GlossaryTerm> that are not <GlossaryTerm styled={true} term={"simple"}><i>simple</i></GlossaryTerm> are not necessarily printed as if by <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink>, but are displayed in an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>, abbreviated format. For example, 



(format nil "&#126;C" #\A) *→* "A" 



(format nil "&#126;C" #\Space) *→* " " 



&#126;:C is the same as &#126;C for *printing characters*, but other <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are “spelled out.” The intent is that this is a “pretty” format for printing characters. For *simple characters* that are not <GlossaryTerm styled={true} term={"printing"}><i>printing</i></GlossaryTerm>, what is spelled out is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> (see <DictionaryLink styled={true} term={"char-name"}><b>char-name</b></DictionaryLink>). For <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that are not <GlossaryTerm styled={true} term={"simple"}><i>simple</i></GlossaryTerm> and not <GlossaryTerm styled={true} term={"printing"}><i>printing</i></GlossaryTerm>, what is spelled out is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. For example, 



(format nil "&#126;:C" #\A) *→* "A" 



(format nil "&#126;:C" #\Space) *→* "Space" 



;; This next example assumes an implementation-defined "Control" attribute. 



(format nil "&#126;:C" #\Control-Space) 



*→* "Control-Space" 



<i><sup>or</sup>→</i> "c-Space" 



&#126;:@C prints what &#126;:C would, and then if the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> requires unusual shift keys on the keyboard to type it, this fact is mentioned. For example, 



(format nil "&#126;:@C" #\Control-Partial) *→* "Control-*∂* (Top-F)" 



This is the format used for telling the user about a key he is expected to type, in prompts, for instance. The precise output may depend not only on the implementation, but on the particular I/O devices in use. 







 



 



&#126;@C prints the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> in a way that the *Lisp reader* can understand, using #\ syntax. &#126;@C binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



