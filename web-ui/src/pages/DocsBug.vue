<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
import NavRight from '@/components/NavRight.vue';
import { getRank } from '@/api/docs-api';
import {
  bannerLabels,
  introduction,
  howToJoin,
  rule,
  prize,
  rank,
  navList,
} from '@/assets/language/debug-text';
import { ref, onMounted, onUnmounted } from 'vue';
import { ElLoading } from 'element-plus';
import { dateHandle } from '@/stores/integral';

const showAll = ref(false);
const isExent = ref(false);
const showNav = ref(false);
const switchTab = ref(0);
const rankTab = ref(0);
const value = ref('1月');

const valueQuarter = ref('');
const currentDate = new Date();
let rankInfo = ref<rankData[]>([]);
let renderData = ref<rankData[]>([]);
const currentIndex = ref(0);

const badge = ref(10);

interface rankData {
  issue_author: string;
  badge: string;
  giteeRoom: string;
  issue_score: number;
  rank: number;
}
interface params {
  start: string;
  end: string;
}

const bland = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
// 图片动态路径处理

function getImageUrl(name: string) {
  return new URL(`../assets/docs-bug/${name}`, import.meta.url).href;
}

function showRank(params: params) {
  const loadingInstance = ElLoading.service({ fullscreen: true });
  getRank(params)
    .then((res) => {
      if (res.data.length) {
        let info: Array<rankData> = res.data;
        info.sort((a, b) => {
          return b.issue_score - a.issue_score;
        });
        // 3-10人 10%取第一名 10%-30% 取剩余；小于3人 按10%的徽章颁发，其余奖章不发
        info.forEach((item, index) => {
          item['giteeRoom'] = `https://gitee.com/${item.issue_author}`;
          item['rank'] = index + 1;
          if (rankTab.value === 0) {
            let percentage =
              Math.round(((index + 1) / info.length) * 10000) / 100.0;
            if (info.length < 3) {
              item['badge'] = 'prize-2.png';
            } else if (info.length >= 3 && info.length < 10) {
              percentage > 10 && percentage <= 30
                ? (item['badge'] = 'prize-3.png')
                : '';
              index === 0 ? (item['badge'] = 'prize-2.png') : '';
            } else {
              percentage <= 10 ? (item['badge'] = 'prize-2.png') : '';
              percentage > 10 && percentage <= 30
                ? (item['badge'] = 'prize-3.png')
                : '';
            }
          } else if (
            info.length >= 10 &&
            valueQuarter.value !== rank.quarterList[0]
          ) {
          
          }
        });
        // 相同分数并列获奖
        if (rankTab.value === 0) {
          let prize1 = info.filter((item) => {
            return item.badge === 'prize-2.png';
          });
          let prize2 = info.filter((item) => {
            return item.badge === 'prize-3.png';
          });
          try {
            let rankScore1 = prize1[prize1.length - 1].issue_score || null;
            let rankScore2 = prize2[prize2.length - 1].issue_score || null;
            info.forEach((item, index) => {
              item.issue_score === rankScore1
                ? (item['badge'] = 'prize-2.png')
                : '';
              item.issue_score === rankScore2
                ? (item['badge'] = 'prize-3.png')
                : '';
              item.badge ? (badge.value = index + 1) : '';
            });
          } catch (error) {
            console.log(error);
          }
        }
        rankInfo.value = info;
        // 1.人数多于10人展示 前10
        // 2.展示所有获奖者
        if (info.length > 10) {
          showAll.value = true;
          badge.value > 10
            ? (renderData.value = rankInfo.value.slice(0, badge.value))
            : (renderData.value = rankInfo.value.slice(0, 10));
        } else {
          showAll.value = false;
          renderData.value = rankInfo.value;
        }
      } else {
        renderData.value = [];
        showAll.value = false;
      }
      loadingInstance.close();
    })
    .catch((err) => {
      loadingInstance.close();
      console.log(err);
    });
}

function showExtend() {
  if (isExent.value) {
    badge.value > 10
      ? (renderData.value = rankInfo.value.slice(0, badge.value))
      : (renderData.value = rankInfo.value.slice(0, 10));
  } else {
    renderData.value = rankInfo.value;
  }
  isExent.value = !isExent.value;
}

