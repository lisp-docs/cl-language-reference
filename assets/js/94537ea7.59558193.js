"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[860],{84352:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-string, write-line"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-string"})," ",(0,t.jsx)(n.em,{children:"string"})," &optional ",(0,t.jsx)(n.em,{children:"output-stream"})," &key ",(0,t.jsx)(n.em,{children:"start end \u2192 string"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-line"})," ",(0,t.jsx)(n.em,{children:"string"})," &optional ",(0,t.jsx)(n.em,{children:"output-stream"})," &key ",(0,t.jsx)(n.em,{children:"start end \u2192 string"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"string"}),"\u2014a ",(0,t.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"output-stream"})," \u2013 an ",(0,t.jsx)(n.em,{children:"output stream designator"})," . The default is ",(0,t.jsx)(n.em,{children:"standard output"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"start"}),", ",(0,t.jsx)(n.em,{children:"end"}),"\u2014",(0,t.jsx)(n.em,{children:"bounding index designators"})," of ",(0,t.jsx)(n.em,{children:"string"}),". The defaults for ",(0,t.jsx)(n.em,{children:"start"})," and ",(0,t.jsx)(n.em,{children:"end"})," are 0 and ",(0,t.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-string"})," writes the ",(0,t.jsx)(n.em,{children:"characters"})," of the subsequence of ",(0,t.jsx)(n.em,{children:"string bounded"})," by ",(0,t.jsx)(n.em,{children:"start"})," and ",(0,t.jsx)(n.em,{children:"end"})," to ",(0,t.jsx)(n.em,{children:"output-stream"}),". ",(0,t.jsx)(n.strong,{children:"write-line"})," does the same thing, but then outputs a newline afterwards."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(prog1 (write-string "books" nil :end 4) (write-string "worms")) \n\u25b7 bookworms \n\u2192 "books" \n(progn (write-char #\\\\*) \n       (write-line "test12" \\*standard-output\\* :end 5) \n       (write-line "\\*test2") \n       (write-char #\\\\*) \n       nil) \n\u25b7 \\*test1 \n\n\u25b7 \\*test2 \n\u25b7 \\* \n\u2192 NIL \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*standard-output*"}),", ",(0,t.jsx)(n.strong,{children:"*terminal-io*"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"read-line"}),", ",(0,t.jsx)(n.strong,{children:"write-char"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"write-line"})," and ",(0,t.jsx)(n.strong,{children:"write-string"})," return ",(0,t.jsx)(n.em,{children:"string"}),", not the substring ",(0,t.jsx)(n.em,{children:"bounded"})," by ",(0,t.jsx)(n.em,{children:"start"})," and ",(0,t.jsx)(n.em,{children:"end"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"(write-string string)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2261"})," (dotimes (i (length string)"]}),"\n",(0,t.jsx)(n.p,{children:"(write-char (char string i)))"}),"\n",(0,t.jsx)(n.p,{children:"(write-line string)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2261"})," (prog1 (write-string string) (terpri))"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={},l="write-string, write-line",o={id:"chap-21/cb-c-dictionary/writestring",title:"write-string, write-line",description:"Expanded Reference: write-string, write-line",source:"@site/docs/chap-21/cb-c-dictionary/writestring.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/writestring",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writestring",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/writestring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"write-sequence",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writesequence"},next:{title:"y-or-n-p, yes-or-no-p",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/yornp"}},a={},h=[{value:"Expanded Reference: write-string, write-line",id:"expanded-reference-write-string-write-line",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"write-string-write-line",children:"write-string, write-line"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-write-string-write-line",children:"Expanded Reference: write-string, write-line"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(write-string, write-line )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);