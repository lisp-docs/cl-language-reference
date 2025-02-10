The *Lisp reader* operates on a character repertoire called `standard-char`; characters that are members of that repertoire are called *standard characters*.

The `standard-char` repertoire consists of the *non-graphic character newline*, the *graphic character space*, and the following additional ninety-four *graphic characters* or their equivalents:

| Graphic ID | Glyph | Description |
|---|---|---|
| LA01 | a | small a |
| LN01 | n | small n |
| LA02 | A | capital A |
| LN02 | N | capital N |
| LB01 | b | small b |
| LO01 | o | small o |
| LB02 | B | capital B |
| LO02 | O | capital O |
| LC01 | c | small c |
| LP01 | p | small p |
| LC02 | C | capital C |
| LP02 | P | capital P |
| LD01 | d | small d |
| LQ01 | q | small q |
| LD02 | D | capital D |
| LQ02 | Q | capital Q |
| LE01 | e | small e |
| LR01 | r | small r |
| LE02 | E | capital E |
| LR02 | R | capital R |
| LF01 | f | small f |
| LS01 | s | small s |
| LF02 | F | capital F |
| LS02 | S | capital S |
| LG01 | g | small g |
| LT01 | t | small t |
| LG02 | G | capital G |
| LT02 | T | capital T |
| LH01 | h | small h |
| LU01 | u | small u |
| LH02 | H | capital H |
| LU02 | U | capital U |
| LI01 | i | small i |
| LV01 | v | small v |
| LI02 | I | capital I |
| LV02 | V | capital V |
| LJ01 | j | small j |
| LW01 | w | small w |
| LJ02 | J | capital J |
| LW02 | W | capital W |
| LK01 | k | small k |
| LX01 | x | small x |
| LK02 | K | capital K |
| LX02 | X | capital X |
| LL01 | l | small l |
| LY01 | y | small y |
| LL02 | L | capital L |
| LY02 | Y | capital Y |
| LM01 | m | small m |
| LZ01 | z | small z |
| LM02 | M | capital M |
| LZ02 | Z | capital Z |
| ND01 | 1 | digit 1 |
| ND06 | 6 | digit 6 |
| ND02 | 2 | digit 2 |
| ND07 | 7 | digit 7 |
| ND03 | 3 | digit 3 |
| ND08 | 8 | digit 8 |
| ND04 | 4 | digit 4 |
| ND09 | 9 | digit 9 |
| ND05 | 5 | digit 5 |
| ND10 | 0 | digit 0 |


**(Figure 2–3. Standard Character Subrepertoire (Part 1 of 3: Latin Characters))**

**(Figure 2–4. Standard Character Subrepertoire (Part 2 of 3: Numeric Characters))**

**(Figure 2–5. Standard Character Subrepertoire (Part 3 of 3: Special Characters))**

The graphic IDs are not used within Common Lisp, but are provided for cross-reference purposes with ISO 6937/2. Note that the first letter of the graphic ID categorizes the character as follows: L—Latin, N—Numeric, S—Special.  The table above shows only a portion of the complete character set.
