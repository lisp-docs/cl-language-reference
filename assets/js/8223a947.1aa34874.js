"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[24514],{54304:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=n(85893),a=n(11151);function s(e){const c={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.strong,{children:"char-upcase, char-downcase"})," ",(0,r.jsx)(c.em,{children:"Function"})]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.strong,{children:"char-upcase"})," ",(0,r.jsx)(c.em,{children:"character \u2192 corresponding-character"})]}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.strong,{children:"char-downcase"})," ",(0,r.jsx)(c.em,{children:"character \u2192 corresponding-character"})]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.em,{children:"character"}),", ",(0,r.jsx)(c.em,{children:"corresponding-character"}),"\u2014a ",(0,r.jsx)(c.em,{children:"character"})," ."]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(c.p,{children:["If ",(0,r.jsx)(c.em,{children:"character"})," is a ",(0,r.jsx)(c.em,{children:"lowercase character"})," , ",(0,r.jsx)(c.strong,{children:"char-upcase"})," returns the corresponding ",(0,r.jsx)(c.em,{children:"uppercase character"})," . Otherwise, ",(0,r.jsx)(c.strong,{children:"char-upcase"})," just returns the given ",(0,r.jsx)(c.em,{children:"character"}),"."]}),"\n",(0,r.jsxs)(c.p,{children:["If ",(0,r.jsx)(c.em,{children:"character"})," is an ",(0,r.jsx)(c.em,{children:"uppercase character"})," , ",(0,r.jsx)(c.strong,{children:"char-downcase"})," returns the corresponding ",(0,r.jsx)(c.em,{children:"lowercase character"})," . Otherwise, ",(0,r.jsx)(c.strong,{children:"char-downcase"})," just returns the given ",(0,r.jsx)(c.em,{children:"character"}),"."]}),"\n",(0,r.jsxs)(c.p,{children:["The result only ever differs from ",(0,r.jsx)(c.em,{children:"character"})," in its ",(0,r.jsx)(c.em,{children:"code attribute"}),"; all ",(0,r.jsx)(c.em,{children:"implementation-defined attributes"})," are preserved."]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-lisp",children:"\n\n(char-upcase #\\a) \u2192 #\\A \n\n(char-upcase #\\A) \u2192 #\\A \n\n(char-downcase #\\a) \u2192 #\\a \n\n(char-downcase #\\A) \u2192 #\\a \n\n(char-upcase #\\9) \u2192 #\\9 \n\n(char-downcase #\\9) \u2192 #\\9 \n\n(char-upcase #\\@) \u2192 #\\@ \n\n(char-downcase #\\@) \u2192 #\\@ \n\n;; Note that this next example might run for a very long time in \n\n;; some implementations if CHAR-CODE-LIMIT happens to be very large \n\n;; for that implementation. \n\n(dotimes (code char-code-limit) \n\n  (let ((char (code-char code))) \n\n    (when char \n\n      (unless (cond ((upper-case-p char) (char= (char-upcase (char-downcase char)) char)) ((lower-case-p char) (char= (char-downcase (char-upcase char)) char)) \n\n\t\t    (t (and (char= (char-upcase (char-downcase char)) char) \n\n\t\t\t    (char= (char-downcase (char-upcase char)) char)))) \n\n\t(return char))))) \n\n\u2192 NIL \n\n\n"})}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(c.p,{children:["Should signal an error of ",(0,r.jsx)(c.em,{children:"type"})," ",(0,r.jsx)(c.strong,{children:"type-error"})," if ",(0,r.jsx)(c.em,{children:"character"})," is not a ",(0,r.jsx)(c.em,{children:"character"})," ."]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.strong,{children:"upper-case-p"}),", ",(0,r.jsx)(c.strong,{children:"alpha-char-p"}),", Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documen tation of Implementation-Defined Scripts)"]}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(c.p,{children:["If the ",(0,r.jsx)(c.em,{children:"corresponding-char"})," is ",(0,r.jsx)(c.em,{children:"different"})," than ",(0,r.jsx)(c.em,{children:"character"}),", then both the ",(0,r.jsx)(c.em,{children:"character"})," and the ",(0,r.jsx)(c.em,{children:"corresponding char"})," have ",(0,r.jsx)(c.em,{children:"case"}),"."]}),"\n",(0,r.jsxs)(c.p,{children:["Since ",(0,r.jsx)(c.strong,{children:"char-equal"})," ignores the ",(0,r.jsx)(c.em,{children:"case"})," of the ",(0,r.jsx)(c.em,{children:"characters"})," it compares, the ",(0,r.jsx)(c.em,{children:"corresponding-character"})," is always the ",(0,r.jsx)(c.em,{children:"same"})," as ",(0,r.jsx)(c.em,{children:"character"})," under ",(0,r.jsx)(c.strong,{children:"char-equal"}),"."]})]})}function h(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,r.jsx)(c,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const t={},i="char-upcase, char-downcase",d={id:"chap-13/bd-c-dictionary/char-upcase_char-downcase_function",title:"char-upcase, char-downcase",description:"Expanded Reference: char-upcase, char-downcase",source:"@site/docs/chap-13/bd-c-dictionary/char-upcase_char-downcase_function.md",sourceDirName:"chap-13/bd-c-dictionary",slug:"/chap-13/bd-c-dictionary/char-upcase_char-downcase_function",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/char-upcase_char-downcase_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-13/bd-c-dictionary/char-upcase_char-downcase_function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"char-name",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/char-name_function"},next:{title:"character",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/character_function"}},o={},l=[{value:"Expanded Reference: char-upcase, char-downcase",id:"expanded-reference-char-upcase-char-downcase",level:2}];function p(e){const c={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.h1,{id:"char-upcase-char-downcase",children:"char-upcase, char-downcase"}),"\n","\n","\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(c.h2,{id:"expanded-reference-char-upcase-char-downcase",children:"Expanded Reference: char-upcase, char-downcase"}),"\n",(0,r.jsx)(c.admonition,{type:"tip",children:(0,r.jsx)(c.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-lisp",children:"(char-upcase, char-downcase )\n"})})]})}function u(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,r.jsx)(c,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>t,a:()=>h});var r=n(67294);const a={},s=r.createContext(a);function h(e){const c=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function t(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:h(e.components),r.createElement(s.Provider,{value:c},e.children)}}}]);