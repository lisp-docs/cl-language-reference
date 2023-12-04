**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar, caddr, cdaar, cdadr, cddar, cdddr, caaaar, caaadr, caadar, caaddr, cadaar, cadadr, caddar, cadddr, cdaaar, cdaadr, cdadar, cdaddr, cddaar, cddadr, cdddar, cddddr** *Accessor* 



**Syntax:** 



**(setf (car** *x***)** *new-object***)** 



**(setf (cdr** *x***)** *new-object***)** 



**(setf (caar** *x***)** *new-object***)** 



**(setf (cadr** *x***)** *new-object***)** 



**(setf (cdar** *x***)** *new-object***)** 



**(setf (cddr** *x***)** *new-object***)** 



**(setf (caaar** *x***)** *new-object***)** 



**(setf (caadr** *x***)** *new-object***)** 



**(setf (cadar** *x***)** *new-object***)** 



**(setf (caddr** *x***)** *new-object***)** 



**(setf (cdaar** *x***)** *new-object***)** 



**(setf (cdadr** *x***)** *new-object***)** 



**(setf (cddar** *x***)** *new-object***)** 



**(setf (cdddr** *x***)** *new-object***)** 



**(setf (caaaar** *x***)** *new-object***)** 



**(setf (caaadr** *x***)** *new-object***)** 



**(setf (caadar** *x***)** *new-object***)** 



**(setf (caaddr** *x***)** *new-object***)** 



**(setf (cadaar** *x***)** *new-object***)** 



**(setf (cadadr** *x***)** *new-object***)** 



**(setf (caddar** *x***)** *new-object***)** 



**(setf (cadddr** *x***)** *new-object***)** 



**(setf (cdaaar** *x***)** *new-object***)** 



**(setf (cdaadr** *x***)** *new-object***)** 



**(setf (cdadar** *x***)** *new-object***)** 



**(setf (cdaddr** *x***)** *new-object***)** 



**(setf (cddaar** *x***)** *new-object***)** 



**(setf (cddadr** *x***)** *new-object***)** 



**(setf (cdddar** *x***)** *new-object***)** 



**(setf (cddddr** *x***)** *new-object***)** 



**Pronunciation:** 



**car** *x → object* **cdr** *x → object* 



**caar** *x → object* **cadr** *x → object* **cdar** *x → object* **cddr** *x → object* 



**caaar** *x → object* **caadr** *x → object* **cadar** *x → object* **caddr** *x → object* **cdaar** *x → object* **cdadr** *x → object* **cddar** *x → object* **cdddr** *x → object* 



**caaaar** *x → object* **caaadr** *x → object* **caadar** *x → object* **caaddr** *x → object* **cadaar** *x → object* **cadadr** *x → object* **caddar** *x → object* **cadddr** *x → object* **cdaaar** *x → object* **cdaadr** *x → object* **cdadar** *x → object* **cdaddr** *x → object* **cddaar** *x → object* **cddadr** *x → object* **cdddar** *x → object* **cddddr** *x → object* 



**cadr**: [ **ka d*** **r** ] 







 



 



**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar,** *. . .* 



**caddr**: [ **kad***  **d*** **r** ] or [ **ka d\_ud*** **r** ] 



**cdr**: [ **k\_u d*** **r** ] 



**cddr**: [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ] 



**Arguments and Values:** 



*x*—a *list*. 



*object*—an *object*. 



*new-object*—an *object*. 



**Description:** 



If *x* is a *cons*, **car** returns the *car* of that *cons*. If *x* is **nil**, **car** returns **nil**. 



If *x* is a *cons*, **cdr** returns the *cdr* of that *cons*. If *x* is **nil**, **cdr** returns **nil**. 



*Functions* are provided which perform compositions of up to four **car** and **cdr** operations. Their *names* consist of a C, followed by two, three, or four occurrences of A or D, and finally an R. The series of A’s and D’s in each *function*’s *name* is chosen to identify the series of **car** and **cdr** operations that is performed by the function. The order in which the A’s and D’s appear is the inverse of the order in which the corresponding operations are performed. Figure 14–6 defines the relationships precisely. 







 



 



