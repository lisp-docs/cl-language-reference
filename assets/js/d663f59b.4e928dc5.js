"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[8514],{1136:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>j,default:()=>b,frontMatter:()=>x,metadata:()=>f,toc:()=>p});var i=n(5893),t=n(1151);function l(e){const s={p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"7.5 Slots"})})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function r(e){const s={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"7.5.1 Introduction to Slots"})}),"\n",(0,i.jsxs)(s.p,{children:["An ",(0,i.jsx)(s.em,{children:"object"})," of ",(0,i.jsx)(s.em,{children:"metaclass"})," ",(0,i.jsx)(s.strong,{children:"standard-class"})," has zero or more named ",(0,i.jsx)(s.em,{children:"slots"}),". The ",(0,i.jsx)(s.em,{children:"slots"})," of an ",(0,i.jsx)(s.em,{children:"object"})," are determined by the ",(0,i.jsx)(s.em,{children:"class"})," of the ",(0,i.jsx)(s.em,{children:"object"}),". Each ",(0,i.jsx)(s.em,{children:"slot"})," can hold one value. The ",(0,i.jsx)(s.em,{children:"name"})," of a ",(0,i.jsx)(s.em,{children:"slot"})," is a ",(0,i.jsx)(s.em,{children:"symbol"})," that is syntactically valid for use as a variable name."]}),"\n",(0,i.jsxs)(s.p,{children:["When a ",(0,i.jsx)(s.em,{children:"slot"})," does not have a value, the ",(0,i.jsx)(s.em,{children:"slot"})," is said to be ",(0,i.jsx)(s.em,{children:"unbound"}),". When an unbound ",(0,i.jsx)(s.em,{children:"slot"})," is read, the ",(0,i.jsx)(s.em,{children:"generic function"})," ",(0,i.jsx)(s.strong,{children:"slot-unbound"})," is invoked. The system-supplied primary ",(0,i.jsx)(s.em,{children:"method"})," for ",(0,i.jsx)(s.strong,{children:"slot-unbound"})," on ",(0,i.jsx)(s.em,{children:"class"})," ",(0,i.jsx)(s.strong,{children:"t"})," signals an error. If ",(0,i.jsx)(s.strong,{children:"slot-unbound"})," returns, its ",(0,i.jsx)(s.em,{children:"primary value"})," is used that time as the ",(0,i.jsx)(s.em,{children:"value"})," of the ",(0,i.jsx)(s.em,{children:"slot"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The default initial value form for a ",(0,i.jsx)(s.em,{children:"slot"})," is defined by the ",":initform"," slot option. When the ",":initform"," form is used to supply a value, it is evaluated in the lexical environment in which the ",(0,i.jsx)(s.strong,{children:"defclass"})," form was evaluated. The ",":initform"," along with the lexical environment in which the ",(0,i.jsx)(s.strong,{children:"defclass"})," form was evaluated is called a ",(0,i.jsx)(s.em,{children:"captured initialization form"}),". For more details, see Section 7.1 (Object Creation and Initialization)."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.em,{children:"local slot"})," is defined to be a ",(0,i.jsx)(s.em,{children:"slot"})," that is ",(0,i.jsx)(s.em,{children:"accessible"})," to exactly one ",(0,i.jsx)(s.em,{children:"instance"}),", namely the one in which the ",(0,i.jsx)(s.em,{children:"slot"})," is allocated. A ",(0,i.jsx)(s.em,{children:"shared slot"})," is defined to be a ",(0,i.jsx)(s.em,{children:"slot"})," that is visible to more than one ",(0,i.jsx)(s.em,{children:"instance"})," of a given ",(0,i.jsx)(s.em,{children:"class"})," and its ",(0,i.jsx)(s.em,{children:"subclasses"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.em,{children:"class"})," is said to define a ",(0,i.jsx)(s.em,{children:"slot"})," with a given ",(0,i.jsx)(s.em,{children:"name"})," when the ",(0,i.jsx)(s.strong,{children:"defclass"})," form for that ",(0,i.jsx)(s.em,{children:"class"})," contains a ",(0,i.jsx)(s.em,{children:"slot specifier"})," with that ",(0,i.jsx)(s.em,{children:"name"}),". Defining a ",(0,i.jsx)(s.em,{children:"local slot"})," does not immediately create a ",(0,i.jsx)(s.em,{children:"slot"}),"; it causes a ",(0,i.jsx)(s.em,{children:"slot"})," to be created each time an ",(0,i.jsx)(s.em,{children:"instance"})," of the ",(0,i.jsx)(s.em,{children:"class"})," is created. Defining a ",(0,i.jsx)(s.em,{children:"shared slot"})," immediately creates a ",(0,i.jsx)(s.em,{children:"slot"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",":allocation"," slot option to ",(0,i.jsx)(s.strong,{children:"defclass"})," controls the kind of ",(0,i.jsx)(s.em,{children:"slot"})," that is defined. If the value of the ",":allocation"," slot option is ",":instance",", a ",(0,i.jsx)(s.em,{children:"local slot"})," is created. If the value of ",":allocation"," is ",":class",", a ",(0,i.jsx)(s.em,{children:"shared slot"})," is created."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.em,{children:"slot"})," is said to be ",(0,i.jsx)(s.em,{children:"accessible"})," in an ",(0,i.jsx)(s.em,{children:"instance"})," of a ",(0,i.jsx)(s.em,{children:"class"})," if the ",(0,i.jsx)(s.em,{children:"slot"})," is defined by the ",(0,i.jsx)(s.em,{children:"class"})," of the ",(0,i.jsx)(s.em,{children:"instance"})," or is inherited from a ",(0,i.jsx)(s.em,{children:"superclass"})," of that ",(0,i.jsx)(s.em,{children:"class"}),". At most one ",(0,i.jsx)(s.em,{children:"slot"})," of a given ",(0,i.jsx)(s.em,{children:"name"})," can be ",(0,i.jsx)(s.em,{children:"accessible"})," in an ",(0,i.jsx)(s.em,{children:"instance"}),". A ",(0,i.jsx)(s.em,{children:"shared slot"})," defined by a ",(0,i.jsx)(s.em,{children:"class"})," is ",(0,i.jsx)(s.em,{children:"accessible"})," in all ",(0,i.jsx)(s.em,{children:"instances"})," of that ",(0,i.jsx)(s.em,{children:"class"}),". A detailed explanation of the inheritance of ",(0,i.jsx)(s.em,{children:"slots"})," is given in Section 7.5.3 (Inheritance of Slots and Slot Options)."]})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}function h(e){const s={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"7.5.2 Accessing Slots"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Slots"})," can be ",(0,i.jsx)(s.em,{children:"accessed"})," in two ways: by use of the primitive function ",(0,i.jsx)(s.strong,{children:"slot-value"})," and by use of ",(0,i.jsx)(s.em,{children:"generic functions"})," generated by the ",(0,i.jsx)(s.strong,{children:"defclass"})," form."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.em,{children:"function"})," ",(0,i.jsx)(s.strong,{children:"slot-value"})," can be used with any of the ",(0,i.jsx)(s.em,{children:"slot"})," names specified in the ",(0,i.jsx)(s.strong,{children:"defclass"})," form to ",(0,i.jsx)(s.em,{children:"access"})," a specific ",(0,i.jsx)(s.em,{children:"slot accessible"})," in an ",(0,i.jsx)(s.em,{children:"instance"})," of the given ",(0,i.jsx)(s.em,{children:"class"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Objects ",(0,i.jsx)(s.strong,{children:"7\u201313"})]}),"\n",(0,i.jsxs)(s.p,{children:["The macro ",(0,i.jsx)(s.strong,{children:"defclass"})," provides syntax for generating ",(0,i.jsx)(s.em,{children:"methods"})," to read and write ",(0,i.jsx)(s.em,{children:"slots"}),". If a reader ",(0,i.jsx)(s.em,{children:"method"})," is requested, a ",(0,i.jsx)(s.em,{children:"method"})," is automatically generated for reading the value of the ",(0,i.jsx)(s.em,{children:"slot"}),", but no ",(0,i.jsx)(s.em,{children:"method"})," for storing a value into it is generated. If a writer ",(0,i.jsx)(s.em,{children:"method"})," is requested, a ",(0,i.jsx)(s.em,{children:"method"})," is automatically generated for storing a value into the ",(0,i.jsx)(s.em,{children:"slot"}),", but no ",(0,i.jsx)(s.em,{children:"method"})," for reading its value is generated. If an accessor ",(0,i.jsx)(s.em,{children:"method"})," is requested, a ",(0,i.jsx)(s.em,{children:"method"})," for reading the value of the ",(0,i.jsx)(s.em,{children:"slot"})," and a ",(0,i.jsx)(s.em,{children:"method"})," for storing a value into the ",(0,i.jsx)(s.em,{children:"slot"})," are automatically generated. Reader and writer ",(0,i.jsx)(s.em,{children:"methods"})]}),"\n",(0,i.jsxs)(s.p,{children:["are implemented using ",(0,i.jsx)(s.strong,{children:"slot-value"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["When a reader or writer ",(0,i.jsx)(s.em,{children:"method"})," is specified for a ",(0,i.jsx)(s.em,{children:"slot"}),", the name of the ",(0,i.jsx)(s.em,{children:"generic function"})," to which the generated ",(0,i.jsx)(s.em,{children:"method"})," belongs is directly specified. If the ",(0,i.jsx)(s.em,{children:"name"})," specified for the writer ",(0,i.jsx)(s.em,{children:"method"})," is the symbol name, the ",(0,i.jsx)(s.em,{children:"name"})," of the ",(0,i.jsx)(s.em,{children:"generic function"})," for writing the ",(0,i.jsx)(s.em,{children:"slot"})," is the symbol name, and the ",(0,i.jsx)(s.em,{children:"generic function"})," takes two arguments: the new value and the ",(0,i.jsx)(s.em,{children:"instance"}),", in that order. If the ",(0,i.jsx)(s.em,{children:"name"})," specified for the accessor ",(0,i.jsx)(s.em,{children:"method"})," is the symbol name, the ",(0,i.jsx)(s.em,{children:"name"})," of the ",(0,i.jsx)(s.em,{children:"generic function"})," for reading"]}),"\n",(0,i.jsxs)(s.p,{children:["the ",(0,i.jsx)(s.em,{children:"slot"})," is the symbol name, and the ",(0,i.jsx)(s.em,{children:"name"})," of the ",(0,i.jsx)(s.em,{children:"generic function"})," for writing the ",(0,i.jsx)(s.em,{children:"slot"})," is the list (setf name)."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.em,{children:"generic function"})," created or modified by supplying ",":reader",", ",":writer",", or ",":accessor"," ",(0,i.jsx)(s.em,{children:"slot"})," options can be treated exactly as an ordinary ",(0,i.jsx)(s.em,{children:"generic function"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Note that ",(0,i.jsx)(s.strong,{children:"slot-value"})," can be used to read or write the value of a ",(0,i.jsx)(s.em,{children:"slot"})," whether or not reader or writer ",(0,i.jsx)(s.em,{children:"methods"})," exist for that ",(0,i.jsx)(s.em,{children:"slot"}),". When ",(0,i.jsx)(s.strong,{children:"slot-value"})," is used, no reader or writer ",(0,i.jsx)(s.em,{children:"methods"})," are invoked."]}),"\n",(0,i.jsxs)(s.p,{children:["The macro ",(0,i.jsx)(s.strong,{children:"with-slots"})," can be used to establish a ",(0,i.jsx)(s.em,{children:"lexical environment"})," in which specified ",(0,i.jsx)(s.em,{children:"slots"})," are lexically available as if they were variables. The macro ",(0,i.jsx)(s.strong,{children:"with-slots"})," invokes the ",(0,i.jsx)(s.em,{children:"function"})," ",(0,i.jsx)(s.strong,{children:"slot-value"})," to ",(0,i.jsx)(s.em,{children:"access"})," the specified ",(0,i.jsx)(s.em,{children:"slots"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The macro ",(0,i.jsx)(s.strong,{children:"with-accessors"})," can be used to establish a lexical environment in which specified ",(0,i.jsx)(s.em,{children:"slots"})," are lexically available through their accessors as if they were variables. The macro ",(0,i.jsx)(s.strong,{children:"with-accessors"})," invokes the appropriate accessors to ",(0,i.jsx)(s.em,{children:"access"})," the specified ",(0,i.jsx)(s.em,{children:"slots"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function d(e){const s={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"7.5.3 Inheritance of Slots and Slot Options"})}),"\n",(0,i.jsxs)(s.p,{children:["The set of the ",(0,i.jsx)(s.em,{children:"names"})," of all ",(0,i.jsx)(s.em,{children:"slots accessible"})," in an ",(0,i.jsx)(s.em,{children:"instance"})," of a ",(0,i.jsx)(s.em,{children:"class C"})," is the union of the sets of ",(0,i.jsx)(s.em,{children:"names"})," of ",(0,i.jsx)(s.em,{children:"slots"})," defined by ",(0,i.jsx)(s.em,{children:"C"})," and its ",(0,i.jsx)(s.em,{children:"superclasses"}),". The structure of an ",(0,i.jsx)(s.em,{children:"instance"})," is the set of ",(0,i.jsx)(s.em,{children:"names"})," of ",(0,i.jsx)(s.em,{children:"local slots"})," in that ",(0,i.jsx)(s.em,{children:"instance"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In the simplest case, only one ",(0,i.jsx)(s.em,{children:"class"})," among ",(0,i.jsx)(s.em,{children:"C"})," and its ",(0,i.jsx)(s.em,{children:"superclasses"})," defines a ",(0,i.jsx)(s.em,{children:"slot"})," with a given ",(0,i.jsx)(s.em,{children:"slot"})," name. If a ",(0,i.jsx)(s.em,{children:"slot"})," is defined by a ",(0,i.jsx)(s.em,{children:"superclass"})," of ",(0,i.jsx)(s.em,{children:"C"}),", the ",(0,i.jsx)(s.em,{children:"slot"})," is said to be inherited. The characteristics of the ",(0,i.jsx)(s.em,{children:"slot"})," are determined by the ",(0,i.jsx)(s.em,{children:"slot specifier"})," of the defining ",(0,i.jsx)(s.em,{children:"class"}),". Consider the defining ",(0,i.jsx)(s.em,{children:"class"})," for"]}),"\n",(0,i.jsxs)(s.p,{children:["a slot ",(0,i.jsx)(s.em,{children:"S"}),". If the value of the ",":allocation"," slot option is ",":instance",", then ",(0,i.jsx)(s.em,{children:"S"})," is a ",(0,i.jsx)(s.em,{children:"local slot"})," and each ",(0,i.jsx)(s.em,{children:"instance"})," of ",(0,i.jsx)(s.em,{children:"C"})," has its own ",(0,i.jsx)(s.em,{children:"slot"})," named ",(0,i.jsx)(s.em,{children:"S"})," that stores its own value. If the value of the ",":allocation"," slot option is ",":class",", then ",(0,i.jsx)(s.em,{children:"S"})," is a ",(0,i.jsx)(s.em,{children:"shared slot"}),", the ",(0,i.jsx)(s.em,{children:"class"})," that defined ",(0,i.jsx)(s.em,{children:"S"})," stores the value, and all ",(0,i.jsx)(s.em,{children:"instances"})," of ",(0,i.jsx)(s.em,{children:"C"})," can ",(0,i.jsx)(s.em,{children:"access"})," that single ",(0,i.jsx)(s.em,{children:"slot"}),". If the ",":allocation"," slot option is omitted, ",":instance"," is used."]}),"\n",(0,i.jsxs)(s.p,{children:["In general, more than one ",(0,i.jsx)(s.em,{children:"class"})," among ",(0,i.jsx)(s.em,{children:"C"})," and its ",(0,i.jsx)(s.em,{children:"superclasses"})," can define a ",(0,i.jsx)(s.em,{children:"slot"})," with a given ",(0,i.jsx)(s.em,{children:"name"}),". In such cases, only one ",(0,i.jsx)(s.em,{children:"slot"})," with the given name is ",(0,i.jsx)(s.em,{children:"accessible"})," in an ",(0,i.jsx)(s.em,{children:"instance"})," of ",(0,i.jsx)(s.em,{children:"C"}),", and the characteristics of that ",(0,i.jsx)(s.em,{children:"slot"})," are a combination of the several ",(0,i.jsx)(s.em,{children:"slot"})," specifiers, computed as follows:"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\u2022"})," All the ",(0,i.jsx)(s.em,{children:"slot specifiers"})," for a given ",(0,i.jsx)(s.em,{children:"slot"})," name are ordered from most specific to least specific, according to the order in ",(0,i.jsx)(s.em,{children:"C"}),"\u2019s ",(0,i.jsx)(s.em,{children:"class precedence list"})," of the ",(0,i.jsx)(s.em,{children:"classes"})," that define them. All references to the specificity of ",(0,i.jsx)(s.em,{children:"slot specifiers"})," immediately below refers to this ordering."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\u2022"})," The allocation of a ",(0,i.jsx)(s.em,{children:"slot"})," is controlled by the most specific ",(0,i.jsx)(s.em,{children:"slot specifier"})," . If the most specific ",(0,i.jsx)(s.em,{children:"slot specifier"})," does not contain an ",":allocation"," slot option, ",":instance"," is used. Less specific ",(0,i.jsx)(s.em,{children:"slot specifiers"})," do not affect the allocation."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\u2022"})," The default initial value form for a ",(0,i.jsx)(s.em,{children:"slot"})," is the value of the ",":initform"," slot option in the most specific ",(0,i.jsx)(s.em,{children:"slot specifier"})," that contains one. If no ",(0,i.jsx)(s.em,{children:"slot specifier"})," contains an ",":initform"," slot option, the ",(0,i.jsx)(s.em,{children:"slot"})," has no default initial value form."]}),"\n",(0,i.jsxs)(s.p,{children:["<i>\u2022</i> The contents of a <i>slot</i> will always be of type (and <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i>) where <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i> are the values of the ",":type"," slot options contained in all of the <i>slot specifiers</i>. If no <i>slot specifier</i> contains the ",":type"," slot option, the contents of the <i>slot</i> will always be of <i>type</i> <b>t</b>. The consequences of attempting to store in a <i>slot</i> a value that does not satisfy the <i>type</i> of the <i>slot</i> are undefined."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\u2022"})," The set of initialization arguments that initialize a given ",(0,i.jsx)(s.em,{children:"slot"})," is the union of the initialization arguments declared in the ",":initarg"," slot options in all the ",(0,i.jsx)(s.em,{children:"slot specifiers"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"\u2022"})," The ",(0,i.jsx)(s.em,{children:"documentation string"})," for a ",(0,i.jsx)(s.em,{children:"slot"})," is the value of the ",":documentation"," slot option in the most specific ",(0,i.jsx)(s.em,{children:"slot"})," specifier that contains one. If no ",(0,i.jsx)(s.em,{children:"slot specifier"})," contains a ",":documentation"," slot option, the ",(0,i.jsx)(s.em,{children:"slot"})," has no ",(0,i.jsx)(s.em,{children:"documentation string"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["A consequence of the allocation rule is that a ",(0,i.jsx)(s.em,{children:"shared slot"})," can be ",(0,i.jsx)(s.em,{children:"shadowed"}),". For example, if a class ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> defines a ",(0,i.jsx)(s.em,{children:"slot"})," named ",(0,i.jsx)(s.em,{children:"S"})," whose value for the ",":allocation"," slot option is ",":class",", that ",(0,i.jsx)(s.em,{children:"slot"})," is ",(0,i.jsx)(s.em,{children:"accessible"})," in ",(0,i.jsx)(s.em,{children:"instances"})," of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> and all of its ",(0,i.jsx)(s.em,{children:"subclasses"}),". However, if ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> is a ",(0,i.jsx)(s.em,{children:"subclass"})," of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> and also defines a ",(0,i.jsx)(s.em,{children:"slot"})," named ",(0,i.jsx)(s.em,{children:"S"}),", ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub>\u2019s ",(0,i.jsx)(s.em,{children:"slot"})," is not shared by ",(0,i.jsx)(s.em,{children:"instances"})," of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> and its ",(0,i.jsx)(s.em,{children:"subclasses"}),". When a class ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> defines a ",(0,i.jsx)(s.em,{children:"shared slot"}),", any subclass ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> will share this single ",(0,i.jsx)(s.em,{children:"slot"})," unless the ",(0,i.jsx)(s.strong,{children:"defclass"})," form for ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> specifies a ",(0,i.jsx)(s.em,{children:"slot"})," of the same ",(0,i.jsx)(s.em,{children:"name"})," or there is a ",(0,i.jsx)(s.em,{children:"superclass"})," of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> that precedes ",(0,i.jsx)(s.em,{children:"C"}),"<sub>1</sub> in the ",(0,i.jsx)(s.em,{children:"class precedence list"})," of ",(0,i.jsx)(s.em,{children:"C"}),"<sub>2</sub> that defines a ",(0,i.jsx)(s.em,{children:"slot"})," of the same name."]}),"\n",(0,i.jsxs)(s.p,{children:["A consequence of the type rule is that the value of a ",(0,i.jsx)(s.em,{children:"slot"})," satisfies the type constraint of each ",(0,i.jsx)(s.em,{children:"slot specifier"})," that contributes to that ",(0,i.jsx)(s.em,{children:"slot"}),". Because the result of attempting to store in a ",(0,i.jsx)(s.em,{children:"slot"})," a value that does not satisfy the type constraint for the ",(0,i.jsx)(s.em,{children:"slot"})," is undefined, the value in a ",(0,i.jsx)(s.em,{children:"slot"})," might fail to satisfy its type constraint."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",":reader",", ",":writer",", and ",":accessor"," slot options create ",(0,i.jsx)(s.em,{children:"methods"})," rather than define the characteristics of a ",(0,i.jsx)(s.em,{children:"slot"}),". Reader and writer ",(0,i.jsx)(s.em,{children:"methods"})," are inherited in the sense described in Section 7.6.7 (Inheritance of Methods)."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Methods"})," that ",(0,i.jsx)(s.em,{children:"access slots"})," use only the name of the ",(0,i.jsx)(s.em,{children:"slot"})," and the ",(0,i.jsx)(s.em,{children:"type"})," of the ",(0,i.jsx)(s.em,{children:"slot"}),"\u2019s value. Suppose a ",(0,i.jsx)(s.em,{children:"superclass"})," provides a ",(0,i.jsx)(s.em,{children:"method"})," that expects to ",(0,i.jsx)(s.em,{children:"access"})," a ",(0,i.jsx)(s.em,{children:"shared slot"})," of a given ",(0,i.jsx)(s.em,{children:"name"}),", and a ",(0,i.jsx)(s.em,{children:"subclass"})," defines a ",(0,i.jsx)(s.em,{children:"local slot"})," with the same ",(0,i.jsx)(s.em,{children:"name"}),". If the ",(0,i.jsx)(s.em,{children:"method"})," provided by the ",(0,i.jsx)(s.em,{children:"superclass"})," is used on an ",(0,i.jsx)(s.em,{children:"instance"})," of the ",(0,i.jsx)(s.em,{children:"subclass"}),", the ",(0,i.jsx)(s.em,{children:"method accesses"})," the ",(0,i.jsx)(s.em,{children:"local slot"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Objects ",(0,i.jsx)(s.strong,{children:"7\u201315"})]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}const x={title:"7.5 Slots"},j="7.5 Slots",f={id:"chap-7/h-f-slots",title:"7.5 Slots",description:"7.5.1 Introduction to Slots",source:"@site/docs/chap-7/h-f-slots.md",sourceDirName:"chap-7",slug:"/chap-7/h-f-slots",permalink:"/cl-language-reference/docs/chap-7/h-f-slots",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chap-7/h-f-slots.md",tags:[],version:"current",frontMatter:{title:"7.5 Slots"},sidebar:"tutorialSidebar",previous:{title:"7.4 Meta",permalink:"/cl-language-reference/docs/chap-7/h-e-metaobjects"},next:{title:"7.6 Generic Functions and Methods",permalink:"/cl-language-reference/docs/chap-7/h-g-generic-functions-and-methods"}},u={},p=[{value:"7.5.1 Introduction to Slots",id:"751-introduction-to-slots",level:2},{value:"7.5.2 Accessing Slots",id:"752-accessing-slots",level:2},{value:"7.5.3 Inheritance of Slots and Slot Options",id:"753-inheritance-of-slots-and-slot-options",level:2}];function g(e){const s={h1:"h1",h2:"h2",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"75-slots",children:"7.5 Slots"}),"\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(s.h2,{id:"751-introduction-to-slots",children:"7.5.1 Introduction to Slots"}),"\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(s.h2,{id:"752-accessing-slots",children:"7.5.2 Accessing Slots"}),"\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(s.h2,{id:"753-inheritance-of-slots-and-slot-options",children:"7.5.3 Inheritance of Slots and Slot Options"}),"\n","\n","\n",(0,i.jsx)(m,{})]})}function b(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>c});var i=n(7294);const t={},l=i.createContext(t);function c(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);