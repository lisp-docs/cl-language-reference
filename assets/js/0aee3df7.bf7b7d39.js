"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[75564],{80189:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(85893),i=n(11151);function a(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read, read-preserving-whitespace"})," ",(0,s.jsx)(r.em,{children:"Function"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read"})," &optional ",(0,s.jsx)(r.em,{children:"input-stream eof-error-p eof-value recursive-p \u2192 object"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read-preserving-whitespace"})," &optional ",(0,s.jsx)(r.em,{children:"input-stream eof-error-p"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"eof-value recursive-p"})}),"\n",(0,s.jsx)(r.p,{children:"\u2192 object"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"input-stream"}),"\u2014an ",(0,s.jsx)(r.em,{children:"input stream designator"})," ."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(r.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(r.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(r.em,{children:"object"}),". The default is ",(0,s.jsx)(r.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"recursive-p"}),"\u2014a ",(0,s.jsx)(r.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(r.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"object"}),"\u2014an ",(0,s.jsx)(r.em,{children:"object"})," (parsed by the ",(0,s.jsx)(r.em,{children:"Lisp reader"})," ) or the ",(0,s.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read"})," parses the printed representation of an ",(0,s.jsx)(r.em,{children:"object"})," from ",(0,s.jsx)(r.em,{children:"input-stream"})," and builds such an ",(0,s.jsx)(r.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read-preserving-whitespace"})," is like ",(0,s.jsx)(r.strong,{children:"read"})," but preserves any ",(0,s.jsx)(r.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(r.em,{children:"character"})," that delimits the printed representation of the ",(0,s.jsx)(r.em,{children:"object"}),". ",(0,s.jsx)(r.strong,{children:"read-preserving-whitespace"})," is exactly like ",(0,s.jsx)(r.strong,{children:"read"})," when the ",(0,s.jsx)(r.em,{children:"recursive-p argument"})," to ",(0,s.jsx)(r.strong,{children:"read-preserving-whitespace"})," is ",(0,s.jsx)(r.em,{children:"true"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"read, read-preserving-whitespace"})}),"\n",(0,s.jsxs)(r.p,{children:["When ",(0,s.jsx)(r.strong,{children:"*read-suppress*"})," is ",(0,s.jsx)(r.em,{children:"false"}),", ",(0,s.jsx)(r.strong,{children:"read"})," throws away the delimiting ",(0,s.jsx)(r.em,{children:"character"})," required by certain printed representations if it is a ",(0,s.jsx)(r.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(r.em,{children:"character"})," ; but ",(0,s.jsx)(r.strong,{children:"read"})," preserves the character (using ",(0,s.jsx)(r.strong,{children:"unread-char"}),") if it is syntactically meaningful, because it could be the start of the next expression."]}),"\n",(0,s.jsxs)(r.p,{children:["If a file ends in a ",(0,s.jsx)(r.em,{children:"symbol"})," or a ",(0,s.jsx)(r.em,{children:"number"})," immediately followed by an ",(0,s.jsx)(r.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"1"}),", ",(0,s.jsx)(r.strong,{children:"read"})," reads the ",(0,s.jsx)(r.em,{children:"symbol"})," or ",(0,s.jsx)(r.em,{children:"number"})," successfully; when called again, it sees the ",(0,s.jsx)(r.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"1"})," and only then acts according to ",(0,s.jsx)(r.em,{children:"eof-error-p"}),". If a file contains ignorable text at the end, such as blank lines and comments, ",(0,s.jsx)(r.strong,{children:"read"})," does not consider it to end in the middle of an ",(0,s.jsx)(r.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.em,{children:"recursive-p"})," is ",(0,s.jsx)(r.em,{children:"true"}),", the call to ",(0,s.jsx)(r.strong,{children:"read"})," is expected to be made from within some function that itself has been called from ",(0,s.jsx)(r.strong,{children:"read"})," or from a similar input function, rather than from the top level."]}),"\n",(0,s.jsxs)(r.p,{children:["Both functions return the ",(0,s.jsx)(r.em,{children:"object"})," read from ",(0,s.jsx)(r.em,{children:"input-stream"}),". ",(0,s.jsx)(r.em,{children:"Eof-value"})," is returned if ",(0,s.jsx)(r.em,{children:"eof-error-p"})," is ",(0,s.jsx)(r.em,{children:"false"})," and end of file is reached before the beginning of an ",(0,s.jsx)(r.em,{children:"object"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:' \n\n(read) \n\n\u25b7 \u2019a \n\n\u2192 (QUOTE A) \n\n(with-input-from-string (is " ") (read is nil \u2019the-end)) \u2192 THE-END \n\n(defun skip-then-read-char (s c n) \n\n(if (char= c #\\\\{) (read s t nil t) (read-preserving-whitespace s)) \n\n(read-char-no-hang s)) \u2192 SKIP-THEN-READ-CHAR \n\n(let ((\\*readtable\\* (copy-readtable nil))) \n\n(set-dispatch-macro-character #\\# #\\\\{ #\u2019skip-then-read-char) \n\n(set-dispatch-macro-character #\\# #\\\\} #\u2019skip-then-read-char) \n\n(with-input-from-string (is "#\\{123 x #\\}123 y") \n\n(format t "&#126;S &#126;S" (read is) (read is)))) \u2192 #\\x, #\\Space, NIL \n\nAs an example, consider this *reader macro* definition: \n\n(defun slash-reader (stream char) \n\n(declare (ignore char)) \n\n\u2018(path . ,(loop for dir = (read-preserving-whitespace stream t nil t) \n\nthen (progn (read-char stream t nil t) \n\n(read-preserving-whitespace stream t nil t)) \n\ncollect dir \n\nwhile (eql (peek-char nil stream nil nil t) #\\/)))) \n\n(set-macro-character #\\/ #\u2019slash-reader) \n\nConsider now calling **read** on this expression: \n\n(zyedh /usr/games/zork /usr/games/boggle) \n\nThe / macro reads objects separated by more / characters; thus /usr/games/zork is intended to read as (path usr games zork). The entire example expression should therefore be read as \n\n\n\n \n\n \n\n(zyedh (path usr games zork) (path usr games boggle)) \n\nHowever, if **read** had been used instead of **read-preserving-whitespace**, then after the reading of the symbol zork, the following space would be discarded; the next call to **peek-char** would see the following /, and the loop would continue, producing this interpretation: \n\n(zyedh (path usr games zork usr games boggle)) \n\nThere are times when *whitespace*<sub>2</sub> <sup>should be discarded. If a command interpreter takes single</sup> character commands, but occasionally reads an *object* then if the *whitespace*<sub>2</sub> after a *symbol* is not discarded it might be interpreted as a command some time later after the *symbol* had been read. \n\n\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"*standard-input*"}),", ",(0,s.jsx)(r.strong,{children:"*terminal-io*"}),", ",(0,s.jsx)(r.strong,{children:"*readtable*"}),", ",(0,s.jsx)(r.strong,{children:"*read-default-float-format*"}),", ",(0,s.jsx)(r.strong,{children:"*read-base*"}),", ",(0,s.jsx)(r.strong,{children:"*read-suppress*"}),", ",(0,s.jsx)(r.strong,{children:"*package*"}),", ",(0,s.jsx)(r.strong,{children:"*read-eval*"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"read"})," signals an error of ",(0,s.jsx)(r.em,{children:"type"})," ",(0,s.jsx)(r.strong,{children:"end-of-file"}),", regardless of ",(0,s.jsx)(r.em,{children:"eof-error-p"}),", if the file ends in the middle of an ",(0,s.jsx)(r.em,{children:"object"})," representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, ",(0,s.jsx)(r.strong,{children:"read"})," signals an error. This is detected when ",(0,s.jsx)(r.strong,{children:"read"})," or ",(0,s.jsx)(r.strong,{children:"read-preserving-whitespace"})," is called with ",(0,s.jsx)(r.em,{children:"recursive-p"})," and ",(0,s.jsx)(r.em,{children:"eof-error-p non-nil"}),", and end-of-file is reached before the beginning of an ",(0,s.jsx)(r.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.em,{children:"eof-error-p"})," is ",(0,s.jsx)(r.em,{children:"true"}),", an error of ",(0,s.jsx)(r.em,{children:"type"})," ",(0,s.jsx)(r.strong,{children:"end-of-file"})," is signaled at the end of file."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"peek-char"}),", ",(0,s.jsx)(r.strong,{children:"read-char"}),", ",(0,s.jsx)(r.strong,{children:"unread-char"}),", ",(0,s.jsx)(r.strong,{children:"read-from-string"}),", ",(0,s.jsx)(r.strong,{children:"read-delimited-list"}),", ",(0,s.jsx)(r.strong,{children:"parse-integer"}),", Chapter 2 (Syntax), Section 23.1 (Reader Concepts)"]})]})}function t(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const d={},c="read, read-preserving-whitespace",l={id:"chap-23/cd-c-dictionary/read",title:"read, read-preserving-whitespace",description:"Expanded Reference: read, read-preserving-whitespace",source:"@site/docs/chap-23/cd-c-dictionary/read.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-dispatch-macro-character",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/makedispatchmacrocharacter"},next:{title:"read-delimited-list",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readdelimitedlist"}},o={},h=[{value:"Expanded Reference: read, read-preserving-whitespace",id:"expanded-reference-read-read-preserving-whitespace",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"read-read-preserving-whitespace",children:"read, read-preserving-whitespace"}),"\n","\n","\n",(0,s.jsx)(t,{}),"\n",(0,s.jsx)(r.h2,{id:"expanded-reference-read-read-preserving-whitespace",children:"Expanded Reference: read, read-preserving-whitespace"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lisp",children:"(read, read-preserving-whitespace )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>t});var s=n(67294);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);