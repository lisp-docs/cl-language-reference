"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[84441],{65312:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var t=n(85893),i=n(11151);function s(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:s}=r;return n||a("DictionaryLink",!0),s||a("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"read, read-preserving-whitespace"})," ",(0,t.jsx)(s,{term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," &optional ",(0,t.jsx)(r.em,{children:"input-stream eof-error-p eof-value recursive-p \u2192 object"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read-preserving-whitespace"})})," &optional ",(0,t.jsx)(r.em,{children:"input-stream eof-error-p"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"eof-value recursive-p"})}),"\n",(0,t.jsx)(r.p,{children:"\u2192 object"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"input-stream"}),"\u2014an ",(0,t.jsx)(r.em,{children:"input stream designator"})," ."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,t.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,t.jsx)(s,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),". The default is ",(0,t.jsx)(n,{term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"recursive-p"}),"\u2014a ",(0,t.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,t.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,t.jsx)(s,{term:"false",children:(0,t.jsx)("i",{children:"false"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})})," (parsed by the ",(0,t.jsx)(r.em,{children:"Lisp reader"})," ) or the ",(0,t.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," parses the printed representation of an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})})," from ",(0,t.jsx)(r.em,{children:"input-stream"})," and builds such an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read-preserving-whitespace"})})," is like ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," but preserves any ",(0,t.jsx)(s,{term:"whitespace",children:(0,t.jsx)("i",{children:"whitespace"})}),(0,t.jsx)("sub",{children:"2"})," ",(0,t.jsx)(s,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," that delimits the printed representation of the ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),". ",(0,t.jsx)(n,{term:"read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read-preserving-whitespace"})})," is exactly like ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," when the ",(0,t.jsx)(r.em,{children:"recursive-p argument"})," to ",(0,t.jsx)(n,{term:"read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read-preserving-whitespace"})})," is ",(0,t.jsx)(s,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsx)(n,{styled:!0,term:"read, read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read, read-preserving-whitespace"})}),"\n",(0,t.jsxs)(r.p,{children:["When ",(0,t.jsx)(n,{term:"read-suppress",children:(0,t.jsx)("b",{children:"*read-suppress*"})})," is ",(0,t.jsx)(s,{term:"false",children:(0,t.jsx)("i",{children:"false"})}),", ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," throws away the delimiting ",(0,t.jsx)(s,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," required by certain printed representations if it is a ",(0,t.jsx)(s,{term:"whitespace",children:(0,t.jsx)("i",{children:"whitespace"})}),(0,t.jsx)("sub",{children:"2"})," ",(0,t.jsx)(s,{term:"character",children:(0,t.jsx)("i",{children:"character"})})," ; but ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," preserves the character (using ",(0,t.jsx)(n,{term:"unread-char",children:(0,t.jsx)("b",{children:"unread-char"})}),") if it is syntactically meaningful, because it could be the start of the next expression."]}),"\n",(0,t.jsxs)(r.p,{children:["If a file ends in a ",(0,t.jsx)(s,{term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})})," or a ",(0,t.jsx)(s,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," immediately followed by an ",(0,t.jsx)(s,{styled:!0,term:"end of file",children:(0,t.jsx)("i",{children:"end of file"})}),(0,t.jsx)("sub",{children:"1"}),", ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," reads the ",(0,t.jsx)(s,{term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})})," or ",(0,t.jsx)(s,{term:"number",children:(0,t.jsx)("i",{children:"number"})})," successfully; when called again, it sees the ",(0,t.jsx)(s,{styled:!0,term:"end of file",children:(0,t.jsx)("i",{children:"end of file"})}),(0,t.jsx)("sub",{children:"1"})," and only then acts according to ",(0,t.jsx)(r.em,{children:"eof-error-p"}),". If a file contains ignorable text at the end, such as blank lines and comments, ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," does not consider it to end in the middle of an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.em,{children:"recursive-p"})," is ",(0,t.jsx)(s,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),", the call to ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," is expected to be made from within some function that itself has been called from ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," or from a similar input function, rather than from the top level."]}),"\n",(0,t.jsxs)(r.p,{children:["Both functions return the ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})})," read from ",(0,t.jsx)(r.em,{children:"input-stream"}),". ",(0,t.jsx)(r.em,{children:"Eof-value"})," is returned if ",(0,t.jsx)(r.em,{children:"eof-error-p"})," is ",(0,t.jsx)(s,{term:"false",children:(0,t.jsx)("i",{children:"false"})})," and end of file is reached before the beginning of an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'(read) \n\u25b7 \u2019a \n\u2192 (QUOTE A) \n(with-input-from-string (is " ") (read is nil \u2019the-end)) \u2192 THE-END \n(defun skip-then-read-char (s c n) \n  (if (char= c #\\\\&#123;) (read s t nil t) (read-preserving-whitespace s)) \n\t     (read-char-no-hang s)) \u2192 SKIP-THEN-READ-CHAR \n\t     (let ((\\*readtable\\* (copy-readtable nil))) \n\t       (set-dispatch-macro-character #\\# #\\\\&#123; #\u2019skip-then-read-char) \n\t\t\t\t\t     (set-dispatch-macro-character #\\# #\\\\&#125; #\u2019skip-then-read-char) \n\t\t\t\t\t\t\t\t\t   (with-input-from-string (is "#\\&#123;123 x #\\&#125;123 y") \n\t\t\t\t\t\t\t\t\t     (format t "~S ~S" (read is) (read is)))) \u2192 #\\x, #\\Space, NIL \n\t\t\t\t\t     As an example, consider this *reader macro* definition: \n\t\t\t\t\t     (defun slash-reader (stream char) \n\t\t\t\t\t       (declare (ignore char)) \n\t\t\t\t\t       \u2018(path . ,(loop for dir = (read-preserving-whitespace stream t nil t) \n\t\t\t\t\t\t\t       then (progn (read-char stream t nil t) \n\t\t\t\t\t\t\t\t\t   (read-preserving-whitespace stream t nil t)) \n\t\t\t\t\t\t\t       collect dir \n\t\t\t\t\t\t\t       while (eql (peek-char nil stream nil nil t) #\\/)))) \n\t\t\t\t\t     (set-macro-character #\\/ #\u2019slash-reader) \n\t\t\t\t\t     Consider now calling **read** on this expression: \n\t\t\t\t\t     (zyedh /usr/games/zork /usr/games/boggle) \n\t\t\t\t\t     The / macro reads objects separated by more / characters; thus /usr/games/zork is intended to read as (path usr games zork). The entire example expression should therefore be read as \n\t\t\t\t\t     \n\t\t\t\t\t     \n\t\t\t\t\t     (zyedh (path usr games zork) (path usr games boggle)) \n\t\t\t\t\t     However, if **read** had been used instead of **read-preserving-whitespace**, then after the reading of the symbol zork, the following space would be discarded; the next call to **peek-char** would see the following /, and the loop would continue, producing this interpretation: \n\t\t\t\t\t     (zyedh (path usr games zork usr games boggle)) \n\t\t\t\t\t     There are times when *whitespace*<sub>2</sub> <sup>should be discarded. If a command interpreter takes single</sup> character commands, but occasionally reads an *object* then if the *whitespace*<sub>2</sub> after a *symbol* is not discarded it might be interpreted as a command some time later after the *symbol* had been read. \n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"*standard-input*"}),", ",(0,t.jsx)(n,{term:"terminal-io",children:(0,t.jsx)("b",{children:"*terminal-io*"})}),", ",(0,t.jsx)(n,{term:"readtable",children:(0,t.jsx)("b",{children:"*readtable*"})}),", ",(0,t.jsx)(n,{term:"read-default-float-format",children:(0,t.jsx)("b",{children:"*read-default-float-format*"})}),", ",(0,t.jsx)(r.strong,{children:"*read-base*"}),", ",(0,t.jsx)(n,{term:"read-suppress",children:(0,t.jsx)("b",{children:"*read-suppress*"})}),", ",(0,t.jsx)(n,{term:"package",children:(0,t.jsx)("b",{children:"*package*"})}),", ",(0,t.jsx)(r.strong,{children:"*read-eval*"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," signals an error of ",(0,t.jsx)(s,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"end-of-file",children:(0,t.jsx)("b",{children:"end-of-file"})}),", regardless of ",(0,t.jsx)(r.em,{children:"eof-error-p"}),", if the file ends in the middle of an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})})," representation. For example, if a file does not contain enough right parentheses to balance the left parentheses in it, ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," signals an error. This is detected when ",(0,t.jsx)(n,{term:"read",children:(0,t.jsx)("b",{children:"read"})})," or ",(0,t.jsx)(n,{term:"read-preserving-whitespace",children:(0,t.jsx)("b",{children:"read-preserving-whitespace"})})," is called with ",(0,t.jsx)(r.em,{children:"recursive-p"})," and ",(0,t.jsx)(r.em,{children:"eof-error-p non-nil"}),", and end-of-file is reached before the beginning of an ",(0,t.jsx)(s,{term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.em,{children:"eof-error-p"})," is ",(0,t.jsx)(s,{term:"true",children:(0,t.jsx)("i",{children:"true"})}),", an error of ",(0,t.jsx)(s,{term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{term:"end-of-file",children:(0,t.jsx)("b",{children:"end-of-file"})})," is signaled at the end of file."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{term:"peek-char",children:(0,t.jsx)("b",{children:"peek-char"})}),", ",(0,t.jsx)(n,{term:"read-char",children:(0,t.jsx)("b",{children:"read-char"})}),", ",(0,t.jsx)(n,{term:"unread-char",children:(0,t.jsx)("b",{children:"unread-char"})}),", ",(0,t.jsx)(n,{term:"read-from-string",children:(0,t.jsx)("b",{children:"read-from-string"})}),", ",(0,t.jsx)(n,{term:"read-delimited-list",children:(0,t.jsx)("b",{children:"read-delimited-list"})}),", ",(0,t.jsx)(n,{term:"parse-integer",children:(0,t.jsx)("b",{children:"parse-integer"})}),", Chapter 2 (Syntax), Section 23.1 (Reader Concepts)"]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function a(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const c={title:"read, read-preserving-whitespace"},l="read, read-preserving-whitespace",h={id:"chap-23/cd-c-dictionary/read_read-preserving-whitespace_function",title:"read, read-preserving-whitespace",description:"Expanded Reference: read, read-preserving-whitespace",source:"@site/docs/chap-23/cd-c-dictionary/read_read-preserving-whitespace_function.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read_read-preserving-whitespace_function",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read_read-preserving-whitespace_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read_read-preserving-whitespace_function.md",tags:[],version:"current",frontMatter:{title:"read, read-preserving-whitespace"},sidebar:"tutorialSidebar",previous:{title:"read-suppress",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/read-suppress_variable"},next:{title:"reader-error",permalink:"/cl-language-reference/chap-23/cd-c-dictionary/reader-error_condition-type"}},o={},p=[{value:"Expanded Reference: read, read-preserving-whitespace",id:"expanded-reference-read-read-preserving-whitespace",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"read-read-preserving-whitespace",children:"read, read-preserving-whitespace"}),"\n","\n","\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-read-read-preserving-whitespace",children:"Expanded Reference: read, read-preserving-whitespace"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(read, read-preserving-whitespace )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var t=n(67294);const i={},s=t.createContext(i);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);