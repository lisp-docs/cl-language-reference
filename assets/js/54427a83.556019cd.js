"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80506],{30102:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var s=i(85893),r=i(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," ",(0,s.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," ",(0,s.jsx)(n.em,{children:"instance"})," &rest ",(0,s.jsx)(n.em,{children:"initargs"})," &key &allow-other-keys \u2192 instance"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," (",(0,s.jsx)(n.em,{children:"instance"})," ",(0,s.jsx)(n.strong,{children:"standard-object"}),") &rest ",(0,s.jsx)(n.em,{children:"initargs"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"instance"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"initargs"}),"\u2014an ",(0,s.jsx)(n.em,{children:"initialization argument list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"generic function"})," ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," can be used to change the values of ",(0,s.jsx)(n.em,{children:"local slots"})," of an ",(0,s.jsx)(n.em,{children:"instance"})," according to ",(0,s.jsx)(n.em,{children:"initargs"}),". This ",(0,s.jsx)(n.em,{children:"generic function"})," can be called by users."]}),"\n",(0,s.jsxs)(n.p,{children:["The system-supplied primary ",(0,s.jsx)(n.em,{children:"method"})," for ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," checks the validity of ",(0,s.jsx)(n.em,{children:"initargs"})," and signals an error if an ",(0,s.jsx)(n.em,{children:"initarg"})," is supplied that is not declared as valid. The ",(0,s.jsx)(n.em,{children:"method"})," then calls the generic function ",(0,s.jsx)(n.strong,{children:"shared-initialize"})," with the following arguments: the ",(0,s.jsx)(n.em,{children:"instance"}),", ",(0,s.jsx)(n.strong,{children:"nil"})," (which means no ",(0,s.jsx)(n.em,{children:"slots"})," should be initialized according to their initforms), and the ",(0,s.jsx)(n.em,{children:"initargs"})," it received."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"generic function"})," ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," changes the values of ",(0,s.jsx)(n.em,{children:"local slots"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["The system-supplied primary ",(0,s.jsx)(n.em,{children:"method"})," for ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," signals an error if an ",(0,s.jsx)(n.em,{children:"initarg"})," is supplied that is not declared as valid."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initialize-instance"}),", ",(0,s.jsx)(n.strong,{children:"shared-initialize"}),", ",(0,s.jsx)(n.strong,{children:"update-instance-for-redefined-class"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"update-instance-for-different-class"}),", ",(0,s.jsx)(n.strong,{children:"slot-boundp"}),", ",(0,s.jsx)(n.strong,{children:"slot-makunbound"}),", Section 7.3 (Reinitial izing an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Initargs"})," are declared as valid by using the ",":initarg"," option to ",(0,s.jsx)(n.strong,{children:"defclass"}),", or by defining ",(0,s.jsx)(n.em,{children:"methods"})," for ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," or ",(0,s.jsx)(n.strong,{children:"shared-initialize"}),". The keyword name of each keyword parameter specifier in the ",(0,s.jsx)(n.em,{children:"lambda list"})," of any ",(0,s.jsx)(n.em,{children:"method"})," defined on ",(0,s.jsx)(n.strong,{children:"reinitialize-instance"})," or ",(0,s.jsx)(n.strong,{children:"shared-initialize"})," is declared as a valid initialization argument name for all ",(0,s.jsx)(n.em,{children:"classes"})," for which that ",(0,s.jsx)(n.em,{children:"method"})," is applicable."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const a={},l="reinitialize-instance",d={id:"chap-7/h-h-dictionary/reinitializeinstance",title:"reinitialize-instance",description:"Expanded Reference: reinitialize-instance",source:"@site/docs/chap-7/h-h-dictionary/reinitializeinstance.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/reinitializeinstance",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/reinitializeinstance",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/reinitializeinstance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"no-next-method",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/nonextmethod"},next:{title:"remove-method",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/removemethod"}},o={},h=[{value:"Expanded Reference: reinitialize-instance",id:"expanded-reference-reinitialize-instance",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"reinitialize-instance",children:"reinitialize-instance"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-reinitialize-instance",children:"Expanded Reference: reinitialize-instance"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(reinitialize-instance )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>c});var s=i(67294);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);