export const centerGallery = {
  name: 'centerGallery',
  title: '센터 사진 갤러리 (사진 추가/삭제)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '제목',
      type: 'string',
      description: '갤러리 이름 (예: 센터 사진 목록)',
      initialValue: '센터 사진 목록'
    },
    {
      name: 'images',
      title: '센터 사진들',
      description: '센터 사진들을 자유롭게 추가하고 순서를 변경할 수 있습니다.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: '대체 텍스트',
              type: 'string',
              description: '시각 장애인이나 사진이 안 보이는 상황을 위해 사진에 대한 짧은 설명을 적어주세요. (예: 센터 전경)',
            }
          ]
        }
      ]
    }
  ]
};
