import BoardDetail from '../../../../components/boards/BoardDetail';
import {
  createBoardPostMetadata,
  getBoardConfig,
  loadBoardPost,
} from '../../../../lib/boards';

const BOARD_KEY = 'resource';
const board = getBoardConfig(BOARD_KEY);

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { id } = await params;
  return createBoardPostMetadata(BOARD_KEY, id);
}

export default async function ResourceDetailPage({ params }) {
  const { id } = await params;
  const post = await loadBoardPost(BOARD_KEY, id);
  return <BoardDetail path={board.path} post={post} />;
}
