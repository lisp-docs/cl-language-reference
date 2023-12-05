 



This example determines a *class precedence list* for the class pie. The following *classes* are defined: (defclass pie (apple cinnamon) ()) 



(defclass apple (fruit) ()) 



(defclass cinnamon (spice) ()) 



(defclass fruit (food) ()) 



(defclass spice (food) ()) 



(defclass food () ()) 



The set <i>S<sub>pie</sub></i> = <i>\{</i>pie, apple, cinnamon, fruit, spice, food, standard-object, t<i>\}</i>. The set <i>R</i> = <i>\{</i>(pie, apple), (apple, cinnamon), (apple, fruit), (cinnamon, spice), 



(fruit, food), (spice, food), (food, standard-object), (standard-object, t)*\}*. 



The class pie is not preceded by anything, so it comes first; the result so far is (pie). Remove pie from *S* and pairs mentioning pie from *R* to get *S* = *\{*apple, cinnamon, fruit, spice, food, standard-object, t*\}* and *R* = *\{*(apple, cinnamon), (apple, fruit), (cinnamon, spice), (fruit, food), (spice, food), (food, standard-object), (standard-object, t)*\}*. 



The class apple is not preceded by anything, so it is next; the result is (pie apple). Removing apple and the relevant pairs results in *S* = *\{*cinnamon, fruit, spice, food, standard-object, t*\}* and *R* = *\{*(cinnamon, spice), (fruit, food), (spice, food), (food, standard-object), (standard-object, t)*\}*. 



The classes cinnamon and fruit are not preceded by anything, so the one with a direct *subclass* rightmost in the *class precedence list* computed so far goes next. The class apple is a direct *subclass*  







of fruit, and the class pie is a direct *subclass* of cinnamon. Because apple appears to the right of pie in the *class precedence list*, fruit goes next, and the result so far is (pie apple fruit). *S* = *\{*cinnamon, spice, food, standard-object, t*\}*; *R* = *\{*(cinnamon, spice), (spice, food), (food, standard-object), (standard-object, t)*\}*. 



The class cinnamon is next, giving the result so far as (pie apple fruit cinnamon). At this point *S* = *\{*spice, food, standard-object, t*\}*; *R* = *\{*(spice, food), (food, standard-object), (standard-object, t)*\}*. 



The classes spice, food, **standard-object**, and **t** are added in that order, and the *class precedence list* is (pie apple fruit cinnamon spice food standard-object t). 



It is possible to write a set of *class* definitions that cannot be ordered. For example: (defclass new-class (fruit apple) ()) 



(defclass apple (fruit) ()) 



The class fruit must precede apple because the local ordering of *superclasses* must be preserved. The class apple must precede fruit because a *class* always precedes its own *superclasses*. When this situation occurs, an error is signaled, as happens here when the system tries to compute the *class precedence list* of new-class. 



The following might appear to be a conflicting set of definitions: 



(defclass pie (apple cinnamon) ()) 



(defclass pastry (cinnamon apple) ()) 



(defclass apple () ()) 



(defclass cinnamon () ()) 



The *class precedence list* for pie is (pie apple cinnamon standard-object t). 



The *class precedence list* for pastry is (pastry cinnamon apple standard-object t). 



It is not a problem for apple to precede cinnamon in the ordering of the *superclasses* of pie but not in the ordering for pastry. However, it is not possible to build a new *class* that has both pie and pastry as *superclasses*. 



