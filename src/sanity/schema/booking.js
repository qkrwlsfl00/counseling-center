export const booking = {
  name: 'booking',
  title: '상담 예약 (문의내역)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '보호자/아동 이름',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: '연락처',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'program',
      title: '상담 희망 분야',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isVoucher',
      title: '바우처 대상 여부',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'memo',
      title: '남기실 말씀',
      type: 'text',
    },
    {
      name: 'status',
      title: '상태',
      type: 'string',
      options: {
        list: [
          { title: '접수됨 (신규)', value: 'new' },
          { title: '확인중', value: 'in-progress' },
          { title: '상담완료', value: 'completed' }
        ],
        layout: 'radio'
      },
      initialValue: 'new',
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'phone',
      date: '_createdAt',
    },
    prepare(selection) {
      const { title, subtitle, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        title: `${title} 님의 예약`,
        subtitle: `${subtitle} (${formattedDate})`,
      };
    },
  },
};
