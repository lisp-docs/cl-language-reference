"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[96878],{43791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shiftf"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shiftf"})," ",(0,r.jsx)(n.em,{children:"{place}"}),(0,r.jsx)("sup",{children:"+"})," ",(0,r.jsx)(n.em,{children:"newvalue ! old-value-1"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"place"}),"\u2014a ",(0,r.jsx)(n.em,{children:"place"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"newvalue"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"old-value-1"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"})," (the old ",(0,r.jsx)(n.em,{children:"value"})," of the first ",(0,r.jsx)(n.em,{children:"place"}),")."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"shiftf"})," modifies the values of each ",(0,r.jsx)(n.em,{children:"place"})," by storing ",(0,r.jsx)(n.em,{children:"newvalue"})," into the last ",(0,r.jsx)(n.em,{children:"place"}),", and shifting the values of the second through the last ",(0,r.jsx)(n.em,{children:"place"})," into the remaining ",(0,r.jsx)(n.em,{children:"places"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"newvalue"})," produces more values than there are store variables, the extra values are ignored. If ",(0,r.jsx)(n.em,{children:"newvalue"})," produces fewer values than there are store variables, the missing values are set to ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the form (shiftf ",(0,r.jsx)(n.em,{children:"place1 place2"})," ... ",(0,r.jsx)(n.em,{children:"placen newvalue"}),"), the values in ",(0,r.jsx)(n.em,{children:"place1"})," through ",(0,r.jsx)(n.em,{children:"placen"})," are ",(0,r.jsx)(n.em,{children:"read"})," and saved, and ",(0,r.jsx)(n.em,{children:"newvalue"})," is evaluated, for a total of n+1 values in all. Values 2 through n+1 are then stored into ",(0,r.jsx)(n.em,{children:"place1"})," through ",(0,r.jsx)(n.em,{children:"placen"}),", respectively. It is as if all the ",(0,r.jsx)(n.em,{children:"places"})," form a shift register; the ",(0,r.jsx)(n.em,{children:"newvalue"})," is shifted in from the right, all values shift over to the left one place, and the value shifted out of ",(0,r.jsx)(n.em,{children:"place1"})," is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For information about the ",(0,r.jsx)(n.em,{children:"evaluation"})," of ",(0,r.jsx)(n.em,{children:"subforms"})," of ",(0,r.jsx)(n.em,{children:"places"}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(setq x (list 1 2 3) y \u2019trash) *!* TRASH \n\n\n\n(shiftf y x (cdr x) \u2019(hi there)) *!* TRASH \n\n\n\nx *!* (2 3) \n\n\n\ny *!* (1 HI THERE) \n\n\n\nData and Control \n\n\n\n \n\n\n\n \n\n\n\n(setq x (list \u2019a \u2019b \u2019c)) *!* (A B C) \n\n\n\n(shiftf (cadr x) \u2019z) *!* B \n\n\n\nx *!* (A Z C) \n\n\n\n(shiftf (cadr x) (cddr x) \u2019q) *!* Z \n\n\n\nx *!* (A (C) . Q) \n\n\n\n(setq n 0) *!* 0 \n\n\n\n(setq x (list \u2019a \u2019b \u2019c \u2019d)) *!* (A B C D) \n\n\n\n(shiftf (nth (setq n (+ n 1)) x) \u2019z) *!* B \n\n\n\nx *!* (A Z C D) \n\n\n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Aected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"define-setf-expander"}),", ",(0,r.jsx)(n.strong,{children:"defsetf"}),", ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setf"}),", ",(0,r.jsx)(n.strong,{children:"rotatef"}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The e\u21b5ect of (shiftf ",(0,r.jsx)(n.em,{children:"place1 place2"})," ... ",(0,r.jsx)(n.em,{children:"placen newvalue"}),") is roughly equivalent to"]}),"\n",(0,r.jsxs)(n.p,{children:["(let ((var1 ",(0,r.jsx)(n.em,{children:"place1"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(var2 ",(0,r.jsx)(n.em,{children:"place2"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"..."}),"\n",(0,r.jsxs)(n.p,{children:["(varn ",(0,r.jsx)(n.em,{children:"placen"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(var0 ",(0,r.jsx)(n.em,{children:"newvalue"}),"))"]}),"\n",(0,r.jsxs)(n.p,{children:["(setf ",(0,r.jsx)(n.em,{children:"place1"})," var2)"]}),"\n",(0,r.jsxs)(n.p,{children:["(setf ",(0,r.jsx)(n.em,{children:"place2"})," var3)"]}),"\n",(0,r.jsx)(n.p,{children:"..."}),"\n",(0,r.jsxs)(n.p,{children:["(setf ",(0,r.jsx)(n.em,{children:"placen"})," var0)"]}),"\n",(0,r.jsx)(n.p,{children:"var1)"}),"\n",(0,r.jsxs)(n.p,{children:["except that the latter would evaluate any ",(0,r.jsx)(n.em,{children:"subforms"})," of each place twice, whereas ",(0,r.jsx)(n.strong,{children:"shiftf"})," evaluates them once. For example,"]}),"\n",(0,r.jsxs)(n.p,{children:["(setq n 0) ",(0,r.jsx)(n.em,{children:"!"})," 0"]}),"\n",(0,r.jsxs)(n.p,{children:["(setq x (list \u2019a \u2019b \u2019c \u2019d)) ",(0,r.jsx)(n.em,{children:"!"})," (A B C D)"]}),"\n",(0,r.jsx)(n.p,{children:"(prog1 (nth (setq n (+ n 1)) x)"}),"\n",(0,r.jsxs)(n.p,{children:["(setf (nth (setq n (+ n 1)) x) \u2019z)) ",(0,r.jsx)(n.em,{children:"!"})," B"]}),"\n",(0,r.jsxs)(n.p,{children:["x ",(0,r.jsx)(n.em,{children:"!"})," (A B Z D)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"rotatef"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={},a="shiftf",d={id:"chap-5/f-d-dictionary/shiftf",title:"shiftf",description:"Expanded Reference: shiftf",source:"@site/docs/chap-5/f-d-dictionary/shiftf.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/shiftf",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/shiftf",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/shiftf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setq",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/setq"},next:{title:"t",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/t"}},h={},o=[{value:"Expanded Reference: shiftf",id:"expanded-reference-shiftf",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"shiftf",children:"shiftf"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-shiftf",children:"Expanded Reference: shiftf"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(shiftf )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(67294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);