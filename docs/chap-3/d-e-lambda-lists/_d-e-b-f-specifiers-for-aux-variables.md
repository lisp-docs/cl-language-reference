**3.4.1.5 Specifiers for &aux variables** 

These are not really parameters. If the *lambda list keyword* **&aux** is present, all specifiers after it are auxiliary variable specifiers. After all parameter specifiers have been processed, the auxiliary variable specifiers (those following &aux) are processed from left to right. For each one, *init-form* is 

evaluated and *var* is bound to that value (or to **nil** if no *init-form* was specified). **&aux** variable processing is analogous to **let\*** processing. 

(lambda (x y &aux (a (car x)) (b 2) c) (list x y a b c)) 

*≡* (lambda (x y) (let\* ((a (car x)) (b 2) c) (list x y a b c))) 

