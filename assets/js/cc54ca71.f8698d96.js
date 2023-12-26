"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[84154],{96441:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=n(85893),t=n(11151);function l(e){const i={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:l}=i;return n||s("DictionaryLink",!0),l||s("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"load-time-value"})," ",(0,r.jsx)(l,{styled:!0,term:"special operator",children:(0,r.jsx)("i",{children:"Special Operator"})})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," &optional ",(0,r.jsx)(i.em,{children:"read-only-p \u2192 object"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"\u2014a ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"; evaluated as described below."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"read-only-p"}),"\u2014a ",(0,r.jsx)(l,{term:"boolean",children:(0,r.jsx)("i",{children:"boolean"})}),"; not evaluated."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(l,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"\u2014the ",(0,r.jsx)(l,{styled:!0,term:"primary value",children:(0,r.jsx)("i",{children:"primary value"})})," resulting from evaluating ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," provides a mechanism for delaying evaluation of ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," until the expression is in the run-time environment; see Section 3.2 (Compilation)."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"Read-only-p"})," designates whether the result can be considered a ",(0,r.jsx)(l,{styled:!0,term:"constant object",children:(0,r.jsx)("i",{children:"constant object"})}),". If ",(0,r.jsx)(n,{term:"t",children:(0,r.jsx)("b",{children:"t"})}),", the result is a read-only quantity that can, if appropriate to the ",(0,r.jsx)(l,{term:"implementation",children:(0,r.jsx)("i",{children:"implementation"})}),", be copied into read-only space and/or ",(0,r.jsx)(i.em,{children:"coalesced"})," with ",(0,r.jsx)(i.em,{children:"similar constant objects"})," from other ",(0,r.jsx)(l,{term:"program",children:(0,r.jsx)("i",{children:"programs"})}),". If ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})})," (the default), the result must be neither copied nor coalesced; it must be considered to be potentially modifiable data."]}),"\n",(0,r.jsxs)(i.p,{children:["If a ",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," expression is processed by ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})}),", the compiler performs its normal semantic processing (such as macro expansion and translation into machine code) on ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),", but arranges for the execution of ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," to occur at load time in a ",(0,r.jsx)(l,{styled:!0,term:"null lexical environment",children:(0,r.jsx)("i",{children:"null lexical environment"})}),", with the result of this ",(0,r.jsx)(l,{term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})})," then being treated as a ",(0,r.jsx)(i.em,{children:"literal object"})," at run time. It is guaranteed that"]}),"\n",(0,r.jsxs)(i.p,{children:["the evaluation of ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," will take place only once when the ",(0,r.jsx)(l,{term:"file",children:(0,r.jsx)("i",{children:"file"})})," is ",(0,r.jsx)(i.em,{children:"loaded"}),", but the order of evaluation with respect to the evaluation of ",(0,r.jsx)(l,{styled:!0,term:"top level form",children:(0,r.jsx)("i",{children:"top level forms"})})," in the file is ",(0,r.jsx)(l,{term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["If a ",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," expression appears within a function compiled with ",(0,r.jsx)(n,{term:"compile",children:(0,r.jsx)("b",{children:"compile"})}),", the ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," is evaluated at compile time in a ",(0,r.jsx)(l,{styled:!0,term:"null lexical environment",children:(0,r.jsx)("i",{children:"null lexical environment"})}),". The result of this compile-time evaluation is treated as a ",(0,r.jsx)(i.em,{children:"literal object"})," in the compiled code."]}),"\n",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})}),"\n",(0,r.jsxs)(i.p,{children:["If a ",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," expression is processed by ",(0,r.jsx)(n,{term:"eval",children:(0,r.jsx)("b",{children:"eval"})}),", ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," is evaluated in a ",(0,r.jsx)(l,{styled:!0,term:"null lexical environment",children:(0,r.jsx)("i",{children:"null lexical environment"})}),", and one value is returned. Implementations that implicitly compile (or partially compile) expressions processed by ",(0,r.jsx)(n,{term:"eval",children:(0,r.jsx)("b",{children:"eval"})})," might evaluate ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," only once, at the time this compilation is performed."]}),"\n",(0,r.jsxs)(i.p,{children:["If the ",(0,r.jsx)(i.em,{children:"same list"})," (load-time-value ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),") is evaluated or compiled more than once, it is ",(0,r.jsx)(l,{term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})})," whether ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," is evaluated only once or is evaluated more than once. This can happen both when an expression being evaluated or compiled shares substructure, and when the ",(0,r.jsx)(i.em,{children:"same form"})," is processed by ",(0,r.jsx)(n,{term:"eval",children:(0,r.jsx)("b",{children:"eval"})})," or ",(0,r.jsx)(n,{term:"compile",children:(0,r.jsx)("b",{children:"compile"})})," multiple times. Since a ",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," expression can be referenced in more than one place and can be evaluated multiple times by ",(0,r.jsx)(n,{term:"eval",children:(0,r.jsx)("b",{children:"eval"})}),", it is ",(0,r.jsx)(l,{term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})})," whether each execution returns a fresh ",(0,r.jsx)(l,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," or returns the same ",(0,r.jsx)(l,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," as some other execution. Users must use caution when destructively modifying the resulting ",(0,r.jsx)(l,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["If two lists (load-time-value ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),") that are the ",(0,r.jsx)(l,{term:"same",children:(0,r.jsx)("i",{children:"same"})})," under ",(0,r.jsx)(n,{term:"equal",children:(0,r.jsx)("b",{children:"equal"})})," but are not ",(0,r.jsx)(l,{term:"identical",children:(0,r.jsx)("i",{children:"identical"})})," are evaluated or compiled, their values always come from distinct evaluations of ",(0,r.jsx)(l,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),". Their ",(0,r.jsx)(l,{term:"value",children:(0,r.jsx)("i",{children:"values"})})," may not be coalesced unless ",(0,r.jsx)(i.em,{children:"read-only-p"})," is ",(0,r.jsx)(n,{term:"t",children:(0,r.jsx)("b",{children:"t"})}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-lisp",children:";;; The function INCR1 always returns the same value, even in different images. ;;; The function INCR2 always returns the same value in a given image, \n;;; but the value it returns might vary from image to image. \n(defun incr1 (x) (+ x #.(random 17))) \n(defun incr2 (x) (+ x (load-time-value (random 17)))) \n;;; The function FOO1-REF references the nth element of the first of \n;;; the \\*FOO-ARRAYS\\* that is available at load time. It is permissible for \n;;; that array to be modified (e.g., by SET-FOO1-REF); FOO1-REF will see the \n;;; updated values. \n(defvar \\*foo-arrays\\* (list (make-array 7) (make-array 8))) \n(defun foo1-ref (n) (aref (load-time-value (first \\*my-arrays\\*) nil) n)) \n(defun set-foo1-ref (n val) \n  (setf (aref (load-time-value (first \\*my-arrays\\*) nil) n) val)) \n;;; The function BAR1-REF references the nth element of the first of \n;;; the \\*BAR-ARRAYS\\* that is available at load time. The programmer has \n;;; promised that the array will be treated as read-only, so the system \n;;; can copy or coalesce the array. \n(defvar \\*bar-arrays\\* (list (make-array 7) (make-array 8))) \n(defun bar1-ref (n) (aref (load-time-value (first \\*my-arrays\\*) t) n)) \n;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced \n;;; even though NIL was specified, because the object was already read-only \n;;; when it was written as a literal vector rather than created by a constructor. ;;; User programs must treat the vector v as read-only. \n(defun baz-ref (n)  \n  (let ((v (load-time-value #(A B C) nil))) \n    (values (svref v n) v))) \n;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced \n;;; even though NIL was specified in the outer situation because T was specified ;;; in the inner situation. User programs must treat the vector v as read-only. (defun baz-ref (n) \n(let ((v (load-time-value (load-time-value (vector 1 2 3) t) nil))) \n  (values (svref v n) v))) \n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})}),", ",(0,r.jsx)(n,{term:"compile",children:(0,r.jsx)("b",{children:"compile"})}),", ",(0,r.jsx)(n,{term:"eval",children:(0,r.jsx)("b",{children:"eval"})}),", Section 3.2.2.2 (Minimal Compilation), Section 3.2 (Compilation)"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," must appear outside of quoted structure in a \u201cfor ",(0,r.jsx)(l,{term:"evaluation",children:(0,r.jsx)("i",{children:"evaluation"})}),"\u201d position. In situations which would appear to call for use of ",(0,r.jsx)(n,{term:"load-time-value",children:(0,r.jsx)("b",{children:"load-time-value"})})," within a quoted structure, the ",(0,r.jsx)(i.em,{children:"backquote reader macro"})," is probably called for; see Section 2.4.6 (Backquote)."]}),"\n",(0,r.jsxs)(i.p,{children:["Specifying ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})})," for ",(0,r.jsx)(i.em,{children:"read-only-p"})," is not a way to force an object to become modifiable if it has already been made read-only. It is only a way to say that, for an object that is modifiable, this operation is not intended to make that object read-only."]})]})}function a(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function s(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"load-time-value"},c="load-time-value",d={id:"chap-3/d-i-dictionary/load-time-value_special-operator",title:"load-time-value",description:"Expanded Reference: load-time-value",source:"@site/docs/chap-3/d-i-dictionary/load-time-value_special-operator.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/load-time-value_special-operator",permalink:"/cl-language-reference/chap-3/d-i-dictionary/load-time-value_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/load-time-value_special-operator.md",tags:[],version:"current",frontMatter:{title:"load-time-value"},sidebar:"tutorialSidebar",previous:{title:"lambda",permalink:"/cl-language-reference/chap-3/d-i-dictionary/lambda_symbol"},next:{title:"locally",permalink:"/cl-language-reference/chap-3/d-i-dictionary/locally_special-operator"}},m={},h=[{value:"Expanded Reference: load-time-value",id:"expanded-reference-load-time-value",level:2}];function x(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"load-time-value",children:"load-time-value"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(i.h2,{id:"expanded-reference-load-time-value",children:"Expanded Reference: load-time-value"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-lisp",children:"(load-time-value )\n"})})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>a});var r=n(67294);const t={},l=r.createContext(t);function a(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);