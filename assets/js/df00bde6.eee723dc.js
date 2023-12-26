"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[68308],{64925:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>h,metadata:()=>l,toc:()=>x});var n=t(85893),c=t(11151);function s(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:s}=r;return t||o("DictionaryLink",!0),s||o("GlossaryTerm",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"throw"})," ",(0,n.jsx)(s,{styled:!0,term:"special operator",children:(0,n.jsx)("i",{children:"Special Operator"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})})," ",(0,n.jsx)(r.em,{children:"tag result-form \u2192"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{term:"tag",children:(0,n.jsx)("i",{children:"tag"})}),"\u2014a ",(0,n.jsx)(s,{styled:!0,term:"catch tag",children:(0,n.jsx)("i",{children:"catch tag"})}),"; evaluated."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"result-form"}),"\u2014a ",(0,n.jsx)(s,{term:"form",children:(0,n.jsx)("i",{children:"form"})}),"; evaluated as described below."]}),"\n",(0,n.jsx)(r.p,{children:"Data and Control"}),"\n",(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})})," causes a non-local control transfer to a ",(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})})," whose tag is ",(0,n.jsx)(t,{term:"eq",children:(0,n.jsx)("b",{children:"eq"})})," to ",(0,n.jsx)(s,{term:"tag",children:(0,n.jsx)("i",{children:"tag"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{term:"tag",children:(0,n.jsx)("i",{children:"Tag"})})," is evaluated first to produce an ",(0,n.jsx)(s,{term:"object",children:(0,n.jsx)("i",{children:"object"})})," called the throw tag; then ",(0,n.jsx)(r.em,{children:"result-form"})," is evaluated, and its results are saved. If the ",(0,n.jsx)(r.em,{children:"result-form"})," produces multiple values, then all the values are saved. The most recent outstanding ",(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})})," whose ",(0,n.jsx)(s,{term:"tag",children:(0,n.jsx)("i",{children:"tag"})})," is ",(0,n.jsx)(t,{term:"eq",children:(0,n.jsx)("b",{children:"eq"})})," to the throw tag is exited; the saved results are returned as the value or values of ",(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The transfer of control initiated by ",(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})})," is performed as described in Section 5.2 (Transfer of Control to an Exit Point)."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:'(catch \u2019result \n  (setq i 0 j 0) \n  (loop (incf j 3) (incf i) \n   (if (= i 3) (throw \u2019result (values i j))))) \u2192 3, 9 \n(catch nil \n  (unwind-protect (throw nil 1) \n    (throw nil 2))) \u2192 2 \nThe consequences of the following are undefined because the **catch** of b is passed over by the first **throw**, hence portable programs must assume that its *dynamic extent* is terminated. The *binding* of the *catch tag* is not yet *disestablished* and therefore it is the target of the second **throw**. \n(catch \u2019a \n  (catch \u2019b \n    (unwind-protect (throw \u2019a 1) \n      (throw \u2019b 2)))) \nThe following prints \u201cThe inner catch returns :SECOND-THROW\u201d and then returns :outer-catch. \n(catch \u2019foo \n  (format t "The inner catch returns ~s.~%" \n\t  (catch \u2019foo \n\t    (unwind-protect (throw \u2019foo :first-throw) \n\t      (throw \u2019foo :second-throw)))) \n  :outer-catch) \n\u25b7 The inner catch returns :SECOND-THROW \n\u2192 :OUTER-CATCH \n'})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,n.jsxs)(r.p,{children:["If there is no outstanding ",(0,n.jsx)(s,{styled:!0,term:"catch tag",children:(0,n.jsx)("i",{children:"catch tag"})})," that matches the throw tag, no unwinding of the stack is"]}),"\n",(0,n.jsxs)(r.p,{children:["performed, and an error of ",(0,n.jsx)(s,{term:"type",children:(0,n.jsx)("i",{children:"type"})})," ",(0,n.jsx)(t,{term:"control-error",children:(0,n.jsx)("b",{children:"control-error"})})," is signaled. When the error is signaled, the ",(0,n.jsx)(s,{styled:!0,term:"dynamic environment",children:(0,n.jsx)("i",{children:"dynamic environment"})})," is that which was in force at the point of the ",(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"block",children:(0,n.jsx)("b",{children:"block"})}),", ",(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})}),", ",(0,n.jsx)(t,{term:"return-from",children:(0,n.jsx)("b",{children:"return-from"})}),", ",(0,n.jsx)(t,{term:"unwind-protect",children:(0,n.jsx)("b",{children:"unwind-protect"})}),", Section 3.1 (Evaluation)"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})})," and ",(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})})," are normally used when the ",(0,n.jsx)(s,{styled:!0,term:"exit point",children:(0,n.jsx)("i",{children:"exit point"})})," must have ",(0,n.jsx)(s,{styled:!0,term:"dynamic scope",children:(0,n.jsx)("i",{children:"dynamic scope"})})," (",(0,n.jsx)(r.em,{children:"e.g."}),", the ",(0,n.jsx)(t,{term:"throw",children:(0,n.jsx)("b",{children:"throw"})})," is not lexically enclosed by the ",(0,n.jsx)(t,{term:"catch",children:(0,n.jsx)("b",{children:"catch"})}),"), while ",(0,n.jsx)(t,{term:"block",children:(0,n.jsx)("b",{children:"block"})})," and ",(0,n.jsx)(t,{term:"return",children:(0,n.jsx)("b",{children:"return"})})," are used when ",(0,n.jsx)(s,{styled:!0,term:"lexical scope",children:(0,n.jsx)("i",{children:"lexical scope"})})," is sufficient."]})]})}function i(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function o(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const h={title:"throw"},a="throw",l={id:"chap-5/f-d-dictionary/throw_special-operator",title:"throw",description:"Expanded Reference: throw",source:"@site/docs/chap-5/f-d-dictionary/throw_special-operator.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/throw_special-operator",permalink:"/cl-language-reference/chap-5/f-d-dictionary/throw_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/throw_special-operator.md",tags:[],version:"current",frontMatter:{title:"throw"},sidebar:"tutorialSidebar",previous:{title:"tagbody",permalink:"/cl-language-reference/chap-5/f-d-dictionary/tagbody_special-operator"},next:{title:"typecase, ctypecase, etypecase",permalink:"/cl-language-reference/chap-5/f-d-dictionary/typecase_ctypecase_etypecase_macro"}},d={},x=[{value:"Expanded Reference: throw",id:"expanded-reference-throw",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"throw",children:"throw"}),"\n","\n","\n",(0,n.jsx)(i,{}),"\n",(0,n.jsx)(r.h2,{id:"expanded-reference-throw",children:"Expanded Reference: throw"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lisp",children:"(throw )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var n=t(67294);const c={},s=n.createContext(c);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);