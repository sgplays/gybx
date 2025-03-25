/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_aZV3MbuT.mjs';
import 'kleur/colors';
import { g as getPostsByCategory, $ as $$Layout } from '../../chunks/posts_qnHCPBnl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Organizing = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPostsByCategory("organizing");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\uC9D1\uC815\uB9AC" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold text-primary mb-4">집정리</h1> <p class="text-secondary">효율적인 공간 활용과 체계적인 수납 방법을 소개합니다.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(post.coverImage, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <div class="flex gap-2 mb-2"> ${post.tags.map((tag) => renderTemplate`<span class="text-sm text-accent bg-accent/10 px-2 py-1 rounded-full"> ${tag} </span>`)} </div> <h2 class="text-xl font-bold text-primary mb-2"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="hover:text-accent"> ${post.title} </a> </h2> <p class="text-secondary mb-4">${post.excerpt}</p> <div class="flex justify-between items-center text-sm text-gray-500"> <span>${post.date}</span> <div class="flex gap-2"> <button class="hover:text-accent">좋아요</button> <button class="hover:text-accent">공유하기</button> </div> </div> </div> </article>`)} </div> ` })}`;
}, "/home/project/src/pages/categories/organizing.astro", void 0);

const $$file = "/home/project/src/pages/categories/organizing.astro";
const $$url = "/categories/organizing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Organizing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
