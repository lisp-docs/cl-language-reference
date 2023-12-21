**style-warning** *Condition Type* 



**Class Precedence List:** 



**style-warning**, **warning**, **condition**, **t** 



**Description:** 



The *type* **style-warning** includes those *conditions* that represent *situations* involving *code* that is *conforming code* but that is nevertheless considered to be faulty or substandard. 



**See Also:** 



**muffle-warning** 



**Notes:** 



An *implementation* might signal such a *condition* if it encounters *code* that uses deprecated features or that appears unaesthetic or inefficient. 



An ‘unused variable’ warning must be of *type* **style-warning**. 



In general, the question of whether *code* is faulty or substandard is a subjective decision to be made by the facility processing that *code*. The intent is that whenever such a facility wishes to complain about *code* on such subjective grounds, it should use this *condition type* so that any 



clients who wish to redirect or muffle superfluous warnings can do so without risking that they will be redirecting or muffling other, more serious warnings. 



