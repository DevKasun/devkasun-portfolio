/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, p as renderHead, j as renderSlot, m as maybeRenderHead } from '../astro_JnqzvqQq.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$Image } from './__HAoWvnFE.mjs';

const $$Astro$2 = createAstro("https://devkasun.me");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="min-h-full"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/layouts/PageLayout.astro", void 0);

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";
const HOME_SITE_TITLE = "DevKasun - Home Page";
const HOME_SITE_DESCRIPTION = "Welcome to my website!";
const ABOUT_SITE_TITLE = "DevKasun - About Page";
const ABOUT_SITE_DESCRIPTION = "Brief introduction about myself.";
const CONTACT_SITE_TITLE = "DevKasun - Contact Page";
const CONTACT_SITE_DESCRIPTION = "Contact me!";
const BLOG_SITE_TITLE = "DevKasun - Blog page";
const BLOG_SITE_DESCRIPTION = "Read me blog articles";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "SASS",
  "React JS",
  "Next JS",
  "Bootstrap",
  "Bulma",
  "Tailwind CSS",
  "VS Code",
  "Terminal",
  "Gulp",
  "Grunt",
  "Webpack",
  "Vite",
  "Git",
  "WordPress"
];
const sevenSignsSkills = [
  "Front-End Development",
  "WordPress",
  "Wordpress Development",
  "PSD to Wordpress",
  "Linux",
  "jQuery",
  "SQL",
  "MySQL",
  "Bootstrap",
  "SASS",
  "Vue.js"
];
const RhinoPartnersSkills = [
  "Next.js",
  "React.js",
  "Front-End Development",
  "Tailwind CSS",
  "Redux.js",
  "WordPress",
  "Wordpress Development",
  "Laravel",
  "Linux",
  "jQuery",
  "SQL",
  "MySQL",
  "Bootstrap",
  "SASS"
];

const devkasunColorProfile = new Proxy({"src":"/_astro/devkasun-color.14qgOdzh.png","width":1440,"height":1216,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/assets/images/devkasun-color.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://devkasun.me");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap"> ${skills.map((skill) => renderTemplate`<span class="p-1 m-1 bg-kwhite text-kblack rounded-md cursor-pointer duration-300 hover:text-kwhite hover:bg-kblack"> ${skill} </span>`)} </div>`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/components/Skills.astro", void 0);

const $$Astro = createAstro("https://devkasun.me");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": ABOUT_SITE_TITLE, "description": ABOUT_SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about py-28"> <section class="pb-14"> <div class="container mx-auto px-8"> <div class="flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-3"> ${renderComponent($$result2, "Image", $$Image, { "src": devkasunColorProfile, "width": 1080, "height": 1080, "alt": "developer_image", "decoding": "async", "loading": "lazy" })} <div class="col-span-2"> <h2 class="text-4xl pb-6">Who am I?</h2> <p class="text-lg pb-4">
Hi, I&#39;m an Enthusiastic Frontend Developer who
							loves to create beautiful user interfaces. I&#39;m
							glad I decided to learn to program. It&#39;s taught
							me how to become resourceful and think outside the
							box. I&#39;ve been able to accomplish many things I
							thought were impossible.
</p> <p class="text-lg pb-4">Skills & Tools:</p> ${renderComponent($$result2, "Skills", $$Skills, { "skills": skills })} </div> </div> </div> </section> <section class="pb-14"> <div class="container mx-auto px-8"> <h2 class="text-4xl pb-6">Professional Experience</h2> <div class="row grid sm:grid-cols-1 gap-8 pb-8 lg:grid-cols-3"> <div class="flex-3"> <h4 class="text-xl">Senior Front-end Web developer</h4> <p class="text-lg flex items-center gap-2 text-kgray">
Rhino Partners
</p> <p class="text-sm pt-2 text-kgray">
Oct 2019 - Present
</p> </div> <div class="col-span-2">
Acquired Skills: ${renderComponent($$result2, "Skills", $$Skills, { "skills": RhinoPartnersSkills })} </div> </div> <div class="row grid sm:grid-cols-1 gap-4 pb-8 lg:grid-cols-3"> <div class="flex-3"> <h4 class="text-xl">Front-end Web developer</h4> <p class="text-lg flex items-center gap-2 text-kgray">
SevenSigns
</p> <p class="text-sm pt-2 text-kgray">
Dec 2016 - Aug 2018
</p> </div> <div class="col-span-2">
Acquired Skills: ${renderComponent($$result2, "Skills", $$Skills, { "skills": sevenSignsSkills })} </div> </div> </div> </section> </main> ` })}`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageLayout as $, BLOG_SITE_TITLE as B, CONTACT_SITE_TITLE as C, HOME_SITE_TITLE as H, SITE_TITLE as S, CONTACT_SITE_DESCRIPTION as a, BLOG_SITE_DESCRIPTION as b, HOME_SITE_DESCRIPTION as c, SITE_DESCRIPTION as d, about as e };
