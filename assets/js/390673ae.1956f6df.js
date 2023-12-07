"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[30118],{23425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=t(85893),s=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"the"})," ",(0,r.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"the"})," ",(0,r.jsx)(n.em,{children:"value-type form ! {result}"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"value-type"}),"\u2014a ",(0,r.jsx)(n.em,{children:"type specifier"})," ; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," resulting from the ",(0,r.jsx)(n.em,{children:"evaluation"})," of ",(0,r.jsx)(n.em,{children:"form"}),". These ",(0,r.jsx)(n.em,{children:"values"})," must conform to the ",(0,r.jsx)(n.em,{children:"type"})," supplied by ",(0,r.jsx)(n.em,{children:"value-type"}),"; see below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"the"})," specifies that the ",(0,r.jsx)("i",{children:"values"}),(0,r.jsxs)("sub",{children:["1",(0,r.jsx)("i",{children:"a"})]})," returned by ",(0,r.jsx)("i",{children:"form"})," are of the ",(0,r.jsx)("i",{children:"types"})," specified by ",(0,r.jsx)("i",{children:"value-type"}),". The consequences are undefined if any ",(0,r.jsx)("i",{children:"result"})," is not of the declared type."]}),"\n",(0,r.jsxs)(n.p,{children:["It is permissible for ",(0,r.jsx)(n.em,{children:"form"})," to ",(0,r.jsx)(n.em,{children:"yield"})," a di\u21b5erent number of ",(0,r.jsx)(n.em,{children:"values"})," than are specified by ",(0,r.jsx)(n.em,{children:"value-type"}),", provided that the values for which ",(0,r.jsx)(n.em,{children:"types"})," are declared are indeed of those ",(0,r.jsx)(n.em,{children:"types"}),". Missing values are treated as ",(0,r.jsx)(n.strong,{children:"nil"})," for the purposes of checking their ",(0,r.jsx)(n.em,{children:"types"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Regardless of number of ",(0,r.jsx)(n.em,{children:"values"})," declared by ",(0,r.jsx)(n.em,{children:"value-type"}),", the number of ",(0,r.jsx)(n.em,{children:"values"})," returned by the ",(0,r.jsx)(n.strong,{children:"the"})," ",(0,r.jsx)(n.em,{children:"special form"})," is the same as the number of ",(0,r.jsx)(n.em,{children:"values"})," returned by ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:" \n\n(the symbol (car (list (gensym)))) \u2192 #:G9876 \n\n(the fixnum (+ 5 7)) \u2192 12 \n\n(the (values) (truncate 3.2 2)) \u2192 1, 1.2 \n\n(the integer (truncate 3.2 2)) \u2192 1, 1.2 \n\n(the (values integer) (truncate 3.2 2)) \u2192 1, 1.2 \n\n(the (values integer float) (truncate 3.2 2)) \u2192 1, 1.2 \n\n(the (values integer float symbol) (truncate 3.2 2)) \u2192 1, 1.2 \n\n(the (values integer float symbol t null list) \n\n(truncate 3.2 2)) \u2192 1, 1.2 \n\n(let ((i 100)) \n\n(declare (fixnum i)) \n\n(the fixnum (1+ i))) \u2192 101 \n\n(let\\* ((x (list \u2019a \u2019b \u2019c)) \n\n(y 5)) \n\n(setf (the fixnum (car x)) y) \n\nx) \u2192 (5 B C) \n\nEvaluation and \n\n \n\n \n\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the ",(0,r.jsx)(n.em,{children:"values yielded"})," by the ",(0,r.jsx)(n.em,{children:"form"})," are not of the ",(0,r.jsx)(n.em,{children:"type"})," specified by ",(0,r.jsx)(n.em,{children:"value-type"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"values"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"values"})," ",(0,r.jsx)(n.em,{children:"type specifier"})," can be used to indicate the types of ",(0,r.jsx)(n.em,{children:"multiple values"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"(the (values integer integer) (floor x y))"}),"\n",(0,r.jsx)(n.p,{children:"(the (values string t)"}),"\n",(0,r.jsx)(n.p,{children:"(gethash the-key the-string-table))"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setf"})," can be used with ",(0,r.jsx)(n.strong,{children:"the"})," type declarations. In this case the declaration is transferred to the form that specifies the new value. The resulting ",(0,r.jsx)(n.strong,{children:"setf"})," ",(0,r.jsx)(n.em,{children:"form"})," is then analyzed."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={},d="the",a={id:"chap-3/d-i-dictionary/the",title:"the",description:"Expanded Reference: the",source:"@site/docs/chap-3/d-i-dictionary/the.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/the",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/the",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/the.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"symbol-macrolet",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/symbolmacrolet"},next:{title:"type",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/type"}},h={},o=[{value:"Expanded Reference: the",id:"expanded-reference-the",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"the",children:"the"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-the",children:"Expanded Reference: the"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(the )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(67294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);