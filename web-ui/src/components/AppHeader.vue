<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
const show = ref(false)
function changeTheme(theme: string) {
  window.document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem('theme', theme)
  theme === 'light' ? show.value = true : show.value = false;
}
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

changeTheme(isDarkMode ? 'dark':'light')
</script>
  <template>
  <div class="nav-fill">
    <div class="nav-wrapper">
      <div class="nav-bar">
        <a v-if="show" href="https://www.openeuler.org/zh/" target="_blank">
          <img src="../assets/logo.png" class="nav-logo" />
        </a>
        <a v-else href="https://www.openeuler.org/zh/" target="_blank">
          <img src="../assets/withe_logo.png" class="nav-logo" />
        </a>
        <img
          src="../assets/docs-bug/icon_dark.png"
          class="icon"
          v-if="show"
          @click="changeTheme('dark')"
        />
        <img
          src="../assets/docs-bug/icon_light.png"
          class="icon"
          v-else
          @click="changeTheme('light')"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/shared/styles/mixin.scss";
.nav-fill {
  height: 60px;
  @media screen and (max-width: 1023px) {
    height: 70px;
  }
  .nav-wrapper {
    @include background_color("background_color1");
    animation: fade-in;
    animation-duration: 0.5s;
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 999;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 1023px) {
      height: 70px;
    }
    .nav-bar {
      max-width: 1416px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        cursor: pointer;
        font-size: 24px;
        color: #000;
      }
      @media screen and (max-width: 1416px) {
        width: 100%;
        padding: 0 20px;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      }
      ul li {
        display: inline-block;
      }
      .nav-logo {
        flex-shrink: 0;
        margin-right: 28px;
        cursor: pointer;
        height: 60px;
      }
      @media screen and (max-width: 1023px) {
        .nav-logo {
          width: 140px;
          height: 50px;
        }
        .nav-other-mobile {
          display: flex !important;
          flex: 0;
          font-family: Roboto !important;
          .lang > ul {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 47, 167, 0.5);
            padding: 20px;
            li {
              margin: 16px 0 0 0;
              height: 16px;
              line-height: 16px;
              font-size: 16px;
              font-family: Roboto !important;
              &:first-of-type {
                margin: 0;
              }
            }
          }
          .del-hover > ul {
            display: none;
          }
        }
      }
    }
  }
}
</style>
