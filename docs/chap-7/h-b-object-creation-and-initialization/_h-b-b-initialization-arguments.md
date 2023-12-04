 



An initialization argument controls *object* creation and initialization. It is often convenient to use keyword *symbols* to name initialization arguments, but the *name* of an initialization argument can be any *symbol*, including **nil**. An initialization argument can be used in two ways: to fill a *slot* with 



a value or to provide an argument for an initialization *method*. A single initialization argument can be used for both purposes. 



An *initialization argument list* is a *property list* of initialization argument names and values. Its structure is identical to a *property list* and also to the portion of an argument list processed for **&key** parameters. As in those lists, if an initialization argument name appears more than once in an initialization argument list, the leftmost occurrence supplies the value and the remaining 



occurrences are ignored. The arguments to **make-instance** (after the first argument) form an *initialization argument list*. 



An initialization argument can be associated with a *slot*. If the initialization argument has a value in the *initialization argument list*, the value is stored into the *slot* of the newly created *object*, overriding any :initform form associated with the *slot*. A single initialization argument can initialize more than one *slot*. An initialization argument that initializes a *shared slot* stores its value into the *shared slot*, replacing any previous value. 



An initialization argument can be associated with a *method*. When an *object* is created and a particular initialization argument is supplied, the *generic functions* **initialize-instance**, **shared-initialize**, and **allocate-instance** are called with that initialization argument’s name and value as a keyword argument pair. If a value for the initialization argument is not supplied in the *initialization argument list*, the *method*’s *lambda list* supplies a default value. 



Initialization arguments are used in four situations: when making an *instance*, when re-initializing an *instance*, when updating an *instance* to conform to a redefined *class*, and when updating an *instance* to conform to the definition of a different *class*. 



Because initialization arguments are used to control the creation and initialization of an *instance* of some particular *class*, we say that an initialization argument is “an initialization argument for” that *class*. 



