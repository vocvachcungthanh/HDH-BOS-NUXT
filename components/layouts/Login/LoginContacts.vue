<template>
  <div class="mt-12">
    <h3 class="text-center text-gray-500">Liên hệ với chúng tôi tại</h3>
    <div class="flex justify-center items-center gap-4 pt-3">
      <a
        v-for="contact in contacts"
        :key="contact.id"
        :href="contact.link"
        :style="contact.style"
        target="_blank"
        class="flex w-10 h-10 justify-center items-center rounded-full text-xl transition-all text-white bg-[var(--bg)] hover:opacity-75"
      >
        <BosIcon
          :icon="contact.icon"
          :title="contact.name"
          tooltip
          placement="top"
        />
      </a>
    </div>
  </div>
</template>

<script>
import BosIcon from '~/components/common/BosIcon'

export default {
  components: {
    BosIcon,
  },

  data() {
    return {
      contacts: [
        {
          id: 1,
          link: 'https://www.instagram.com/',
          name: 'instagram',
          icon: 'instagram',
          style: '--bg:#C13584',
        },

        {
          id: 2,
          link: 'https://www.youtube.com/',
          name: 'youtube',
          icon: 'youtube',
          style: '--bg:#E51C1C',
        },

        {
          id: 3,
          link: 'https://www.linkedin.com/',
          name: 'linkedin',
          icon: 'linkedin',
          style: '--bg:#0077B5',
        },

        {
          id: 4,
          link: 'https://www.facebook.com/',
          name: 'facebook',
          icon: 'facebook',
          style: '--bg:#3B5998',
        },

        {
          id: 5,
          link: 'https://twitter.com/',
          name: 'twitter',
          icon: 'twitter',
          style: '--bg:#1DA1F2',
        },
      ],
    }
  },
}
</script>
