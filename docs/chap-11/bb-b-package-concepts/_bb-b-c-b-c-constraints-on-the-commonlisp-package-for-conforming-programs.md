 

Except where explicitly allowed, the consequences are undefined if any of the following actions are performed on an *external symbol* of the COMMON-LISP *package*: 

1\. *Binding* or altering its value (lexically or dynamically). (Some exceptions are noted below.) 2. Defining, undefining, or *binding* it as a *function*. (Some exceptions are noted below.) 

3\. Defining, undefining, or *binding* it as a *macro* or *compiler macro*. (Some exceptions are noted below.) 

4\. Defining it as a *type specifier* (via **defstruct**, **defclass**, **deftype**, **define-condition**). 5. Defining it as a structure (via **defstruct**). 

6\. Defining it as a *declaration* with a **declaration** *proclamation*. 

7\. Defining it as a *symbol macro*. 

8\. Altering its *home package*. 



 

 

9\. Tracing it (via **trace**). 

10\. Declaring or proclaiming it **special** (via **declare**, **declaim**, or **proclaim**). 

11\. Declaring or proclaiming its **type** or **ftype** (via **declare**, **declaim**, or **proclaim**). (Some exceptions are noted below.) 

12\. Removing it from the COMMON-LISP *package*. 

13\. Defining a *setf expander* for it (via **defsetf** or **define-setf-method**). 

14\. Defining, undefining, or binding its *setf function name*. 

15\. Defining it as a *method combination* type (via **define-method-combination**). 

16\. Using it as the class-name argument to **setf** of **find-class**. 

17\. Binding it as a *catch tag*. 

18\. Binding it as a *restart name*. 

19\. Defining a *method* for a *standardized generic function* which is *applicable* when all of the *arguments* are *direct instances* of *standardized classes*. 

