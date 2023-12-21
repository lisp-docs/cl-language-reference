"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39499],{56848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var s=r(85893),o=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"y-or-n-p, yes-or-no-p"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"y-or-n-p"})," &optional ",(0,s.jsx)(n.em,{children:"control"})," &rest ",(0,s.jsx)(n.em,{children:"arguments \u2192 generalized-boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," &optional ",(0,s.jsx)(n.em,{children:"control"})," &rest ",(0,s.jsx)(n.em,{children:"arguments \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"control"}),"\u2014a ",(0,s.jsx)(n.em,{children:"format control"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"arguments"}),"\u2014",(0,s.jsx)(n.em,{children:"format arguments"})," for ",(0,s.jsx)(n.em,{children:"control"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["These functions ask a question and parse a response from the user. They return ",(0,s.jsx)(n.em,{children:"true"})," if the answer is affirmative, or ",(0,s.jsx)(n.em,{children:"false"})," if the answer is negative."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"y-or-n-p"})," is for asking the user a question whose answer is either \u201cyes\u201d or \u201cno.\u201d It is intended that the reply require the user to answer a yes-or-no question with a single character. ",(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," is also for asking the user a question whose answer is either \u201cYes\u201d or \u201cNo.\u201d It is intended that the reply require the user to take more action than just a single keystroke, such as typing the full word yes or no followed by a newline."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"y-or-n-p"})," types out a message (if supplied), reads an answer in some ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," manner (intended to be short and simple, such as reading a single character such as Y or N). ",(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," types out a message (if supplied), attracts the user\u2019s attention (for example, by ringing the terminal\u2019s bell), and reads an answer in some ",(0,s.jsx)(n.em,{children:"implementation-dependent"})," manner (intended to be multiple characters, such as YES or NO)."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"format-control"})," is supplied and not ",(0,s.jsx)(n.strong,{children:"nil"}),", then a ",(0,s.jsx)(n.strong,{children:"fresh-line"})," operation is performed; then a message is printed as if ",(0,s.jsx)(n.em,{children:"format-control"})," and ",(0,s.jsx)(n.em,{children:"arguments"})," were given to ",(0,s.jsx)(n.strong,{children:"format"}),". In any case, ",(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," and ",(0,s.jsx)(n.strong,{children:"y-or-n-p"})," will provide a prompt such as \u201c(Y or N)\u201d or \u201c(Yes or No)\u201d if appropriate."]}),"\n",(0,s.jsxs)(n.p,{children:["All input and output are performed using ",(0,s.jsx)(n.em,{children:"query I/O"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(y-or-n-p "(t or nil) given by") \n\u25b7 (t or nil) given by (Y or N) Y \n\u2192 true \n(yes-or-no-p "a ~S message" \u2019frightening) \n\u25b7 a FRIGHTENING message (Yes or No) no \n\u2192 false \n(y-or-n-p "Produce listing file?") \n\u25b7 Produce listing file? \n\u25b7 Please respond with Y or N. n \n\u2192 false \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["Output to and input from ",(0,s.jsx)(n.em,{children:"query I/O"})," will occur."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*query-io*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"format"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," and ",(0,s.jsx)(n.strong,{children:"yes-or-no-p"})," do not add question marks to the end of the prompt string, so any desired question mark or other punctuation should be explicitly included in the text query."]})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const c={title:"y-or-n-p, yes-or-no-p"},a="y-or-n-p, yes-or-no-p",l={id:"chap-21/cb-c-dictionary/y-or-n-p_yes-or-no-p_function",title:"y-or-n-p, yes-or-no-p",description:"Expanded Reference: y-or-n-p, yes-or-no-p",source:"@site/docs/chap-21/cb-c-dictionary/y-or-n-p_yes-or-no-p_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/y-or-n-p_yes-or-no-p_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/y-or-n-p_yes-or-no-p_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/y-or-n-p_yes-or-no-p_function.md",tags:[],version:"current",frontMatter:{title:"y-or-n-p, yes-or-no-p"},sidebar:"tutorialSidebar",previous:{title:"write-string, write-line",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/write-string_write-line_function"},next:{title:"22. Printer",permalink:"/cl-language-reference/docs/category/22-printer"}},d={},p=[{value:"Expanded Reference: y-or-n-p, yes-or-no-p",id:"expanded-reference-y-or-n-p-yes-or-no-p",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"y-or-n-p-yes-or-no-p",children:"y-or-n-p, yes-or-no-p"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-y-or-n-p-yes-or-no-p",children:"Expanded Reference: y-or-n-p, yes-or-no-p"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(y-or-n-p, yes-or-no-p )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(67294);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);