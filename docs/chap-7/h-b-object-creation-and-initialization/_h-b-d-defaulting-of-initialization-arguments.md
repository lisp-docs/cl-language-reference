 



A default value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> can be supplied for an initialization argument by using the :default-initargs <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> option. If an initialization argument is declared valid by some particular <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, its default value form might be specified by a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. In this case :default-initargs is used to supply a default value for an inherited initialization argument. 







 



 



The :default-initargs option is used only to provide default values for initialization arguments; it does not declare a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> as a valid initialization argument name. Furthermore, the :default-initargs option is used only to provide default values for initialization arguments when making an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



The argument to the :default-initargs class option is a list of alternating initialization argument names and <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. Each <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is the default value form for the corresponding initialization argument. The default value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> of an initialization argument is used and evaluated only if that initialization argument does not appear in the arguments to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> and is not defaulted by a more specific <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The default value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment of the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form that supplied it; the resulting value is used as the initialization argument’s value. 



The initialization arguments supplied to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> are combined with defaulted initialization arguments to produce a *defaulted initialization argument list*. A *defaulted initialization argument list* is a list of alternating initialization argument names and values in which unsupplied initialization arguments are defaulted and in which the explicitly supplied initialization arguments appear earlier 



in the list than the defaulted initialization arguments. Defaulted initialization arguments are ordered according to the order in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the *classes* that supplied the default values. 



There is a distinction between the purposes of the :default-initargs and the :initform options with respect to the initialization of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. The :default-initargs class option provides a mechanism for the user to give a default value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> for an initialization argument without knowing whether the initialization argument initializes a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> or is passed to a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. If that initialization argument is not explicitly supplied in a call to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, the default value <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is used, just as if it had been supplied in the call. In contrast, the :initform slot option provides a mechanism for the user to give a default initial value form for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. An :initform form is used to initialize a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> only if no initialization argument associated with that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is given as an argument to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> or is defaulted by :default-initargs. 



The order of evaluation of default value <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> for initialization arguments and the order of evaluation of :initform forms are undefined. If the order of evaluation is important, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink> or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> should be used instead. 



