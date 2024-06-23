// app/blogs/[blogId]/page.tsx
import { Header } from 'app/compornents/Header/Header';
import { getDetail, getBlogs } from 'app/libs/client';
import Link from 'next/link';

// 静的パスを生成する関数
export async function generateStaticParams() {
  const { contents } = await getBlogs();

  return contents.map((blog: { id: string; }) => ({
    blogId: blog.id,
  }));
}

// サーバーコンポーネントとしての詳細ページ
export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getDetail(blogId);

  return (
    <div className=''>
      <Header />
      <div className='m-10 pt-40'>
        <p>{blog.title}</p>
        <br></br>
        <div className='mb-10'
          dangerouslySetInnerHTML={{
            __html: blog.body,
          }}
        />
        <br></br>
        <Link href={'/blogs'} className="return-top bg-gray-300">記事一覧に戻る</Link>
      </div>

    </div>
  );
};