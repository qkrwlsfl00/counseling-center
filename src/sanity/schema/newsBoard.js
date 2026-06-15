export const newsBoard = {
  name: 'newsBoard',
  title: '센터 소식 (게시판 글 작성)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '제목',
      description: '웹사이트 센터 소식 목록에 보여질 제목을 입력해주세요.',
      type: 'string',
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
    {
      name: 'attachments',
      title: '첨부 파일',
      description: 'PDF, HWP, DOCX 등의 파일을 첨부할 수 있습니다. (선택사항)',
      type: 'array',
      of: [{ 
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: '파일 설명 (선택사항)'
          }
        ]
      }],
    },
  ],
};
