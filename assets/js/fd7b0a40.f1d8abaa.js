"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[22814],{83481:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=n(85893),s=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit, sbit"})," ",(0,i.jsx)(r.em,{children:"Accessor"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit"})," ",(0,i.jsx)(r.em,{children:"bit-array"})," &rest ",(0,i.jsx)(r.em,{children:"subscripts \u2192 bit"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"sbit"})," ",(0,i.jsx)(r.em,{children:"bit-array"})," &rest ",(0,i.jsx)(r.em,{children:"subscripts \u2192 bit"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"(setf (bit"})," ",(0,i.jsx)(r.em,{children:"bit-array"})," &rest ",(0,i.jsx)(r.em,{children:"subscripts"}),"**)** ",(0,i.jsx)(r.em,{children:"new-bit"}),"**)**"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"(setf (sbit"})," ",(0,i.jsx)(r.em,{children:"bit-array"})," &rest ",(0,i.jsx)(r.em,{children:"subscripts"}),"**)** ",(0,i.jsx)(r.em,{children:"new-bit"}),"**)**"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"bit-array"}),"\u2014for ",(0,i.jsx)(r.strong,{children:"bit"}),", a ",(0,i.jsx)(r.em,{children:"bit array"}),"; for ",(0,i.jsx)(r.strong,{children:"sbit"}),", a ",(0,i.jsx)(r.em,{children:"simple bit array"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"subscripts"}),"\u2014a ",(0,i.jsx)(r.em,{children:"list"})," of ",(0,i.jsx)(r.em,{children:"valid array indices"})," for the ",(0,i.jsx)(r.em,{children:"bit-array"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"bit"}),"\u2014a ",(0,i.jsx)(r.em,{children:"bit"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit"})," and ",(0,i.jsx)(r.strong,{children:"sbit"})," ",(0,i.jsx)(r.em,{children:"access"})," the ",(0,i.jsx)(r.em,{children:"bit-array element"})," specified by ",(0,i.jsx)(r.em,{children:"subscripts"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["These ",(0,i.jsx)(r.em,{children:"functions"})," ignore the ",(0,i.jsx)(r.em,{children:"fill pointer"})," when ",(0,i.jsx)(r.em,{children:"accessing elements"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:" \n(bit (setq ba (make-array 8 \n:element-type \u2019bit \n:initial-element 1)) \n\\3) \u2192 1 \n(setf (bit ba 3) 0) \u2192 0 \n(bit ba 3) \u2192 0 \n(sbit ba 5) \u2192 1 \n(setf (sbit ba 5) 1) \u2192 1 \n\n \n \n(sbit ba 5) \u2192 1 \n\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"aref"}),", Section 3.2.1 (Compiler Terminology)"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit"})," and ",(0,i.jsx)(r.strong,{children:"sbit"})," are like ",(0,i.jsx)(r.strong,{children:"aref"})," except that they require ",(0,i.jsx)(r.em,{children:"arrays"})," to be a ",(0,i.jsx)(r.em,{children:"bit array"})," and a ",(0,i.jsx)(r.em,{children:"simple bit array"}),", respectively."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit"})," and ",(0,i.jsx)(r.strong,{children:"sbit"}),", unlike ",(0,i.jsx)(r.strong,{children:"char"})," and ",(0,i.jsx)(r.strong,{children:"schar"}),", allow the first argument to be an ",(0,i.jsx)(r.em,{children:"array"})," of any ",(0,i.jsx)(r.em,{children:"rank"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)("sup",{children:"bit-and, bit-andc1, bit-andc2, bit-eqv, bit-ior, bit"})," nand, bit-nor, bit-not, bit-orc1, bit-orc2, bit-xor"]})," ",(0,i.jsx)("i",{children:"Function"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-and"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-andc1"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-andc2"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-eqv"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-ior"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-nand"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-nor"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-orc1"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-orc2"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-xor"})," ",(0,i.jsx)(r.em,{children:"bit-array1 bit-array2"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"bit-not"})," ",(0,i.jsx)(r.em,{children:"bit-array"})," &optional ",(0,i.jsx)(r.em,{children:"opt-arg \u2192 resulting-bit-array"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"bit-array"}),", ",(0,i.jsx)(r.em,{children:"bit-array1"}),", ",(0,i.jsx)(r.em,{children:"bit-array2"}),"\u2014a ",(0,i.jsx)(r.em,{children:"bit array"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Opt-arg"}),"\u2014a ",(0,i.jsx)(r.em,{children:"bit array"}),", or ",(0,i.jsx)(r.strong,{children:"t"}),", or ",(0,i.jsx)(r.strong,{children:"nil"}),". The default is ",(0,i.jsx)(r.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Bit-array"}),", ",(0,i.jsx)(r.em,{children:"bit-array1"}),", ",(0,i.jsx)(r.em,{children:"bit-array2"}),", and ",(0,i.jsx)(r.em,{children:"opt-arg"})," (if an ",(0,i.jsx)(r.em,{children:"array"}),") must all be of the same ",(0,i.jsx)(r.em,{children:"rank"})," and ",(0,i.jsx)(r.em,{children:"dimensions"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"resulting-bit-array"}),"\u2014a ",(0,i.jsx)(r.em,{children:"bit array"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:["These functions perform bit-wise logical operations on ",(0,i.jsx)(r.em,{children:"bit-array1"})," and ",(0,i.jsx)(r.em,{children:"bit-array2"})," and return an ",(0,i.jsx)(r.em,{children:"array"})," of matching ",(0,i.jsx)(r.em,{children:"rank"})," and ",(0,i.jsx)(r.em,{children:"dimensions"}),", such that any given bit of the result is produced by operating on corresponding bits from each of the arguments."]}),"\n",(0,i.jsxs)(r.p,{children:["In the case of ",(0,i.jsx)(r.strong,{children:"bit-not"}),", an ",(0,i.jsx)(r.em,{children:"array"})," of ",(0,i.jsx)(r.em,{children:"rank"})," and ",(0,i.jsx)(r.em,{children:"dimensions"})," matching ",(0,i.jsx)(r.em,{children:"bit-array"})," is returned that contains a copy of ",(0,i.jsx)(r.em,{children:"bit-array"})," with all the bits inverted."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"opt-arg"})," is of type (array bit) the contents of the result are destructively placed into ",(0,i.jsx)(r.em,{children:"opt-arg"}),". If ",(0,i.jsx)(r.em,{children:"opt-arg"})," is the symbol ",(0,i.jsx)(r.strong,{children:"t"}),", ",(0,i.jsx)(r.em,{children:"bit-array"})," or ",(0,i.jsx)(r.em,{children:"bit-array1"})," is replaced with the result; if ",(0,i.jsx)(r.em,{children:"opt-arg"})," is ",(0,i.jsx)(r.strong,{children:"nil"})," or omitted, a new ",(0,i.jsx)(r.em,{children:"array"})," is created to contain the result."]}),"\n",(0,i.jsxs)(r.p,{children:["Figure 15\u20134 indicates the logical operation performed by each of the ",(0,i.jsx)(r.em,{children:"functions"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["|",(0,i.jsx)(r.strong,{children:"Function Operation"}),"|"]}),"\n",(0,i.jsx)(r.p,{children:"| :- |"}),"\n",(0,i.jsxs)(r.p,{children:["|",(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-and"})," and "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-eqv"})," equivalence (exclusive nor) "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-not"})," complement "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-ior"})," inclusive or "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-xor"})," exclusive or "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-nand"})," complement of ",(0,i.jsx)(r.em,{children:"bit-array1"})," and ",(0,i.jsx)(r.em,{children:"bit-array2"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-nor"})," complement of ",(0,i.jsx)(r.em,{children:"bit-array1"})," or ",(0,i.jsx)(r.em,{children:"bit-array2"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-andc1"})," and complement of ",(0,i.jsx)(r.em,{children:"bit-array1"})," with ",(0,i.jsx)(r.em,{children:"bit-array2"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-andc2"})," and ",(0,i.jsx)(r.em,{children:"bit-array1"})," with complement of ",(0,i.jsx)(r.em,{children:"bit-array2"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-orc1"})," or complement of ",(0,i.jsx)(r.em,{children:"bit-array1"})," with ",(0,i.jsx)(r.em,{children:"bit-array2"})," "]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.strong,{children:"bit-orc2"})," or ",(0,i.jsx)(r.em,{children:"bit-array1"})," with complement of ",(0,i.jsx)(r.em,{children:"bit-array2"})]}),"|"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Figure 15\u20134. Bit-wise Logical Operations on Bit Arrays"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"\n(bit-and (setq ba #\\*11101010) #\\*01101011) \u2192 #\\*01101010 \n(bit-and #\\*1100 #\\*1010) \u2192 #\\*1000 \n(bit-andc1 #\\*1100 #\\*1010) \u2192 #\\*0010 \n(setq rba (bit-andc2 ba #\\*00110011 t)) \u2192 #\\*11001000 \n(eq rba ba) \u2192 true \n(bit-not (setq ba #\\*11101010)) \u2192 #\\*00010101 \n(setq rba (bit-not ba \n\t\t   (setq tba (make-array 8 \n\t\t\t\t\t :element-type \u2019bit)))) \n\u2192 #\\*00010101 \n(equal rba tba) \u2192 true \n(bit-xor #\\*1100 #\\*1010) \u2192 #\\*0110 \n\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"lognot"}),", ",(0,i.jsx)(r.strong,{children:"logand"})]})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const c={},l="bit, sbit",d={id:"chap-15/bf-c-dictionary/bit",title:"bit, sbit",description:"Expanded Reference: bit, sbit",source:"@site/docs/chap-15/bf-c-dictionary/bit.md",sourceDirName:"chap-15/bf-c-dictionary",slug:"/chap-15/bf-c-dictionary/bit",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bit",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-15/bf-c-dictionary/bit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"array-total-size-limit",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/arraytotalsizelimit"},next:{title:"bit-vector",permalink:"/cl-language-reference/docs/chap-15/bf-c-dictionary/bitvector"}},o={},h=[{value:"Expanded Reference: bit, sbit",id:"expanded-reference-bit-sbit",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"bit-sbit",children:"bit, sbit"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-bit-sbit",children:"Expanded Reference: bit, sbit"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(bit, sbit )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var i=n(67294);const s={},t=i.createContext(s);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);