// 导航栏点击滚动
function scrollTop() {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 240 && scrollTop < 5439) {
    showNav.value = true;
  } else {
    showNav.value = false;
  }
  const jump = document.querySelectorAll('.do-jump') as NodeListOf<HTMLElement>;
  const topArr: Array<number> = [];
  for (let i = 0; i < jump.length; i++) {
    topArr.push(jump[i].offsetTop);
  }
  for (let i = 0; i < topArr.length; i++) {
    if (scrollTop <= topArr[i] - 200) {
      currentIndex.value = i;
      break;
    }
  }
}

function rankChange(index: number) {
  isExent.value = false;
  rankTab.value = index;
  index === 0
    ? selectChange(currentDate.getMonth() + 1, index)
    : selectChange(1, index);
  value.value = rank.monthList[currentDate.getMonth()];
  valueQuarter.value = rank.quarterList[1];
}

function tabChange(index: number) {
  switchTab.value = index;
}

// 获取日期天数
function selectChange(month: any, tab: number) {
  isExent.value = false;
  showRank(dateHandle(month, tab));
}

function scrollView(key: string) {
  (document.querySelector(`${key}`) as HTMLElement).scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
}

onMounted(() => {
  window.addEventListener('scroll', scrollTop);
  value.value = rank.monthList[currentDate.getMonth()];
  selectChange(currentDate.getMonth() + 1, rankTab.value);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollTop);
});
</script>

