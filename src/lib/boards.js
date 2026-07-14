import 'server-only';
import { cache } from 'react';
import { client } from '../sanity/client';
import {
  newsBoardDetailQuery,
  newsBoardsQuery,
  noticeDetailQuery,
  noticesQuery,
  resourceBoardDetailQuery,
  resourceBoardsQuery,
} from '../sanity/queries';

const boardConfigs = {
  notice: {
    path: '/notice',
    heading: '공지사항',
    metadataTitle: '공지사항',
    description: '드림학습코칭상담센터의 운영 안내, 바우처 소식과 주요 공지사항을 확인하세요.',
    listQuery: noticesQuery,
    detailQuery: noticeDetailQuery,
  },
  news: {
    path: '/news',
    heading: '센터 소식',
    metadataTitle: '센터 소식',
    description: '드림학습코칭상담센터의 새로운 소식과 유용한 교육 정보를 전해드립니다.',
    listQuery: newsBoardsQuery,
    detailQuery: newsBoardDetailQuery,
  },
  resource: {
    path: '/resource',
    heading: '자료실',
    metadataTitle: '상담·교육 자료실',
    description: '아동·청소년 심리상담, 발달, 학습코칭과 부모교육에 도움이 되는 전문 자료를 확인하세요.',
    listQuery: resourceBoardsQuery,
    detailQuery: resourceBoardDetailQuery,
  },
};

function getErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

export function getBoardConfig(boardKey) {
  const config = boardConfigs[boardKey];

  if (!config) {
    throw new Error(`Unknown board: ${boardKey}`);
  }

  return config;
}

export function createBoardMetadata(boardKey) {
  const config = getBoardConfig(boardKey);

  return {
    title: config.metadataTitle,
    description: config.description,
    alternates: { canonical: config.path },
  };
}

export const getBoardPosts = cache(async (boardKey) => {
  const { listQuery } = getBoardConfig(boardKey);
  return client.fetch(listQuery);
});

export const getBoardPost = cache(async (boardKey, id) => {
  const { detailQuery } = getBoardConfig(boardKey);
  return client.fetch(detailQuery, { id });
});

export async function loadBoardPosts(boardKey) {
  try {
    return await getBoardPosts(boardKey);
  } catch (error) {
    console.error(`Failed to load ${boardKey} posts:`, getErrorMessage(error));
    return [];
  }
}

export async function loadBoardPost(boardKey, id) {
  try {
    return await getBoardPost(boardKey, id);
  } catch (error) {
    console.error(`Failed to load ${boardKey} post:`, getErrorMessage(error));
    return null;
  }
}

export async function createBoardPostMetadata(boardKey, id) {
  const config = getBoardConfig(boardKey);

  try {
    const post = await getBoardPost(boardKey, id);

    if (post) {
      return {
        title: post.title,
        description: post.title,
        alternates: { canonical: `${config.path}/${id}` },
      };
    }
  } catch (error) {
    console.error(`Failed to load ${boardKey} metadata:`, getErrorMessage(error));
  }

  return {
    title: '게시글을 찾을 수 없습니다',
    robots: { index: false, follow: false },
  };
}
