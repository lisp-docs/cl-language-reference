 

All *implementations* must support a *character repertoire* called **standard-char**; *characters* that are members of that *repertoire* are called *standard characters*. 

The **standard-char** *repertoire* consists of the *non-graphic character newline*, the *graphic character space*, and the following additional ninety-four *graphic characters* or their equivalents:  



|**Graphic ID Glyph Description Graphic ID Glyph Description**|
| -: |
|LA01 a small a LN01 n small n LA02 A capital A LN02 N capital N LB01 b small b LO01 o small o LB02 B capital B LO02 O capital O LC01 c small c LP01 p small p LC02 C capital C LP02 P capital P LD01 d small d LQ01 q small q LD02 D capital D LQ02 Q capital Q LE01 e small e LR01 r small r LE02 E capital E LR02 R capital R LF01 f small f LS01 s small s LF02 F capital F LS02 S capital S LG01 g small g LT01 t small t LG02 G capital G LT02 T capital T LH01 h small h LU01 u small u LH02 H capital H LU02 U capital U LI01 i small i LV01 v small v LI02 I capital I LV02 V capital V LJ01 j small j LW01 w small w LJ02 J capital J LW02 W capital W LK01 k small k LX01 x small x LK02 K capital K LX02 X capital X LL01 l small l LY01 y small y LL02 L capital L LY02 Y capital Y LM01 m small m LZ01 z small z LM02 M capital M LZ02 Z capital Z|


**Figure 2–3. Standard Character Subrepertoire (Part 1 of 3: Latin Characters)** 

|**Graphic ID Glyph Description Graphic ID Glyph Description**|
| -: |
|ND01 1 digit 1 ND06 6 digit 6 ND02 2 digit 2 ND07 7 digit 7 ND03 3 digit 3 ND08 8 digit 8 ND04 4 digit 4 ND09 9 digit 9 ND05 5 digit 5 ND10 0 digit 0|


**Figure 2–4. Standard Character Subrepertoire (Part 2 of 3: Numeric Characters)** Syntax **2–3**





|**Graphic ID Glyph Description**|
| :- |
|&#60;p&#62;SP02 ! exclamation mark &#60;/p&#62;&#60;p&#62;SC03 $ dollar sign &#60;/p&#62;&#60;p&#62;SP04 " quotation mark, or double quote SP05 ’ apostrophe, or [single] quote &#60;/p&#62;&#60;p&#62;SP06 ( left parenthesis, or open parenthesis SP07 ) right parenthesis, or close parenthesis SP08 , comma &#60;/p&#62;&#60;p&#62;SP09 low line, or underscore &#60;/p&#62;&#60;p&#62;SP10 - hyphen, or minus [sign] &#60;/p&#62;&#60;p&#62;SP11 . full stop, period, or dot &#60;/p&#62;&#60;p&#62;SP12 / solidus, or slash &#60;/p&#62;&#60;p&#62;SP13 : colon &#60;/p&#62;&#60;p&#62;SP14 ; semicolon &#60;/p&#62;&#60;p&#62;SP15 ? question mark &#60;/p&#62;&#60;p&#62;SA01 + plus [sign] &#60;/p&#62;&#60;p&#62;SA03 &#60; less-than [sign] &#60;/p&#62;&#60;p&#62;SA04 = equals [sign] &#60;/p&#62;&#60;p&#62;SA05 &#62; greater-than [sign] &#60;/p&#62;&#60;p&#62;SM01 # number sign, or sharp[sign] &#60;/p&#62;&#60;p&#62;SM02 % percent [sign] &#60;/p&#62;&#60;p&#62;SM03 & ampersand &#60;/p&#62;&#60;p&#62;SM04 \* asterisk, or star &#60;/p&#62;&#60;p&#62;SM05 @ commercial at, or at-sign &#60;/p&#62;&#60;p&#62;SM06 [ left [square] bracket &#60;/p&#62;&#60;p&#62;SM07 \ reverse solidus, or backslash &#60;/p&#62;&#60;p&#62;SM08 ] right [square] bracket &#60;/p&#62;&#60;p&#62;SM11 &#123; left curly bracket, or left brace &#60;/p&#62;&#60;p&#62;SM13 | vertical bar &#60;/p&#62;&#60;p&#62;SM14 &#125; right curly bracket, or right brace SD13 ‘ grave accent, or backquote &#60;/p&#62;&#60;p&#62;SD15 &#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62; circumflex accent &#60;/p&#62;&#60;p&#62;SD19 ~ tilde&#60;/p&#62;|


**Figure 2–5. Standard Character Subrepertoire (Part 3 of 3: Special Characters)** 

The graphic IDs are not used within Common Lisp, but are provided for cross reference purposes with ISO 6937/2. Note that the first letter of the graphic ID categorizes the character as follows: L—Latin, N—Numeric, S—Special. 