<template>
  <NavRight
    v-show="showNav"
    :current-index="currentIndex"
    :data-list="navList"
    class="titlenav"
    @click="scrollView"
  ></NavRight>
  <div class="out-banner">
    <div class="banner">
      <div class="banner-label">
        <p
          v-for="item in bannerLabels.title"
          :key="item.id"
          class="banner-label-title"
        >
          {{ item.text }}
        </p>
        <p class="banner-label-desc">{{ bannerLabels.description }}</p>
        <div class="btn-more" @click="scrollView('#join')">
          <span>{{ bannerLabels.more }}</span>
          <SvgIcon class="icon-right" name="arrow-right2"></SvgIcon>
        </div>
      </div>
      <div class="banner-img">
        <img class="web" src="/src/assets/docs-bug/docs-banner.png" />
        <img class="mobile" src="/src/assets/docs-bug/docs-banner-mo.png" />
      </div>
    </div>
  </div>
  <div class="main">
    <div class="warper">
      <div id="introduction" class="docs-introduction">
        <div class="introduction-left">
          <img class="web" src="/src/assets/docs-bug/introduction.png" />
          <img class="mobile" src="/src/assets/docs-bug/introduction-mo.png" />
        </div>
        <div class="introduction-right">
          <h2 class="introduction-title">{{ introduction.title }}</h2>
          <p
            v-for="(item, index) in introduction.paragraph"
            :key="item"
            class="paragraph"
            :class="{ welcome: index === 0 }"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <h2 id="join" class="title do-jump">{{ howToJoin.title }}</h2>
      <div class="how-to-join">
        <div class="join-main">
          <div class="join-left">
            <div class="join-left-img">
              <img src="/src/assets/docs-bug/join_left.png" />
            </div>
            <div class="join-left-text">
              <h3 class="join-title">{{ howToJoin.stepOneTitle }}</h3>
              <p>
                {{ howToJoin.stepFirst[0] }}
                <a :href="howToJoin.range.link" target="_blank">{{
                  howToJoin.stepFirst[1]
                }}</a>
                {{ howToJoin.stepFirst[2] }}
              </p>
              <p
                v-for="item in howToJoin.stepOneText"
                :key="item"
                class="join-paragraph"
              >
                {{ item }}
              </p>
            </div>
          </div>
          <div class="join-right">
            <div class="join-right-img">
              <img src="/src/assets/docs-bug/join_right.png" />
            </div>
            <div class="join-right-text">
              <h3 class="join-title">{{ howToJoin.stepTowTitle }}</h3>
              <p
                v-for="item in howToJoin.stepTowText"
                :key="item"
                class="join-paragraph"
              >
                {{ item }}
              </p>
            </div>
          </div>
        </div>
        <div class="join-bottom">
          <p>
            {{ howToJoin.range.title }}
            <span>{{ howToJoin.range.location }}</span>
            <a :href="howToJoin.range.link" target="_blank">{{
              howToJoin.range.link
            }}</a>
          </p>
        </div>
      </div>
      <h2 id="rule" class="title do-jump">{{ rule.title }}</h2>
      <div class="rule-main">
        <div class="explain">
          <h3 class="explain-paragraph">{{ rule.secondTitle }}</h3>
          <h3 class="explain-title">{{ rule.explain }}</h3>
          <p v-for="item in rule.explainList" :key="item">{{ item }}</p>
        </div>
        <table border-collapse:collapse class="table">
          <tr class="table-title">
            <td v-for="item in rule.formTitle" :key="item">{{ item }}</td>
          </tr>
          <tr
            v-for="(item, index) in rule.formBody"
            :key="item.itemTitle"
            class="table-item"
          >
            <td class="order">{{ index + 1 }}</td>
            <td class="item-content">
              <div class="content-title">{{ item.itemTitle }}</div>
              <p
                v-for="item1 in item.itemList"
                :key="item1"
                class="integral-item"
              >
                {{ item1 }}
              </p>
            </td>
            <td class="integral-content">
              <p
                v-for="item2 in item.itemContent"
                :key="item2"
                class="integral-item"
                :class="index === 5 ? 'explain-paragraph' : 'integral-item'"
              >
                {{ item2 }}
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div id="prize" class="prize do-jump">
        <div class="title">{{ prize.title }}</div>
        <div class="tabber">
          <div
            v-for="(item, index) in prize.prizeData"
            :key="item.tabTitle"
            class="monthly"
            :class="{ tabActive: index === switchTab }"
            @click="tabChange(index)"
          >
            {{ item.tabTitle }}
          </div>
        </div>
        <div class="prize-box">
          <div
            v-for="item in prize.prizeData[switchTab].renderData"
            :key="item.text"
            class="prize-item"
          >
            <img :src="getImageUrl(item.imgPath)" alt="prize" />
            {{ item.text }}
          </div>
        </div>
      </div>
      <h2 id="rank" class="title rankTitle do-jump">{{ rank.title }}</h2>
      <div class="tabber">
        <div
          v-for="(item, index) in rank.rankBar"
          :key="item"
          class="monthly rankBar"
          :class="{ rankActive: index === rankTab }"
          @click="rankChange(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="rank do-jump">
        <div class="rank-head">
          <div class="switch-tab">
            <el-select
              v-show="rankTab === 0"
              v-model="value"
              class="m-2"
              :placeholder="rank.choiceMonth"
            >
              <el-option
                v-for="(item, index) in rank.monthList"
                :key="item"
                :value="item"
                @click="selectChange(index + 1, rankTab)"
              />
            </el-select>
            <el-select
              v-show="rankTab === 1"
              v-model="valueQuarter"
              class="m-2"
              :placeholder="rank.choiceQuarter"
            >
              <el-option
                v-for="(item, index) in rank.quarterList"
                :key="item"
                :value="item"
                @click="selectChange(index, rankTab)"
              />
            </el-select>
          </div>
          <div class="debug-detail">
            <a :href="rank.debuggerLink" target="_blank">{{
              rank.debugDetail
            }}</a>
          </div>
        </div>
        <table class="rank-body">
          <tr class="rank-first">
            <td v-for="item in rank.rankTitle" :key="item">{{ item }}</td>
          </tr>
          <tr v-for="item in renderData" :key="item.issue_author">
            <td>{{ item.rank }}</td>
            <td>
              <a :href="item.giteeRoom" target="_blank">{{
                item.issue_author
              }}</a>
            </td>
            <td>{{ item.issue_score }}</td>
            <td>
              <img v-if="item.badge" :src="getImageUrl(item.badge)" />
            </td>
          </tr>
        </table>
        <div v-if="renderData.length === 0" class="empty">{{ rank.empty }}</div>
        <div v-if="showAll" class="detail-box" @click="showExtend">
          <div v-show="!isExent" class="look-detail">
            {{ rank.extend }}
            <SvgIcon class="icon-extend" name="extend"></SvgIcon>
          </div>
          <div v-show="isExent" class="look-detail">
            {{ rank.putAway }}
            <SvgIcon class="icon-extend put-away" name="extend"></SvgIcon>
          </div>
        </div>
        <div class="bland">
          <div class="title">{{ value }}{{ rank.blandTitle }}</div>
          <div class="bland-box">
            <div
              v-for="item in bland[Number(value.slice(0, -1)) - 1].nameList ||
              3"
              :key="item"
              class="bland-item"
            >
              <img src="/src/assets/docs-bug/prize-4.png" />
              <a
                v-if="typeof item === 'string'"
                :href="`https://gitee.com/${item}`"
                target="_blank"
                >{{ item }}</a
              >
              <span v-else>敬请期待</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/shared/styles/main.scss';
</style>
