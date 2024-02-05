"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[82002],{56991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(85893),c=t(11151);const o={},a="compute-discriminating-function",s={id:"meta-object-protocol/dictionary/compute-discriminating-function",title:"compute-discriminating-function",description:"Generic Function COMPUTE-DISCRIMINATING-FUNCTION",source:"@site/docs/meta-object-protocol/dictionary/compute-discriminating-function.md",sourceDirName:"meta-object-protocol/dictionary",slug:"/meta-object-protocol/dictionary/compute-discriminating-function",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-discriminating-function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/main/docs/meta-object-protocol/dictionary/compute-discriminating-function.md",tags:[],version:"current",lastUpdatedBy:"Daniel Nussenbaum",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compute-discriminating-function-standard-generic-function",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-discriminating-function-standard-generic-function"},next:{title:"compute-effective-method-standard-generic-function",permalink:"/cl-language-reference/meta-object-protocol/dictionary/compute-effective-method-standard-generic-function"}},r={},d=[{value:"<strong>compute-discriminating-function</strong> (<em>generic-function</em> standard-generic-function)",id:"compute-discriminating-function-generic-function-standard-generic-function",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"compute-discriminating-function",children:"compute-discriminating-function"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Generic Function"})," ",(0,i.jsx)(n.strong,{children:"COMPUTE-DISCRIMINATING-FUNCTION"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compute-discriminating-function"})," ",(0,i.jsx)(n.em,{children:"generic-function"})," => ",(0,i.jsx)(n.em,{children:"function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"generic-function"})," -- A generic function metaobject."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"function"})," -- A function."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["This generic function is called to determine the discriminating function for a generic function. When a generic function is called, the ",(0,i.jsx)(n.em,{children:"installed"})," discriminating function is called with the full set of arguments received by the generic function, and must implement the behavior of calling the generic function: determining the ordered set of applicable methods, determining the effective method, and running the effective method."]}),"\n",(0,i.jsxs)(n.p,{children:["To determine the ordered set of applicable methods, the discriminating function first calls",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-applicable-methods-using-classes",children:"compute-applicable-methods-using-classes"}),". If ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-applicable-methods-using-classes",children:"compute-applicable-methods-using-classes"})," returns a second value of false, the discriminating function then calls ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-applicable-methods",children:"compute-applicable-methods"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-applicable-methods-using-classes",children:"compute-applicable-methods-using-classes"})," returns a second value of true, the discriminating function is permitted to memoize the first returned value as follows. The discriminating function may reuse the list of applicable methods without calling ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-applicable-methods-using-classes",children:"compute-applicable-methods-using-classes"})," again provided that:"]}),"\n",(0,i.jsx)(n.p,{children:"i.  the generic function is being called again with required arguments which are instances of the same classes,\nii. the generic function has not been reinitialized,\niii. no method has been added to or removed from the generic function,\niv. for all the specializers of all the generic function's methods which are classes, their class precedence lists have not changed and\nv.  for any such memoized value, the class precedence list of the class of each of the required arguments has not changed."}),"\n",(0,i.jsxs)(n.p,{children:["Determination of the effective method is done by calling ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-effective-method",children:"compute-effective-method"})," When the effective method is run, each method's function is called, and receives as arguments: (i) a list of the arguments to the generic function, and (ii) whatever other arguments are specified in the ",(0,i.jsx)(n.a,{href:"/chap-7/h-h-dictionary/call-method_make-method_local-macro",children:"call-method"})," form indicating that the method should be called. (See ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/make-method-lambda",children:"make-method-lambda"})," for more information about how method functions are called.)"]}),"\n",(0,i.jsxs)(n.p,{children:["The generic function ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/compute-discriminating-function",children:"compute-discriminating-function"})," is called, and its result installed, by ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/add-method",children:"add-method"}),", ",(0,i.jsx)(n.a,{href:"/meta-object-protocol/remove-method",children:"remove-method"}),", ",(0,i.jsx)(n.a,{href:"/chap-7/h-h-dictionary/initialize-instance_standard-generic-function",children:"initialize-instance"}),", and ",(0,i.jsx)(n.a,{href:"/chap-7/h-h-dictionary/reinitialize-instance_standard-generic-function",children:"reinitialize-instance"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"compute-discriminating-function-generic-function-standard-generic-function",children:(0,i.jsxs)(n.a,{href:"/meta-object-protocol/compute-discriminating-function-standard-generic-function",children:[(0,i.jsx)(n.strong,{children:"compute-discriminating-function"})," (",(0,i.jsx)(n.em,{children:"generic-function"})," standard-generic-function)"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Remarks:"})}),"\n",(0,i.jsxs)(n.p,{children:["Since client code is not allowed to define methods on ",(0,i.jsx)(n.code,{children:"compute-applicable-methods"})," specialized to ",(0,i.jsx)(n.code,{children:"standard-generic-function"}),", it can be argued that for ",(0,i.jsx)(n.code,{children:"standard-generic-function"}),", ",(0,i.jsx)(n.code,{children:"compute-applicable-methods"})," does not have to be called. By relaxing the description of ",(0,i.jsx)(n.code,{children:"compute-discriminating-function"})," this way, the implementation may also cache results when ",(0,i.jsx)(n.code,{children:"compute-applicable-methods-using-classes"})," returns ",(0,i.jsx)(n.code,{children:"nil"})," in its second argument. More generally, whenever some behavior is defined for generic functions when called with only standard classes, since client code is not allowed to alter this behavior in any way, the implementation is often free to choose whatever appropriate implementation technique that has the same affect as the one specified. Notice, however, that any behavior that diverges from what is specified, must not be inherited by client-defined subclasses. Only when arguments are direct instances of specified classes can the implementation arbitrarily choose some other technique. -- Robert Strandh 2017-01-23."]}),"\n",(0,i.jsxs)(n.p,{children:["This page seems to suggest that ",(0,i.jsx)(n.code,{children:"compute-effective-method"})," needs to be called by the discriminating function each time the generic function is invoked. It would still be possible to avoid such calls for standard generic functions by the same rule as in the previous remark. But invoking a non-standard generic function would be too slow then. And page 126 in the AMOP book suggests that the result of calling ",(0,i.jsx)(n.code,{children:"compute-effective-method-function"})," (a function that does not exist in the specification, and was replaced by ",(0,i.jsx)(n.code,{children:"compute-effective-method"}),") could be cached. It would seem reasonable, then, for an implementation to be allowed to cache the result of calling ",(0,i.jsx)(n.code,{children:"compute-effective-method"})," whenever it is allowed to cache the result of calling ",(0,i.jsx)(n.code,{children:"compute-applicable-methods-using-classes"}),". -- Robert Strandh 2021-12-15."]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const c={},o=i.createContext(c);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);