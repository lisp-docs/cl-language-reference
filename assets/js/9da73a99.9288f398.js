"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37914],{57026:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=r(85893),s=r(11151);function d(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"and"})," ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"results"}),"\u2014the ",(0,t.jsx)(r,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"values"})})," resulting from the evaluation of the last ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),", or the symbols ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," or ",(0,t.jsx)(r,{styled:!0,term:"t",children:(0,t.jsx)("b",{children:"t"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["The macro ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," evaluates each ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," one at a time from left to right. As soon as any ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," evaluates to ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),", ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," returns ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," without evaluating the remaining ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),". If all ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," but the last evaluate to ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," values, ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," returns the results produced by evaluating the last ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If no ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," are supplied, (and) returns ",(0,t.jsx)(r,{styled:!0,term:"t",children:(0,t.jsx)("b",{children:"t"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," passes back multiple values from the last ",(0,t.jsx)(r,{styled:!0,term:"subform",children:(0,t.jsx)("i",{children:"subform"})})," but not from subforms other than the last."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(if (and (>= n 0) \n  (< n (length a-simple-vector)) \n  (eq (elt a-simple-vector n) \u2019foo)) \n    (princ "Foo!")) \n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," guarantees left-to-right testing of its parts, ",(0,t.jsx)(r,{styled:!0,term:"elt",children:(0,t.jsx)("b",{children:"elt"})})," is not called if n is out of range."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(defparameter temp1 1) \u2192 temp1\n(defparameter temp2 1) \u2192 temp2\n(defparameter temp3 1) \u2192 temp3\n(and (incf temp1) (incf temp2) (incf temp3)) \u2192 2 \n(and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) \u2192 true \n(decf temp3) \u2192 1 \n(and (decf temp1) (decf temp2) (eq temp3 \u2019nil) (decf temp3)) \u2192 NIL \n(and (eql temp1 temp2) (eql temp2 temp3)) \u2192 true \n(and) \u2192 T \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"cond",children:(0,t.jsx)("b",{children:"cond"})}),", ",(0,t.jsx)(r,{styled:!0,term:"every",children:(0,t.jsx)("b",{children:"every"})}),", ",(0,t.jsx)(r,{styled:!0,term:"if",children:(0,t.jsx)("b",{children:"if"})}),", ",(0,t.jsx)(r,{styled:!0,term:"or",children:(0,t.jsx)("b",{children:"or"})}),", ",(0,t.jsx)(r,{styled:!0,term:"when",children:(0,t.jsx)("b",{children:"when"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(and *form*) *\u2261* (let () *form*)\n(and *form1 form2* ...) *\u2261* (when *form1* (and *form2* ...))\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We fixed the examples so that it uses ",(0,t.jsx)(r,{styled:!0,term:"defparameter",children:(0,t.jsx)("b",{children:"defparameter"})})," to initialize the variables.  and we added a paragraph explaining why ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," must be defined as a macro, and the consequences of it being defined as a macro."]})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const l={title:"and"},c="and",a={id:"chap-5/f-d-dictionary/and_macro",title:"and",description:"Expanded Reference: and",source:"@site/docs/chap-5/f-d-dictionary/and_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/and_macro",permalink:"/cl-language-reference/chap-5/f-d-dictionary/and_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/and_macro.md",tags:[],version:"current",frontMatter:{title:"and"},sidebar:"tutorialSidebar",previous:{title:"5.3 Data and Control Flow Dictionary",permalink:"/cl-language-reference/category/53-data-and-control-flow-dictionary"},next:{title:"apply",permalink:"/cl-language-reference/chap-5/f-d-dictionary/apply_function"}},o={},h=[{value:"Expanded Reference: and",id:"expanded-reference-and",level:2}];function m(e){const n={h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"and",children:"and"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-and",children:"Expanded Reference: and"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," is defined as a macro because it stops evaluating as soon as any ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," evaluates to ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),".  If it were defined as a function, every ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," would be evaluated before the function was applied.  As a result of ",(0,t.jsx)(r,{styled:!0,term:"and",children:(0,t.jsx)("b",{children:"and"})})," not being a function, it can not be used with ",(0,t.jsx)(r,{styled:!0,term:"apply",children:(0,t.jsx)("b",{children:"apply"})}),".  In order to check that every value of a list is ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),", the function ",(0,t.jsx)(r,{styled:!0,term:"every",children:(0,t.jsx)("b",{children:"every"})})," could be used."]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);