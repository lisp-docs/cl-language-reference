"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95297],{77169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var i=s(85893),t=s(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"change-class"})," ",(0,i.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"change-class"})," ",(0,i.jsx)(n.em,{children:"instance new-class"})," &key &allow-other-keys ",(0,i.jsx)(n.em,{children:"\u2192 instance"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"change-class"})," (",(0,i.jsx)(n.em,{children:"instance"})," ",(0,i.jsx)(n.strong,{children:"standard-object"}),") (",(0,i.jsx)(n.em,{children:"new-class"})," ",(0,i.jsx)(n.strong,{children:"standard-class"}),") &rest ",(0,i.jsx)(n.em,{children:"initargs"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"change-class"})," (",(0,i.jsx)(n.em,{children:"instance"})," ",(0,i.jsx)(n.strong,{children:"t"}),") (",(0,i.jsx)(n.em,{children:"new-class"})," ",(0,i.jsx)(n.strong,{children:"symbol"}),") &rest ",(0,i.jsx)(n.em,{children:"initargs"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"instance"}),"\u2014an ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"new-class"}),"\u2014a ",(0,i.jsx)(n.em,{children:"class designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"initargs"}),"\u2014an ",(0,i.jsx)(n.em,{children:"initialization argument list"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"generic function"})," ",(0,i.jsx)(n.strong,{children:"change-class"})," changes the ",(0,i.jsx)(n.em,{children:"class"})," of an ",(0,i.jsx)(n.em,{children:"instance"})," to ",(0,i.jsx)(n.em,{children:"new-class"}),". It destructively modifies and returns the ",(0,i.jsx)(n.em,{children:"instance"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"change-class"})}),"\n",(0,i.jsxs)(n.p,{children:["If in the old ",(0,i.jsx)(n.em,{children:"class"})," there is any ",(0,i.jsx)(n.em,{children:"slot"})," of the same name as a local ",(0,i.jsx)(n.em,{children:"slot"})," in the ",(0,i.jsx)(n.em,{children:"new-class"}),", the value of that ",(0,i.jsx)(n.em,{children:"slot"})," is retained. This means that if the ",(0,i.jsx)(n.em,{children:"slot"})," has a value, the value returned by ",(0,i.jsx)(n.strong,{children:"slot-value"})," after ",(0,i.jsx)(n.strong,{children:"change-class"})," is invoked is ",(0,i.jsx)(n.strong,{children:"eql"})," to the value returned by ",(0,i.jsx)(n.strong,{children:"slot-value"})," before ",(0,i.jsx)(n.strong,{children:"change-class"})," is invoked. Similarly, if the ",(0,i.jsx)(n.em,{children:"slot"})," was unbound, it remains unbound. The other ",(0,i.jsx)(n.em,{children:"slots"})," are initialized as described in Section 7.2 (Changing the Class of an Instance)."]}),"\n",(0,i.jsxs)(n.p,{children:["After completing all other actions, ",(0,i.jsx)(n.strong,{children:"change-class"})," invokes ",(0,i.jsx)(n.strong,{children:"update-instance-for-different-class"}),". The generic function ",(0,i.jsx)(n.strong,{children:"update-instance-for-different-class"})," can be used to assign values to slots in the transformed instance. See Section 7.2.2 (Initializing Newly Added Local Slots)."]}),"\n",(0,i.jsxs)(n.p,{children:["If the second of the above ",(0,i.jsx)(n.em,{children:"methods"})," is selected, that ",(0,i.jsx)(n.em,{children:"method"})," invokes ",(0,i.jsx)(n.strong,{children:"change-class"})," on ",(0,i.jsx)(n.em,{children:"instance"}),", (find-class ",(0,i.jsx)(n.em,{children:"new-class"}),"), and the ",(0,i.jsx)(n.em,{children:"initargs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:"(defclass position () ())"}),"\n",(0,i.jsx)(n.p,{children:"(defclass x-y-position (position)"}),"\n",(0,i.jsxs)(n.p,{children:["((x ",":initform"," 0 ",":initarg"," ",":x",")"]}),"\n",(0,i.jsxs)(n.p,{children:["(y ",":initform"," 0 ",":initarg"," ",":y",")))"]}),"\n",(0,i.jsx)(n.p,{children:"(defclass rho-theta-position (position)"}),"\n",(0,i.jsxs)(n.p,{children:["((rho ",":initform"," 0)"]}),"\n",(0,i.jsxs)(n.p,{children:["(theta ",":initform"," 0)))"]}),"\n",(0,i.jsxs)(n.p,{children:["(defmethod update-instance-for-different-class ",":before"," ((old x-y-position)"]}),"\n",(0,i.jsx)(n.p,{children:"(new rho-theta-position)"}),"\n",(0,i.jsx)(n.p,{children:"&key)"}),"\n",(0,i.jsx)(n.p,{children:";; Copy the position information from old to new to make new"}),"\n",(0,i.jsx)(n.p,{children:";; be a rho-theta-position at the same position as old."}),"\n",(0,i.jsx)(n.p,{children:"(let ((x (slot-value old \u2019x))"}),"\n",(0,i.jsx)(n.p,{children:"(y (slot-value old \u2019y)))"}),"\n",(0,i.jsx)(n.p,{children:"(setf (slot-value new \u2019rho) (sqrt (+ (* x x) (* y y)))"}),"\n",(0,i.jsx)(n.p,{children:"(slot-value new \u2019theta) (atan y x))))"}),"\n",(0,i.jsx)(n.p,{children:";;; At this point an instance of the class x-y-position can be"}),"\n",(0,i.jsx)(n.p,{children:";;; changed to be an instance of the class rho-theta-position using"}),"\n",(0,i.jsx)(n.p,{children:";;; change-class:"}),"\n",(0,i.jsxs)(n.p,{children:["(setq p1 (make-instance \u2019x-y-position ",":x"," 2 ",":y"," 0))"]}),"\n",(0,i.jsx)(n.p,{children:"(change-class p1 \u2019rho-theta-position)"}),"\n",(0,i.jsx)(n.p,{children:";;; The result is that the instance bound to p1 is now an instance of"}),"\n",(0,i.jsx)(n.p,{children:";;; the class rho-theta-position. The update-instance-for-different-class"}),"\n",(0,i.jsx)(n.p,{children:";;; method performed the initialization of the rho and theta slots based"}),"\n",(0,i.jsx)(n.p,{children:";;; on the value of the x and y slots, which were maintained by"}),"\n",(0,i.jsx)(n.p,{children:";;; the old instance."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"update-instance-for-different-class"}),", Section 7.2 (Changing the Class of an Instance)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The generic function ",(0,i.jsx)(n.strong,{children:"change-class"})," has several semantic difficulties. First, it performs a destructive operation that can be invoked within a ",(0,i.jsx)(n.em,{children:"method"})," on an ",(0,i.jsx)(n.em,{children:"instance"})," that was used to select that ",(0,i.jsx)(n.em,{children:"method"}),". When multiple ",(0,i.jsx)(n.em,{children:"methods"})," are involved because ",(0,i.jsx)(n.em,{children:"methods"})," are being combined, the ",(0,i.jsx)(n.em,{children:"methods"})," currently"]}),"\n",(0,i.jsxs)(n.p,{children:["executing or about to be executed may no longer be applicable. Second, some implementations might use compiler optimizations of slot ",(0,i.jsx)(n.em,{children:"access"}),", and when the ",(0,i.jsx)(n.em,{children:"class"})," of an ",(0,i.jsx)(n.em,{children:"instance"})," is changed the assumptions the compiler made might be violated. This implies that a programmer must not use ",(0,i.jsx)(n.strong,{children:"change-class"})," inside a ",(0,i.jsx)(n.em,{children:"method"})," if any ",(0,i.jsx)(n.em,{children:"methods"})," for that ",(0,i.jsx)(n.em,{children:"generic function access"})," any ",(0,i.jsx)(n.em,{children:"slots"}),", or the results are undefined."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}const r={},l="change-class",h={id:"chap-7/h-h-dictionary/changeclass",title:"change-class",description:"Expanded Reference: change-class",source:"@site/docs/chap-7/h-h-dictionary/changeclass.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/changeclass",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/changeclass",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/changeclass.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"call-next-method",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/callnextmethod"},next:{title:"compute-applicable-methods",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/computeapplicablemethods"}},o={},d=[{value:"Expanded Reference: change-class",id:"expanded-reference-change-class",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"change-class",children:"change-class"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-change-class",children:"Expanded Reference: change-class"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(change-class )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(67294);const t={},c=i.createContext(t);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);