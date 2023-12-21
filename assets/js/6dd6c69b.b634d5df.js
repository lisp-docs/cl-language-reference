"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[57839],{71266:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=i(85893),o=i(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"condition"})," ",(0,t.jsx)(n.em,{children:"Condition Type"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Class Precedence List:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"condition"}),", ",(0,t.jsx)(n.strong,{children:"t"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["All types of ",(0,t.jsx)(n.em,{children:"conditions"}),", whether error or non-error, must inherit from this ",(0,t.jsx)(n.em,{children:"type"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["No additional ",(0,t.jsx)(n.em,{children:"subtype"})," relationships among the specified ",(0,t.jsx)(n.em,{children:"subtypes"})," of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"condition"})," are allowed, except when explicitly mentioned in the text; however implementations are permitted to introduce additional ",(0,t.jsx)(n.em,{children:"types"})," and one of these ",(0,t.jsx)(n.em,{children:"types"})," can be a ",(0,t.jsx)(n.em,{children:"subtype"})," of any number of the ",(0,t.jsx)(n.em,{children:"subtypes"})," of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"condition"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Whether a user-defined ",(0,t.jsx)(n.em,{children:"condition type"})," has ",(0,t.jsx)(n.em,{children:"slots"})," that are accessible by ",(0,t.jsx)(n.em,{children:"with-slots"})," is ",(0,t.jsx)(n.em,{children:"implementation dependent"}),". Furthermore, even in an ",(0,t.jsx)(n.em,{children:"implementation"})," in which user-defined ",(0,t.jsx)(n.em,{children:"condition types"})," would have ",(0,t.jsx)(n.em,{children:"slots"}),", it is ",(0,t.jsx)(n.em,{children:"implementation-dependent"})," whether any ",(0,t.jsx)(n.em,{children:"condition types"})," defined in this document have such ",(0,t.jsx)(n.em,{children:"slots"})," or, if they do, what their ",(0,t.jsx)(n.em,{children:"names"})," might be; only the reader functions documented by this specification may be relied upon by portable code."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Conforming code"})," must observe the following restrictions related to ",(0,t.jsx)(n.em,{children:"conditions"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," ",(0,t.jsx)(n.strong,{children:"define-condition"}),", not ",(0,t.jsx)(n.strong,{children:"defclass"}),", must be used to define new ",(0,t.jsx)(n.em,{children:"condition types"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," ",(0,t.jsx)(n.strong,{children:"make-condition"}),", not ",(0,t.jsx)(n.strong,{children:"make-instance"}),", must be used to create ",(0,t.jsx)(n.em,{children:"condition objects"})," explicitly."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",":report"," option of ",(0,t.jsx)(n.strong,{children:"define-condition"}),", not ",(0,t.jsx)(n.strong,{children:"defmethod"})," for ",(0,t.jsx)(n.strong,{children:"print-object"}),", must be used to define a condition reporter."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," ",(0,t.jsx)(n.strong,{children:"slot-value"}),", ",(0,t.jsx)(n.strong,{children:"slot-boundp"}),", ",(0,t.jsx)(n.strong,{children:"slot-makunbound"}),", and ",(0,t.jsx)(n.strong,{children:"with-slots"})," must not be used on ",(0,t.jsx)(n.em,{children:"condition objects"}),". Instead, the appropriate accessor functions (defined by ",(0,t.jsx)(n.strong,{children:"define-condition"}),") should be used."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const r={title:"condition"},d="condition",l={id:"chap-9/j-c-dictionary/condition_condition-type",title:"condition",description:"Expanded Reference: condition",source:"@site/docs/chap-9/j-c-dictionary/condition_condition-type.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/condition_condition-type",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/condition_condition-type",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/condition_condition-type.md",tags:[],version:"current",frontMatter:{title:"condition"},sidebar:"tutorialSidebar",previous:{title:"compute-restarts",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/compute-restarts_function"},next:{title:"debugger-hook",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/debugger-hook_variable"}},a={},h=[{value:"Expanded Reference: condition",id:"expanded-reference-condition",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"condition",children:"condition"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-condition",children:"Expanded Reference: condition"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(condition )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(67294);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);