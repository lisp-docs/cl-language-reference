 

A *call* is a *safe call* if each of the following is either *safe code* or *system code* (other than *system code* that results from *macro expansion* of *programmer code*): 

*•* the *call*. 

*•* the definition of the *function* being *called*. 

*•* the point of *functional evaluation* 

The following special cases require some elaboration: 

*•* If the *function* being called is a *generic function*, it is considered *safe* if all of the following are *safe code* or *system code*: 

– its definition (if it was defined explicitly). 

– the *method* definitions for all *applicable methods*. 

– the definition of its *method combination*. 

*•* For the form (coerce *x* ’function), where *x* is a *lambda expression*, the value of the *optimize quality* **safety** in the global environment at the time the **coerce** is *executed* applies to the resulting *function*. 

*•* For a call to the *function* **ensure-generic-function**, the value of the *optimize quality* **safety** in the *environment object* passed as the :environment *argument* applies to the resulting *generic function*. 

*•* For a call to **compile** with a *lambda expression* as the *argument*, the value of the *optimize quality* **safety** in the *global environment* at the time **compile** is *called* applies to the resulting *compiled function*. 

*•* For a call to **compile** with only one argument, if the original definition of the *function* was *safe*, then the resulting *compiled function* must also be *safe*. 

*•* A *call* to a *method* by **call-next-method** must be considered *safe* if each of the following is *safe code* or *system code*: 

– the definition of the *generic function* (if it was defined explicitly).  



– the *method* definitions for all *applicable methods*. 

– the definition of the *method combination*. 

– the point of entry into the body of the *method defining form*, where the *binding* of **call-next-method** is established. 

– the point of *functional evaluation* of the name **call-next-method**. 

An *unsafe call* is a *call* that is not a *safe call*. 

The informal intent is that the *programmer* can rely on a *call* to be *safe*, even when *system code* is involved, if all reasonable steps have been taken to ensure that the *call* is *safe*. For example, if a *programmer* calls **mapcar** from *safe code* and supplies a *function* that was *compiled* as *safe*, the *implementation* is required to ensure that **mapcar** makes a *safe call* as well. 

