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
                  name: 'Danh sách vị trí',
                  link: '/human-resources/positions',
                  icon: 'build',
                },
                {
                  id: 4.13,
                  name: 'Danh sách nhân viên',
                  link: '/human-resources/staffs',
                  icon: 'idcard',
                },
                {
                  id: 4.14,
                  name: 'Sơ đồ tổ chức',
                  link: '/human-resources/organization-chart',
                  icon: 'apartment',
                },
              ],
            },
            {
              id: 4.2,
              name: 'Kế hoạch nhân sự',
              link: null,
              icon: null,
              permission: true,

              children: [
                {
                  id: 4.21,
                  name: 'Ngạch lương',
                  link: '/human-resources/units',
                  icon: 'dollar',
                },
                {
                  id: 4.22,
                  name: 'Bậc lương',
                  link: '/human-resources/positions',
                  icon: 'build',
                },
                {
                  id: 4.23,
                  name: 'Phụ cấp',
                  link: '/human-resources/staffs',
                  icon: 'container',
                },
                {
                  id: 4.24,
                  name: 'Kế hoạch chi phí nhân sự (Năm)',
                  link: '/human-resources/organization-chart',
                  icon: 'stock',
                },

                {
                  id: 4.25,
                  name: 'Kế hoạch chi phí nhấn sự (Tháng)',
                  link: '/human-resources/organization-chart',
                  icon: 'diff',
                },
                {
                  id: 4.26,
                  name: 'Kế hoạch chi phí nhân sự 12 tháng',
                  link: '/human-resources/organization-chart',
                  icon: 'snippets',
                },

                {
                  id: 4.27,
                  name: 'Thưởng doanh thu theo đơn vị',
                  link: '/human-resources/organization-chart',
                  icon: 'dollar',
                },
              ],
            },
            {
              id: 4.3,
              name: 'Báo cáo nhân sự',
              link: null,
              icon: null,
              permission: true,

              children: [
                {
                  id: 4.31,
                  name: 'Bảng lương tháng',
                  link: '/human-resources/units',
                  icon: 'pie-chart',
                },
                {
                  id: 4.32,
                  name: 'Thống kê nhân sự theo đơn vị',
                  link: '/human-resources/positions',
                  icon: 'bar-chart',
                },
              ],
            },
            {
              id: 4.4,
              name: 'Công việc',
              link: null,
              icon: null,
              permission: true,

              children: [
                {
                  id: 4.41,
                  name: 'Chuỗi giá trị',
                  link: '/human-resources/units',
                  icon: 'appstore',
                },
                {
                  id: 4.42,
                  name: 'Chức năng',
                  link: '/human-resources/positions',
                  icon: 'alert',
                },

                {
                  id: 4.43,
                  name: 'Nhiệm vụ',
                  link: '/human-resources/positions',
                  icon: 'wallet',
                },
                {
                  id: 4.44,
                  name: 'Danh sách công việc',
                  link: '/human-resources/positions',
                  icon: 'block',
                },
                {
                  id: 4.45,
                  name: 'Giao việc',
                  link: '/human-resources/positions',
                  icon: 'number',
                },
                {
                  id: 4.46,
                  name: 'KPI Công việc',
                  link: '/human-resources/positions',
                  icon: 'gateway',
                },
                {
                  id: 4.47,
                  name: 'Mô tả công việc',
                  link: '/human-resources/positions',
                  icon: 'file-protect',
                },
                {
                  id: 4.48,
                  name: 'Giao khoán',
                  link: '/human-resources/positions',
                  icon: 'gold',
                },
                {
                  id: 4.49,
                  name: 'Thiết lập khoán',
                  link: '/human-resources/positions',
                  icon: 'deployment-unit',
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
