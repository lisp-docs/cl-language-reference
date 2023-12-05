"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[71946],{68743:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var c=r(85893),a=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set-macro-character, get-macro-character"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"get-macro-character"})," ",(0,c.jsx)(n.em,{children:"char"})," &optional ",(0,c.jsx)(n.em,{children:"readtable \u2192 function, non-terminating-p"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set-macro-character"})," ",(0,c.jsx)(n.em,{children:"char new-function"})," &optional ",(0,c.jsx)(n.em,{children:"non-terminating-p readtable \u2192"})," ",(0,c.jsx)(n.strong,{children:"t"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"char"}),"\u2014a ",(0,c.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"non-terminating-p"}),"\u2014a ",(0,c.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,c.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"set-macro-character, get-macro-character"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"readtable"}),"\u2014a ",(0,c.jsx)(n.em,{children:"readtable designator"})," . The default is the ",(0,c.jsx)(n.em,{children:"current readtable"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"function"}),"\u2014",(0,c.jsx)(n.strong,{children:"nil"}),", or a ",(0,c.jsx)(n.em,{children:"designator"})," for a ",(0,c.jsx)(n.em,{children:"function"})," of two ",(0,c.jsx)(n.em,{children:"arguments"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-function"}),"\u2014a ",(0,c.jsx)(n.em,{children:"function designator"})," ."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"get-macro-character"})," returns as its ",(0,c.jsx)(n.em,{children:"primary value"}),", ",(0,c.jsx)(n.em,{children:"function"}),", the ",(0,c.jsx)(n.em,{children:"reader macro function"})," associated with ",(0,c.jsx)(n.em,{children:"char"})," in ",(0,c.jsx)(n.em,{children:"readtable"})," (if any), or else ",(0,c.jsx)(n.strong,{children:"nil"})," if ",(0,c.jsx)(n.em,{children:"char"})," is not a ",(0,c.jsx)(n.em,{children:"macro character"})," in ",(0,c.jsx)(n.em,{children:"readtable"}),". The ",(0,c.jsx)(n.em,{children:"secondary value"}),", ",(0,c.jsx)(n.em,{children:"non-terminating-p"}),", is ",(0,c.jsx)(n.em,{children:"true"})," if ",(0,c.jsx)(n.em,{children:"char"})," is a ",(0,c.jsx)(n.em,{children:"non-terminating macro character"})," ; otherwise, it is ",(0,c.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"set-macro-character"})," causes ",(0,c.jsx)(n.em,{children:"char"})," to be a ",(0,c.jsx)(n.em,{children:"macro character"})," associated with the ",(0,c.jsx)(n.em,{children:"reader macro function new-function"})," (or the ",(0,c.jsx)(n.em,{children:"designator"})," for ",(0,c.jsx)(n.em,{children:"new-function"}),") in ",(0,c.jsx)(n.em,{children:"readtable"}),". If ",(0,c.jsx)(n.em,{children:"non-terminating-p"})," is ",(0,c.jsx)(n.em,{children:"true"}),", ",(0,c.jsx)(n.em,{children:"char"})," becomes a ",(0,c.jsx)(n.em,{children:"non-terminating macro character"})," ; otherwise it becomes a ",(0,c.jsx)(n.em,{children:"terminating macro character"})," ."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(get-macro-character #\\\\&#123;) *\u2192* NIL, *false* \n\n\n\n(not (get-macro-character #\\;)) *\u2192 false* \n\n\n\nThe following is a possible definition for the *single-quote reader macro* in *standard syntax* : \n\n\n\n(defun single-quote-reader (stream char) \n\n\n\n(declare (ignore char)) \n\n\n\n(list \u2019quote (read stream t nil t))) *\u2192* SINGLE-QUOTE-READER \n\n\n\n(set-macro-character #\\\u2019 #\u2019single-quote-reader) *\u2192* T \n\n\n\nHere single-quote-reader reads an *object* following the *single-quote* and returns a *list* of **quote** and that *object*. The *char* argument is ignored. \n\n\n\nThe following is a possible definition for the *semicolon reader macro* in *standard syntax* : \n\n\n\n(defun semicolon-reader (stream char) \n\n\n\n(declare (ignore char)) \n\n\n\n;; First swallow the rest of the current input line. \n\n\n\n;; End-of-file is acceptable for terminating the comment. \n\n\n\n(do () ((char= (read-char stream nil #\\Newline t) #\\Newline))) \n\n\n\n;; Return zero values. \n\n\n\n(values)) *\u2192* SEMICOLON-READER \n\n\n\n(set-macro-character #\\; #\u2019semicolon-reader) *\u2192* T \n\n\n\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"readtable"})," is modified."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"*readtable*"})})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}const i={},o="set-macro-character, get-macro-character",d={id:"chap-23/cd-c-dictionary/setmacrocharacter",title:"set-macro-character, get-macro-character",description:"Expanded Reference: set-macro-character, get-macro-character",source:"@site/docs/chap-23/cd-c-dictionary/setmacrocharacter.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/setmacrocharacter",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/setmacrocharacter",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/setmacrocharacter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readtablep",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readtablep"},next:{title:"set-syntax-from-char",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/setsyntaxfromchar"}},l={},h=[{value:"Expanded Reference: set-macro-character, get-macro-character",id:"expanded-reference-set-macro-character-get-macro-character",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"set-macro-character-get-macro-character",children:"set-macro-character, get-macro-character"}),"\n","\n","\n",(0,c.jsx)(s,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-set-macro-character-get-macro-character",children:"Expanded Reference: set-macro-character, get-macro-character"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(set-macro-character, get-macro-character )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var c=r(67294);const a={},t=c.createContext(a);function s(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);