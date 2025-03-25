/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_aZV3MbuT.mjs';
import 'kleur/colors';
import { a as getLatestPosts, b as getRecentComments, c as getRecentLikes, $ as $$Layout } from '../chunks/posts_CxBu27IG.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const latestPosts = await getLatestPosts();
  const recentComments = await getRecentComments();
  const recentLikes = await getRecentLikes();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\uD648" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mb-12"> <h1 class="text-4xl font-bold text-primary mb-6">공유박스에 오신 것을 환영합니다</h1> <p class="text-lg text-secondary mb-8">
트렌디한 집정리와 인테리어 팁으로 당신의 공간을 더 특별하게 만들어보세요.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold text-primary mb-6">최신 포스트</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${latestPosts.map((post) => renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(post.coverImage, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <div class="flex gap-2 mb-2"> ${post.tags.map((tag) => renderTemplate`<span class="text-sm text-accent bg-accent/10 px-2 py-1 rounded-full"> ${tag} </span>`)} </div> <h3 class="text-xl font-bold text-primary mb-2"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="hover:text-accent"> ${post.title} </a> </h3> <p class="text-secondary mb-4">${post.excerpt}</p> <div class="flex justify-between items-center text-sm text-gray-500"> <span>${post.date}</span> <div class="flex gap-2"> <button class="hover:text-accent">좋아요</button> <button class="hover:text-accent">공유하기</button> </div> </div> </div> </article>`)} </div> </section> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <section class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-xl font-bold text-primary mb-4">최근 댓글</h2> <div class="space-y-4"> ${recentComments.map((comment) => renderTemplate`<div class="border-b border-gray-100 last:border-0 pb-4 last:pb-0"> <div class="flex justify-between items-start mb-2"> <span class="font-medium text-secondary">${comment.author}</span> <span class="text-sm text-gray-500">${comment.date}</span> </div> <p class="text-secondary mb-2">${comment.content}</p> <a${addAttribute(`/posts/${comment.postId}`, "href")} class="text-sm text-accent hover:underline"> ${comment.postTitle} </a> </div>`)} </div> </section> <section class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-xl font-bold text-primary mb-4">최근 좋아요</h2> <div class="space-y-4"> ${recentLikes.map((like) => renderTemplate`<div class="border-b border-gray-100 last:border-0 pb-4 last:pb-0"> <div class="flex justify-between items-start"> <a${addAttribute(`/posts/${like.postId}`, "href")} class="text-secondary hover:text-accent"> ${like.postTitle} </a> <span class="text-sm text-gray-500">${like.date}</span> </div> </div>`)} </div> </section> </div> ` })}`;
}, "C:/Temp/test_w13_bolt-blog/gybxblogtest02/src/pages/index.astro", void 0);

const $$file = "C:/Temp/test_w13_bolt-blog/gybxblogtest02/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
