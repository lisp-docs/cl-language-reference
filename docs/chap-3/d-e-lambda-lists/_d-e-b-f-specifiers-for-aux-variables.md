 



These are not really parameters. If the *lambda list keyword* **&amp;aux** is present, all specifiers after it are auxiliary variable specifiers. After all parameter specifiers have been processed, the auxiliary variable specifiers (those following &amp;aux) are processed from left to right. For each one, *init-form* is 



evaluated and *var* is bound to that value (or to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no *init-form* was specified). **&amp;aux** variable processing is analogous to <DictionaryLink styled={true} term={"let"}><b>let\*</b></DictionaryLink> processing. 



(lambda (x y &amp;aux (a (car x)) (b 2) c) (list x y a b c)) 



*≡* (lambda (x y) (let\* ((a (car x)) (b 2) c) (list x y a b c))) 



