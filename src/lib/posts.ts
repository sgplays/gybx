// This is a temporary mock implementation
// Will be replaced with Supabase integration

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  tags: string[];
  category: string;
}

export interface Comment {
  id: string;
  postId: string;
  postTitle: string;
  author: string;
  content: string;
  date: string;
}

export interface Like {
  id: string;
  postId: string;
  postTitle: string;
  date: string;
}

const posts = [
  {
    id: '1',
    title: '작은 공간을 효율적으로 활용하는 수납 팁 10가지',
    slug: 'small-space-storage-tips',
    excerpt: '좁은 공간도 스마트한 수납 솔루션으로 넓게 활용할 수 있습니다.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    date: '2024-02-10',
    tags: ['수납', '공간활용', '원룸'],
    category: 'organizing'
  },
  {
    id: '2',
    title: '2024 봄 시즌 인테리어 트렌드',
    slug: 'spring-2024-interior-trends',
    excerpt: '올 봄 트렌드 컬러와 스타일로 집 분위기를 바꿔보세요.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    date: '2024-02-09',
    tags: ['트렌드', '봄', '인테리어'],
    category: 'interior'
  },
  {
    id: '3',
    title: '미니멀 라이프를 위한 정리수납 가이드',
    slug: 'minimal-life-organization-guide',
    excerpt: '물건을 줄이고 정리하여 심플하고 깔끔한 공간을 만들어보세요.',
    content: '',
    coverImage: 'https://www.gongyoubox.com/rintkit/plugin/SE2.8.2.O12056/upload/20220926002502-CZ5H8.jpg',
    date: '2024-02-08',
    tags: ['미니멀', '정리', '라이프스타일'],
    category: 'organizing'
  },
  {
    id: '4',
    title: '주방 정리의 기술: 요리가 즐거워지는 공간 만들기',
    slug: 'kitchen-organization-tips',
    excerpt: '효율적인 주방 정리로 요리하는 즐거움을 두 배로!',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    date: '2024-02-07',
    tags: ['주방', '정리', '수납'],
    category: 'organizing'
  },
  {
    id: '5',
    title: '초보자를 위한 홈스타일링 가이드',
    slug: 'beginner-home-styling-guide',
    excerpt: '인테리어 초보자도 쉽게 따라할 수 있는 홈스타일링 팁',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7',
    date: '2024-02-06',
    tags: ['인테리어', '스타일링', '초보'],
    category: 'interior'
  },
  {
    id: '6',
    title: '우리집 정리수납 실패하지 않는 방법',
    slug: 'successful-home-organization',
    excerpt: '전문가가 알려주는 정리수납 성공 비결',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
    date: '2024-02-05',
    tags: ['정리', '수납', '팁'],
    category: 'tips'
  }
];

export async function getLatestPosts(): Promise<Post[]> {
  return posts.slice(0, 3);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return posts.filter(post => post.category === category);
}

export async function getRecentComments(): Promise<Comment[]> {
  return [
    {
      id: '1',
      postId: '1',
      postTitle: '작은 공간을 효율적으로 활용하는 수납 팁 10가지',
      author: '미니멀리스트',
      content: '수납장 활용 팁이 정말 도움이 되네요!',
      date: '2024-02-11'
    },
    {
      id: '2',
      postId: '2',
      postTitle: '2024 봄 시즌 인테리어 트렌드',
      author: '홈스타일러',
      content: '봄 컬러 조합이 너무 예쁘네요.',
      date: '2024-02-10'
    },
    {
      id: '3',
      postId: '3',
      postTitle: '미니멀 라이프를 위한 정리수납 가이드',
      author: '정리왕',
      content: '단계별로 잘 설명해주셔서 감사합니다!',
      date: '2024-02-09'
    }
  ];
}

export async function getRecentLikes(): Promise<Like[]> {
  return [
    {
      id: '1',
      postId: '1',
      postTitle: '작은 공간을 효율적으로 활용하는 수납 팁 10가지',
      date: '2024-02-11'
    },
    {
      id: '2',
      postId: '2',
      postTitle: '2024 봄 시즌 인테리어 트렌드',
      date: '2024-02-10'
    }
  ];
}