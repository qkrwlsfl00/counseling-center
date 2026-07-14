import BoardList from '../../../components/boards/BoardList';
import { createBoardMetadata, getBoardConfig, loadBoardPosts } from '../../../lib/boards';

const BOARD_KEY = 'notice';
const board = getBoardConfig(BOARD_KEY);

export const metadata = createBoardMetadata(BOARD_KEY);
export const revalidate = 60;

export default async function NoticePage() {
  const posts = await loadBoardPosts(BOARD_KEY);
  return <BoardList heading={board.heading} path={board.path} posts={posts} />;
}
