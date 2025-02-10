All <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> must support a *character repertoire* called <DictionaryLink  term={"standard-char"}><b>standard-char</b></DictionaryLink>; <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that are members of that <GlossaryTerm  term={"repertoire"}><i>repertoire</i></GlossaryTerm> are called <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>. 

The <DictionaryLink  term={"standard-char"}><b>standard-char</b></DictionaryLink> <GlossaryTerm  term={"repertoire"}><i>repertoire</i></GlossaryTerm> consists of the *non-graphic character newline*, the *graphic character space*, and the following additional ninety-four *graphic characters* or their equivalents:  

<!-- The *Lisp reader* operates on a character repertoire called `standard-char`; characters that are members of that repertoire are called *standard characters*. -->

<!-- The `standard-char` repertoire consists of the *non-graphic character newline*, the *graphic character space*, and the following additional ninety-four *graphic characters* or their equivalents: -->

| Graphic ID | Glyph | Description |
|---|---|---|
| LA01 | a | small a |
| LA02 | A | capital A |
| LB01 | b | small b |
| LB02 | B | capital B |
| LC01 | c | small c |
| LC02 | C | capital C |
| LD01 | d | small d |
| LD02 | D | capital D |
| LE01 | e | small e |
| LE02 | E | capital E |
| LF01 | f | small f |
| LF02 | F | capital F |
| LG01 | g | small g |
| LG02 | G | capital G |
| LH01 | h | small h |
| LH02 | H | capital H |
| LI01 | i | small i |
| LI02 | I | capital I |
| LJ01 | j | small j |
| LJ02 | J | capital J |
| LK01 | k | small k |
| LK02 | K | capital K |
| LL01 | l | small l |
| LL02 | L | capital L |
| LM01 | m | small m |
| LM02 | M | capital M |
| LN01 | n | small n |
| LN02 | N | capital N |
| LO01 | o | small o |
| LO02 | O | capital O |
| LP01 | p | small p |
| LP02 | P | capital P |
| LQ01 | q | small q |
| LQ02 | Q | capital Q |
| LR01 | r | small r |
| LR02 | R | capital R |
| LS01 | s | small s |
| LS02 | S | capital S |
| LT01 | t | small t |
| LT02 | T | capital T |
| LU01 | u | small u |
| LU02 | U | capital U |
| LV01 | v | small v |
| LV02 | V | capital V |
| LW01 | w | small w |
| LW02 | W | capital W |
| LX01 | x | small x |
| LX02 | X | capital X |
| LY01 | y | small y |
| LY02 | Y | capital Y |
| LZ01 | z | small z |
| LZ02 | Z | capital Z |

**(Figure 2–3. Standard Character Subrepertoire (Part 1 of 3: Latin Characters))**

| Graphic ID | Glyph | Description |
|---|---|---|
| ND01 | 1 | digit 1 |
| ND02 | 2 | digit 2 |
| ND03 | 3 | digit 3 |
| ND04 | 4 | digit 4 |
| ND05 | 5 | digit 5 |
| ND06 | 6 | digit 6 |
| ND07 | 7 | digit 7 |
| ND08 | 8 | digit 8 |
| ND09 | 9 | digit 9 |
| ND10 | 0 | digit 0 |

**(Figure 2–4. Standard Character Subrepertoire (Part 2 of 3: Numeric Characters))**

| Graphic ID | Glyph Description |
|---|---|
| SP02 | `!` exclamation mark |
| SC03 | `$` dollar sign |
| SP04 | `"` quotation mark, or double quote |
| SP05 | `’` apostrophe, or [single] quote |
| SP06 | `(` left parenthesis, or open parenthesis |
| SP07 | `)` right parenthesis, or close parenthesis |
| SP08 | `,` comma |
| SP09 | `_` low line, or underscore |
| SP10 | `-` hyphen, or minus [sign] |
| SP11 | `.` full stop, period, or dot |
| SP12 | `/` solidus, or slash |
| SP13 | `:` colon |
| SP14 | `;` semicolon |
| SP15 | `?` question mark |
| SA01 | `+` plus [sign] |
| SA03 | `<` less-than [sign] |
| SA04 | `=` equals [sign] |
| SA05 | `>` greater-than [sign] |
| SM01 | `#` number sign, or sharp[sign] |
| SM02 | `%` percent [sign] |
| SM03 | `&` ampersand |
| SM04 | `*` asterisk, or star |
| SM05 | `@` commercial at, or at-sign |
| SM06 | `[` left [square] bracket |
| SM07 | `\` reverse solidus, or backslash |
| SM08 | `]` right [square] bracket |
| SM11 | `{` left curly bracket, or left brace |
| SM13 | `|` vertical bar |
| SM14 | `}` right curly bracket, or right brace |
| SD13 | `‘` grave accent, or backquote |
| SD15 | <i><sup>`^`</sup></i> circumflex accent |
| SD19 | `~` tilde |

|**Graphic ID Glyph Description**|
| :- |
| SP02 ! exclamation mark |
| SC03 $ dollar sign |
| SP04 " quotation mark, or double quote SP05 ’ apostrophe, or [single] quote |
| SP06 ( left parenthesis, or open parenthesis SP07 ) right parenthesis, or close parenthesis SP08 , comma |
| SP09 low line, or underscore |
| SP10 - hyphen, or minus [sign] |
| SP11 . full stop, period, or dot |
| SP12 / solidus, or slash |
| SP13 : colon |
| SP14 ; semicolon |
| SP15 ? question mark |
| SA01 + plus [sign] |
| SA03 &lt; less-than [sign] |
| SA04 = equals [sign] |
| SA05 &gt; greater-than [sign] |
| SM01 # number sign, or sharp[sign] |
| SM02 % percent [sign] |
| SM03 &amp; ampersand |
| SM04 \* asterisk, or star |
| SM05 @ commercial at, or at-sign |
| SM06 [ left [square] bracket |
| SM07 \ reverse solidus, or backslash |
| SM08 ] right [square] bracket |
| SM11 \{ left curly bracket, or left brace |
| SM13 | vertical bar |
| SM14 \} right curly bracket, or right brace SD13 ‘ grave accent, or backquote |
| SD15 <i><sup>∧</sup></i> circumflex accent |
| SD19 &#126; tilde |

**(Figure 2–5. Standard Character Subrepertoire (Part 3 of 3: Special Characters))**

The graphic IDs are not used within Common Lisp, but are provided for cross-reference purposes with ISO 6937/2. Note that the first letter of the graphic ID categorizes the character as follows: L—Latin, N—Numeric, S—Special.  The table above shows only a portion of the complete character set.
