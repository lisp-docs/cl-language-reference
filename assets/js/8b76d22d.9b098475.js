"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[71580],{9763:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"/, //, ///"})," ",(0,s.jsx)(n.em,{children:"Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"proper list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"variables"})," ",(0,s.jsx)(n.strong,{children:"/"}),", ",(0,s.jsx)(n.strong,{children:"//"}),", and ",(0,s.jsx)(n.strong,{children:"///"})," are maintained by the ",(0,s.jsx)(n.em,{children:"Lisp read-eval-print loop"})," to save the values of results that were printed at the end of the loop."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"/"})," is a ",(0,s.jsx)(n.em,{children:"list"})," of the most recent ",(0,s.jsx)(n.em,{children:"values"})," that were printed, the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"//"})," is the previous value of ",(0,s.jsx)(n.strong,{children:"/"}),", and the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"///"})," is the previous value of ",(0,s.jsx)(n.strong,{children:"//"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"values"})," of ",(0,s.jsx)(n.strong,{children:"/"}),", ",(0,s.jsx)(n.strong,{children:"//"}),", and ",(0,s.jsx)(n.strong,{children:"///"})," are updated immediately prior to printing the ",(0,s.jsx)(n.em,{children:"return value"})," of a top-level ",(0,s.jsx)(n.em,{children:"form"})," by the ",(0,s.jsx)(n.em,{children:"Lisp read-eval-print loop"}),". If the ",(0,s.jsx)(n.em,{children:"evaluation"})," of such a ",(0,s.jsx)(n.em,{children:"form"})," is aborted prior to its normal return, the values of ",(0,s.jsx)(n.strong,{children:"/"}),", ",(0,s.jsx)(n.strong,{children:"//"}),", and ",(0,s.jsx)(n.strong,{children:"///"})," are not updated."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n(floor 22 7) \u2192 3, 1 \n\n(+ (\\* (car /) 7) (cadr /)) \u2192 22 \n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Lisp read-eval-print loop"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"-"})," (",(0,s.jsx)(n.em,{children:"variable"}),"), ",(0,s.jsx)(n.strong,{children:"+"})," (",(0,s.jsx)(n.em,{children:"variable"}),"), ",(0,s.jsx)(n.strong,{children:"*"})," (",(0,s.jsx)(n.em,{children:"variable"}),"), Section 25.1.1 (Top level loop)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("sup",{children:"lisp-implementation-type, lisp-implementation"})," version"]})," ",(0,s.jsx)("i",{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"lisp-implementation-type"})," \u27e8",(0,s.jsx)(n.em,{children:"no arguments"}),"\u27e9 \u2192 description*"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"lisp-implementation-version"})," \u27e8",(0,s.jsx)(n.em,{children:"no arguments"}),"\u27e9 \u2192 description*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"description"}),"\u2014a ",(0,s.jsx)(n.em,{children:"string"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"lisp-implementation-type"})," and ",(0,s.jsx)(n.strong,{children:"lisp-implementation-version"})," identify the current implementation of Common Lisp."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"lisp-implementation-type"})," returns a ",(0,s.jsx)(n.em,{children:"string"})," that identifies the generic name of the particular Common Lisp implementation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"lisp-implementation-version"})," returns a ",(0,s.jsx)(n.em,{children:"string"})," that identifies the version of the particular Common Lisp implementation."]}),"\n",(0,s.jsxs)(n.p,{children:["If no appropriate and relevant result can be produced, ",(0,s.jsx)(n.strong,{children:"nil"})," is returned instead of a ",(0,s.jsx)(n.em,{children:"string"}),". ",(0,s.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n(lisp-implementation-type) \n\n\u2192 "ACME Lisp" \n\n<i><sup>or</sup>\u2192</i> "Joe\u2019s Common Lisp" \n\n(lisp-implementation-version) \n\n\u2192 "1.3a" \n\n\u2192 "V2" \n\n<i><sup>or</sup>\u2192</i> "Release 17.3, ECO #6" \n\n\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const c={},o="/, //, ///",d={id:"chap-25/cf-c-dictionary/a",title:"/, //, ///",description:"Expanded Reference: /, //, ///",source:"@site/docs/chap-25/cf-c-dictionary/a.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/a",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/a",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/a.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"25.2 Environment Dictionary",permalink:"/cl-language-reference/docs/category/252-environment-dictionary"},next:{title:"apropos, apropos-list",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/apropos"}},a={},p=[{value:"Expanded Reference: /, //, ///",id:"expanded-reference---",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"--",children:"/, //, ///"}),"\n","\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference---",children:"Expanded Reference: /, //, ///"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(/, //, /// )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var s=r(67294);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);