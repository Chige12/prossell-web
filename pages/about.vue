<template lang="pug">
  .about
    HeaderMenu()
    SubPageTopTitle(:title="'About Prossell'")
    .container
      .about_message Prossellとは、就活をより良いものにするために集まった学生によるオンコン(略称)運営チームです。
    SectionTitle(:title="'Members'")
    .container
      .main_wrapper
        .members_list
          .member_wrapper(v-for="(mem,mem_key) in members" :key="`men_${mem_key}`")
            a.member_link(v-if="mem.link" :href="mem.link")
              .member_role(v-if="mem.role") {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
            .member_no_link(v-else)
              .member_role(v-if="mem.role") {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
    PosterDownload
    Footer
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'
import PosterDownload from '~/components/organisms/PosterDownload.vue'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer,
    PosterDownload
  },
  data() {
    return {
      members: [
        {
          icon: 'yokoyama_kazuki',
          name: '横山和輝(kiki)',
          role: '運営代表',
          link: 'https://twitter.com/Kiki_Prossell'
        },
        {
          icon: 'hara',
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
          icon: 'hiroyuki_saito',
          name: '齋藤',
          link: 'https://www.facebook.com/bigbosshiro'
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
        { icon: 'gomi', name: '五味', link: '' },
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
        { icon: 'nakano', name: '中野', link: '' },
        { icon: 'kazama', name: '風間鼓太朗', link: '' },
        { icon: 'yuzu', name: 'yuzu', link: '' }
      ]
    }
  },
  head() {
    return {
      title: 'About',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020'
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

@media screen and (max-width: $md) {
  .member_wrapper {
    min-width: 25%;
    font-size: 1.6rem;
  }
  .about_message {
    font-size: 1.8rem;
    text-align: left;
  }
  .member_icon {
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: $sm) {
  .about_message {
    font-size: 1.6rem;
  }
  .member_wrapper {
    min-width: 30%;
  }
  .member_icon {
    width: 80px;
    height: 80px;
  }
}
</style>
