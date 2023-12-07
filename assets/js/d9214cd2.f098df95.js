"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62974],{64892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var a=r(85893),i=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter, defvar"})," ",(0,a.jsx)(n.em,{children:"Macro"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter"})," ",(0,a.jsx)(n.em,{children:"name initial-value"})," [",(0,a.jsx)(n.em,{children:"documentation"}),"] \u2192 name"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defvar"})," ",(0,a.jsx)(n.em,{children:"name"})," [",(0,a.jsx)(n.em,{children:"initial-value"})," [",(0,a.jsx)(n.em,{children:"documentation"}),"]] \u2192 name"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"name"}),"\u2014a ",(0,a.jsx)(n.em,{children:"symbol"}),"; not evaluated."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"initial-value"}),"\u2014a ",(0,a.jsx)(n.em,{children:"form"}),"; for ",(0,a.jsx)(n.strong,{children:"defparameter"}),", it is always ",(0,a.jsx)(n.em,{children:"evaluated"}),", but for ",(0,a.jsx)(n.strong,{children:"defvar"})," it is ",(0,a.jsx)(n.em,{children:"evaluated"})," only if ",(0,a.jsx)(n.em,{children:"name"})," is not already ",(0,a.jsx)(n.em,{children:"bound"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"documentation"}),"\u2014a ",(0,a.jsx)(n.em,{children:"string"}),"; not evaluated."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter"})," and ",(0,a.jsx)(n.strong,{children:"defvar"})," ",(0,a.jsx)(n.em,{children:"establish name"})," as a ",(0,a.jsx)(n.em,{children:"dynamic variable"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter"})," unconditionally ",(0,a.jsx)(n.em,{children:"assigns"})," the ",(0,a.jsx)(n.em,{children:"initial-value"})," to the ",(0,a.jsx)(n.em,{children:"dynamic variable"})," named ",(0,a.jsx)(n.em,{children:"name"}),". ",(0,a.jsx)(n.strong,{children:"defvar"}),", by contrast, ",(0,a.jsx)(n.em,{children:"assigns initial-value"})," (if supplied) to the ",(0,a.jsx)(n.em,{children:"dynamic variable"})," named ",(0,a.jsx)(n.em,{children:"name"})," only if ",(0,a.jsx)(n.em,{children:"name"})," is not already ",(0,a.jsx)(n.em,{children:"bound"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If no ",(0,a.jsx)(n.em,{children:"initial-value"})," is supplied, ",(0,a.jsx)(n.strong,{children:"defvar"})," leaves the ",(0,a.jsx)(n.em,{children:"value cell"})," of the ",(0,a.jsx)(n.em,{children:"dynamic variable"})," named ",(0,a.jsx)(n.em,{children:"name"})," undisturbed; if ",(0,a.jsx)(n.em,{children:"name"})," was previously ",(0,a.jsx)(n.em,{children:"bound"}),", its old ",(0,a.jsx)(n.em,{children:"value"})," persists, and if it was previously ",(0,a.jsx)(n.em,{children:"unbound"}),", it remains ",(0,a.jsx)(n.em,{children:"unbound"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"documentation"})," is supplied, it is attached to ",(0,a.jsx)(n.em,{children:"name"})," as a ",(0,a.jsx)(n.em,{children:"documentation string"})," of kind ",(0,a.jsx)(n.strong,{children:"variable"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter"})," and ",(0,a.jsx)(n.strong,{children:"defvar"})," normally appear as a ",(0,a.jsx)(n.em,{children:"top level form"}),", but it is meaningful for them to appear as ",(0,a.jsx)(n.em,{children:"non-top-level forms"}),". However, the compile-time side effects described below only take place when they appear as ",(0,a.jsx)(n.em,{children:"top level forms"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"defparameter, defvar"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"\n(defparameter \\*p\\* 1) \u2192 \\*P\\* \n\\*p\\* \u2192 1 \n(constantp \u2019\\*p\\*) \u2192 false \n(setq \\*p\\* 2) \u2192 2 \n(defparameter \\*p\\* 3) \u2192 \\*P\\* \n\\*p\\* \u2192 3 \n(defvar \\*v\\* 1) \u2192 \\*V\\* \n\\*v\\* \u2192 1 \n(constantp \u2019\\*v\\*) \u2192 false \n(setq \\*v\\* 2) \u2192 2 \n(defvar \\*v\\* 3) \u2192 \\*V\\* \n\\*v\\* \u2192 2 \n(defun foo () \n  (let ((\\*p\\* \u2019p) (\\*v\\* \u2019v)) \n    (bar))) \u2192 FOO \n(defun bar () (list \\*p\\* \\*v\\*)) \u2192 BAR \n(foo) \u2192 (P V) \nThe principal operational distinction between **defparameter** and **defvar** is that **defparameter** makes an unconditional assignment to *name*, while **defvar** makes a conditional one. In practice, this means that **defparameter** is useful in situations where loading or reloading the definition would want to pick up a new value of the variable, while **defvar** is used in situations where the old value would want to be retained if the file were loaded or reloaded. For example, one might create a file which contained: \n(defvar \\*the-interesting-numbers\\* \u2019()) \n(defmacro define-interesting-number (name n) \n  \u2018(progn (defvar ,name ,n) \n\t  (pushnew ,name \\*the-interesting-numbers\\*) \n\t  \u2019,name)) \n(define-interesting-number \\*my-height\\* 168) ;cm \n(define-interesting-number \\*my-weight\\* 13) ;stones \nHere the initial value, (), for the variable \\*the-interesting-numbers\\* is just a seed that we are never likely to want to reset to something else once something has been grown from it. As such, we have used **defvar** to avoid having the \\*interesting-numbers\\* information reset if the file is loaded a second time. It is true that the two calls to **define-interesting-number** here would be reprocessed, but if there were additional calls in another file, they would not be and that information would be lost. On the other hand, consider the following code: \n(defparameter \\*default-beep-count\\* 3) \n(defun beep (&amp;optional (n \\*default-beep-count\\*)) \n\t     (dotimes (i n) (si:%beep 1000. 100000.) (sleep 0.1))) \n  Data and Control \n\n\n  **defparameter, defvar** \n  Here we could easily imagine editing the code to change the initial value of \\*default-beep-count\\*, and then reloading the file to pick up the new value. In order to make value updating easy, we have used **defparameter**. \n  On the other hand, there is potential value to using **defvar** in this situation. For example, suppose that someone had predefined an alternate value for \\*default-beep-count\\*, or had loaded the file and then manually changed the value. In both cases, if we had used **defvar** instead of **defparameter**, those user preferences would not be overridden by (re)loading the file. \n  The choice of whether to use **defparameter** or **defvar** has visible consequences to programs, but is nevertheless often made for subjective reasons. \n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,a.jsxs)(n.p,{children:["If a ",(0,a.jsx)(n.strong,{children:"defvar"})," or ",(0,a.jsx)(n.strong,{children:"defparameter"})," ",(0,a.jsx)(n.em,{children:"form"})," appears as a ",(0,a.jsx)(n.em,{children:"top level form"}),", the ",(0,a.jsx)(n.em,{children:"compiler"})," must recognize that the ",(0,a.jsx)(n.em,{children:"name"})," has been proclaimed ",(0,a.jsx)(n.strong,{children:"special"}),". However, it must neither ",(0,a.jsx)(n.em,{children:"evaluate"})," the ",(0,a.jsx)(n.em,{children:"initial-value form"})," nor ",(0,a.jsx)(n.em,{children:"assign"})," the ",(0,a.jsx)(n.em,{children:"dynamic variable"})," named ",(0,a.jsx)(n.em,{children:"name"})," at compile time."]}),"\n",(0,a.jsxs)(n.p,{children:["There may be additional (",(0,a.jsx)(n.em,{children:"implementation-defined"}),") compile-time or run-time side effects, as long as such effects do not interfere with the correct operation of ",(0,a.jsx)(n.em,{children:"conforming programs"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defvar"})," is affected by whether ",(0,a.jsx)(n.em,{children:"name"})," is already ",(0,a.jsx)(n.em,{children:"bound"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"declaim"}),", ",(0,a.jsx)(n.strong,{children:"defconstant"}),", ",(0,a.jsx)(n.strong,{children:"documentation"}),", Section 3.2 (Compilation)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["It is customary to name ",(0,a.jsx)(n.em,{children:"dynamic variables"})," with an ",(0,a.jsx)(n.em,{children:"asterisk"})," at the beginning and end of the name. e.g., *foo* is a good name for a ",(0,a.jsx)(n.em,{children:"dynamic variable"}),", but not for a ",(0,a.jsx)(n.em,{children:"lexical variable"}),"; foo is a good name for a ",(0,a.jsx)(n.em,{children:"lexical variable"}),", but not for a ",(0,a.jsx)(n.em,{children:"dynamic variable"}),". This naming convention is observed for all ",(0,a.jsx)(n.em,{children:"defined names"})," in Common Lisp; however, neither ",(0,a.jsx)(n.em,{children:"conforming programs"})," nor ",(0,a.jsx)(n.em,{children:"conforming implementations"})," are obliged to adhere to this convention."]}),"\n",(0,a.jsxs)(n.p,{children:["The intent of the permission for additional side effects is to allow ",(0,a.jsx)(n.em,{children:"implementations"})," to do normal \u201cbookkeeping\u201d that accompanies definitions. For example, the ",(0,a.jsx)(n.em,{children:"macro expansion"})," of a ",(0,a.jsx)(n.strong,{children:"defvar"})," or ",(0,a.jsx)(n.strong,{children:"defparameter"})," ",(0,a.jsx)(n.em,{children:"form"})," might include code that arranges to record the name of the source file in which the definition occurs."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"defparameter"})," and ",(0,a.jsx)(n.strong,{children:"defvar"})," might be defined as follows:"]}),"\n",(0,a.jsx)(n.p,{children:"(defmacro defparameter (name initial-value"}),"\n",(0,a.jsx)(n.p,{children:"&optional (documentation nil documentation-p))"}),"\n",(0,a.jsx)(n.p,{children:"\u2018(progn (declaim (special ,name))"}),"\n",(0,a.jsx)(n.p,{children:"(setf (symbol-value \u2019,name) ,initial-value)"}),"\n",(0,a.jsx)(n.p,{children:",(when documentation-p"}),"\n",(0,a.jsx)(n.p,{children:"\u2018(setf (documentation \u2019,name \u2019variable) \u2019,documentation))"}),"\n",(0,a.jsx)(n.p,{children:"\u2019,name))"}),"\n",(0,a.jsx)(n.p,{children:"(defmacro defvar (name &optional"}),"\n",(0,a.jsx)(n.p,{children:"(initial-value nil initial-value-p)"}),"\n",(0,a.jsx)(n.p,{children:"(documentation nil documentation-p))"}),"\n",(0,a.jsx)(n.p,{children:"\u2018(progn (declaim (special ,name))"}),"\n",(0,a.jsx)(n.p,{children:",(when initial-value-p"}),"\n",(0,a.jsx)(n.p,{children:"\u2018(unless (boundp \u2019,name)"}),"\n",(0,a.jsx)(n.p,{children:"(setf (symbol-value \u2019,name) ,initial-value)))"}),"\n",(0,a.jsx)(n.p,{children:",(when documentation-p"}),"\n",(0,a.jsx)(n.p,{children:"\u2018(setf (documentation \u2019,name \u2019variable) \u2019,documentation))"}),"\n",(0,a.jsx)(n.p,{children:"\u2019,name))"})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}const d={},o="defparameter, defvar",l={id:"chap-5/f-d-dictionary/defparameter",title:"defparameter, defvar",description:"Expanded Reference: defparameter, defvar",source:"@site/docs/chap-5/f-d-dictionary/defparameter.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/defparameter",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defparameter",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/defparameter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"define-setf-expander",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/definesetfexpander"},next:{title:"defsetf",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defsetf"}},c={},h=[{value:"Expanded Reference: defparameter, defvar",id:"expanded-reference-defparameter-defvar",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"defparameter-defvar",children:"defparameter, defvar"}),"\n","\n","\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-defparameter-defvar",children:"Expanded Reference: defparameter, defvar"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(defparameter, defvar )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var a=r(67294);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);