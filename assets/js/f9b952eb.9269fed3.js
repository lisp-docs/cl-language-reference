"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2745],{5618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=s(85893),t=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"describe-object"})," ",(0,r.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"describe-object"})," ",(0,r.jsx)(n.em,{children:"object stream \u2192 implementation-dependent"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"describe-object"})," ",(0,r.jsx)(n.em,{children:"(object standard-object) stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"object"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The generic function ",(0,r.jsx)(n.strong,{children:"describe-object"})," prints a description of ",(0,r.jsx)(n.em,{children:"object"})," to a ",(0,r.jsx)(n.em,{children:"stream"}),". ",(0,r.jsx)(n.strong,{children:"describe-object"})," is called by ",(0,r.jsx)(n.strong,{children:"describe"}),"; it must not be called by the user."]}),"\n",(0,r.jsxs)(n.p,{children:["Each implementation is required to provide a ",(0,r.jsx)(n.em,{children:"method"})," on the ",(0,r.jsx)(n.em,{children:"class"})," ",(0,r.jsx)(n.strong,{children:"standard-object"})," and ",(0,r.jsx)(n.em,{children:"methods"})," on enough other ",(0,r.jsx)(n.em,{children:"classes"})," so as to ensure that there is always an applicable ",(0,r.jsx)(n.em,{children:"method"}),". Implementations are free to add ",(0,r.jsx)(n.em,{children:"methods"})," for other ",(0,r.jsx)(n.em,{children:"classes"}),". Users can write ",(0,r.jsx)(n.em,{children:"methods"})," for ",(0,r.jsx)(n.strong,{children:"describe-object"})," for their own ",(0,r.jsx)(n.em,{children:"classes"})," if they do not wish to inherit an implementation-supplied ",(0,r.jsx)(n.em,{children:"method"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Methods"})," on ",(0,r.jsx)(n.strong,{children:"describe-object"})," can recursively call ",(0,r.jsx)(n.strong,{children:"describe"}),". Indentation, depth limits, and circularity detection are all taken care of automatically, provided that each ",(0,r.jsx)(n.em,{children:"method"})," handles exactly one level of structure and calls ",(0,r.jsx)(n.strong,{children:"describe"})," recursively if there are more structural levels. The consequences are undefined if this rule is not obeyed."]}),"\n",(0,r.jsxs)(n.p,{children:["In some implementations the ",(0,r.jsx)(n.em,{children:"stream"})," argument passed to a ",(0,r.jsx)(n.strong,{children:"describe-object"})," method is not the original ",(0,r.jsx)(n.em,{children:"stream"}),", but is an intermediate ",(0,r.jsx)(n.em,{children:"stream"})," that implements parts of ",(0,r.jsx)(n.strong,{children:"describe"}),". ",(0,r.jsx)(n.em,{children:"Methods"})," should therefore not depend on the identity of this ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(defclass spaceship () \n  ((captain :initarg :captain :accessor spaceship-captain) \n   (serial# :initarg :serial-number :accessor spaceship-serial-number))) \n(defclass federation-starship (spaceship) ()) \n(defmethod describe-object ((s spaceship) stream) \n  (with-slots (captain serial#) s \n    (format stream "&#126;&amp;&#126;S is a spaceship of type &#126;S,&#126; \n&#126;%with &#126;A at the helm &#126; \nand with serial number &#126;D.&#126;%" \n\t    s (type-of s) captain serial#))) \n(make-instance \u2019federation-starship \n\t\t:captain "Rachel Garrett" \n\t\t:serial-number "NCC-1701-C") \n\u2192 #<FEDERATION-STARSHIP 26312465> \n(describe \\*) \n\u25b7 #<FEDERATION-STARSHIP 26312465> is a spaceship of type FEDERATION-STARSHIP, \u25b7 with Rachel Garrett at the helm and with serial number NCC-1701-C. \n\u2192 hno valuesi \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"describe"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The same implementation techniques that are applicable to ",(0,r.jsx)(n.strong,{children:"print-object"})," are applicable to ",(0,r.jsx)(n.strong,{children:"describe-object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The reason for making the return values for ",(0,r.jsx)(n.strong,{children:"describe-object"})," unspecified is to avoid forcing users to include explicit (values) in all of their ",(0,r.jsx)(n.em,{children:"methods"}),". ",(0,r.jsx)(n.strong,{children:"describe"})," takes care of that."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"trace, untrace"})})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const a={},d="describe-object",o={id:"chap-25/cf-c-dictionary/describeobject",title:"describe-object",description:"Expanded Reference: describe-object",source:"@site/docs/chap-25/cf-c-dictionary/describeobject.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/describeobject",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/describeobject",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/describeobject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"describe",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/describe"},next:{title:"disassemble",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/disassemble"}},l={},h=[{value:"Expanded Reference: describe-object",id:"expanded-reference-describe-object",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"describe-object",children:"describe-object"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-describe-object",children:"Expanded Reference: describe-object"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(describe-object )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(67294);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);