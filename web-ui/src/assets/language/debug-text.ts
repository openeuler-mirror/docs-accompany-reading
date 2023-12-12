export const bannerLabels = {
  title: [{ id: 'first', text: 'openEuler文档有奖捉虫' }],
  description: '捉虫大战，震撼来袭，就等你来',
  more: '了解更多',
};
export const introduction = {
  title: '简介',
  paragraph: [
    '各位开发者朋友们，大家好呀～',
    'openEuler 文档捉虫活动由 openEuler 社区主办，旨在了解文档开发者的真实场景，不断改进和完善文档，从而帮助开发者更好地使用 openEuler 操作系统和相关软件。在这里，不仅仅是技术问题，一个错别字、一个错误标点的修正都会得到肯定，所以这里也是新手们参与开源贡献的入门小天地，我们欢迎每一个小伙伴的参与。',
    '在这里，您可以阅读文档，了解 openEuler 操作系统、下一代虚拟化平台 StratoVirt、智能化系统性能优化引擎 A-Tune、统一机密计算编程框架 secGear 等技术知识，也可以参考文档对其进行安装使用。您的每一个 issue、每一个 PR 贡献，都将被广大的开发者们看到并从中受益。',
    '所以，赶紧参与吧，开启您的“openEuler 文档捉虫”之旅！',
  ],
};
export const howToJoin = {
  title: '如何捉虫',
  stepOneTitle: '找bug,提Issue',
  stepFirst: ['1.打开', 'openEuler官方文档', '阅读自己感兴趣的文档。'],
  stepOneText: [
    '2. 选中存在问题的文档片段，单击出现的图标，在弹出窗口中填写相关信息。',
    '3.	单击“提交”按钮，登录 Gitee，跳转到 Gitee openEuler docs 仓库 issue 提交页面。',
    '4.	选择 issue 类型，单击“创建”按钮，完成 issue 创建。',
  ],
  stepTowTitle: '提PR，解bug',
  stepTowText: [
    '1.	确定需要解决的问题。',
    '2.	Fork openEuler doc 仓并修改问题 。',
    '3.	提交 PR 。',
  ],
  range: {
    title: '本期捉虫范围:',
    location: 'openEuler官方社区文档',
    link: 'https://docs.openeuler.org/zh/',
  },
};
export const rule = {
  title: '积分规则',
  secondTitle: '本次捉虫活动采用积分制，对有效的 issue 和 PR 进行积分。',
  explain: '说明：',
  explainList: [
    '针对有效 PR 或 issue，主办方会进行相关评论',
    '月度评奖，仅计算当月积分，积分月底清零，但在季度评奖中体现',
    '仅设置了“资料捉虫活动”标签且得到主办方评论有效的 issue 和具备有效 issue 号的 PR 积分',
    '同一个问题，最早提交者积分',
    '不同分支的同一个问题，仅一个分支标准积分，其他每个分支每个 issue / PR +1 分',
  ],
  formTitle: ['序号', '积分项内容', '积分内容'],
  formBody: [
    {
      itemTitle: '规范和低错类，例如：',
      itemList: [
        '错别字或拼写错误；标点符号使用错误',
        '链接错误、空单元格、格式错误',
        '英文中包含中文字符',
        '界面和描述不一致，但不影响操作',
        '表述不通顺，但不影响理解',
        '版本号不匹配：如软件包名称、界面版本号',
      ],
      itemContent: ['每个 issue 2 分', '每个 PR 3 分'],
    },
    {
      itemTitle: '易用性：',
      itemList: [
        '关键步骤错误或缺失，无法指导用户完成任务',
        '缺少必要的前提条件、注意事项等',
        '描述存在歧义',
        '图形、表格、文字等晦涩难懂',
        '逻辑不清晰，该分类、分项、分步骤的没有给出',
      ],
      itemContent: ['每个 issue 5 分', '每个 PR 8 分'],
    },
    {
      itemTitle: '正确性：',
      itemList: [
        '技术原理、功能、规格等描述和软件不一致，存在错误',
        '原理图、架构图等存在错误',
        '命令、命令参数等错误',
        '命令无法完成对应功能',
        '界面错误，无法指导操作',
      ],
      itemContent: ['每个 issue 5 分', '每个 PR 8 分'],
    },
    {
      itemTitle: '风险提示：',
      itemList: ['对重要数据或系统存在风险的操作，缺少安全提示'],
      itemContent: ['每个 issue 8 分', '每个 PR 12 分'],
    },
    {
      itemTitle: '内容合规：',
      itemList: ['违反法律法规，涉及政治、领土主权等敏感词', '内容侵权'],
      itemContent: ['每个 issue 10 分', '每个 PR 12 分'],
    },
    {
      itemTitle: '其他',
      itemList: [],
      itemContent: ['由主办方确定'],
    },
  ],
};
export const prize = {
  title: '奖项设置',
  tabTitle: ['月度', '季度'],
  prizeData: [
    {
      tabTitle: '月度',
      renderData: [
        {
          imgPath: 'prize-1.png',
          text: '特殊贡献奖（经评审对文档改进有重大贡献），该奖项不定期开启，获得虚拟徽章及相应奖品。',
        },
        {
          imgPath: 'prize-2.png',
          text: '积分前 10% 获得“星耀奖”，获得认证徽章及相应奖品。',
        },
        {
          imgPath: 'prize-3.png',
          text: '积分前 10% - 30% 获得“攀登奖”，获得认证徽章及相应奖品。',
        },
        {
          imgPath: 'prize-4.png',
          text: '3 名“幸运盲盒奖”：所有提交有效 issue 或者 PR 的小伙伴，均可参与抽奖，每月抽取 3 名开源幸运奖，获得相应奖品。',
        },
      ],
    },
    {
      tabTitle: '季度',
      renderData: [
        {
          imgPath: 'prize-5.png',
          text: '积分前 Top 10 获得“问鼎奖”，获得认证徽章及相应奖品。',
        },
      ],
    },
  ],
};
export const rank = {
  title: '积分排名',
  rankBar: ['月榜单', '季度榜单'],
  debugDetail: '查看捉虫详情',
  debuggerLink:
    'https://gitee.com/openeuler/docs/issues?issue_search=%E6%9C%89%E5%A5%96%E6%8D%89%E8%99%AB',
  choiceMonth: '选择月份',
  choiceQuarter: '选择季度',
  monthList: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  quarterList: [
    '第一季度（1月-3月）',
    '第二季度（4月-6月）',
    '第三季度（7月-9月）',
    '第四季度（10月-12月）',
  ],
  rankTitle: ['名次', 'Gitee ID', '总分', '徽章'],
  extend: '查看完整榜单 ',
  putAway: '收起',
  empty: '暂无数据',
  blandTitle: '幸运盲盒奖',
  blandItem: '敬请期待',
};
export const navList = [
  {
    key: '#introduction',
    name: '简介',
  },
  {
    key: '#join',
    name: '如何捉虫',
  },
  {
    key: '#rule',
    name: '积分规则',
  },
  {
    key: '#prize',
    name: '奖项设置',
  },
  {
    key: '#rank',
    name: '积分排名',
  },
];
