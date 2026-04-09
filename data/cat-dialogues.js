/**
 * 猫咪对话配置
 * 
 * clickReactions    — 普通点击时的随机反应池
 * streakReactions   — 连击特殊反应 (index = 点击次数-1, null = 跳过)
 * hoverDialogues    — 鼠标悬浮在不同区域时猫咪说的话 (按 CSS 选择器匹配)
 * idleDialogues     — 长时间未操作时猫咪随机冒泡
 */

const CAT_DIALOGUES = {

    /* ───── 点击反应池 ───── */
    clickReactions: [
        { anim: 'cat-jump',       duration: 900,  emotes: ['💫','⭐','✨'],       bubble: '哈基米哦南美路多' },
        { anim: 'cat-jump',       duration: 900,  emotes: ['❤️','💕','💗'],       bubble: '阿西嘎海亚以那路' },
        { anim: 'cat-spin',       duration: 1000, emotes: ['🌟','💫','✨'],       bubble: '哦嘛激励叮咚鸡' },
        { anim: 'cat-wiggle',     duration: 800,  emotes: ['🐔','🐾','🐱'],       bubble: '叮咚叮咚带段一' },
        { anim: 'cat-squish',     duration: 700,  emotes: ['💛','🐶','🐶'],       bubble: '大狗一段待一段' },
        { anim: 'cat-float-away', duration: 1200, emotes: ['☁️','💤','🌙'],       bubble: '曼波约段约难旅' },
        { anim: 'cat-jump',       duration: 900,  emotes: ['🎵','🎶','🎵'],       bubble: '哦嘛激励叮咚鸡' },
        { anim: 'cat-wiggle',     duration: 800,  emotes: ['🐟','🐠','🐟'],       bubble: '叮咚叮咚带段一' },
        { anim: 'cat-squish',     duration: 700,  emotes: ['😸','✨','🌟'],       bubble: '芝士雪豹' },
        { anim: 'cat-spin',       duration: 1000, emotes: ['🎮','🕹️','👾'],       bubble: '嗷呜呜呜呜呜!' },
    ],

    /* ───── 连击特殊反应 ───── */
    streakReactions: [
        null, null, null,
        { anim: 'cat-spin',       duration: 1000, emotes: ['🌈','⭐','💫','✨','🌟'],             bubble: '开心，我让你飞起来!!!' },
        null,
        { anim: 'cat-float-away', duration: 1200, emotes: ['🚀','⭐','💫','✨','🌟','🚁'],       bubble: 'what can I say,man!!' },
        null, null, null,
        { anim: 'cat-spin',       duration: 1200, emotes: ['🏆','👑','💎','⭐','🌟','✨','💫','🎉'], bubble: '祝你每天都开心!!!' },
    ],

    /* ───── 悬浮区域台词 ───── */
    // selector: 匹配卡片的 CSS 选择器
    // lines:    随机抽取一句说 (每次进入同一区域不重复，直到说完)
    hoverDialogues: [
        {
            selector: '.hero',
            lines: [
                '欢迎来到zzz的世界~',
                '这里是起点喵!',
                '往下滑可以看到更多哦~',
                '点我可以触发惊喜！',
                '？！强强！？',
            ]
        },
        {
            selector: '.about-card',
            lines: [
                '这是我的主人!',
                '他超会写代码的喵~',
                '华中师范大学, 很厉害吧!',
                '又能策划又能开发!',
            ]
        },
        {
            selector: '.about-summary-card',
            lines: [
                '技能树点满了!',
                '全栈型选手喵~',
                '文能写策划, 武能写代码!',
            ]
        },
        {
            selector: '.internship-card',
            lines: [
                '主人在微派实习呢!',
                '2天交付Demo, 太快了喵...',
                '游戏策划实习生!',
                '他做的原型都好好玩~',
            ]
        },
        {
            selector: '.skills-card',
            lines: [
                '试试拖拽这些技能标签碰撞着玩!',
                '技能树碰碰车！',
                '用鼠标拖它们, 会像碰碰车一样弹开喵!',
                '点一下可以看详细技能描述哦~',
                'Unity, UE5 都会用!',
                '技能点这么多, 肝帝吧...',
                '拽一个砸过去! 嘭!',
            ]
        },
        {
            selector: '.project-card',
            lines: [
                '点一下可以看项目详情哦!',
                '双击能打开完整文档喵~',
                '这个项目超酷的!',
                '主人做的游戏, 快看!',
                '每个项目都倾注了心血呢~',
            ]
        },
        {
            selector: '.video-card',
            lines: [
                '有视频可以看喵!',
                '动态演示更直观~',
            ]
        },
        {
            selector: '.awards-card',
            lines: [
                '奖杯好多! 闪闪发光~',
                '主人拿了好多奖喵!',
                '这些都是实力的证明!',
                '把GameJam当逛街哦~',
            ]
        },
        {
            selector: '.contact-card',
            lines: [
                '想联系主人吗? 在这里!',
                '发邮件给他吧~',
                '主人很期待交流的喵!',
                'GitHub 上也可以找到他!',
            ]
        },
    ],

    /* ───── 闲置冒泡 ───── */
    // 用户超过 idleTimeout 毫秒未操作时, 随机冒泡
    idleTimeout: 30000,
    idleDialogues: [
        '...zzZ',
        '好安静啊喵...',
        '戳戳我嘛~',
        '还在看吗?',
        '(*´ω`*)',
        '要不要往下滑滑?',
        '我在这里等你哦~',
        '呼噜呼噜...',
    ],
};
