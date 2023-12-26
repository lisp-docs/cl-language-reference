 



A default value <ClLinks  term={"form"}><i>form</i></ClLinks> can be supplied for an initialization argument by using the :default-initargs <ClLinks  term={"class"}><i>class</i></ClLinks> option. If an initialization argument is declared valid by some particular <ClLinks  term={"class"}><i>class</i></ClLinks>, its default value form might be specified by a different <ClLinks  term={"class"}><i>class</i></ClLinks>. In this case :default-initargs is used to supply a default value for an inherited initialization argument. 







 



 



The :default-initargs option is used only to provide default values for initialization arguments; it does not declare a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as a valid initialization argument name. Furthermore, the :default-initargs option is used only to provide default values for initialization arguments when making an <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



The argument to the :default-initargs class option is a list of alternating initialization argument names and <ClLinks  term={"form"}><i>forms</i></ClLinks>. Each <ClLinks  term={"form"}><i>form</i></ClLinks> is the default value form for the corresponding initialization argument. The default value <ClLinks  term={"form"}><i>form</i></ClLinks> of an initialization argument is used and evaluated only if that initialization argument does not appear in the arguments to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> and is not defaulted by a more specific <ClLinks  term={"class"}><i>class</i></ClLinks>. The default value <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in the lexical environment of the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form that supplied it; the resulting value is used as the initialization argument’s value. 



The initialization arguments supplied to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> are combined with defaulted initialization arguments to produce a *defaulted initialization argument list*. A *defaulted initialization argument list* is a list of alternating initialization argument names and values in which unsupplied initialization arguments are defaulted and in which the explicitly supplied initialization arguments appear earlier 



in the list than the defaulted initialization arguments. Defaulted initialization arguments are ordered according to the order in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the *classes* that supplied the default values. 



There is a distinction between the purposes of the :default-initargs and the :initform options with respect to the initialization of <ClLinks  term={"slot"}><i>slots</i></ClLinks>. The :default-initargs class option provides a mechanism for the user to give a default value <ClLinks  term={"form"}><i>form</i></ClLinks> for an initialization argument without knowing whether the initialization argument initializes a <ClLinks  term={"slot"}><i>slot</i></ClLinks> or is passed to a <ClLinks  term={"method"}><i>method</i></ClLinks>. If that initialization argument is not explicitly supplied in a call to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, the default value <ClLinks  term={"form"}><i>form</i></ClLinks> is used, just as if it had been supplied in the call. In contrast, the :initform slot option provides a mechanism for the user to give a default initial value form for a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. An :initform form is used to initialize a <ClLinks  term={"slot"}><i>slot</i></ClLinks> only if no initialization argument associated with that <ClLinks  term={"slot"}><i>slot</i></ClLinks> is given as an argument to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> or is defaulted by :default-initargs. 



The order of evaluation of default value <ClLinks  term={"form"}><i>forms</i></ClLinks> for initialization arguments and the order of evaluation of :initform forms are undefined. If the order of evaluation is important, <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks> or <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks> <ClLinks  term={"method"}><i>methods</i></ClLinks> should be used instead. 



