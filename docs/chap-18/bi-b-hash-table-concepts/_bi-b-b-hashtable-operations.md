
Figure 18–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. The following rules apply to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>.

– A <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> can only associate one value with a given key. If an attempt is made to add a second value for a given key, the second value will replace the first. Thus, adding a value to a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> is a destructive operation; the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> is modified.

– There are four kinds of <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>: those whose keys are compared with <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, those whose keys are compared with <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, those whose keys are compared with <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, and those whose keys are compared with <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>.

– <GlossaryTerm styled={true} term={"hash table"}><i>Hash tables</i></GlossaryTerm> are created by <DictionaryLink  term={"make-hash-table"}><b>make-hash-table</b></DictionaryLink>. <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink> is used to look up a key and find the associated value. New entries are added to <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm> using <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> with <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink>. <DictionaryLink  term={"remhash"}><b>remhash</b></DictionaryLink> is used to remove an entry. For example:

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

– The existence of an entry in the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> can be determined from the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm> returned by <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink>.

|<p>**clrhash hash-table-p remhash gethash make-hash-table sxhash** </p>
<p>**hash-table-count maphash**</p>|

| :- |

**Figure 18–1. Hash-table defined names**

Hash
