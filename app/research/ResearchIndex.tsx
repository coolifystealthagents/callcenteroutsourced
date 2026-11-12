import { Header, Footer } from '../components';
import { Library } from '../library';
import { normalizePosts } from '../library-normalize';
import { researchPosts } from '../fleet-data';
import { researchPostsPerPage } from '../fleet-data';
export function ResearchIndex({currentPage}:{currentPage:number}){const posts=normalizePosts(researchPosts, 'research');return <><Header/><main><Library kind="research" posts={posts} page={currentPage} pageSize={researchPostsPerPage} archive/></main><Footer/></>;}
