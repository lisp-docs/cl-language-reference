"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[438],{31938:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>o});var s=r(85893),c=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"char, schar"})," ",(0,s.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"char"})," ",(0,s.jsx)(n.em,{children:"string index \u2192 character"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"schar"})," ",(0,s.jsx)(n.em,{children:"string index \u2192 character"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(setf (char"})," ",(0,s.jsx)(n.em,{children:"string index"}),"**)** ",(0,s.jsx)(n.em,{children:"new-character"}),"**)**"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(setf (schar"})," ",(0,s.jsx)(n.em,{children:"string index"}),"**)** ",(0,s.jsx)(n.em,{children:"new-character"}),"**)**"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"string"}),"\u2014for ",(0,s.jsx)(n.strong,{children:"char"}),", a ",(0,s.jsx)(n.em,{children:"string"}),"; for ",(0,s.jsx)(n.strong,{children:"schar"}),", a ",(0,s.jsx)(n.em,{children:"simple string"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"index"}),"\u2014a ",(0,s.jsx)(n.em,{children:"valid array index"})," for the ",(0,s.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"character"}),", ",(0,s.jsx)(n.em,{children:"new-character"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"char"})," and ",(0,s.jsx)(n.strong,{children:"schar"})," ",(0,s.jsx)(n.em,{children:"access"})," the ",(0,s.jsx)(n.em,{children:"element"})," of ",(0,s.jsx)(n.em,{children:"string"})," specified by ",(0,s.jsx)(n.em,{children:"index"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"char"})," ignores ",(0,s.jsx)(n.em,{children:"fill pointers"})," when ",(0,s.jsx)(n.em,{children:"accessing elements"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(setq my-simple-string (make-string 6 :initial-element #\\A)) \u2192 "AAAAAA" \n(schar my-simple-string 4) \u2192 #\\A \n(setf (schar my-simple-string 4) #\\B) \u2192 #\\B \nmy-simple-string \u2192 "AAAABA" \n(setq my-filled-string \n      (make-array 6 :element-type \u2019character \n\t\t  :fill-pointer 5 \n\t\t  :initial-contents my-simple-string)) \n\u2192 "AAAAB" \n(char my-filled-string 4) \u2192 #\\B \n(char my-filled-string 5) \u2192 #\\A \n(setf (char my-filled-string 3) #\\C) \u2192 #\\C \n(setf (char my-filled-string 5) #\\D) \u2192 #\\D \n(setf (fill-pointer my-filled-string) 6) \u2192 6 \nmy-filled-string \u2192 "AAACBD" \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"aref"}),", ",(0,s.jsx)(n.strong,{children:"elt"}),", Section 3.2.1 (Compiler Terminology)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(char s j) ",(0,s.jsx)(n.em,{children:"\u2261"})," (aref (the string s) j)"]})]})}function t(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const a={title:"char, schar"},l="char, schar",h={id:"chap-16/bg-c-dictionary/char_schar_accessor",title:"char, schar",description:"Expanded Reference: char, schar",source:"@site/docs/chap-16/bg-c-dictionary/char_schar_accessor.md",sourceDirName:"chap-16/bg-c-dictionary",slug:"/chap-16/bg-c-dictionary/char_schar_accessor",permalink:"/cl-language-reference/docs/chap-16/bg-c-dictionary/char_schar_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-16/bg-c-dictionary/char_schar_accessor.md",tags:[],version:"current",frontMatter:{title:"char, schar"},sidebar:"tutorialSidebar",previous:{title:"base-string",permalink:"/cl-language-reference/docs/chap-16/bg-c-dictionary/base-string_type"},next:{title:"make-string",permalink:"/cl-language-reference/docs/chap-16/bg-c-dictionary/make-string_function"}},d={},o=[{value:"Expanded Reference: char, schar",id:"expanded-reference-char-schar",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"char-schar",children:"char, schar"}),"\n","\n","\n",(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-char-schar",children:"Expanded Reference: char, schar"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(char, schar )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var s=r(67294);const c={},i=s.createContext(c);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);