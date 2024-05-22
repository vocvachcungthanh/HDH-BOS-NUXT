<template>
  <div>
    <OrgChart :nodes="nodes" />
  </div>
</template>

<script>
import OrgChart from '~/components/pages/HumanResources/OrgChart/OrgChart.vue'

export default {
  name: 'App',
  components: {
    OrgChart,
  },
  data() {
    return {
      nodes: [
        { id: 1, name: 'Ban Giám đốc', title: '', count: 3 },
        { id: 2, pid: 1, name: 'Phòng Kinh doanh', title: '', count: 27 },
        { id: 3, pid: 1, name: 'Phòng Marketing', title: '', count: 11 },
        { id: 4, pid: 2, name: 'Trưởng Phòng Kinh doanh', title: '', count: 1 },
        { id: 5, pid: 2, name: 'Hà Nội', title: '', count: 26 },
        { id: 6, pid: 5, name: 'Trưởng vùng Hà Nội', title: '', count: 1 },
        { id: 7, pid: 5, name: 'Nhóm KD Hà Nội 01', title: '', count: 13 },
        {
          id: 8,
          pid: 7,
          name: 'Trưởng Nhóm KD Hà Nội 01',
          title: '',
          count: 1,
        },
        { id: 9, pid: 7, name: 'NVKD Nhóm KD Hà Nội 01', title: '', count: 11 },
        {
          id: 10,
          pid: 7,
          name: 'Admin Nhóm KD Hà Nội 01',
          title: '',
          count: 1,
        },
        { id: 11, pid: 5, name: 'Nhóm KD Hà Nội 02', title: '', count: 12 },
        {
          id: 12,
          pid: 11,
          name: 'Trưởng Nhóm KD Hà Nội 02',
          title: '',
          count: 1,
        },
        {
          id: 13,
          pid: 11,
          name: 'NVKD Nhóm KD Hà Nội 02',
          title: '',
          count: 10,
        },
        {
          id: 14,
          pid: 11,
          name: 'Admin Nhóm KD Hà Nội 02',
          title: '',
          count: 1,
        },
        { id: 15, pid: 3, name: 'Trưởng Phòng Marketing', title: '', count: 1 },
        { id: 16, pid: 3, name: 'BP Marketing online', title: '', count: 7 },
        {
          id: 17,
          pid: 16,
          name: 'Trưởng BP Marketing online',
          title: '',
          count: 1,
        },
        { id: 18, pid: 16, name: 'Nhóm Digital', title: '', count: 3 },
        { id: 19, pid: 18, name: 'NV Social mediaa', title: '', count: 1 },
        { id: 20, pid: 18, name: 'NV SEO', title: '', count: 1 },
        { id: 21, pid: 18, name: 'NV Ads', title: '', count: 1 },
        { id: 22, pid: 16, name: 'Nhóm Content', title: '', count: 3 },
        { id: 23, pid: 22, name: 'NV Copywriter', title: '', count: 1 },
        { id: 24, pid: 22, name: 'NV Thiết kế', title: '', count: 1 },
        { id: 25, pid: 22, name: 'NV Quay dựng', title: '', count: 1 },
      ],
    }
  },
}
</script>
