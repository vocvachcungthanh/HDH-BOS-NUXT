export default {
  async ACT_GET_MENU(context) {
    // Tạm featch dữ liệu lúc nào có api thì thay thế

    try {
      const menus = [
        {
          id: '1',
          name: 'Trang chủ',
          link: '/',
          icon: 'home',
          permission: true,
          children: [],
        },
        {
          id: '2',
          name: 'Tài chính',
          link: '/financials',
          icon: 'dollar',
          permission: true,
          children: [],
        },
        {
          id: '3',
          name: 'Kinh doanh',
          link: '/business',
          icon: 'line-chart',
          permission: true,
          children: [],
        },

        {
          id: '4',
          name: 'Nhân sự',
          link: '/resources',
          icon: 'team',
          permission: true,
          children: [],
        },

        {
          id: '5',
          name: 'Cung ứng',
          link: '/supply',
          icon: 'share-alt',
          permission: true,
          children: [],
        },

        {
          id: '6',
          name: 'Marketing',
          link: '/marketing',
          icon: 'sound',
          permission: true,
          children: [],
        },

        {
          id: '7',
          name: 'Các ứng dụng',
          link: '/applications',
          icon: 'appstore',
          permission: true,
          children: [],
        },

        {
          id: '8',
          name: 'Cài đặt',
          link: '/settings',
          icon: 'settings',
          permission: true,
          children: [],
        },
      ]

      await context.commit('SET_MENU', menus)
    } catch (error) {}
  },

  ACT_SET_KEY_MENU(context, keyMenu) {
    context.commit('SET_KEY_MENU', keyMenu)
  },
}
