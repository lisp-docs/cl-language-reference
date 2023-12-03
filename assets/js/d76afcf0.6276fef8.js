"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72325],{306:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=r(85893),s=r(11151);function t(n){const e={del:"del",em:"em",p:"p",strong:"strong",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"muffle-warning"})," ",(0,i.jsx)(e.em,{children:"Restart"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Data Arguments Required:"})}),"\n",(0,i.jsx)(e.p,{children:"None."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["This ",(0,i.jsx)(e.em,{children:"restart"})," is established by ",(0,i.jsx)(e.strong,{children:"warn"})," so that ",(0,i.jsx)(e.em,{children:"handlers"})," of ",(0,i.jsx)(e.strong,{children:"warning"})," ",(0,i.jsx)(e.em,{children:"conditions"})," have a way to tell ",(0,i.jsx)(e.strong,{children:"warn"})," that a warning has already been dealt with and that no further action is warranted."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsxs)(e.p,{children:["(defvar *all-quiet* nil) ",(0,i.jsx)(e.em,{children:"\u2192"})," *ALL-QUIET*"]}),"\n",(0,i.jsxs)(e.p,{children:["(defvar *saved-warnings* \u2019()) ",(0,i.jsx)(e.em,{children:"\u2192"})," *SAVED-WARNINGS*"]}),"\n",(0,i.jsx)(e.p,{children:"(defun quiet-warning-handler (c)"}),"\n",(0,i.jsx)(e.p,{children:"(when *all-quiet*"}),"\n",(0,i.jsx)(e.p,{children:"(let ((r (find-restart \u2019muffle-warning c)))"}),"\n",(0,i.jsx)(e.p,{children:"(when r"}),"\n",(0,i.jsx)(e.p,{children:"(push c *saved-warnings*)"}),"\n",(0,i.jsx)(e.p,{children:"(invoke-restart r)))))"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u2192"})," CUSTOM-WARNING-HANDLER"]}),"\n",(0,i.jsx)(e.p,{children:"(defmacro with-quiet-warnings (&body forms)"}),"\n",(0,i.jsx)(e.p,{children:"\u2018(let ((*all-quiet* t)"}),"\n",(0,i.jsx)(e.p,{children:"(*saved-warnings* \u2019()))"}),"\n",(0,i.jsx)(e.p,{children:"(handler-bind ((warning #\u2019quiet-warning-handler))"}),"\n",(0,i.jsx)(e.p,{children:",@forms"}),"\n",(0,i.jsx)(e.p,{children:"*saved-warnings*)))"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u2192"})," WITH-QUIET-WARNINGS"]}),"\n",(0,i.jsx)(e.p,{children:"(setq saved"}),"\n",(0,i.jsx)(e.p,{children:"(with-quiet-warnings"}),"\n",(0,i.jsx)(e.p,{children:'(warn "Situation #1.")'}),"\n",(0,i.jsx)(e.p,{children:"(let ((*all-quiet* nil))"}),"\n",(0,i.jsx)(e.p,{children:'(warn "Situation #2."))'}),"\n",(0,i.jsx)(e.p,{children:'(warn "Situation #3.")))'}),"\n",(0,i.jsx)(e.p,{children:"\u25b7 Warning: Situation #2."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u2192"})," (#<SIMPLE-WARNING 42744421> #<SIMPLE-WARNING 42744365>)"]}),"\n",(0,i.jsxs)(e.p,{children:['(dolist (s saved) (format t "~&',(0,i.jsx)(e.del,{children:"A"}),'%" s))']}),"\n",(0,i.jsx)(e.p,{children:"\u25b7 Situation #3."}),"\n",(0,i.jsx)(e.p,{children:"\u25b7 Situation #1."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"\u2192"})," NIL"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(e.p,{children:["Section 9.1.4.2 (Restarts), Section 9.1.4.2.2 (Interfaces to Restarts), ",(0,i.jsx)(e.strong,{children:"invoke-restart"}),", ",(0,i.jsx)(e.strong,{children:"muffle-warning"})," (",(0,i.jsx)(e.em,{children:"function"}),"), ",(0,i.jsx)(e.strong,{children:"warn"})]})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}const c={},l="muffle-warning",d={id:"chap-9/j-c-dictionary/mufflewarning",title:"muffle-warning",description:"Expanded Reference: muffle-warning",source:"@site/docs/chap-9/j-c-dictionary/mufflewarning.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/mufflewarning",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/mufflewarning",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/mufflewarning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"method-combination-error",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/methodcombinationerror"},next:{title:"parse-error",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/parseerror"}},o={},h=[{value:"Expanded Reference: muffle-warning",id:"expanded-reference-muffle-warning",level:2}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"muffle-warning",children:"muffle-warning"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-muffle-warning",children:"Expanded Reference: muffle-warning"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(muffle-warning )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>a});var i=r(67294);const s={},t=i.createContext(s);function a(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);