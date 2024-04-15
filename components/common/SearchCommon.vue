<template>
  <a-input-search
    :placeholder="placeholder"
    :loading="loading"
    @search="onSearch"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Tìm kiếm ...',
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      key: '',
    }
  },

  methods: {
    onSearch(value) {
      if (value === '') {
        const modal = this.$warning({
          title: 'Thông báo BOS',
          content: 'Bạn chưa nhập từ khóa tìm kiếm',
        })

        modal.update()
        this.$emit('no-key')
      } else {
        this.$emit('on-key-search', value)
      }
    },
  },
}
</script>
