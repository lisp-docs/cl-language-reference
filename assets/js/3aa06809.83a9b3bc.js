"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43371],{43113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>L,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(85893),i=n(11151);function o(e){return(0,a.jsx)(a.Fragment,{})}function s(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o()}function r(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,a.jsx)(t.p,{children:"The specification set forth in this document is designed to promote the portability of Common Lisp programs among a variety of data processing systems. It is a language specification aimed at an audience of implementors and knowledgeable programmers. It is neither a tutorial nor an implementation guide."})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}function l(e){const t={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Lisp is a family of languages with a long history. Early key ideas in Lisp were developed by John McCarthy during the 1956 Dartmouth Summer Research Project on Artificial Intelligence. McCarthy\u2019s motivation was to develop an algebraic list processing language for artificial intelligence work. Implementation efforts for early dialects of Lisp were undertaken on the IBM 704, the IBM 7090, the Digital Equipment Corporation (DEC) PDP-1, the DEC PDP-6, and the PDP-10. The primary dialect of Lisp between 1960 and 1965 was Lisp 1.5. By the early 1970\u2019s there were two predominant dialects of Lisp, both arising from these early efforts: MacLisp and Interlisp. For further information about very early Lisp dialects, see ",(0,a.jsx)(t.em,{children:"The Anatomy of Lisp"})," or ",(0,a.jsx)(t.em,{children:"Lisp 1.5 Programmer\u2019s Manual"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["MacLisp improved on the Lisp 1.5 notion of special variables and error handling. MacLisp also introduced the concept of functions that could take a variable number of arguments, macros, arrays, non-local dynamic exits, fast arithmetic, the first good Lisp compiler, and an emphasis on execution speed. By the end of the 1970\u2019s, MacLisp was in use at over 50 sites. For further information about Maclisp, see ",(0,a.jsx)(t.em,{children:"Maclisp Reference Manual, Revision 0"})," or ",(0,a.jsx)(t.em,{children:"The Revised Maclisp Manual"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Interlisp introduced many ideas into Lisp programming environments and methodology. One of the Interlisp ideas that influenced Common Lisp was an iteration construct implemented by Warren Teitelman that inspired the ",(0,a.jsx)(t.strong,{children:"loop"})," macro used both on the Lisp Machines and in MacLisp, and now in Common Lisp. For further information about Interlisp, see ",(0,a.jsx)(t.em,{children:"Interlisp Reference Manual"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Although the first implementations of Lisp were on the IBM 704 and the IBM 7090, later work focussed on the DEC PDP-6 and, later, PDP-10 computers, the latter being the mainstay of Lisp and artificial intelligence work at such places as Massachusetts Institute of Technology (MIT), Stanford University, and Carnegie Mellon University (CMU) from the mid-1960\u2019s through much of the 1970\u2019s. The PDP-10 computer and its predecessor the PDP-6 computer were, by design, especially well-suited to Lisp because they had 36-bit words and 18-bit addresses. This architecture allowed a ",(0,a.jsx)(t.em,{children:"cons"})," cell to be stored in one word; single instructions could extract the ",(0,a.jsx)(t.em,{children:"car"})," and ",(0,a.jsx)(t.em,{children:"cdr"})," parts. The PDP-6 and PDP-10 had fast, powerful stack instructions that enabled fast function calling. But the limitations of the PDP-10 were evident by 1973: it supported a small number of researchers using Lisp, and the small, 18-bit address space (2",(0,a.jsx)("sup",{children:"18"})," = 262,144 words) limited the size of a single program. One response to the address space problem was the Lisp Machine, a special-purpose computer designed to run Lisp programs. The other response was to use general-purpose computers"]}),"\n",(0,a.jsx)(t.p,{children:"with address spaces larger than 18 bits, such as the DEC VAX and the S-1 Mark IIA. For further information about S-1 Common Lisp, see \u201cS-1 Common Lisp Implementation.\u201d"}),"\n",(0,a.jsxs)(t.p,{children:["The Lisp machine concept was developed in the late 1960\u2019s. In the early 1970\u2019s, Peter Deutsch, working with Daniel Bobrow, implemented a Lisp on the Alto, a single-user minicomputer, using microcode to interpret a byte-code implementation language. Shortly thereafter, Richard Greenblatt began work on a different hardware and instruction set design at MIT. Although the Alto was not a total success as a Lisp machine, a dialect of Interlisp known as Interlisp-D became available on the D-series machines manufactured by Xerox\u2014the Dorado, Dandelion, Dandetiger, and Dove (or Daybreak). An upward-compatible extension of MacLisp called Lisp Machine Lisp became available on the early MIT Lisp Machines. Commercial Lisp machines from Xerox, Lisp Machines (LMI), and Symbolics were on the market by 1981. For further information about Lisp Machine Lisp, see ",(0,a.jsx)(t.em,{children:"Lisp Machine Manual"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"During the late 1970\u2019s, Lisp Machine Lisp began to expand towards a much fuller language. Sophisticated lambda lists, setf, multiple values, and structures like those in Common Lisp are the results of early experimentation with programming styles by the Lisp Machine group. Jonl White and others migrated these features to MacLisp. Around 1980, Scott Fahlman and others at CMU began work on a Lisp to run on the Scientific Personal Integrated Computing Environment (SPICE) workstation. One of the goals of the project was to design a simpler dialect than Lisp Machine Lisp."}),"\n",(0,a.jsx)(t.p,{children:"The Macsyma group at MIT began a project during the late 1970\u2019s called the New Implementation of Lisp (NIL) for the VAX, which was headed by White. One of the stated goals of the NIL project was to fix many of the historic, but annoying, problems with Lisp while retaining significant compatibility with MacLisp. At about the same time, a research group at Stanford University and Lawrence Livermore National Laboratory headed by Richard P. Gabriel began the design of a Lisp to run on the S-1 Mark IIA supercomputer. S-1 Lisp, never completely functional, was the test bed for adapting advanced compiler techniques to Lisp implementation. Eventually the S-1 and NIL groups collaborated. For further information about the NIL project, see \u201cNIL\u2014A Perspective.\u201d"}),"\n",(0,a.jsx)(t.p,{children:"The first effort towards Lisp standardization was made in 1969, when Anthony Hearn and Martin Griss at the University of Utah defined Standard Lisp\u2014a subset of Lisp 1.5 and other dialects\u2014to transport REDUCE, a symbolic algebra system. During the 1970\u2019s, the Utah group implemented first a retargetable optimizing compiler for Standard Lisp, and then an extended implementation"}),"\n",(0,a.jsx)(t.p,{children:"known as Portable Standard Lisp (PSL). By the mid 1980\u2019s, PSL ran on about a dozen kinds of computers. For further information about Standard Lisp, see \u201cStandard LISP Report.\u201d"}),"\n",(0,a.jsx)(t.p,{children:"PSL and Franz Lisp\u2014a MacLisp-like dialect for Unix machines\u2014were the first examples of widely available Lisp dialects on multiple hardware platforms."}),"\n",(0,a.jsx)(t.p,{children:"One of the most important developments in Lisp occurred during the second half of the 1970\u2019s: Scheme. Scheme, designed by Gerald J. Sussman and Guy L. Steele Jr., is a simple dialect of Lisp whose design brought to Lisp some of the ideas from programming language semantics developed in the 1960\u2019s. Sussman was one of the prime innovators behind many other advances in Lisp technology from the late 1960\u2019s through the 1970\u2019s. The major contributions of Scheme were lexical scoping, lexical closures, first-class continuations, and simplified syntax (no separation of value cells"}),"\n",(0,a.jsxs)(t.p,{children:["and function cells). Some of these contributions made a large impact on the design of Common Lisp. For further information about Scheme, see ",(0,a.jsx)(t.em,{children:"IEEE Standard for the Scheme Programming Language"})," or \u201cRevised",(0,a.jsx)("sup",{children:"3"})," Report on the Algorithmic Language Scheme.\u201d"]}),"\n",(0,a.jsx)(t.p,{children:"In the late 1970\u2019s object-oriented programming concepts started to make a strong impact on Lisp. At MIT, certain ideas from Smalltalk made their way into several widely used programming systems. Flavors, an object-oriented programming system with multiple inheritance, was developed at MIT for the Lisp machine community by Howard Cannon and others. At Xerox, the experience with"}),"\n",(0,a.jsxs)(t.p,{children:["Smalltalk and Knowledge Representation Language (KRL) led to the development of Lisp Object Oriented Programming System (LOOPS) and later Common LOOPS. For further information on Smalltalk, see ",(0,a.jsx)(t.em,{children:"Smalltalk-80: The Language and its Implementation"}),". For further information on Flavors, see ",(0,a.jsx)(t.em,{children:"Flavors: A Non-Hierarchical Approach to Object-Oriented Programming"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"These systems influenced the design of the Common Lisp Object System (CLOS). CLOS was developed specifically for this standardization effort, and was separately written up in \u201cCommon Lisp Object System Specification.\u201d However, minor details of its design have changed slightly since that publication, and that paper should not be taken as an authoritative reference to the semantics of the object system as described in this document."}),"\n",(0,a.jsx)(t.p,{children:"In 1980 Symbolics and LMI were developing Lisp Machine Lisp; stock-hardware implementation groups were developing NIL, Franz Lisp, and PSL; Xerox was developing Interlisp; and the SPICE project at CMU was developing a MacLisp-like dialect of Lisp called SpiceLisp."}),"\n",(0,a.jsxs)(t.p,{children:["In April 1981, after a DARPA-sponsored meeting concerning the splintered Lisp community, Symbolics, the SPICE project, the NIL project, and the S-1 Lisp project joined together to define Common Lisp. Initially spearheaded by White and Gabriel, the driving force behind this grassroots effort was provided by Fahlman, Daniel Weinreb, David Moon, Steele, and Gabriel. Common Lisp was designed as a description of a family of languages. The primary influences on Common Lisp were Lisp Machine Lisp, MacLisp, NIL, S-1 Lisp, Spice Lisp, and Scheme. ",(0,a.jsx)(t.em,{children:"Common Lisp: The Language"})," is a description of that design. Its semantics were intentionally underspecified in places where it was felt that a tight specification would overly constrain Common Lisp research and use."]}),"\n",(0,a.jsx)(t.p,{children:"In 1986 X3J13 was formed as a technical working group to produce a draft for an ANSI Common Lisp standard. Because of the acceptance of Common Lisp, the goals of this group differed from those of the original designers. These new goals included stricter standardization for portability, an object-oriented programming system, a condition system, iteration facilities, and a way to handle large character sets. To accommodate those goals, a new language specification, this document, was developed."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}const d={title:"1.1 Scope"},h="1.1 Scope",m={id:"chap-1/b-b-scope-purpose-and-history",title:"1.1 Scope",description:"1.1.1 Scope and Purpose",source:"@site/docs/chap-1/b-b-scope-purpose-and-history.md",sourceDirName:"chap-1",slug:"/chap-1/b-b-scope-purpose-and-history",permalink:"/cl-language-reference/docs/chap-1/b-b-scope-purpose-and-history",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-1/b-b-scope-purpose-and-history.md",tags:[],version:"current",frontMatter:{title:"1.1 Scope"},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/cl-language-reference/docs/category/1-introduction"},next:{title:"1.2 Organization of the Document",permalink:"/cl-language-reference/docs/chap-1/b-c-organization-of-the-document"}},u={},f=[{value:"1.1.1 Scope and Purpose",id:"111-scope-and-purpose",level:2},{value:"1.1.2 History",id:"112-history",level:2}];function g(e){const t={h1:"h1",h2:"h2",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"11-scope",children:"1.1 Scope"}),"\n","\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(t.h2,{id:"111-scope-and-purpose",children:"1.1.1 Scope and Purpose"}),"\n","\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(t.h2,{id:"112-history",children:"1.1.2 History"}),"\n","\n","\n",(0,a.jsx)(p,{})]})}function L(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);