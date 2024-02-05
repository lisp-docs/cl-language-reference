"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[48583],{50197:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>u});var s=i(85893),t=i(11151),o=i(45523),a=i(60985),c=i(78547),l=i(38881),r=i(35592),h=i(85639),d=i(42661);const m={title:"5.2 Metaobjects"},f="5.2 Metaobjects",p={id:"meta-object-protocol/chap-5/5-5-subprotocols",title:"5.2 Metaobjects",description:"5.2.1 Classes",source:"@site/docs/meta-object-protocol/chap-5/5-5-subprotocols.md",sourceDirName:"meta-object-protocol/chap-5",slug:"/meta-object-protocol/chap-5/5-5-subprotocols",permalink:"/cl-language-reference/meta-object-protocol/chap-5/5-5-subprotocols",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/chap-5/5-5-subprotocols.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{title:"5.2 Metaobjects"},sidebar:"tutorialSidebar",previous:{title:"5.2 Metaobjects",permalink:"/cl-language-reference/meta-object-protocol/chap-5/5-4-processing"},next:{title:"Chapter 6 - Generic Functions and Methods",permalink:"/cl-language-reference/category/chapter-6---generic-functions-and-methods"}},j={},u=[{value:"5.2.1 Classes",id:"521-classes",level:2},{value:"5.2.2 Slot Definitions",id:"522-slot-definitions",level:2},{value:"5.2.3 Generic Functions",id:"523-generic-functions",level:2},{value:"5.2.4 Methods",id:"524-methods",level:2},{value:"5.2.5 Specializers",id:"525-specializers",level:2},{value:"5.2.6 Method Combinations",id:"526-method-combinations",level:2}];function x(e){const n={h1:"h1",h2:"h2",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"52-metaobjects",children:"5.2 Metaobjects"}),"\n","\n",(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"521-classes",children:"5.2.1 Classes"}),"\n","\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"522-slot-definitions",children:"5.2.2 Slot Definitions"}),"\n","\n",(0,s.jsx)(c.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"523-generic-functions",children:"5.2.3 Generic Functions"}),"\n","\n",(0,s.jsx)(l.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"524-methods",children:"5.2.4 Methods"}),"\n","\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"525-specializers",children:"5.2.5 Specializers"}),"\n","\n",(0,s.jsx)(h.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"526-method-combinations",children:"5.2.6 Method Combinations"}),"\n","\n","\n",(0,s.jsx)(d.ZP,{})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},60985:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(n.h3,{id:"classes-1",children:"Classes"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"class metaobject"})," determines the structure and the default behavior of its instances. The following information is associated with class metaobjects:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The name, if there is one, is available as an object."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The direct subclasses, direct superclasses and class precedence list are available as lists of class metaobjects."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The slots defined directly in the class are available as a list of direct slot definition metaobjects. The slots which are accessible in instances of the class are available as a list of effective slot definition metaobjects."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The documentation is available as a string or ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The methods which use the class as a specializer, and the generic functions associated with those methods are available as lists of method and generic function metaobjects respectively."}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},38881:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"generic-functions",children:"Generic functions"}),"\n",(0,s.jsx)(n.h3,{id:"generic-functions-1",children:"Generic functions"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"generic function metaobject"})," contains information about a generic function over and above the information associated with each of the generic function's methods."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The name is available as a function name."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The methods associated with the generic function are available as a list of method metaobjects."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The default class for this generic function's method metaobjects is available as a class metaobject."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The lambda list is available as a list."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The method combination is available as a method combination metaobject."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The documentation is available as a string or ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The argument precedence order is available as a permutation of those symbols from the lambda list which name the required arguments of the generic function."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The declarations are available as a list of declarations."}),"\n",(0,s.jsxs)(n.p,{children:["There is some ambiguity in Common Lisp about the terms used to identify the various parts of ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm#declare",children:"declare"})," special forms. In this document, the term ",(0,s.jsx)(n.em,{children:"declaration"})," is used to refer to an object that could be an argument to a ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm#declare",children:"declare"})," special form. For example, in the special form ",(0,s.jsx)(n.code,{children:"(declare       (special *g1*))"}),", the list ",(0,s.jsx)(n.code,{children:"(special *g1*)"})," is a declaration."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},45523:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"metaobjects",children:"Metaobjects"}),"\n",(0,s.jsx)(n.h2,{id:"metaobjects-1",children:"Metaobjects"}),"\n",(0,s.jsxs)(n.p,{children:["For each kind of program element there is a corresponding ",(0,s.jsx)(n.em,{children:"basic metaobject class"}),". These are the classes: ",(0,s.jsx)(n.a,{href:"/meta-object-protocol/class-class",children:"class"}),", ",(0,s.jsx)(n.a,{href:"/meta-object-protocol/class-slot-definition",children:"slot-definition"}),", ",(0,s.jsx)(n.a,{href:"/meta-object-protocol/class-generic-function",children:"generic-function"}),", ",(0,s.jsx)(n.a,{href:"/meta-object-protocol/class-method",children:"method"}),", and ",(0,s.jsx)(n.a,{href:"/meta-object-protocol/class-method-combination",children:"method-combination"}),". A ",(0,s.jsx)(n.em,{children:"metaobject class"})," is a subclass of exactly one of these classes. The results are undefined if an attempt is made to define a class that is a subclass of more than one basic metaobject class. A ",(0,s.jsx)(n.em,{children:"metaobject"})," is an instance of a metaobject class."]}),"\n",(0,s.jsxs)(n.p,{children:["Each metaobject represents one program element. Associated with each metaobject is the information required to serve its role. This includes information that might be provided directly in a user interface macro such as ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass",children:"defclass"})," or ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defmethod",children:"defmethod"}),". It also includes information computed indirectly from other metaobjects such as that computed from class inheritance or the full set of methods associated with a generic function."]}),"\n",(0,s.jsx)(n.p,{children:"Much of the information associated with a metaobject is in the form of connections to other metaobjects. This interconnection means that the role of a metaobject is always based on that of other metaobjects. As an introduction to this interconnected structure, this section presents a partial enumeration of the kinds of information associated with each kind of metaobject. More detailed information is presented later."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/classes",children:"Classes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/slot-definitions",children:"Slot definitions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/generic-functions",children:"Generic functions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/methods",children:"Methods"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/specializers",children:"Specializers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/meta-object-protocol/method-combinations",children:"Method combinations"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},42661:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"method-combinations",children:"Method combinations"}),"\n",(0,s.jsx)(n.h3,{id:"method-combinations-1",children:"Method combinations"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"method combination metaobject"})," represents the information about the method combination being used by a generic function."]}),"\n",(0,s.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,s.jsx)(n.p,{children:"This document does not specify the structure of method combination metaobjects."})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},35592:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"methods-1",children:"Methods"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"method metaobject"})," contains information about a specific method."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The qualifiers are available as a list of of non-null atoms."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The lambda list is available as a list."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The specializers are available as a list of specializer metaobjects."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The function is available as a function. This function can be applied to arguments and a list of next methods using ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply",children:"apply"})," or ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall",children:"funcall"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When the method is associated with a generic function, that generic function metaobject is available. A method can be associated with at most one generic function at a time."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The documentation is available as a string or ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},78547:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"slot-definitions",children:"Slot definitions"}),"\n",(0,s.jsx)(n.h3,{id:"slot-definitions-1",children:"Slot definitions"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"slot definition metaobject"})," contains information about the definition of a slot. There are two kinds of slot definition metaobjects. A direct slot definition metaobject is used to represent the direct definition of a slot in a class. This corresponds roughly to the slot specifiers found in ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass",children:"defclass"})," forms. An effective slot definition metaobject is used to represent information, including inherited information, about a slot which is accessible in instances of a particular class."]}),"\n",(0,s.jsx)(n.p,{children:"Associated with each class metaobject is a list of direct slot definition metaobjects representing the slots defined directly in the class. Also associated with each class metaobject is a list of effective slot definition metaobjects representing the set of slots accessible in instances of that class."}),"\n",(0,s.jsx)(n.p,{children:"The following information is associated with both direct and effective slot definitions metaobjects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The name, allocation, and type are available as forms that could appear in a ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass",children:"defclass"})," form."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The initialization form, if there is one, is available as a form that could appear in a ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass",children:"defclass"})," form. The initialization form together with its lexical environment is available as a function of no arguments which, when called, returns the result of evaluating the initialization form in its lexical environment. This is called the ",(0,s.jsx)(n.em,{children:"initfunction"})," of the slot."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The slot filling initialization arguments are available as a list of symbols."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The documentation is available as a string or ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Certain other information is only associated with direct slot definition metaobjects. This information applies only to the direct definition of the slot in the class (it is not inherited)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The function names of those generic functions for which there are automatically generated reader and writer methods. This information is available as lists of function names. Any accessors specified in the ",(0,s.jsx)(n.a,{href:"http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass",children:"defclass"})," form are broken down into their equivalent readers and writers in the direct slot definition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Information, including inherited information, which applies to the definition of a slot in a particular class in which it is accessible is associated only with effective slot definition metaobjects."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For certain slots, the location of the slot in instances of the class is available."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},85639:(e,n,i)=>{i.d(n,{ZP:()=>a});var s=i(85893),t=i(11151);function o(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"specializers",children:"Specializers"}),"\n",(0,s.jsx)(n.h3,{id:"specializers-1",children:"Specializers"}),"\n",(0,s.jsxs)(n.p,{children:["A specializer metaobject represents the specializers of a method. Class metaobjects are themselves specializer metaobjects. A special kind of specializer metaobject is used for ",(0,s.jsx)(n.code,{children:"eql"})," specializers."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var s=i(67294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);