<template>
  <a-form
    id="components-form-normal-search"
    ref="formRef"
    :form="form"
    class="search-form"
    @submit="onSearch"
  >
    <a-input-search
      v-decorator="[
        'name',
        {
          initialValue: key,
          rules: [
            {
              required: true,
              message: 'Nhập key tìm kiếm',
            },
          ],
        },
      ]"
      :placeholder="placeholder"
      :loading="loading"
    />
  </a-form>
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
      key: 'vào',
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal-search' })
  },

  methods: {
    onSearch(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          //   this.$emit('on-key-search', values)
        }
      })
    },
  },
}
</script>
