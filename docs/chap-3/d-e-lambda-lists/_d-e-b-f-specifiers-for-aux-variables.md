 



These are not really parameters. If the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm> **&amp;aux** is present, all specifiers after it are auxiliary variable specifiers. After all parameter specifiers have been processed, the auxiliary variable specifiers (those following &amp;aux) are processed from left to right. For each one, *init-form* is 



evaluated and *var* is bound to that value (or to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if no *init-form* was specified). **&amp;aux** variable processing is analogous to <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> processing. 



(lambda (x y &amp;aux (a (car x)) (b 2) c) (list x y a b c)) 



*≡* (lambda (x y) (let\* ((a (car x)) (b 2) c) (list x y a b c))) 



