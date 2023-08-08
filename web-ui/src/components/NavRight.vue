<script setup lang="ts">
const props = defineProps({
    dataList: {
        type: Array as any,
        default: [],
    },
    currentIndex: {
        type: Number,
        default: 0,
    },
});
const emit = defineEmits(["click"]);

function scrollView(e: string, index: number) {
    emit("click", e, index);
}
</script>

<template>
    <div class="title-nav">
        <div class="box-line">
            <img class="gif" src="/src/assets/docs-bug/snake.gif" />
            <div class="line"></div>
        </div>
        <div class="nav-text">
            <ul>
                <li
                    v-for="(item, index) in dataList"
                    :class="index === currentIndex ? 'active' : ''"
                    :key="index"
                >
                    <a @click="scrollView(item.key, index)">
                        <div>
                            <div class="inside"></div>
                        </div>
                        <div>{{ item.name }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scpoed>
@import "@/shared/styles/mixin.scss";
.title-nav {
    position: fixed;
    cursor: pointer;
    display: block;
    top: 200px;
    right: 70px;
    z-index: 1000;

    .box-line {
        width: 70px;
        margin-left: -26px;
        .gif {
            width: 70px;
            height: 70px;
            margin: 0 auto -30px auto;
            position: relative;
            z-index: 20;
        }
        .line {
            display: block;
            width: 2px;
            height: 300px;
            margin: 0 auto;
            @include background_color("background_color5");
        }
    }
    .nav-text {
        position: relative;
        margin-top: -247px;
        @include font_color("font_color1");

        ul li a > div {
            display: inline-block;
            &:first-of-type {
                margin-right: 17px;
                border-radius: 50%;
                width: 18px;
                position: relative;
                background: #ffffff;
                height: 18px;
                border: 1px solid #979797;
                div {
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #d8d8d8;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-left: -7px;
                    margin-top: -7px;
                }
            }
            &:last-of-type {
                font-size: 20px;
                line-height: 30px;
            }
        }
        ul li {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
        }
        ul .active {
            & a > div {
                @include font_color("font_color2");
            }
            .inside {
                @include background_color("background_color9");
            }
        }
        ul li > a {
            text-decoration: none;
        }
    }
    .internship-nav {
        margin-top: -425px;
    }
    @media screen and (max-width: 1540px) {
        display: none;
    }
}
</style>