
Figure 18–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. The following rules apply to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>.

– A <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> can only associate one value with a given key. If an attempt is made to add a second value for a given key, the second value will replace the first. Thus, adding a value to a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> is a destructive operation; the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> is modified.

– There are four kinds of <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>: those whose keys are compared with <ClLinks  term={"eq"}><b>eq</b></ClLinks>, those whose keys are compared with <ClLinks  term={"eql"}><b>eql</b></ClLinks>, those whose keys are compared with <ClLinks  term={"equal"}><b>equal</b></ClLinks>, and those whose keys are compared with <ClLinks  term={"equalp"}><b>equalp</b></ClLinks>.

– <GlossaryTerm styled={true} term={"hash table"}><i>Hash tables</i></GlossaryTerm> are created by <ClLinks  term={"make-hash-table"}><b>make-hash-table</b></ClLinks>. <ClLinks  term={"gethash"}><b>gethash</b></ClLinks> is used to look up a key and find the associated value. New entries are added to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm> using <ClLinks  term={"setf"}><b>setf</b></ClLinks> with <ClLinks  term={"gethash"}><b>gethash</b></ClLinks>. <ClLinks  term={"remhash"}><b>remhash</b></ClLinks> is used to remove an entry. For example:

```lisp
(setq a (make-hash-table)) → #<HASH-TABLE EQL 0/120 32536573>
(setf (gethash ’color a) ’brown) → BROWN
(setf (gethash ’name a) ’fred) → FRED
(gethash ’color a) → BROWN, *true*
(gethash ’name a) → FRED, *true*
(gethash ’pointy a) → NIL, *false*
```

In this example, the symbols color and name are being used as keys, and the symbols brown and fred are being used as the associated values. The <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> has two items in it, one of which associates from color to brown, and the other of which associates from name to fred.

– A key or a value may be any <ClLinks  term={"object"}><i>object</i></ClLinks>.

– The existence of an entry in the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> can be determined from the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm> returned by <ClLinks  term={"gethash"}><b>gethash</b></ClLinks>.

|<p>**clrhash hash-table-p remhash gethash make-hash-table sxhash** </p>
<p>**hash-table-count maphash**</p>|

| :- |

**Figure 18–1. Hash-table defined names**

Hash
