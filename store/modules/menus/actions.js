export default {
  async ACT_GET_MENU(context) {
    // Tạm featch dữ liệu lúc nào có api thì thay thế

    try {
      const menus = [
        {
          id: 1,
          name: 'Trang chủ',
          link: '/',
          icon: 'home',
          permission: true,
          children: [],
        },
        {
          id: 2,
          name: 'Tài chính',
          link: '/financials',
          icon: 'dollar',
          permission: true,
          children: [],
        },
        {
          id: 3,
          name: 'Kinh doanh',
          link: '/business',
          icon: 'line-chart',
          permission: true,
          children: [],
        },

        {
          id: 4,
          name: 'Nhân sự',
          link: '/human-resources',
          icon: 'team',
          permission: true,
          children: [
            {
              id: 4.1,
              name: 'Sơ đồ tổ chức',
              link: null,
              icon: null,
              permission: true,

              children: [
                {
                  id: 4.11,
                  name: 'Danh sách đơn vị',
                  link: '/human-resources/units',
                  icon: 'read',
                },
                {
                  id: 4.12,
                  name: 'Danh vị trí',
                  link: '/human-resources/positions',
                  icon: 'build',
                },
              ],
            },
          ],
        },

        {
          id: 5,
          name: 'Cung ứng',
          link: '/supply',
          icon: 'share-alt',
          permission: true,
          children: [],
        },

        {
          id: 6,
          name: 'Marketing',
          link: '/marketing',
          icon: 'sound',
          permission: true,
          children: [],
        },

        {
          id: 7,
          name: 'Các ứng dụng',
          link: '/applications',
          icon: 'appstore',
          permission: true,
          children: [],
        },

        {
          id: 8,
          name: 'Cài đặt',
          link: '/settings',
          icon: 'setting',
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

  ACT_MENU_CHILDREN(context, id) {
    try {
      const menuItem = context.state.menus.find((menu) => menu.id === id)

      context.commit('SET_CHILDREN_MENU', menuItem)
      context.commit('SET_TITLE_HEADER', menuItem.name)
      return Promise.resolve(true)
    } catch (_error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(false)
    }
  },
}
