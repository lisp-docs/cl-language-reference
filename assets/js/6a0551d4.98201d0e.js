"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[69945],{46792:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=i(85893),t=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:i,GlossaryTerm:s}=n;return i||l("ClLinks",!0),s||l("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"file-write-date"})," ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"file-write-date",children:(0,r.jsx)("b",{children:"file-write-date"})})," ",(0,r.jsx)(n.em,{children:"pathspec \u2192 date"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"pathspec"}),"\u2014a ",(0,r.jsx)(s,{styled:!0,term:"pathname designator",children:(0,r.jsx)("i",{children:"pathname designator"})})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"date"}),"\u2014a ",(0,r.jsx)(s,{styled:!0,term:"universal time",children:(0,r.jsx)("i",{children:"universal time"})})," or ",(0,r.jsx)(i,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(s,{styled:!0,term:"universal time",children:(0,r.jsx)("i",{children:"universal time"})})," representing the time at which the ",(0,r.jsx)(i,{term:"file",children:(0,r.jsx)("i",{children:"file"})})," specified by ",(0,r.jsx)(n.em,{children:"pathspec"})," was last written (or created), or returns ",(0,r.jsx)(i,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})})," if such a time cannot be determined."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(with-open-file (s "noel.text" \n\t\t   :direction :output :if-exists :error) \n  (format s "~&Dear Santa,~2%I was good this year. ~ \nPlease leave lots of toys.~2%Love, Sue~ \n \n \n~2%attachments: milk, cookies~%") \n  (truename s)) \n\u2192 #P"CUPID:/susan/noel.text" \n(with-open-file (s "noel.text") \n  (file-write-date s)) \n\u2192 2902600800 \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"The host computer\u2019s file system."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"file-error",children:(0,r.jsx)("b",{children:"file-error"})})," is signaled if ",(0,r.jsx)(n.em,{children:"pathspec"})," is ",(0,r.jsx)(i,{term:"wild",children:(0,r.jsx)("i",{children:"wild"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"file-error",children:(0,r.jsx)("b",{children:"file-error"})})," is signaled if the ",(0,r.jsx)(s,{styled:!0,term:"file system",children:(0,r.jsx)("i",{children:"file system"})})," cannot perform the requested operation."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames)"})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"file-write-date"},d="file-write-date",o={id:"chap-20/ca-c-dictionary/file-write-date_function",title:"file-write-date",description:"Expanded Reference: file-write-date",source:"@site/docs/chap-20/ca-c-dictionary/file-write-date_function.md",sourceDirName:"chap-20/ca-c-dictionary",slug:"/chap-20/ca-c-dictionary/file-write-date_function",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/file-write-date_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-20/ca-c-dictionary/file-write-date_function.md",tags:[],version:"current",frontMatter:{title:"file-write-date"},sidebar:"tutorialSidebar",previous:{title:"file-error",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/file-error_condition-type"},next:{title:"probe-file",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/probe-file_function"}},h={},p=[{value:"Expanded Reference: file-write-date",id:"expanded-reference-file-write-date",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"file-write-date",children:"file-write-date"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-file-write-date",children:"Expanded Reference: file-write-date"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(file-write-date )\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var r=i(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);