/**
 * @file  公共模块国际化配置入口
 * */

export const common = {
        MEETINGS_TIME: '会议时间：',
        MEETINGS_REPLAY: '回放链接',
        SEARCH_PLACE_HOLDER: '输入内容',
        COOKIE_LEGAL_TEXT: '本站点使用Cookies，继续浏览表示您同意我们使用Cookies。',
        COOKIE_LEGAL_LINK_TEXT: 'Cookies和隐私政策>',
        NAV_ROUTER_CONFIG: [{
                PATH: '',
                NAME: '下载',
                CHILDREN: [
                    {
                        NAME: 'ISO',
                        PATH: '/download/'
                    },
                    {
                        NAME: '镜像仓列表',
                        PATH: '/mirror/list/'
                    }
                ],
                CLASS: []
            },
            {
                NAME: '学习',
                CHILDREN: [
                    {
                        NAME: '文档',
                        PATH: '/zh/',
                        IS_OPEN_WINDOW: 1
                    },
                    {
                        NAME: '慕课',
                        PATH: '/learn/mooc/'
                    },
                    {
                        NAME: '实习',
                        PATH: '/internship/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '互动',
                CHILDREN: [{
                        NAME: '新闻',
                        PATH: '/interaction/news-list/'
                    },
                    {
                        NAME: '博客',
                        PATH: '/interaction/blog-list/'
                    },
                    {
                        NAME: '直播',
                        PATH: '/interaction/live-list/'
                    },
                    {
                        NAME: '沙龙',
                        PATH: '/interaction/salon-list/'
                    },
                    {
                        NAME: '峰会',
                        PATH: '/interaction/summit-list/summit2021/'
                    }
                ],
                OTHER_CHILDREN: [
                    {
                        PATH: '/news/'
                    },
                    {
                        PATH: '/blog/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '社区',
                CHILDREN: [{
                        NAME: '贡献攻略',
                        PATH: '/community/contribution/'
                    },
                    {
                        NAME: '行为守则',
                        PATH: '/community/conduct/'
                    },
                    {
                        NAME: '邮件列表',
                        PATH: '/community/mailing-list/'
                    },
                    {
                        NAME: '个人认证',
                        PATH: '/community/certification-services/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'SIG',
                CHILDREN: [{
                        NAME: '查看SIG',
                        PATH: '/sig/sig-list/'
                    },
                    {
                        NAME: '申请流程',
                        PATH: '/sig/sig-guidance/'
                    },
                    {
                        NAME: '角色说明',
                        PATH: '/sig/role-description/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '探索',
                CHILDREN: [{
                        NAME: 'A-Tune',
                        PATH: '/other/projects/atune'
                    },
                    {
                        NAME: 'Bisheng JDK',
                        PATH: '/other/projects/bishengjdk'
                    },
                    {
                        NAME: 'iSula',
                        PATH: '/other/projects/isula'
                    },
                    {
                        NAME: 'secGear',
                        PATH: '/other/projects/secgear'
                    },
                    {
                        NAME: 'StratoVirt',
                        PATH: '/other/projects/stratovirt'
                    },
                    {
                        NAME: 'Compass-CI',
                        PATH: 'https://compass-ci.openeuler.org/',
                        IS_OPEN_MINISITE_WINDOW: 1
                    },
                    {
                        NAME: 'Compliance',
                        PATH: 'https://compliance.openeuler.org/',
                        IS_OPEN_MINISITE_WINDOW: 1
                    },
                    {
                        NAME: 'Pkgship',
                        PATH: 'https://pkgmanage.openeuler.org/',
                        IS_OPEN_MINISITE_WINDOW: 1
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '支持',
                CHILDREN: [{
                        NAME: '漏洞管理',
                        PATH: '/security/vulnerability-reporting/'
                    },
                    {
                        NAME: '安全公告',
                        PATH: '/security/safety-bulletin/'
                    },
                    {
                        NAME: 'CVE',
                        PATH: '/security/cve/'
                    },
                    {
                        NAME: '兼容性列表',
                        PATH: '/compatibility/'
                    },
                    {
                        NAME: '迁移指南',
                        PATH: '/other/migration/'
                    }
                ],
                CLASS: []
            }
        ],
        LANG: '中文',
        LANG_LIST: ['中文','English','Русский'],
        GITTE: '源码',
        CODE: '代码',
        GITTE_RESOURCE_LIST: [{
                NAME: '代码仓',
                URL: 'https://gitee.com/openeuler'
            },
            {
                NAME: '软件包仓',
                URL: 'https://gitee.com/src-openeuler'
            },
            {
                NAME: 'GitHub镜像仓',
                URL: 'https://github.com/openeuler-mirror'
            }
        ],
        FOOTER: {
            ATOM_TEXT:'openEuler 是由开放原子开源基金会（OpenAtom Foundation）孵化及运营的开源项目',
            ATOM_PC:'/src/assets/footer-img/atom-pc.png',
            ATOM_MO:'/src/assets/footer-img/atom-mo.png',
            MAIL: 'contact@openeuler.io',
            COPY_RIGHT: '版权所有 © 2022 openEuler 保留一切权利',
            RIGHT_LIST: [{
                    NAME: '品牌',
                    URL: 'https://www.openeuler.org/zh/other/brand/'
                },
                {
                    NAME: '隐私政策',
                    URL: 'https://www.openeuler.org/zh/other/privacy/'
                },
                {
                    NAME: '法律声明',
                    URL: 'https://www.openeuler.org/zh/other/legal/'
                },
                {
                    NAME: '服务状态',
                    URL: 'https://status.openeuler.org/'
                },
            ],
            QR_CODE: '扫码关注公众号'
        },
        BUILDING:{
            BUILDING:'建设中',
            BUILDINGMES:'敬请期待...'
        }
};