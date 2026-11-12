import { Header, Footer } from '../components';
import { Library } from '../library';
import { normalizePosts } from '../library-normalize';
import { blogPosts } from '../data';
import { notFound } from 'next/navigation';
import { FeaturedComparison } from './FeaturedComparison';
import { postsPerPage } from '../fleet-data';
export const PAGE_SIZE=postsPerPage;
export function BlogListing({page=1}:{page?:number}){const posts=normalizePosts(blogPosts);if(!Number.isInteger(page)||page<1||page>Math.max(1,Math.ceil(posts.length/PAGE_SIZE)))notFound();return <><Header/><main><Library kind="blog" posts={posts} page={page} pageSize={postsPerPage} archive>{page===2&&<FeaturedComparison/>}</Library></main><Footer/></>;}
