 



All *implementations* must support a *character repertoire* called **standard-char**; *characters* that are members of that *repertoire* are called *standard characters*. 



The **standard-char** *repertoire* consists of the *non-graphic character newline*, the *graphic character space*, and the following additional ninety-four *graphic characters* or their equivalents:  







|**Graphic ID Glyph Description Graphic ID Glyph Description**|

| -: |

|LA01 a small a LN01 n small n LA02 A capital A LN02 N capital N LB01 b small b LO01 o small o LB02 B capital B LO02 O capital O LC01 c small c LP01 p small p LC02 C capital C LP02 P capital P LD01 d small d LQ01 q small q LD02 D capital D LQ02 Q capital Q LE01 e small e LR01 r small r LE02 E capital E LR02 R capital R LF01 f small f LS01 s small s LF02 F capital F LS02 S capital S LG01 g small g LT01 t small t LG02 G capital G LT02 T capital T LH01 h small h LU01 u small u LH02 H capital H LU02 U capital U LI01 i small i LV01 v small v LI02 I capital I LV02 V capital V LJ01 j small j LW01 w small w LJ02 J capital J LW02 W capital W LK01 k small k LX01 x small x LK02 K capital K LX02 X capital X LL01 l small l LY01 y small y LL02 L capital L LY02 Y capital Y LM01 m small m LZ01 z small z LM02 M capital M LZ02 Z capital Z|





**Figure 2–3. Standard Character Subrepertoire (Part 1 of 3: Latin Characters)** 



|**Graphic ID Glyph Description Graphic ID Glyph Description**|

| -: |

|ND01 1 digit 1 ND06 6 digit 6 ND02 2 digit 2 ND07 7 digit 7 ND03 3 digit 3 ND08 8 digit 8 ND04 4 digit 4 ND09 9 digit 9 ND05 5 digit 5 ND10 0 digit 0|





**Figure 2–4. Standard Character Subrepertoire (Part 2 of 3: Numeric Characters)** 











|**Graphic ID Glyph Description**|

| :- |

|<p>SP02 ! exclamation mark </p><p>SC03 $ dollar sign </p><p>SP04 " quotation mark, or double quote SP05 ’ apostrophe, or [single] quote </p><p>SP06 ( left parenthesis, or open parenthesis SP07 ) right parenthesis, or close parenthesis SP08 , comma </p><p>SP09 low line, or underscore </p><p>SP10 - hyphen, or minus [sign] </p><p>SP11 . full stop, period, or dot </p><p>SP12 / solidus, or slash </p><p>SP13 : colon </p><p>SP14 ; semicolon </p><p>SP15 ? question mark </p><p>SA01 + plus [sign] </p><p>SA03 < less-than [sign] </p><p>SA04 = equals [sign] </p><p>SA05 > greater-than [sign] </p><p>SM01 # number sign, or sharp[sign] </p><p>SM02 % percent [sign] </p><p>SM03 & ampersand </p><p>SM04 \* asterisk, or star </p><p>SM05 @ commercial at, or at-sign </p><p>SM06 [ left [square] bracket </p><p>SM07 \ reverse solidus, or backslash </p><p>SM08 ] right [square] bracket </p><p>SM11 \&#123; left curly bracket, or left brace </p><p>SM13 | vertical bar </p><p>SM14 \&#125; right curly bracket, or right brace SD13 ‘ grave accent, or backquote </p><p>SD15 <i><sup>∧</sup></i> circumflex accent </p><p>SD19 ~ tilde</p>|





**Figure 2–5. Standard Character Subrepertoire (Part 3 of 3: Special Characters)** 



The graphic IDs are not used within Common Lisp, but are provided for cross reference purposes with ISO 6937/2. Note that the first letter of the graphic ID categorizes the character as follows: L—Latin, N—Numeric, S—Special. 



