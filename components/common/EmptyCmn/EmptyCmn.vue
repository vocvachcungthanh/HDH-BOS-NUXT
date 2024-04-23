<template>
  <a-empty :description="desc" />
</template>

<script>
import { NO_DATA } from '~/contacts'

export default {
  data() {
    return {
      desc: NO_DATA,
    }
  },
}
</script>
