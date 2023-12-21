"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[17262],{35615:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var c=n(85893),t=n(11151);function a(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"set-macro-character, get-macro-character"})," ",(0,c.jsx)(r.em,{children:"Function"})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"get-macro-character"})," ",(0,c.jsx)(r.em,{children:"char"})," &optional ",(0,c.jsx)(r.em,{children:"readtable \u2192 function, non-terminating-p"})]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"set-macro-character"})," ",(0,c.jsx)(r.em,{children:"char new-function"})," &optional ",(0,c.jsx)(r.em,{children:"non-terminating-p readtable \u2192"})," ",(0,c.jsx)(r.strong,{children:"t"})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"char"}),"\u2014a ",(0,c.jsx)(r.em,{children:"character"})," ."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"non-terminating-p"}),"\u2014a ",(0,c.jsx)(r.em,{children:"generalized boolean"}),". The default is ",(0,c.jsx)(r.em,{children:"false"}),"."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"set-macro-character, get-macro-character"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"readtable"}),"\u2014a ",(0,c.jsx)(r.em,{children:"readtable designator"})," . The default is the ",(0,c.jsx)(r.em,{children:"current readtable"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"function"}),"\u2014",(0,c.jsx)(r.strong,{children:"nil"}),", or a ",(0,c.jsx)(r.em,{children:"designator"})," for a ",(0,c.jsx)(r.em,{children:"function"})," of two ",(0,c.jsx)(r.em,{children:"arguments"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"new-function"}),"\u2014a ",(0,c.jsx)(r.em,{children:"function designator"})," ."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"get-macro-character"})," returns as its ",(0,c.jsx)(r.em,{children:"primary value"}),", ",(0,c.jsx)(r.em,{children:"function"}),", the ",(0,c.jsx)(r.em,{children:"reader macro function"})," associated with ",(0,c.jsx)(r.em,{children:"char"})," in ",(0,c.jsx)(r.em,{children:"readtable"})," (if any), or else ",(0,c.jsx)(r.strong,{children:"nil"})," if ",(0,c.jsx)(r.em,{children:"char"})," is not a ",(0,c.jsx)(r.em,{children:"macro character"})," in ",(0,c.jsx)(r.em,{children:"readtable"}),". The ",(0,c.jsx)(r.em,{children:"secondary value"}),", ",(0,c.jsx)(r.em,{children:"non-terminating-p"}),", is ",(0,c.jsx)(r.em,{children:"true"})," if ",(0,c.jsx)(r.em,{children:"char"})," is a ",(0,c.jsx)(r.em,{children:"non-terminating macro character"})," ; otherwise, it is ",(0,c.jsx)(r.em,{children:"false"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"set-macro-character"})," causes ",(0,c.jsx)(r.em,{children:"char"})," to be a ",(0,c.jsx)(r.em,{children:"macro character"})," associated with the ",(0,c.jsx)(r.em,{children:"reader macro function new-function"})," (or the ",(0,c.jsx)(r.em,{children:"designator"})," for ",(0,c.jsx)(r.em,{children:"new-function"}),") in ",(0,c.jsx)(r.em,{children:"readtable"}),". If ",(0,c.jsx)(r.em,{children:"non-terminating-p"})," is ",(0,c.jsx)(r.em,{children:"true"}),", ",(0,c.jsx)(r.em,{children:"char"})," becomes a ",(0,c.jsx)(r.em,{children:"non-terminating macro character"})," ; otherwise it becomes a ",(0,c.jsx)(r.em,{children:"terminating macro character"})," ."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:"\n(get-macro-character #\\\\&#123;) \u2192 NIL, *false* \n\t\t     (not (get-macro-character #\\;)) \u2192 false \n\t\t     The following is a possible definition for the *single-quote reader macro* in *standard syntax* : \n\t\t     (defun single-quote-reader (stream char) \n\t\t       (declare (ignore char)) \n\t\t       (list \u2019quote (read stream t nil t))) \u2192 SINGLE-QUOTE-READER \n\t\t     (set-macro-character #\\\u2019 #\u2019single-quote-reader) \u2192 T \n\t\t     Here single-quote-reader reads an *object* following the *single-quote* and returns a *list* of **quote** and that *object*. The *char* argument is ignored. \n\t\t     The following is a possible definition for the *semicolon reader macro* in *standard syntax* : \n\t\t     (defun semicolon-reader (stream char) \n\t\t       (declare (ignore char)) \n\t\t       ;; First swallow the rest of the current input line. \n\t\t       ;; End-of-file is acceptable for terminating the comment. \n\t\t       (do () ((char= (read-char stream nil #\\Newline t) #\\Newline))) \n\t\t       ;; Return zero values. \n\t\t       (values)) \u2192 SEMICOLON-READER \n\t\t     (set-macro-character #\\; #\u2019semicolon-reader) \u2192 T \n\n"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(r.p,{children:["The ",(0,c.jsx)(r.em,{children:"readtable"})," is modified."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"*readtable*"})})]})}function s(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}const i={title:"set-macro-character, get-macro-character"},o="set-macro-character, get-macro-character",d={id:"chap-23/cd-c-dictionary/set-macro-character_get-macro-character_function",title:"set-macro-character, get-macro-character",description:"Expanded Reference: set-macro-character, get-macro-character",source:"@site/docs/chap-23/cd-c-dictionary/set-macro-character_get-macro-character_function.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/set-macro-character_get-macro-character_function",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/set-macro-character_get-macro-character_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/set-macro-character_get-macro-character_function.md",tags:[],version:"current",frontMatter:{title:"set-macro-character, get-macro-character"},sidebar:"tutorialSidebar",previous:{title:"readtablep",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readtablep_function"},next:{title:"set-syntax-from-char",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/set-syntax-from-char_function"}},h={},l=[{value:"Expanded Reference: set-macro-character, get-macro-character",id:"expanded-reference-set-macro-character-get-macro-character",level:2}];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"set-macro-character-get-macro-character",children:"set-macro-character, get-macro-character"}),"\n","\n","\n",(0,c.jsx)(s,{}),"\n",(0,c.jsx)(r.h2,{id:"expanded-reference-set-macro-character-get-macro-character",children:"Expanded Reference: set-macro-character, get-macro-character"}),"\n",(0,c.jsx)(r.admonition,{type:"tip",children:(0,c.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:"(set-macro-character, get-macro-character )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var c=n(67294);const t={},a=c.createContext(t);function s(e){const r=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(a.Provider,{value:r},e.children)}}}]);