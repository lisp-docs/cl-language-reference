"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[13805],{82106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(85893),r=n(11151);function i(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"define-setf-expander"})," ",(0,s.jsx)(t.em,{children:"Macro"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"define-setf-expander"})," ",(0,s.jsx)(t.em,{children:"access-fn lambda-list"})]}),"\n",(0,s.jsxs)(t.p,{children:["[[ ",(0,s.jsx)(t.em,{children:"{declaration}"}),"* ",(0,s.jsx)(t.em,{children:"| documentation"})," ]] ",(0,s.jsx)(t.em,{children:"{form}"}),"*"]}),"\n",(0,s.jsx)(t.p,{children:"\u2192  access-fn"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"access-fn"}),"\u2014a ",(0,s.jsx)(t.em,{children:"symbol"})," that ",(0,s.jsx)(t.em,{children:"names"})," a ",(0,s.jsx)(t.em,{children:"function"})," or ",(0,s.jsx)(t.em,{children:"macro"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"lambda-list"})," \u2013 ",(0,s.jsx)(t.em,{children:"macro lambda list"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"declaration"}),"\u2014a ",(0,s.jsx)(t.strong,{children:"declare"})," ",(0,s.jsx)(t.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"documentation"}),"\u2014a ",(0,s.jsx)(t.em,{children:"string"}),"; not evaluated."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"forms"}),"\u2014an ",(0,s.jsx)(t.em,{children:"implicit progn"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"define-setf-expander"})," specifies the means by which ",(0,s.jsx)(t.strong,{children:"setf"})," updates a ",(0,s.jsx)(t.em,{children:"place"})," that is referenced by ",(0,s.jsx)(t.em,{children:"access-fn"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.strong,{children:"setf"})," is given a ",(0,s.jsx)(t.em,{children:"place"})," that is specified in terms of ",(0,s.jsx)(t.em,{children:"access-fn"})," and a new value for the ",(0,s.jsx)(t.em,{children:"place"}),", it is expanded into a form that performs the appropriate update."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"lambda-list"})," supports destructuring. See Section 3.4.4 (Macro Lambda Lists)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Documentation"})," is attached to ",(0,s.jsx)(t.em,{children:"access-fn"})," as a ",(0,s.jsx)(t.em,{children:"documentation string"})," of kind ",(0,s.jsx)(t.strong,{children:"setf"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"define-setf-expander"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Forms"})," constitute the body of the ",(0,s.jsx)(t.em,{children:"setf expander"})," definition and must compute the ",(0,s.jsx)(t.em,{children:"setf expansion"})," for a call on ",(0,s.jsx)(t.strong,{children:"setf"})," that references the ",(0,s.jsx)(t.em,{children:"place"})," by means of the given ",(0,s.jsx)(t.em,{children:"access-fn"}),". The ",(0,s.jsx)(t.em,{children:"setf expander"})," function is defined in the same ",(0,s.jsx)(t.em,{children:"lexical environment"})," in which the ",(0,s.jsx)(t.strong,{children:"define-setf-expander"})," ",(0,s.jsx)(t.em,{children:"form"})," appears. While ",(0,s.jsx)(t.em,{children:"forms"})," are being executed, the variables in ",(0,s.jsx)(t.em,{children:"lambda-list"})," are bound to parts of the ",(0,s.jsx)(t.em,{children:"place form"}),". The"]}),"\n",(0,s.jsxs)(t.p,{children:["body ",(0,s.jsx)(t.em,{children:"forms"})," (but not the ",(0,s.jsx)(t.em,{children:"lambda-list"}),") in a ",(0,s.jsx)(t.strong,{children:"define-setf-expander"})," ",(0,s.jsx)(t.em,{children:"form"})," are implicitly enclosed in a ",(0,s.jsx)(t.em,{children:"block"})," whose name is ",(0,s.jsx)(t.em,{children:"access-fn"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The evaluation of ",(0,s.jsx)(t.em,{children:"forms"})," must result in the five values described in Section 5.1.1.2 (Setf Expansions)."]}),"\n",(0,s.jsxs)(t.p,{children:["If a ",(0,s.jsx)(t.strong,{children:"define-setf-expander"})," ",(0,s.jsx)(t.em,{children:"form"})," appears as a ",(0,s.jsx)(t.em,{children:"top level form"}),", the ",(0,s.jsx)(t.em,{children:"compiler"})," must make the ",(0,s.jsx)(t.em,{children:"setf expander"})," available so that it may be used to expand calls to ",(0,s.jsx)(t.strong,{children:"setf"})," later on in the ",(0,s.jsx)(t.em,{children:"file"}),". ",(0,s.jsx)(t.em,{children:"Programmers"})," must ensure that the ",(0,s.jsx)(t.em,{children:"forms"})," can be evaluated at compile time if the ",(0,s.jsx)(t.em,{children:"access-fn"})," is used in a ",(0,s.jsx)(t.em,{children:"place"})," later in the same ",(0,s.jsx)(t.em,{children:"file"}),". The ",(0,s.jsx)(t.em,{children:"compiler"})," must make these ",(0,s.jsx)(t.em,{children:"setf expanders"})," available to compile-time calls to ",(0,s.jsx)(t.strong,{children:"get-setf-expansion"})," when its ",(0,s.jsx)(t.em,{children:"environment"})," argument is a value received as the ",(0,s.jsx)(t.em,{children:"environment parameter"})," of a ",(0,s.jsx)(t.em,{children:"macro"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lisp",children:'\n(defun lastguy (x) (car (last x))) \u2192 LASTGUY \n(define-setf-expander lastguy (x &amp;environment env) \n\t\t\t       "Set the last element in a list to the given value." \n\t\t\t       (multiple-value-bind (dummies vals newval setter getter) \n\t\t\t\t   (get-setf-expansion x env) \n\t\t\t\t (let ((store (gensym))) \n\t\t\t\t   (values dummies \n\t\t\t\t\t   vals \n\t\t\t\t\t   \u2018(,store) \n\t\t\t\t\t   \u2018(progn (rplaca (last ,getter) ,store) ,store) \n\t\t\t\t\t   \u2018(lastguy ,getter))))) \u2192 LASTGUY \n\t\t\t\t\t    (setq a (list \u2019a \u2019b \u2019c \u2019d) \n\t\t\t\t\t\t  b (list \u2019x) \n\t\t\t\t\t\t  c (list 1 2 3 (list 4 5 6))) \u2192 (1 2 3 (4 5 6)) \n\t\t\t\t\t    (setf (lastguy a) 3) \u2192 3 \n\t\t\t\t\t    (setf (lastguy b) 7) \u2192 7 \n\t\t\t\t\t    (setf (lastguy (lastguy c)) \u2019lastguy-symbol) \u2192 LASTGUY-SYMBOL \n\t\t\t\t\t    a \u2192 (A B C 3) \n\t\t\t\t\t    b \u2192 (7) \n\t\t\t\t\t    c \u2192 (1 2 3 (4 5 LASTGUY-SYMBOL)) \n;;; Setf expander for the form (LDB bytespec int). \n;;; Recall that the int form must itself be suitable for SETF. \n\t\t\t\t\t    (define-setf-expander ldb (bytespec int &amp;environment env) \n\t\t\t\t\t\t\t\t       (multiple-value-bind (temps vals stores \n\t\t\t\t\t\t\t\t\t\t\t\t   store-form access-form) \n\t\t\t\t\t\t\t\t\t   (get-setf-expansion int env);Get setf expansion for int. \n\t\t\t\t\t\t\t\t\t Data and Control \n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t (let ((btemp (gensym)) ;Temp var for byte specifier. \n\t\t\t\t\t\t\t\t\t       (store (gensym)) ;Temp var for byte to store. \n\t\t\t\t\t\t\t\t\t       (stemp (first stores))) ;Temp var for int to store. \n\t\t\t\t\t\t\t\t\t   (if (cdr stores) (error "Can\u2019t expand this.")) \n;;; Return the setf expansion for LDB as five values. \n\t\t\t\t\t\t\t\t\t   (values (cons btemp temps) ;Temporary variables. \n\t\t\t\t\t\t\t\t\t\t   (cons bytespec vals) ;Value forms. \n\t\t\t\t\t\t\t\t\t\t   (list store) ;Store variables. \n\t\t\t\t\t\t\t\t\t\t   \u2018(let ((,stemp (dpb ,store ,btemp ,access-form))) \n\t\t\t\t\t\t\t\t\t\t      ,store-form \n\t\t\t\t\t\t\t\t\t\t      ,store) ;Storing form. \n\t\t\t\t\t\t\t\t\t\t   \u2018(ldb ,btemp ,access-form) ;Accessing form. \n\t\t\t\t\t\t\t\t\t\t   )))) \n\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"setf"}),", ",(0,s.jsx)(t.strong,{children:"defsetf"}),", ",(0,s.jsx)(t.strong,{children:"documentation"}),", ",(0,s.jsx)(t.strong,{children:"get-setf-expansion"}),", Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"define-setf-expander"})," di\u21b5ers from the long form of ",(0,s.jsx)(t.strong,{children:"defsetf"})," in that while the body is being executed the ",(0,s.jsx)(t.em,{children:"variables"})," in ",(0,s.jsx)(t.em,{children:"lambda-list"})," are bound to parts of the ",(0,s.jsx)(t.em,{children:"place form"}),", not to temporary variables that will be bound to the values of such parts. In addition, ",(0,s.jsx)(t.strong,{children:"define-setf-expander"})," does not have ",(0,s.jsx)(t.strong,{children:"defsetf"}),"\u2019s"]}),"\n",(0,s.jsxs)(t.p,{children:["restriction that ",(0,s.jsx)(t.em,{children:"access-fn"})," must be a ",(0,s.jsx)(t.em,{children:"function"})," or a function-like ",(0,s.jsx)(t.em,{children:"macro"}),"; an arbitrary ",(0,s.jsx)(t.strong,{children:"defmacro"})," destructuring pattern is permitted in ",(0,s.jsx)(t.em,{children:"lambda-list"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},c="define-setf-expander",l={id:"chap-5/f-d-dictionary/definesetfexpander",title:"define-setf-expander",description:"Expanded Reference: define-setf-expander",source:"@site/docs/chap-5/f-d-dictionary/definesetfexpander.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/definesetfexpander",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/definesetfexpander",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/definesetfexpander.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"define-modify-macro",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/definemodifymacro"},next:{title:"defparameter, defvar",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defparameter"}},o={},h=[{value:"Expanded Reference: define-setf-expander",id:"expanded-reference-define-setf-expander",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"define-setf-expander",children:"define-setf-expander"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(t.h2,{id:"expanded-reference-define-setf-expander",children:"Expanded Reference: define-setf-expander"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lisp",children:"(define-setf-expander )\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);