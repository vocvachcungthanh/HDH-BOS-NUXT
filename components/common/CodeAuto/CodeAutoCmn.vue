<template>
  <a-form-item :label="lable" :colon="false">
    <div
      v-decorator="[
        'code',
        {
          initialValue: getCode,
        },
      ]"
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

    lable: {
      type: String,
      default: 'Mã vị trí',
    },

    nameModal: {
      type: String,
      default: 'code_postion',
    },
  },

  computed: {
    getCode() {
      let code = null

      if (this.nameModal === 'code_postion') {
        code = this.codeProp ? this.codeProp : this.codePostion
      }

      if (this.nameModal === 'code_department') {
        code = this.codeProp ? this.codeProp : this.codeDepartment
      }

      return code
    },

    ...mapGetters({
      codePostion: 'GET_CODE_POSTION',
      codeDepartment: 'GET_CODE_DEPARTMENT',
    }),
  },

  async created() {
    switch (this.nameModal) {
      case 'code_postion':
        await this.$store.dispatch('ACT_CREATE_CODE_POSTION')
        break
      case 'code_department':
        await this.$store.dispatch('ACT_CREATE_CODE_DEPARTMENT')
        break

      default:
        break
    }
  },
}
</script>
