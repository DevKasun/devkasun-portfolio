/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_JnqzvqQq.mjs';
import 'kleur/colors';
import 'cssesc';
import { B as BLOG_SITE_TITLE, b as BLOG_SITE_DESCRIPTION, $ as $$PageLayout, H as HOME_SITE_TITLE, c as HOME_SITE_DESCRIPTION } from './about_zqIqyHU2.mjs';
import { e as getCollection, c as $$Image, f as $$FormattedDate } from './__WIeyw0ey.mjs';
import 'clsx';

const blogCoverImage = new Proxy({"src":"/_astro/blog-cover.0rI4pikS.png","width":1792,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/assets/images/blog-cover.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG_SITE_TITLE, "description": BLOG_SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about py-28"> <section class="pb-14"> <div class="container mx-auto px-8"> <div class="flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-4"> ${renderComponent($$result2, "Image", $$Image, { "class": "col-span-2", "src": blogCoverImage, "width": 1792, "height": 1024, "alt": "developer_image" })} <div class="col-span-2"> <h2 class="text-4xl pb-6">
DevBlog: Beyond the Binary
</h2> <p class="text-lg pb-4">
This blog is a space for sharing my passion for
							technology and its power to build, create, and solve
							problems. Whether you're a seasoned developer or
							just starting out, you'll find valuable insights and
							inspiration to shape your tech journey.
</p> </div> </div> </div> </section> <section class="pb-14"> <div class="container mx-auto px-8"> <ul class="list-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}/`, "href")}> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt=""> <h4 class="title pt-4"> ${post.data.title} </h4> <p class="date text-xs pt-1"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> </a> </li>`)} </ul> </div> </section> </main> ` })}`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const myProfilePic = new Proxy({"src":"/_astro/profile-pic.hQjICVCX.png","width":501,"height":498,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/assets/images/profile-pic.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": HOME_SITE_TITLE, "description": HOME_SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home py-28py-28 flex items-center justify-center"> <div class="home-content flex flex-col items-center text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": myProfilePic, "width": "320", "height": "320", "decoding": "async", "loading": "lazy", "alt": "my_profile_pic" })} <h4 class="pt-8 text-2xl">Front-end Developer</h4> <h1 class="text-8xl">
Kasun <br> Lakshitha
</h1> </div> </main> ` })}`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
