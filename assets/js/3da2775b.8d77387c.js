"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[54675],{73490:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var t=s(85893),i=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:s,GlossaryTerm:c}=n;return s||a("DictionaryLink",!0),c||a("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"change-class"})," ",(0,t.jsx)(c,{styled:!0,term:"standard generic function",children:(0,t.jsx)("i",{children:"Standard Generic Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," ",(0,t.jsx)(n.em,{children:"instance new-class"})," &key &allow-other-keys \u2192 instance"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," (",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})})," ",(0,t.jsx)(s,{term:"standard-object",children:(0,t.jsx)("b",{children:"standard-object"})}),") (",(0,t.jsx)(n.em,{children:"new-class"})," ",(0,t.jsx)(s,{term:"standard-class",children:(0,t.jsx)("b",{children:"standard-class"})}),") &rest ",(0,t.jsx)(n.em,{children:"initargs"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," (",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})})," ",(0,t.jsx)(s,{term:"t",children:(0,t.jsx)("b",{children:"t"})}),") (",(0,t.jsx)(n.em,{children:"new-class"})," ",(0,t.jsx)(s,{term:"symbol",children:(0,t.jsx)("b",{children:"symbol"})}),") &rest ",(0,t.jsx)(n.em,{children:"initargs"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),"\u2014an ",(0,t.jsx)(c,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"new-class"}),"\u2014a ",(0,t.jsx)(c,{styled:!0,term:"class designator",children:(0,t.jsx)("i",{children:"class designator"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"initargs"}),"\u2014an ",(0,t.jsx)(c,{styled:!0,term:"initialization argument list",children:(0,t.jsx)("i",{children:"initialization argument list"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(c,{styled:!0,term:"generic function",children:(0,t.jsx)("i",{children:"generic function"})})," ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," changes the ",(0,t.jsx)(c,{term:"class",children:(0,t.jsx)("i",{children:"class"})})," of an ",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})})," to ",(0,t.jsx)(n.em,{children:"new-class"}),". It destructively modifies and returns the ",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),"."]}),"\n",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})}),"\n",(0,t.jsxs)(n.p,{children:["If in the old ",(0,t.jsx)(c,{term:"class",children:(0,t.jsx)("i",{children:"class"})})," there is any ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," of the same name as a local ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," in the ",(0,t.jsx)(n.em,{children:"new-class"}),", the value of that ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," is retained. This means that if the ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," has a value, the value returned by ",(0,t.jsx)(s,{term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," after ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," is invoked is ",(0,t.jsx)(s,{term:"eql",children:(0,t.jsx)("b",{children:"eql"})})," to the value returned by ",(0,t.jsx)(s,{term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," before ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," is invoked. Similarly, if the ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," was unbound, it remains unbound. The other ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slots"})})," are initialized as described in Section 7.2 (Changing the Class of an Instance)."]}),"\n",(0,t.jsxs)(n.p,{children:["After completing all other actions, ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," invokes ",(0,t.jsx)(n.strong,{children:"update-instance-for-different-class"}),". The generic function ",(0,t.jsx)(n.strong,{children:"update-instance-for-different-class"})," can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots)."]}),"\n",(0,t.jsxs)(n.p,{children:["If the second of the above ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"methods"})})," is selected, that ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"method"})})," invokes ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," on ",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),", (find-class ",(0,t.jsx)(n.em,{children:"new-class"}),"), and the ",(0,t.jsx)(n.em,{children:"initargs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(defclass position () ()) \n(defclass x-y-position (position) \n  ((x :initform 0 :initarg :x) \n   (y :initform 0 :initarg :y))) \n(defclass rho-theta-position (position) \n  ((rho :initform 0) \n   (theta :initform 0))) \n(defmethod update-instance-for-different-class :before ((old x-y-position) \n\t\t\t\t\t\t\t(new rho-theta-position) \n\t\t\t\t\t\t\t&key) \n  ;; Copy the position information from old to new to make new \n  ;; be a rho-theta-position at the same position as old. \n  (let ((x (slot-value old \u2019x)) \n\t(y (slot-value old \u2019y))) \n    (setf (slot-value new \u2019rho) (sqrt (+ (\\* x x) (\\* y y))) \n\t  (slot-value new \u2019theta) (atan y x)))) \n;;; At this point an instance of the class x-y-position can be \n;;; changed to be an instance of the class rho-theta-position using \n;;; change-class: \n(setq p1 (make-instance \u2019x-y-position :x 2 :y 0)) \n(change-class p1 \u2019rho-theta-position) \n;;; The result is that the instance bound to p1 is now an instance of \n;;; the class rho-theta-position. The update-instance-for-different-class \n;;; method performed the initialization of the rho and theta slots based \n\n;;; on the value of the x and y slots, which were maintained by \n;;; the old instance. \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"update-instance-for-different-class"}),", Section 7.2 (Changing the Class of an Instance)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The generic function ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," has several semantic difficulties. First, it performs a destructive operation that can be invoked within a ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"method"})})," on an ",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})})," that was used to select that ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"method"})}),". When multiple ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"methods"})})," are involved because ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"methods"})})," are being combined, the ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"methods"})})," currently"]}),"\n",(0,t.jsxs)(n.p,{children:["executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot ",(0,t.jsx)(c,{term:"access",children:(0,t.jsx)("i",{children:"access"})}),", and when the ",(0,t.jsx)(c,{term:"class",children:(0,t.jsx)("i",{children:"class"})})," of an ",(0,t.jsx)(c,{term:"instance",children:(0,t.jsx)("i",{children:"instance"})})," is changed the assumptions the compiler made might be violated. This implies that a programmer must not use ",(0,t.jsx)(s,{term:"change-class",children:(0,t.jsx)("b",{children:"change-class"})})," inside a ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"method"})})," if any ",(0,t.jsx)(c,{term:"method",children:(0,t.jsx)("i",{children:"methods"})})," for that ",(0,t.jsx)(n.em,{children:"generic function access"})," any ",(0,t.jsx)(c,{term:"slot",children:(0,t.jsx)("i",{children:"slots"})}),", or the results are undefined."]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"change-class"},h="change-class",d={id:"chap-7/h-h-dictionary/change-class_standard-generic-function",title:"change-class",description:"Expanded Reference: change-class",source:"@site/docs/chap-7/h-h-dictionary/change-class_standard-generic-function.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/change-class_standard-generic-function",permalink:"/cl-language-reference/chap-7/h-h-dictionary/change-class_standard-generic-function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/change-class_standard-generic-function.md",tags:[],version:"current",frontMatter:{title:"change-class"},sidebar:"tutorialSidebar",previous:{title:"call-next-method",permalink:"/cl-language-reference/chap-7/h-h-dictionary/call-next-method_local-function"},next:{title:"class-name",permalink:"/cl-language-reference/chap-7/h-h-dictionary/class-name_standard-generic-function"}},o={},x=[{value:"Expanded Reference: change-class",id:"expanded-reference-change-class",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"change-class",children:"change-class"}),"\n","\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-change-class",children:"Expanded Reference: change-class"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(change-class )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);