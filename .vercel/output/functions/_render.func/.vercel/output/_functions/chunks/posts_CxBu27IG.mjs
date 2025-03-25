import { c as createComponent, d as createAstro, b as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_aZV3MbuT.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "\uACF5\uC720\uBC15\uC2A4 - \uB2F9\uC2E0\uC758 \uACF5\uAC04\uC744 \uB354 \uD2B9\uBCC4\uD558\uAC8C" } = Astro2.props;
  return renderTemplate`<html lang="ko"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title} | 공유박스</title><link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> <header class="bg-white shadow-sm"> <nav class="container mx-auto px-4 py-4"> <div class="flex justify-between items-center"> <a href="/" class="text-2xl font-bold text-primary">공유박스</a> <div class="flex items-center gap-8"> <div class="flex gap-8"> <a href="/" class="text-secondary hover:text-accent">홈</a> <div class="relative group"> <button class="text-secondary hover:text-accent">
카테고리
</button> <ul class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 mt-2 min-w-[120px]"> <li> <a href="/categories/organizing" class="block px-4 py-2 text-secondary hover:bg-gray-50 hover:text-accent">
집정리
</a> </li> <li> <a href="/categories/interior" class="block px-4 py-2 text-secondary hover:bg-gray-50 hover:text-accent">
인테리어
</a> </li> <li> <a href="/categories/tips" class="block px-4 py-2 text-secondary hover:bg-gray-50 hover:text-accent">
꿀팁
</a> </li> </ul> </div> <a href="/about" class="text-secondary hover:text-accent">소개</a> </div> <div class="relative"> <div class="flex items-center bg-gray-50 rounded-lg px-4 py-2"> <input type="search" placeholder="검색어를 입력하세요" class="bg-transparent border-none outline-none w-[200px] text-secondary placeholder:text-gray-400"> <button class="ml-2 text-secondary hover:text-accent"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path> </svg> </button> </div> </div> </div> </div> </nav> </header> <main class="container mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-primary text-white mt-auto"> <div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-xl font-bold mb-4">공유박스</h3> <p class="text-gray-300">당신의 공간을 더 특별하게</p> </div> <div> <h3 class="text-xl font-bold mb-4">카테고리</h3> <ul class="space-y-2"> <li><a href="/categories/organizing" class="text-gray-300 hover:text-light">집정리</a></li> <li><a href="/categories/interior" class="text-gray-300 hover:text-light">인테리어</a></li> <li><a href="/categories/tips" class="text-gray-300 hover:text-light">꿀팁</a></li> </ul> </div> <div> <h3 class="text-xl font-bold mb-4">구독하기</h3> <p class="text-gray-300 mb-4">최신 포스트를 이메일로 받아보세요</p> <form class="flex gap-2"> <input type="email" placeholder="이메일 주소" class="px-4 py-2 rounded-lg flex-1 text-gray-900"> <button type="submit" class="bg-light text-primary px-4 py-2 rounded-lg hover:bg-opacity-90">
구독하기
</button> </form> </div> </div> </div> </footer> </body></html>`;
}, "C:/Temp/test_w13_bolt-blog/gybxblogtest02/src/layouts/Layout.astro", void 0);

const posts = [
  {
    id: "1",
    title: "작은 공간을 효율적으로 활용하는 수납 팁 10가지",
    slug: "small-space-storage-tips",
    excerpt: "좁은 공간도 스마트한 수납 솔루션으로 넓게 활용할 수 있습니다.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    date: "2024-02-10",
    tags: ["수납", "공간활용", "원룸"],
    category: "organizing"
  },
  {
    id: "2",
    title: "2024 봄 시즌 인테리어 트렌드",
    slug: "spring-2024-interior-trends",
    excerpt: "올 봄 트렌드 컬러와 스타일로 집 분위기를 바꿔보세요.",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    date: "2024-02-09",
    tags: ["트렌드", "봄", "인테리어"],
    category: "interior"
  },
  {
    id: "3",
    title: "미니멀 라이프를 위한 정리수납 가이드",
    slug: "minimal-life-organization-guide",
    excerpt: "물건을 줄이고 정리하여 심플하고 깔끔한 공간을 만들어보세요.",
    content: "",
    coverImage: "https://www.gongyoubox.com/rintkit/plugin/SE2.8.2.O12056/upload/20220926002502-CZ5H8.jpg",
    date: "2024-02-08",
    tags: ["미니멀", "정리", "라이프스타일"],
    category: "organizing"
  },
  {
    id: "4",
    title: "주방 정리의 기술: 요리가 즐거워지는 공간 만들기",
    slug: "kitchen-organization-tips",
    excerpt: "효율적인 주방 정리로 요리하는 즐거움을 두 배로!",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    date: "2024-02-07",
    tags: ["주방", "정리", "수납"],
    category: "organizing"
  },
  {
    id: "5",
    title: "초보자를 위한 홈스타일링 가이드",
    slug: "beginner-home-styling-guide",
    excerpt: "인테리어 초보자도 쉽게 따라할 수 있는 홈스타일링 팁",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
    date: "2024-02-06",
    tags: ["인테리어", "스타일링", "초보"],
    category: "interior"
  },
  {
    id: "6",
    title: "우리집 정리수납 실패하지 않는 방법",
    slug: "successful-home-organization",
    excerpt: "전문가가 알려주는 정리수납 성공 비결",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    date: "2024-02-05",
    tags: ["정리", "수납", "팁"],
    category: "tips"
  }
];
async function getLatestPosts() {
  return posts.slice(0, 3);
}
async function getPostsByCategory(category) {
  return posts.filter((post) => post.category === category);
}
async function getRecentComments() {
  return [
    {
      id: "1",
      postId: "1",
      postTitle: "작은 공간을 효율적으로 활용하는 수납 팁 10가지",
      author: "미니멀리스트",
      content: "수납장 활용 팁이 정말 도움이 되네요!",
      date: "2024-02-11"
    },
    {
      id: "2",
      postId: "2",
      postTitle: "2024 봄 시즌 인테리어 트렌드",
      author: "홈스타일러",
      content: "봄 컬러 조합이 너무 예쁘네요.",
      date: "2024-02-10"
    },
    {
      id: "3",
      postId: "3",
      postTitle: "미니멀 라이프를 위한 정리수납 가이드",
      author: "정리왕",
      content: "단계별로 잘 설명해주셔서 감사합니다!",
      date: "2024-02-09"
    }
  ];
}
async function getRecentLikes() {
  return [
    {
      id: "1",
      postId: "1",
      postTitle: "작은 공간을 효율적으로 활용하는 수납 팁 10가지",
      date: "2024-02-11"
    },
    {
      id: "2",
      postId: "2",
      postTitle: "2024 봄 시즌 인테리어 트렌드",
      date: "2024-02-10"
    }
  ];
}

export { $$Layout as $, getLatestPosts as a, getRecentComments as b, getRecentLikes as c, getPostsByCategory as g };
