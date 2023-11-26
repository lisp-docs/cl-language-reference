 

A default value *form* can be supplied for an initialization argument by using the :default-initargs *class* option. If an initialization argument is declared valid by some particular *class*, its default value form might be specified by a different *class*. In this case :default-initargs is used to supply a default value for an inherited initialization argument. 

Objects **7–3**

 

 

The :default-initargs option is used only to provide default values for initialization arguments; it does not declare a *symbol* as a valid initialization argument name. Furthermore, the :default-initargs option is used only to provide default values for initialization arguments when making an *instance*. 

The argument to the :default-initargs class option is a list of alternating initialization argument names and *forms*. Each *form* is the default value form for the corresponding initialization argument. The default value *form* of an initialization argument is used and evaluated only if that initialization argument does not appear in the arguments to **make-instance** and is not defaulted by a more specific *class*. The default value *form* is evaluated in the lexical environment of the **defclass** form that supplied it; the resulting value is used as the initialization argument’s value. 

The initialization arguments supplied to **make-instance** are combined with defaulted initialization arguments to produce a *defaulted initialization argument list*. A *defaulted initialization argument list* is a list of alternating initialization argument names and values in which unsupplied initialization arguments are defaulted and in which the explicitly supplied initialization arguments appear earlier 

in the list than the defaulted initialization arguments. Defaulted initialization arguments are ordered according to the order in the *class precedence list* of the *classes* that supplied the default values. 

There is a distinction between the purposes of the :default-initargs and the :initform options with respect to the initialization of *slots*. The :default-initargs class option provides a mechanism for the user to give a default value *form* for an initialization argument without knowing whether the initialization argument initializes a *slot* or is passed to a *method*. If that initialization argument is not explicitly supplied in a call to **make-instance**, the default value *form* is used, just as if it had been supplied in the call. In contrast, the :initform slot option provides a mechanism for the user to give a default initial value form for a *slot*. An :initform form is used to initialize a *slot* only if no initialization argument associated with that *slot* is given as an argument to **make-instance** or is defaulted by :default-initargs. 

The order of evaluation of default value *forms* for initialization arguments and the order of evaluation of :initform forms are undefined. If the order of evaluation is important, **initialize-instance** or **shared-initialize** *methods* should be used instead. 

