import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_JnqzvqQq.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.8wT3jY2O.css"},{"type":"external","src":"/_astro/_slug_.0tm5n_7v.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.8wT3jY2O.css"},{"type":"external","src":"/_astro/_slug_.0tm5n_7v.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.8wT3jY2O.css"},{"type":"external","src":"/_astro/_slug_.0tm5n_7v.css"},{"type":"inline","content":"main[data-astro-cid-bvzihdzo]{width:calc(100% - 2em);max-width:100%;margin:0}.hero-image[data-astro-cid-bvzihdzo]{width:100%}.hero-image[data-astro-cid-bvzihdzo] img[data-astro-cid-bvzihdzo]{display:block;margin:0 auto;border-radius:12px;box-shadow:var(--box-shadow)}.prose[data-astro-cid-bvzihdzo]{width:720px;max-width:calc(100% - 2em);margin:auto;padding:1em;color:rgb(var(--gray-dark))}.title[data-astro-cid-bvzihdzo]{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title[data-astro-cid-bvzihdzo] h1[data-astro-cid-bvzihdzo]{margin:0 0 .5em}.date[data-astro-cid-bvzihdzo]{margin-bottom:.5em;color:rgb(var(--gray))}.last-updated-on[data-astro-cid-bvzihdzo]{font-style:italic}\n"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.8wT3jY2O.css"},{"type":"external","src":"/_astro/_slug_.0tm5n_7v.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.8wT3jY2O.css"},{"type":"external","src":"/_astro/_slug_.0tm5n_7v.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_WD8munSC.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_4Zn2z4wO.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_2FxNWHXy.mjs","\u0000@astrojs-manifest":"manifest_uspBkJUM.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BHAiM2ZO.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_2Jl5c1oA.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_e9H895JK.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._YFoAPLNY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_1-TwVKNF.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_4d2mSmXx.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_XgoSRp13.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_UFZ3eNDH.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_W_b52kSK.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_pC_Ecqq6.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_Xh0h0vL-.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_Quo1f6Mz.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_KgUUNpK8.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_2ZPXpXit.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_cj3RxwZl.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_aY80_v_k.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_44OQE3GB.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/first-post.md":"chunks/first-post_DG0C-ln4.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_Abx_FyjL.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/second-post.md":"chunks/second-post_VhU4HHi2.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/third-post.md":"chunks/third-post_5JEp_x1H.mjs","/Users/kasunlakshitha/Developer/GitHub/devkasun-portfolio/src/content/blog/using-mdx.mdx":"chunks/using-mdx_zHdLpY00.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/profile-pic.hQjICVCX.png","/_astro/blog-cover.0rI4pikS.png","/_astro/twitter.jq3bN4qO.svg","/_astro/linkedin.RVfYPu4M.svg","/_astro/instagram.OeCuFXOW.svg","/_astro/facebook.LPGjtNs1.svg","/_astro/devkasun-color.14qgOdzh.png","/_astro/workspace-1.0DKpW0Cf.JPG","/_astro/at-sign.2dLhbHL0.svg","/_astro/menu.NgnVQyot.svg","/_astro/_slug_.0tm5n_7v.css","/_astro/about.8wT3jY2O.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-about.jpg","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/images/blog-kv.png","/images/blog-placeholder-5.jpg","/images/developer.png","/images/devkasun-color.png","/images/profile-pic.jpg","/images/profile-pic.png","/images/workspace-1.JPG","/images/workspace.jpg","/icons/at-sign.svg","/icons/facebook.svg","/icons/github.svg","/icons/instagram.svg","/icons/link.svg","/icons/linkedin.svg","/icons/menu.svg","/icons/twitter.svg"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
