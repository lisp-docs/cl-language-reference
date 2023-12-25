import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// import Highlight from '@site/src/components/Highlight';
import ClLinks from '../components/cl-links';
import GlossaryTerm from '../components/glossary-term';
import DictionaryLink from '../components/dictionary-link';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<ClLinks>" tag to our ClLinks component
  // `ClLinks` will receive all props that were passed to `<ClLinks>` in MDX
  ClLinks, DictionaryLink, GlossaryTerm,
};