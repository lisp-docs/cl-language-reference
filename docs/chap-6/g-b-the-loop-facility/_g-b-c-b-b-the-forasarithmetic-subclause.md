 



In the *for-as-arithmetic* subclause, the for or as construct iterates from the value supplied by *form1* to the value supplied by *form2* in increments or decrements denoted by *form3*. Each expression is evaluated only once and must evaluate to a *number* . The variable *var* is bound to the value of *form1* in the first iteration and is *stepped* <sub>1</sub> by the value of *form3* in each succeeding iteration, or by 1 if *form3* is not provided. The following *loop keywords* serve as valid prepositions within this syntax. At least one of the prepositions must be used; and at most one from each line may be used in a single subclause. 



from | downfrom | upfrom 



to | downto | upto | below | above 



by 



The prepositional phrases in each subclause may appear in any order. For example, either “from x by y” or “by y from x” is permitted. However, because left-to-right order of evaluation is preserved, the effects will be different in the case of side effects. Consider: 



(let ((x 1)) (loop for i from x by (incf x) to 10 collect i)) 



*→* (1 3 5 7 9) 



(let ((x 1)) (loop for i by (incf x) from x to 10 collect i)) 



*→* (2 4 6 8 10) 



The descriptions of the prepositions follow: 



from 



The *loop keyword* from specifies the value from which *stepping*<sub>1</sub> begins, as supplied by *form1*. *Stepping*<sub>1</sub> is incremental by default. If decremental *stepping*<sub>1</sub> is desired, the preposition downto or above must be used with *form2*. For incremental *stepping*<sub>1</sub>, the default from value is 0. 







 



 



downfrom, upfrom 



The *loop keyword* downfrom indicates that the variable *var* is decreased in decrements supplied by *form3*; the *loop keyword* upfrom indicates that *var* is increased in increments supplied by *form3*. 



to 



The *loop keyword* to marks the end value for *stepping*<sub>1</sub> supplied in *form2*. *Stepping*<sub>1</sub> is incremental by default. If decremental *stepping*<sub>1</sub> is desired, the preposition downfrom must be used with *form1*, or else the preposition downto or above should be used instead of to with *form2*. 



downto, upto 



The *loop keyword* downto specifies decremental *stepping*; the *loop keyword* upto specifies incremental *stepping*. In both cases, the amount of change on each step is specified by *form3*, and the **loop** terminates when the variable *var* passes the value of *form2*. Since there is no default for *form1* in decremental *stepping*<sub>1</sub>, a *form1* value must be supplied (using from or downfrom) when downto is supplied. 



below, above 



The *loop keywords* below and above are analogous to upto and downto respectively. These keywords stop iteration just before the value of the variable *var* reaches the value supplied by *form2*; the end value of *form2* is not included. Since there is no default for *form1* in decremental *stepping*<sub>1</sub>, a *form1* value must be supplied (using from or downfrom) when above is supplied. 



by 



The *loop keyword* by marks the increment or decrement supplied by *form3*. The value of *form3* can be any positive *number* . The default value is 1. 



In an iteration control clause, the for or as construct causes termination when the supplied limit is reached. That is, iteration continues until the value *var* is stepped to the exclusive or inclusive limit supplied by *form2*. The range is exclusive if *form3* increases or decreases *var* to the value of *form2* without reaching that value; the loop keywords below and above provide exclusive limits. An 



inclusive limit allows *var* to attain the value of *form2*; to, downto, and upto provide inclusive limits. 