"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[12115],{59083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>P,default:()=>L,frontMatter:()=>R,metadata:()=>T,toc:()=>N});var o=t(85893),i=t(11151);function s(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.p,{children:["This standard presents the syntax and semantics to be implemented by a ",(0,o.jsx)(n.em,{children:"conforming implementation"})," (and its accompanying documentation). In addition, it imposes requirements on ",(0,o.jsx)(n.em,{children:"conforming programs"}),"."]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function r(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall adhere to the requirements outlined in this section."]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}function m(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall accept all features (including deprecated features) of the language specified in this standard, with the meanings defined in this standard."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall not require the inclusion of substitute or additional language elements in code in order to accomplish a feature of the language that is specified in this standard."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}function d(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall be accompanied by a document that provides a definition of all ",(0,o.jsx)(n.em,{children:"implementation-defined"})," aspects of the language defined by this specification."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition, a ",(0,o.jsx)(n.em,{children:"conforming implementation"})," is encouraged (but not required) to document items in this standard that are identified as ",(0,o.jsx)(n.em,{children:"implementation-dependent"}),", although in some cases such documentation might simply identify the item as \u201cundefined.\u201d"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall be accompanied by a document that separately describes any features accepted by the ",(0,o.jsx)(n.em,{children:"implementation"})," that are not specified in this standard, but that do not cause any ambiguity or contradiction when added to the language standard. Such extensions shall be described as being \u201cextensions to Common Lisp as specified by ANSI \u27e8standard number \u27e9.\u201d"]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function f(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall treat exceptional situations in a manner consistent with this specification."]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}function g(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.p,{children:"If more than one passage in this specification appears to apply to the same situation but in conflicting ways, the passage that appears to describe the situation in the most specific way (not necessarily the passage that provides the most constrained kind of error detection) takes precedence."})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}function b(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lisp",children:"\n\nSuppose that function foo is a member of a set *S* of *functions* that operate on numbers. Suppose that one passage states that an error must be signaled if any *function* in *S* is ever given an argument of 17. Suppose that an apparently conflicting passage states that the consequences are undefined if foo receives an argument of 17. Then the second passage (the one specifically about foo) would dominate because the description of the situational context is the most specific, and it would not be required that foo signal an error on an argument of 17 even though other functions in the set *S* would be required to do so. \n\n\n"})})}function v(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}function w(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"conforming implementation"})," shall produce a conformance statement as a consequence of using the implementation, or that statement shall be included in the accompanying documentation. If the implementation conforms in all respects with this standard, the conformance statement shall be"]}),"\n",(0,o.jsx)(n.p,{children:"\u201c\u27e8Implementation\u27e9 conforms with the requirements of ANSI \u27e8standard number \u27e9\u201d"}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.em,{children:"implementation"})," conforms with some but not all of the requirements of this standard, then the conformance statement shall be"]}),"\n",(0,o.jsx)(n.p,{children:"\u201c\u27e8Implementation\u27e9 conforms with the requirements of ANSI \u27e8standard number \u27e9 with the following exceptions: \u27e8reference to or complete list of the requirements of the standard with which the implementation does not conform\u27e9.\u201d"})]})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(w,{...e})}):w(e)}function C(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Code conforming with the requirements of this standard shall adhere to the following:"}),"\n",(0,o.jsxs)(n.p,{children:["1. ",(0,o.jsx)(n.em,{children:"Conforming code"})," shall use only those features of the language syntax and semantics that are either specified in this standard or defined using the extension mechanisms specified in the standard."]}),"\n",(0,o.jsxs)(n.p,{children:["2. ",(0,o.jsx)(n.em,{children:"Conforming code"})," may use ",(0,o.jsx)(n.em,{children:"implementation-dependent"})," features and values, but shall not rely upon any particular interpretation of these features and values other than those that are discovered by the execution of ",(0,o.jsx)(n.em,{children:"code"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["3. ",(0,o.jsx)(n.em,{children:"Conforming code"})," shall not depend on the consequences of undefined or unspecified situations."]}),"\n",(0,o.jsxs)(n.p,{children:["4. ",(0,o.jsx)(n.em,{children:"Conforming code"})," does not use any constructions that are prohibited by the standard. 5. ",(0,o.jsx)(n.em,{children:"Conforming code"})," does not depend on extensions included in an implementation."]})]})}function q(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(C,{...e})}):C(e)}function S(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.em,{children:"conforming code"})," may rely on particular ",(0,o.jsx)(n.em,{children:"implementation-defined"})," values or features. Also note that the requirements for ",(0,o.jsx)(n.em,{children:"conforming code"})," and ",(0,o.jsx)(n.em,{children:"conforming implementations"})," do not require that the results produced by conforming code always be the same when processed by a ",(0,o.jsx)(n.em,{children:"conforming implementation"}),". The results may be the same, or they may differ."]}),"\n",(0,o.jsxs)(n.p,{children:["Conforming code may run in all conforming implementations, but might have allowable ",(0,o.jsx)(n.em,{children:"implementation-defined"})," behavior that makes it non-portable code. For example, the following are examples of ",(0,o.jsx)(n.em,{children:"forms"})," that are conforming, but that might return different ",(0,o.jsx)(n.em,{children:"values"})," in different implementations:"]}),"\n",(0,o.jsx)(n.p,{children:"(evenp most-positive-fixnum) \u2192 implementation-dependent"}),"\n",(0,o.jsx)(n.p,{children:"(random) \u2192 implementation-dependent"}),"\n",(0,o.jsx)(n.p,{children:"(> lambda-parameters-limit 93) \u2192 implementation-dependent"}),"\n",(0,o.jsx)(n.p,{children:"(char-name #\\A) \u2192 implementation-dependent"})]})}function A(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(S,{...e})}):S(e)}function I(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Use of #+ and #- does not automatically disqualify a program from being conforming. A program which uses #+ and #- is considered conforming if there is no set of ",(0,o.jsx)(n.em,{children:"features"})," in which the program would not be conforming. Of course, ",(0,o.jsx)(n.em,{children:"conforming programs"})," are not necessarily working programs. The following program is conforming:"]}),"\n",(0,o.jsx)(n.p,{children:"(defun foo ()"}),"\n",(0,o.jsxs)(n.p,{children:["#+ACME (acme",":initialize-something",")"]}),"\n",(0,o.jsx)(n.p,{children:"(print \u2019hello-there))"}),"\n",(0,o.jsxs)(n.p,{children:["However, this program might or might not work, depending on whether the presence of the feature ACME really implies that a function named acme",":initialize-something"," is present in the environment. In effect, using #+ or #- in a ",(0,o.jsx)(n.em,{children:"conforming program"})," means that the variable ",(0,o.jsx)(n.strong,{children:"*features*"})," becomes just one more piece of input data to that program. Like any other data coming into a program, the"]}),"\n",(0,o.jsx)(n.p,{children:"programmer is responsible for assuring that the program does not make unwarranted assumptions on the basis of input data."})]})}function k(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(I,{...e})}):I(e)}function E(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Portable code"})," is written using only ",(0,o.jsx)(n.em,{children:"standard characters"}),"."]})}function F(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(E,{...e})}):E(e)}const R={title:"1.5 Conformance"},P="1.5 Conformance",T={id:"chap-1/b-f-conformance",title:"1.5 Conformance",description:"1.5.1 Conforming Implementations",source:"@site/docs/chap-1/b-f-conformance.md",sourceDirName:"chap-1",slug:"/chap-1/b-f-conformance",permalink:"/cl-language-reference/docs/chap-1/b-f-conformance",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-1/b-f-conformance.md",tags:[],version:"current",frontMatter:{title:"1.5 Conformance"},sidebar:"tutorialSidebar",previous:{title:"1.4 Definitions",permalink:"/cl-language-reference/docs/chap-1/b-e-definitions"},next:{title:"1.6 Language Extensions",permalink:"/cl-language-reference/docs/chap-1/b-g-language-extensions"}},D={},N=[{value:"1.5.1 Conforming Implementations",id:"151-conforming-implementations",level:2},{value:"1.5.1.1 Required Language Features",id:"1511-required-language-features",level:3},{value:"1.5.1.2 Documentation of Implementation",id:"1512-documentation-of-implementation",level:3},{value:"1.5.1.3 Documentation of Extensions",id:"1513-documentation-of-extensions",level:3},{value:"1.5.1.4 Treatment of Exceptional Situations",id:"1514-treatment-of-exceptional-situations",level:3},{value:"1.5.1.4.1 Resolution of Apparent Conflicts in Exceptional Situations",id:"15141-resolution-of-apparent-conflicts-in-exceptional-situations",level:4},{value:"1.5.1.4.1.1 Examples of Resolution of Apparent Conflicts in Exceptional Situations",id:"151411-examples-of-resolution-of-apparent-conflicts-in-exceptional-situations",level:5},{value:"1.5.1.5 Conformance Statement",id:"1515-conformance-statement",level:3},{value:"1.5.2 Conforming Programs",id:"152-conforming-programs",level:2},{value:"1.5.2.1 Use of Implementation",id:"1521-use-of-implementation",level:3},{value:"1.5.2.1.1 Use of Read",id:"15211-use-of-read",level:4},{value:"1.5.2.2 Character Set for Portable Code",id:"1522-character-set-for-portable-code",level:3}];function U(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"15-conformance",children:"1.5 Conformance"}),"\n","\n",(0,o.jsx)(a,{}),"\n",(0,o.jsx)(n.h2,{id:"151-conforming-implementations",children:"1.5.1 Conforming Implementations"}),"\n","\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(n.h3,{id:"1511-required-language-features",children:"1.5.1.1 Required Language Features"}),"\n","\n",(0,o.jsx)(l,{}),"\n",(0,o.jsx)(n.h3,{id:"1512-documentation-of-implementation",children:"1.5.1.2 Documentation of Implementation"}),"\n","\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(n.h3,{id:"1513-documentation-of-extensions",children:"1.5.1.3 Documentation of Extensions"}),"\n","\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(n.h3,{id:"1514-treatment-of-exceptional-situations",children:"1.5.1.4 Treatment of Exceptional Situations"}),"\n","\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(n.h4,{id:"15141-resolution-of-apparent-conflicts-in-exceptional-situations",children:"1.5.1.4.1 Resolution of Apparent Conflicts in Exceptional Situations"}),"\n","\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(n.h5,{id:"151411-examples-of-resolution-of-apparent-conflicts-in-exceptional-situations",children:"1.5.1.4.1.1 Examples of Resolution of Apparent Conflicts in Exceptional Situations"}),"\n","\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(n.h3,{id:"1515-conformance-statement",children:"1.5.1.5 Conformance Statement"}),"\n","\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(n.h2,{id:"152-conforming-programs",children:"1.5.2 Conforming Programs"}),"\n","\n",(0,o.jsx)(q,{}),"\n",(0,o.jsx)(n.h3,{id:"1521-use-of-implementation",children:"1.5.2.1 Use of Implementation"}),"\n","\n",(0,o.jsx)(A,{}),"\n",(0,o.jsx)(n.h4,{id:"15211-use-of-read",children:"1.5.2.1.1 Use of Read"}),"\n","\n",(0,o.jsx)(k,{}),"\n",(0,o.jsx)(n.h3,{id:"1522-character-set-for-portable-code",children:"1.5.2.2 Character Set for Portable Code"}),"\n","\n","\n",(0,o.jsx)(F,{})]})}function L(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(U,{...e})}):U(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);