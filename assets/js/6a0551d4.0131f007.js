"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[69945],{46792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=t(85893),r=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"file-write-date"})," ",(0,i.jsx)(t,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"file-write-date",children:(0,i.jsx)("b",{children:"file-write-date"})})," ",(0,i.jsx)(n.em,{children:"pathspec \u2192 date"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pathspec"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"date"}),"\u2014a ",(0,i.jsx)(n.em,{children:"universal time"})," or ",(0,i.jsx)(t,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.em,{children:"universal time"})," representing the time at which the ",(0,i.jsx)(t,{styled:!0,term:"file",children:(0,i.jsx)("i",{children:"file"})})," specified by ",(0,i.jsx)(n.em,{children:"pathspec"})," was last written (or created), or returns ",(0,i.jsx)(t,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," if such a time cannot be determined."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(with-open-file (s "noel.text" \n\t\t   :direction :output :if-exists :error) \n  (format s "~&Dear Santa,~2%I was good this year. ~ \nPlease leave lots of toys.~2%Love, Sue~ \n\n \n \n~2%attachments: milk, cookies~%") \n  (truename s)) \n\u2192 #P"CUPID:/susan/noel.text" \n(with-open-file (s "noel.text") \n  (file-write-date s)) \n\u2192 2902600800 \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsx)(n.p,{children:"The host computer\u2019s file system."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," is signaled if ",(0,i.jsx)(n.em,{children:"pathspec"})," is ",(0,i.jsx)(t,{styled:!0,term:"wild",children:(0,i.jsx)("i",{children:"wild"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(t,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," is signaled if the ",(0,i.jsx)(n.em,{children:"file system"})," cannot perform the requested operation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:"Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames)"})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const l={title:"file-write-date"},d="file-write-date",a={id:"chap-20/ca-c-dictionary/file-write-date_function",title:"file-write-date",description:"Expanded Reference: file-write-date",source:"@site/docs/chap-20/ca-c-dictionary/file-write-date_function.md",sourceDirName:"chap-20/ca-c-dictionary",slug:"/chap-20/ca-c-dictionary/file-write-date_function",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/file-write-date_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-20/ca-c-dictionary/file-write-date_function.md",tags:[],version:"current",frontMatter:{title:"file-write-date"},sidebar:"tutorialSidebar",previous:{title:"file-error",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/file-error_condition-type"},next:{title:"probe-file",permalink:"/cl-language-reference/chap-20/ca-c-dictionary/probe-file_function"}},o={},h=[{value:"Expanded Reference: file-write-date",id:"expanded-reference-file-write-date",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file-write-date",children:"file-write-date"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-file-write-date",children:"Expanded Reference: file-write-date"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(file-write-date )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(67294);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);