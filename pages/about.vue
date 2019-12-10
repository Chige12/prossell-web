<template lang="pug">
  .corporates
    HeaderMenu()
    SubPageTopTitle(:title="'About Prossell'")
    .container
      .about_message Prossellとは、就活をより良いものにするために集まった学生によるオンコン(略称)運営チームです。
    SectionTitle(:title="'Members'")
    .container
      .main_wrapper
        .members_list
          .member_wrapper(v-for="(mem,men_key) in members" :key="`men_${mem_key}`")
            a.member_link(v-if="mem.link" :href="mem.link")
              .member_role(v-if="mem.role") {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
            .member_no_link(v-else)
              .member_role(v-if="mem.role") {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
    Footer
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer
  },
  data() {
    return {
      members: [
        {
          icon: 'yokoyama_kazuki',
          name: '横山和輝',
          role: '運営代表',
          link: 'https://twitter.com/Kiki_Prossell'
        },
        {
          icon: 'no_icon',
          name: '徳山高専\n原洋介 特命准教授',
          role: 'アドバイザー',
          link: 'https://www.facebook.com/satetsuman'
        },
        {
          icon: 'kantaro',
          name: '吉村勘太郎',
          link: 'https://www.facebook.com/yoka0930'
        },
        {
          icon: 'no_icon',
          name: '齋藤',
          link: ''
        },
        {
          icon: 'chige',
          name: '内田啓太(ちげ)',
          link: 'https://twitter.com/chige12_'
        },
        {
          icon: 'miyaji',
          name: '宮地篤士',
          link: 'https://twitter.com/tussy5969'
        },
        { icon: 'no_icon', name: '五味', link: '' },
        {
          icon: 'shion_watanabe',
          name: '渡辺紫音',
          link: 'https://www.facebook.com/profile.php?id=100006874932579'
        },
        {
          icon: 'moe_ishihara',
          name: 'もえ',
          link: 'https://www.instagram.com/0627pink/'
        },
        {
          icon: 'yako',
          name: 'yako',
          link: 'https://mobile.twitter.com/ujidam'
        },
        {
          icon: 'ssid',
          name: 'SSID',
          link: 'https://twitter.com/realize_Sora'
        },
        {
          icon: 'lakhesis',
          name: 'ラキシス',
          link: 'https://twitter.com/L4khesis'
        },
        { icon: 'no_icon', name: '中野', link: '' },
        { icon: 'no_icon', name: '風間', link: '' },
        { icon: 'yuzu', name: 'yuzu', link: '' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.about_message {
  margin: 24px 0 48px;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.members_list {
  @include flex(
    $wrap: wrap,
    $justifyContent: space-around,
    $alignItems: flex-start
  );
}

.member_wrapper {
  min-width: 20%;
  text-align: center;
  font-size: 1.8rem;
  padding: 24px 0 48px;
}
.member_link {
  display: block;
  position: relative;
}
.member_no_link {
  display: block;
  position: relative;
}

.member_role {
  @include absolute($top: -36px);
  width: 100%;
  text-align: center;
  padding-bottom: 8px;
}

.member_icon {
  display: block;
  margin: 4px auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  transition: 0.4s $ease-out-1;
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba($black, 0);
}
.member_name {
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-top: 4px;
}

a:hover {
  .member_icon {
    transform: translateY(-6px);
    box-shadow: 0 4px 8px rgba($black, 0.4);
  }
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: $black-txt;
}
</style>
