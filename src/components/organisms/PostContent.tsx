import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type PostContentProps = {
  body: string;
};

const MarkdownStyle = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 2;
  font-size: 18px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 10px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 700;
  }

  * + h1,
  * + h2 {
    margin-top: 100px;
  }

  * + h3 {
    margin-top: 50px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 0 30px;
    border-left: 2px solid var(--defaultColor);
    font-weight: 400;
    color: var(--defaultColor);
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 2px dashed var(--defaultColor);
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    background: linear-gradient(to top, var(--link) 30%, transparent 30%);
    font-weight: 500;

    &:hover {
      opacity: 0.8;
    }
  }

  pre[class*='language-'],
  code[class*='language-'] {
    color: #d4d4d4;
    font-size: 1rem;
    font-size: 1rem;
    text-shadow: none;
    font-family: 'Source Code Pro', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 7px;
    margin: 20px 0px 40px;

    span {
      font-family: 'Source Code Pro', monospace;
    }
  }

  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  pre[class*='language-'] *::selection,
  code[class*='language-'] *::selection {
    text-shadow: none;
    background: #75a7ca;
  }

  @media print {
    pre[class*='language-'],
    code[class*='language-'] {
      text-shadow: none;
    }
  }

  pre[class*='language-'] {
    padding: 2em 1em;
    overflow: auto;
    background: #1e1e1e;
  }

  .namespace {
    opacity: 0.7;
  }

  // token

  .token.doctype .token.doctype-tag {
    color: #569cd6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569cd6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569cd6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }

  pre[class*='language-javascript'],
  code[class*='language-javascript'],
  pre[class*='language-jsx'],
  code[class*='language-jsx'],
  pre[class*='language-typescript'],
  code[class*='language-typescript'],
  pre[class*='language-tsx'],
  code[class*='language-tsx'] {
    color: #9cdcfe;
  }

  pre[class*='language-css'],
  code[class*='language-css'] {
    color: #ce9178;
  }

  pre[class*='language-html'],
  code[class*='language-html'] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }

  pre[data-line] {
    position: relative;
  }

  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }

  /** custom **/
  .token.plain-text {
    color: #d4d4d4;
  }
  div.gatsby-highlight {
    position: relative;
  }

  .gatsby-highlight pre::before {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 2rem;
    font-size: 0.9em;
    border-radius: 0 0 5px 5px;
    padding: 0 0.7rem;
    text-shadow: none;
    z-index: 1;
    color: black;
  }

  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
    background: #f7df1e;
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: #f7df1e;
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
  }
  .gatsby-highlight pre[class='language-typescript']::before {
    content: 'ts';
    background: #294e80;
    color: white;
  }
  .gatsby-highlight pre[class='language-ts']::before {
    content: 'ts';
    background: #294e80;
    color: white;
  }
  .gatsby-highlight pre[class='language-tsx']::before {
    content: 'tsx';
    background: #294e80;
    color: white;
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
    background: #e10098;
    color: white;
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
    background: #005a9c;
    color: white;
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: #ff9800;
    color: white;
  }
  .gatsby-highlight pre[class='language-scss']::before {
    content: 'scss';
    background: #ff5e00;
    color: white;
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
    background: #f9ac00;
    color: white;
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
    background: #f9f9f9;
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
    background: #f9f9f9;
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
    background: #f9f9f9;
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
    background: #ffa8df;
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
    background: #f9f9f9;
  }
  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
    background: linen;
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
    background: #e6ffed;
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
    background: white;
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
    background: #e8bd36;
  }
  .gatsby-highlight pre[class='language-sql']::before {
    content: 'sql';
    background: #f9f9f9;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.8;
    font-size: 14px;
    font-weight: 300;

    * + h1,
    * + h2 {
      margin-top: 60px;
    }

    * + h3 {
      margin-top: 30px;
    }

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 80px 0;
    }

    blockquote {
      margin: 30px 0;
      padding: 5px 15px;
      font-weight: 300;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = ({ body }) => {
  return (
    <article itemScope itemType='http://schema.org/Article'>
      <MarkdownStyle>
        <MDXRenderer>{body}</MDXRenderer>
      </MarkdownStyle>
    </article>
  );
};

export default PostContent;
