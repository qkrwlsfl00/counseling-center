export const notice = {
  name: 'notice',
  title: '공지사항 (게시판 글 작성)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '제목',
      description: '웹사이트 공지사항 목록에 보여질 제목을 입력해주세요.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: '글 분류',
      description: '이 글이 어떤 종류의 소식인지 하나를 선택해주세요.',
      type: 'string',
      options: {
        list: [
          { title: '이벤트', value: '이벤트' },
          { title: '바우처 소식', value: '바우처 소식' },
          { title: '교육 정보', value: '교육 정보' },
          { title: '기타', value: '기타' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: '작성 날짜',
      description: '달력 아이콘을 눌러 이 글의 날짜를 선택해주세요.',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: '본문 내용',
      description: '글의 본문을 자유롭게 작성해주세요. 사진을 넣거나 글씨를 굵게 할 수도 있습니다.',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image',
          title: '사진 첨부',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: '대체 텍스트',
              type: 'string',
              description: '시각 장애인이나 사진이 안 보이는 상황을 위해 사진에 대한 짧은 설명을 적어주세요.',
            }
          ]
        }
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
