"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[5093],{77101:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=n(85893),l=n(11151);function i(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{ClLinks:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"slot-value"})," ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," ",(0,t.jsx)(s.em,{children:"object slot-name \u2192 value"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})}),"\u2014a ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})}),"\u2014an ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," returns the ",(0,t.jsx)(n,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of the ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," named ",(0,t.jsx)(s.em,{children:"slot-name"})," in the ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),". If there is no ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," named ",(0,t.jsx)(s.em,{children:"slot-name"}),", ",(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})})," is called. If the ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," is unbound, ",(0,t.jsx)(n,{styled:!0,term:"slot-unbound",children:(0,t.jsx)("b",{children:"slot-unbound"})})," is called."]}),"\n",(0,t.jsxs)(s.p,{children:["The macro ",(0,t.jsx)(n,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," can be used with ",(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," to change the value of a ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"\n(defclass foo () \n  ((a :accessor foo-a :initarg :a :initform 1) \n   (b :accessor foo-b :initarg :b) \n   (c :accessor foo-c :initform 3))) \n\u2192 #<STANDARD-CLASS FOO 244020371> \n(setq foo1 (make-instance \u2019foo :a \u2019one :b \u2019two)) \n\u2192 #<FOO 36325624> \n(slot-value foo1 \u2019a) \u2192 ONE \n(slot-value foo1 \u2019b) \u2192 TWO \n(slot-value foo1 \u2019c) \u2192 3 \n(setf (slot-value foo1 \u2019a) \u2019uno) \u2192 UNO \n(slot-value foo1 \u2019a) \u2192 UNO \n(defmethod foo-method ((x foo)) \n  (slot-value x \u2019a)) \n\u2192 #<STANDARD-METHOD FOO-METHOD (FOO) 42720573> \n(foo-method foo1) \u2192 UNO \n\n\n\n\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(s.p,{children:["If an attempt is made to read a ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," and no ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," of the name ",(0,t.jsx)(s.em,{children:"slot-name"})," exists in the ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),", ",(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})})," is called as follows:"]}),"\n",(0,t.jsxs)(s.p,{children:["(slot-missing (class-of ",(0,t.jsx)(n,{styled:!0,term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),")"]}),"\n",(0,t.jsx)(n,{styled:!0,term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"slot-name"})}),"\n",(0,t.jsx)(s.p,{children:"\u2019slot-value)"}),"\n",(0,t.jsxs)(s.p,{children:["(If ",(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})})," is invoked, its ",(0,t.jsx)(s.em,{children:"primary value"})," is returned by ",(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})}),".)"]}),"\n",(0,t.jsxs)(s.p,{children:["If an attempt is made to write a ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," and no ",(0,t.jsx)(n,{styled:!0,term:"slot",children:(0,t.jsx)("i",{children:"slot"})})," of the name ",(0,t.jsx)(s.em,{children:"slot-name"})," exists in the ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),", ",(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})})," is called as follows:"]}),"\n",(0,t.jsxs)(s.p,{children:["(slot-missing (class-of ",(0,t.jsx)(n,{styled:!0,term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),")"]}),"\n",(0,t.jsx)(n,{styled:!0,term:"instance",children:(0,t.jsx)("i",{children:"instance"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"slot-name"})}),"\n",(0,t.jsx)(s.p,{children:"\u2019setf"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"new-value"}),")"]}),"\n",(0,t.jsxs)(s.p,{children:["(If ",(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})})," returns in this case, any ",(0,t.jsx)(n,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"values"})})," are ignored.)"]}),"\n",(0,t.jsxs)(s.p,{children:["The specific behavior depends on ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2019s ",(0,t.jsx)(n,{styled:!0,term:"metaclass",children:(0,t.jsx)("i",{children:"metaclass"})}),". An error is never signaled if ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," has ",(0,t.jsx)(n,{styled:!0,term:"metaclass",children:(0,t.jsx)("i",{children:"metaclass"})})," ",(0,t.jsx)(n,{styled:!0,term:"standard-class",children:(0,t.jsx)("b",{children:"standard-class"})}),". An error is always signaled if ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," has ",(0,t.jsx)(n,{styled:!0,term:"metaclass",children:(0,t.jsx)("i",{children:"metaclass"})})," ",(0,t.jsx)(n,{styled:!0,term:"built-in-class",children:(0,t.jsx)("b",{children:"built-in-class"})}),". The consequences are unspecified if ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," has any other ",(0,t.jsx)(n,{styled:!0,term:"metaclass",children:(0,t.jsx)("i",{children:"metaclass"})}),"\u2013an error might or might not be signaled in this situation. Note in particular that the behavior for ",(0,t.jsx)(n,{styled:!0,term:"condition",children:(0,t.jsx)("i",{children:"conditions"})})," and ",(0,t.jsx)(n,{styled:!0,term:"structure",children:(0,t.jsx)("i",{children:"structures"})})," is not specified."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(n,{styled:!0,term:"slot-missing",children:(0,t.jsx)("b",{children:"slot-missing"})}),", ",(0,t.jsx)(n,{styled:!0,term:"slot-unbound",children:(0,t.jsx)("b",{children:"slot-unbound"})}),", ",(0,t.jsx)(n,{styled:!0,term:"with-slots",children:(0,t.jsx)("b",{children:"with-slots"})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(s.p,{children:["Although no ",(0,t.jsx)(n,{styled:!0,term:"implementation",children:(0,t.jsx)("i",{children:"implementation"})})," is required to do so, implementors are strongly encouraged to implement the ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," using the ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," slot-value-using-class described in the ",(0,t.jsx)(s.em,{children:"Metaobject Protocol"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Implementations may optimize ",(0,t.jsx)(n,{styled:!0,term:"slot-value",children:(0,t.jsx)("b",{children:"slot-value"})})," by compiling it inline."]})]})}function r(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={title:"slot-value"},d="slot-value",o={id:"chap-7/h-h-dictionary/slot-value_function",title:"slot-value",description:"Expanded Reference: slot-value",source:"@site/docs/chap-7/h-h-dictionary/slot-value_function.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/slot-value_function",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/slot-value_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/slot-value_function.md",tags:[],version:"current",frontMatter:{title:"slot-value"},sidebar:"tutorialSidebar",previous:{title:"slot-unbound",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/slot-unbound_standard-generic-function"},next:{title:"unbound-slot-instance",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/unbound-slot-instance_function"}},a={},h=[{value:"Expanded Reference: slot-value",id:"expanded-reference-slot-value",level:2}];function j(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"slot-value",children:"slot-value"}),"\n","\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-slot-value",children:"Expanded Reference: slot-value"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(slot-value )\n"})})]})}function x(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var t=n(67294);const l={},i=t.createContext(l);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);