/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_JnqzvqQq.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { C as CONTACT_SITE_TITLE, a as CONTACT_SITE_DESCRIPTION, $ as $$PageLayout } from './about_XITmraLt.mjs';
import { c as $$Image, d as $$SocialMediaLinks } from './__HAoWvnFE.mjs';

const wordspacePic = new Proxy({"src":"/_astro/workspace-1.0DKpW0Cf.JPG","width":4032,"height":3024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/assets/images/workspace-1.JPG";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://devkasun.me");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": CONTACT_SITE_TITLE, "description": CONTACT_SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about py-28"> <section class="pb-14"> <div class="container mx-auto px-8"> <div class="flex flex-col-reverse gap-8 pb-8 lg:grid lg:grid-cols-4"> <!-- In Astro, use the standard <img> tag for images --> ${renderComponent($$result2, "Image", $$Image, { "class": "col-span-2", "src": wordspacePic, "width": "4032", "height": "3024", "alt": "developer_image" })} <div class="col-span-2"> <h2 class="text-4xl pb-6">How to connect with me?</h2> <p class="text-lg pb-8">
As a passionate Front-End Web Developer, I'm always
							excited to collaborate, share insights, or simply
							talk about the latest web technologies. Whether you
							have a project in mind, need assistance with your
							web presence, or just want to discuss the
							ever-evolving world of web development, don't
							hesitate to get in touch. You can reach me via email
							or follow me on social media for updates and
							insights into my work.
</p> <div class="pb-8"> <p class="text-lg pb-2 text-kgray">Email:</p> <!-- Use standard <a> tag for links --> <a class="transition-all duration-300 delay-300 hover:underline" href="mailto:devkasunlakshitha@gmail.com">devkasunlakshitha@gmail.com</a> </div> <div class="pb-8"> <p class="text-lg pb-2 text-kgray">
Follow me on social media:
</p> <!-- Include the SocialMedia component --> ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} </div> <div class="pb-8"> <p class="text-lg pb-2 text-kgray">
Checkout my latest projects:
</p> <!-- Use standard <a> tag for links with target attribute --> <a class="transition-all duration-300 delay-300 hover:underline" target="_blank" href="https://github.com/DevKasun?tab=repositories">
Github Projects
</a> </div> </div> </div> </div> </section> </main> ` })}`;
}, "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/contact.astro", void 0);

const $$file = "/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