**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar,** *. . .* 



|**This** *place . . .* **Is equivalent to this** *place . . .*|

| :- |

|<p>(caar *x*) (car (car *x*)) </p><p>(cadr *x*) (car (cdr *x*)) </p><p>(cdar *x*) (cdr (car *x*)) </p><p>(cddr *x*) (cdr (cdr *x*)) </p><p>(caaar *x*) (car (car (car *x*))) </p><p>(caadr *x*) (car (car (cdr *x*))) </p><p>(cadar *x*) (car (cdr (car *x*))) </p><p>(caddr *x*) (car (cdr (cdr *x*))) </p><p>(cdaar *x*) (cdr (car (car *x*))) </p><p>(cdadr *x*) (cdr (car (cdr *x*))) </p><p>(cddar *x*) (cdr (cdr (car *x*))) </p><p>(cdddr *x*) (cdr (cdr (cdr *x*))) </p><p>(caaaar *x*) (car (car (car (car *x*)))) </p><p>(caaadr *x*) (car (car (car (cdr *x*)))) </p><p>(caadar *x*) (car (car (cdr (car *x*)))) </p><p>(caaddr *x*) (car (car (cdr (cdr *x*)))) </p><p>(cadaar *x*) (car (cdr (car (car *x*)))) </p><p>(cadadr *x*) (car (cdr (car (cdr *x*)))) </p><p>(caddar *x*) (car (cdr (cdr (car *x*)))) </p><p>(cadddr *x*) (car (cdr (cdr (cdr *x*)))) </p><p>(cdaaar *x*) (cdr (car (car (car *x*)))) </p><p>(cdaadr *x*) (cdr (car (car (cdr *x*)))) </p><p>(cdadar *x*) (cdr (car (cdr (car *x*)))) </p><p>(cdaddr *x*) (cdr (car (cdr (cdr *x*)))) </p><p>(cddaar *x*) (cdr (cdr (car (car *x*)))) </p><p>(cddadr *x*) (cdr (cdr (car (cdr *x*)))) </p><p>(cdddar *x*) (cdr (cdr (cdr (car *x*)))) </p><p>(cddddr *x*) (cdr (cdr (cdr (cdr *x*))))</p>|





**Figure 14–6. CAR and CDR variants** 



**setf** can also be used with any of these functions to change an existing component of *x*, but **setf** will not make new components. So, for example, the *car* of a *cons* can be assigned with **setf** of **car**, but the *car* of **nil** cannot be assigned with **setf** of **car**. Similarly, the *car* of the *car* of a *cons* whose *car* is a *cons* can be assigned with **setf** of **caar**, but neither **nil**nor a *cons* whose car is **nil** can be assigned with **setf** of **caar**. 



The argument *x* is permitted to be a *dotted list* or a *circular list*. 



**Examples:**
```lisp
 



(car nil) *→* NIL 



(cdr ’(1 . 2)) *→* 2 



(cdr ’(1 2)) *→* (2) 







 



 



(cadr ’(1 2)) *→* 2 



(car ’(a b c)) *→* A 



(cdr ’(a b c)) *→* (B C) 




```
**Exceptional Situations:** 



The functions **car** and **cdr** should signal **type-error** if they receive an argument which is not a *list*. The other functions (**caar**, **cadr**, *. . .* **cddddr**) should behave for the purpose of error checking as if defined by appropriate calls to **car** and **cdr**. 



**See Also:** 



**rplaca**, **first**, **rest** 



**Notes:** 



The *car* of a *cons* can also be altered by using **rplaca**, and the *cdr* of a *cons* can be altered by using **rplacd**. 



(car *x*) *≡* (first *x*) 



(cadr *x*) *≡* (second *x*) *≡* (car (cdr *x*)) 



(caddr *x*) *≡* (third *x*) *≡* (car (cdr (cdr *x*))) 



(cadddr *x*) *≡* (fourth *x*) *≡* (car (cdr (cdr (cdr *x*)))) 



