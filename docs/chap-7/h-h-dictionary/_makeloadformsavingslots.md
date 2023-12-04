**make-load-form-saving-slots** *Function* 



**Syntax:** 



**make-load-form-saving-slots** *object* &key *slot-names environment* 



*→ creation-form, initialization-form* 



**Arguments and Values:** 



*object*—an *object*. 



*slot-names*—a *list*. 



*environment*—an *environment object*. 



*creation-form*—a *form*. 



*initialization-form*—a *form*. 



**Description:** 



Returns *forms* that, when *evaluated*, will construct an *object* equivalent to *object*, without *executing initialization forms*. The *slots* in the new *object* that correspond to initialized *slots* in *object* are initialized using the values from *object*. Uninitialized *slots* in *object* are not initialized in the new *object*. **make-load-form-saving-slots** works for any *instance* of **standard-object** or **structure-object**. 







 



 



*Slot-names* is a *list* of the names of the *slots* to preserve. If *slot-names* is not supplied, its value is all of the *local slots*. 



**make-load-form-saving-slots** returns two values, thus it can deal with circular structures. Whether the result is useful in an application depends on whether the *object*’s *type* and slot contents fully capture the application’s idea of the *object*’s state. 



*Environment* is the environment in which the forms will be processed. 



**See Also:** 



**make-load-form**, **make-instance**, **setf**, **slot-value**, **slot-makunbound** 



**Notes:** 



**make-load-form-saving-slots** can be useful in user-written **make-load-form** methods. 



When the *object* is an *instance* of **standard-object**, **make-load-form-saving-slots** could return a creation form that *calls* **allocate-instance** and an initialization form that contains *calls* to **setf** of **slot-value** and **slot-makunbound**, though other *functions* of similar effect might actually be used. 



