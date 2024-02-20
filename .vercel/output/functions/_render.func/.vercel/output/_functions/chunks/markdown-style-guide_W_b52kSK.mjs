const id = "markdown-style-guide.md";
						const collection = "blog";
						const slug = "markdown-style-guide";
						const body = "\nHere is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\n\n## Headings\n\nThe following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.\n\n# H1\n\n## H2\n\n### H3\n\n#### H4\n\n##### H5\n\n###### H6\n\n## Paragraph\n\nXerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\n\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\n\n## Images\n\n#### Syntax\n\n```markdown\n![Alt text](./full/or/relative/path/of/image)\n```\n\n#### Output\n\n![blog placeholder](/blog-placeholder-about.jpg)\n\n## Blockquotes\n\nThe blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.\n\n### Blockquote without attribution\n\n#### Syntax\n\n```markdown\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \n> **Note** that you can use _Markdown syntax_ within a blockquote.\n```\n\n#### Output\n\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \n> **Note** that you can use _Markdown syntax_ within a blockquote.\n\n### Blockquote with attribution\n\n#### Syntax\n\n```markdown\n> Don't communicate by sharing memory, share memory by communicating.<br>\n> — <cite>Rob Pike[^1]</cite>\n```\n\n#### Output\n\n> Don't communicate by sharing memory, share memory by communicating.<br>\n> — <cite>Rob Pike[^1]</cite>\n\n[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\n\n## Tables\n\n#### Syntax\n\n```markdown\n| Italics   | Bold     | Code   |\n| --------- | -------- | ------ |\n| _italics_ | **bold** | `code` |\n```\n\n#### Output\n\n| Italics   | Bold     | Code   |\n| --------- | -------- | ------ |\n| _italics_ | **bold** | `code` |\n\n## Code Blocks\n\n#### Syntax\n\nwe can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash\n\n````markdown\n```html\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Example HTML5 Document</title>\n  </head>\n  <body>\n    <p>Test</p>\n  </body>\n</html>\n```\n````\n\nOutput\n\n```html\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Example HTML5 Document</title>\n  </head>\n  <body>\n    <p>Test</p>\n  </body>\n</html>\n```\n\n## List Types\n\n### Ordered List\n\n#### Syntax\n\n```markdown\n1. First item\n2. Second item\n3. Third item\n```\n\n#### Output\n\n1. First item\n2. Second item\n3. Third item\n\n### Unordered List\n\n#### Syntax\n\n```markdown\n- List item\n- Another item\n- And another item\n```\n\n#### Output\n\n- List item\n- Another item\n- And another item\n\n### Nested list\n\n#### Syntax\n\n```markdown\n- Fruit\n  - Apple\n  - Orange\n  - Banana\n- Dairy\n  - Milk\n  - Cheese\n```\n\n#### Output\n\n- Fruit\n  - Apple\n  - Orange\n  - Banana\n- Dairy\n  - Milk\n  - Cheese\n\n## Other Elements — abbr, sub, sup, kbd, mark\n\n#### Syntax\n\n```markdown\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\n\nH<sub>2</sub>O\n\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\n\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\n\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\n```\n\n#### Output\n\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\n\nH<sub>2</sub>O\n\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\n\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\n\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\n";
						const data = {title:"Markdown Style Guide",description:"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",pubDate:new Date(1656613800000),heroImage:"/blog-placeholder-1.jpg"};
						const _internal = {
							type: 'content',
							filePath: "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/markdown-style-guide.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
