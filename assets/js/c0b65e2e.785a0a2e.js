"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[74121],{2764:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get"})," ",(0,r.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get"})," ",(0,r.jsx)(n.em,{children:"symbol indicator"})," &optional ",(0,r.jsx)(n.em,{children:"default \u2192 value"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"(setf (get"})," ",(0,r.jsx)(n.em,{children:"symbol indicator"})," &optional ",(0,r.jsx)(n.em,{children:"default"}),"**)** ",(0,r.jsx)(n.em,{children:"new-value"}),"**)**"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"indicator"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"default"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),". The default is ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"value"}),"\u2014if the indicated property exists, the ",(0,r.jsx)(n.em,{children:"object"})," that is its ",(0,r.jsx)(n.em,{children:"value"}),"; otherwise, the specified ",(0,r.jsx)(n.em,{children:"default"}),". ",(0,r.jsx)(n.em,{children:"new-value"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"get"})," finds a ",(0,r.jsx)(n.em,{children:"property"})," on the ",(0,r.jsx)(n.em,{children:"property list"})," ",(0,r.jsx)("sub",{children:"2"})," of ",(0,r.jsx)(n.em,{children:"symbol"})," whose ",(0,r.jsx)(n.em,{children:"property indicator"})," is ",(0,r.jsx)(n.em,{children:"identical"})," to ",(0,r.jsx)(n.em,{children:"indicator"}),", and returns its corresponding ",(0,r.jsx)(n.em,{children:"property value"}),". If there are multiple ",(0,r.jsx)(n.em,{children:"properties"}),(0,r.jsx)("sub",{children:"1"})," with that ",(0,r.jsx)(n.em,{children:"property indicator"})," , ",(0,r.jsx)(n.strong,{children:"get"})," uses the first such ",(0,r.jsx)(n.em,{children:"property"}),". If there is no ",(0,r.jsx)(n.em,{children:"property"})," with that ",(0,r.jsx)(n.em,{children:"property indicator"})," , ",(0,r.jsx)(n.em,{children:"default"})," is returned."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"get"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"get"})," may be used to associate a new ",(0,r.jsx)(n.em,{children:"object"})," with an existing indicator already on the ",(0,r.jsx)(n.em,{children:"symbol"}),"\u2019s ",(0,r.jsx)(n.em,{children:"property list"}),", or to create a new assocation if none exists. If there are multiple ",(0,r.jsx)(n.em,{children:"properties"}),(0,r.jsx)("sub",{children:"1"})," with that ",(0,r.jsx)(n.em,{children:"property indicator"})," , ",(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"get"})," associates the ",(0,r.jsx)(n.em,{children:"new-value"})," with the first such ",(0,r.jsx)(n.em,{children:"property"}),". When a ",(0,r.jsx)(n.strong,{children:"get"})," ",(0,r.jsx)(n.em,{children:"form"})," is used as a ",(0,r.jsx)(n.strong,{children:"setf"})," ",(0,r.jsx)(n.em,{children:"place"}),", any ",(0,r.jsx)(n.em,{children:"default"})," which is supplied is evaluated according to normal left-to-right evaluation rules, but its ",(0,r.jsx)(n.em,{children:"value"})," is ignored."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n(defun make-person (first-name last-name) \n\n(let ((person (gensym "PERSON"))) \n\n(setf (get person \u2019first-name) first-name) \n\n(setf (get person \u2019last-name) last-name) \n\nperson)) \u2192 MAKE-PERSON \n\n(defvar \\*john\\* (make-person "John" "Dow")) \u2192 \\*JOHN\\* \n\n\\*john\\* \u2192 #:PERSON4603 \n\n(defvar \\*sally\\* (make-person "Sally" "Jones")) \u2192 \\*SALLY\\* \n\n(get \\*john\\* \u2019first-name) \u2192 "John" \n\n(get \\*sally\\* \u2019last-name) \u2192 "Jones" \n\n(defun marry (man woman married-name) \n\n(setf (get man \u2019wife) woman) \n\n(setf (get woman \u2019husband) man) \n\n(setf (get man \u2019last-name) married-name) \n\n(setf (get woman \u2019last-name) married-name) \n\nmarried-name) \u2192 MARRY \n\n(marry \\*john\\* \\*sally\\* "Dow-Jones") \u2192 "Dow-Jones" \n\n(get \\*john\\* \u2019last-name) \u2192 "Dow-Jones" \n\n(get (get \\*john\\* \u2019wife) \u2019first-name) \u2192 "Sally" \n\n(symbol-plist \\*john\\*) \n\n\u2192 (WIFE #:PERSON4604 LAST-NAME "Dow-Jones" FIRST-NAME "John") \n\n(defmacro age (person &amp;optional (default \u201dthirty-something)) \n\n\u2018(get ,person \u2019age ,default)) \u2192 AGE \n\n(age \\*john\\*) \u2192 THIRTY-SOMETHING \n\n(age \\*john\\* 20) \u2192 20 \n\n(setf (age \\*john\\*) 25) \u2192 25 \n\n(age \\*john\\*) \u2192 25 \n\n(age \\*john\\* 20) \u2192 25 \n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"symbol"})," is not a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getf"}),", ",(0,r.jsx)(n.strong,{children:"symbol-plist"}),", ",(0,r.jsx)(n.strong,{children:"remprop"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(get x y) ",(0,r.jsx)(n.em,{children:"\u2261"})," (getf (symbol-plist x) y)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Numbers"})," and ",(0,r.jsx)(n.em,{children:"characters"})," are not recommended for use as ",(0,r.jsx)(n.em,{children:"indicators"})," in portable code since ",(0,r.jsx)(n.strong,{children:"get"})," tests with ",(0,r.jsx)(n.strong,{children:"eq"})," rather than ",(0,r.jsx)(n.strong,{children:"eql"}),", and consequently the effect of using such ",(0,r.jsx)(n.em,{children:"indicators"})," is ",(0,r.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There is no way using ",(0,r.jsx)(n.strong,{children:"get"})," to distinguish an absent property from one whose value is ",(0,r.jsx)(n.em,{children:"default"}),". However, see ",(0,r.jsx)(n.strong,{children:"get-properties"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},a="get",l={id:"chap-10/ba-c-dictionary/get",title:"get",description:"Expanded Reference: get",source:"@site/docs/chap-10/ba-c-dictionary/get.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/get",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/get",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/get.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gentemp",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/gentemp"},next:{title:"keyword",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/keyword"}},d={},h=[{value:"Expanded Reference: get",id:"expanded-reference-get",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get",children:"get"}),"\n","\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-get",children:"Expanded Reference: get"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(get )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);