 



#*n*# 



#*n*#, where *n* is a required unsigned decimal *integer* , provides a reference to some *object* labeled by #*n*=; that is, #*n*# represents a pointer to the same (**eq**) *object* labeled by #*n*=. For example, a structure created in the variable y by this code: 



(setq x (list ’p ’q)) 



(setq y (list (list ’a ’b) x ’foo x)) 



(rplacd (last y) (cdr y)) 



could be represented in this way: 



((a b) . #1=(#2=(p q) foo #2# . #1#)) 



Without this notation, but with <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> set to 10 and <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> set to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the structure would print in this way: 



((a b) (p q) foo (p q) (p q) foo (p q) (p q) foo (p q) ...) 



A reference #*n*# may only occur after a label #*n*=; forward references are not permitted. The reference may not appear as the labeled object itself (that is, #*n*=#*n*#) may not be written because the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> labeled by #*n*= is not well defined in this case. 



