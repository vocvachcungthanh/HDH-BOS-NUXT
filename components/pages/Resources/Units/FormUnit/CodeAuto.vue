<template>
  <a-form-item label="Mã phòng ban" :colon="false">
    <div
      v-decorator="['code']"
      class="h-10 font-bold px-[11px] cursor-not-allowed bg-[#f5f5f5] rounded border border-collapse"
      size="large"
    >
      {{ getCode }}
    </div>
  </a-form-item>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    codeProp: {
      type: String,
      default: () => null,
    },
  },

  computed: {
    getCode() {
      return this.codeProp ? this.codeProp : this.code
    },

    ...mapGetters({
      code: 'GET_CODE_DEPARTMENT',
    }),
  },

  created() {
    this.$store.dispatch('ACT_CREATE_CODE_DEPARTMENT')
  },
}
</script>
