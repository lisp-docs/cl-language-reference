compute-effective-method
========================

*Generic Function* **COMPUTE-EFFECTIVE-METHOD**

**Syntax:**

**compute-effective-method** *generic-function* *method-combination* *methods* => *effective-method*, *options*,

**Arguments and values:**

*generic-function* -- A generic function metaobject.

*method-combination* -- A method combination metaobject.

*methods* -- A list of method metaobjects.

*effective-method* -- An effective method.

*options* -- A list of effective method options.

**Description:**

This generic function is called to determine the effective method from a sorted list of method metaobjects.

An effective method is a form that describes how the applicable methods are to be combined. Inside of effective method forms are[call-method](http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method) forms which indicate that a particular method is to be called. The arguments to the [call-method](http://www.lispworks.com/documentation/HyperSpec/Body/m_call_m.htm#call-method) form indicate exactly how the method function of the method should be called. (See [make-method-lambda](make-method-lambda.md) for more details about method functions.)

An effective method option has the same interpretation and syntax as either the `:arguments` or the `:generic-function` option in the long form of [define-method-combination](http://www.lispworks.com/documentation/HyperSpec/Body/m_defi_4.htm#define-method-combination).

More information about the form and interpretation of effective methods and effective method options can be found under the description of the [define-method-combination](http://www.lispworks.com/documentation/HyperSpec/Body/m_defi_4.htm#define-method-combination) macro in the CLOS specification.

This generic function can be called by the user or the implementation. It is called by discriminating functions whenever a sorted list of applicable methods must be converted to an effective method.

**Methods:**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**compute-effective-method** (*generic-function* standard-generic-function) *method-combination* *methods*](compute-effective-method-standard-generic-function.md)
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


