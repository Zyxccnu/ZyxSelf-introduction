/**
 * 项目配置数据 - 统一管理所有项目信息
 * 
 * 编辑说明：
 *   - name: 项目中文名
 *   - nameEn: 项目英文名（显示在卡片副标题）
 *   - role: 你在项目中的角色
 *   - desc: 项目卡片简介
 *   - tags: 项目卡片上的标签数组
 *   - cover: 封面图路径（为空则用纯色渐变）
 *   - links: 卡片底部按钮 [{ label, url, type }]
 *     - type: 'doc'(文档) | 'video'(视频,需要data-video索引) | 'play'(游玩链接)
 *   - docUrl: 双击时跳转的链接（飞书文档或项目页面）
 *   - entries: 词条列表 [{ title, desc }]，用于预览面板展示
 *     - 有 entries：单击时逐条展示词条
 *     - 没有 entries：提示用户双击打开链接
 *   - span: 网格占列数（默认2），设为 '2 row-span-2' 可占两行
 */

const PROJECT_DATA = {

  'aurora-academy': {
    name: '极光学院战',
    nameEn: 'Aurora Academy',
    role: '玩法设计 & 全部程序开发',
    desc: '学生团队独立游戏项目，约 7 人团队，原型阶段。作为唯一程序，开发了对话编辑器、投掷物配置系统等工具链。',
    tags: ['独立游戏','Unity', 'C#', 'Tool Dev', 'Team of 7'],
    cover: 'Resource/ProjectLook/JiGuang.png',
    span: '2 row-span-2',
    links: [
      { label: '📄 文档', url: 'https://my.feishu.cn/wiki/JIq2wZKd5iiHBEklehPc2YnbnWd', type: 'doc' }
    ],
    docUrl: 'https://my.feishu.cn/wiki/JIq2wZKd5iiHBEklehPc2YnbnWd',
    entries: [
      { title: '数值系统 · ScriptableObject 驱动', desc: '数据与逻辑分离架构，策划通过右键菜单创建角色数值配置，迭代周期从30分钟缩短至2分钟' },
      { title: '可扩展 Buff 系统', desc: '将触发时机抽象为"回调点"(被攻击/攻击/每秒/死亡等)，策划通过 SO 配置组合即可创造新 Buff，无需程序介入' },
      { title: '投掷物系统 · 数据驱动物理模拟', desc: '支持重力抛物线/直线/正弦波/自定义曲线，一个投掷物 = 一个预制件 + 一张配置表，策划10分钟完成新投掷物' },
      { title: '对话系统 · 可视化节点编辑器', desc: '基于 UI Toolkit 的有向图结构对话树编辑器，支持拖拽连线、自动查找根节点、最小生成树容错' },
      { title: '程序化头发系统', desc: '参考《蔚蓝》Verlet 积分实现双锚点带端点硬度的头发物理，可配置粗细曲线、阻尼系数、节点密度' },
      { title: '工具链开发', desc: '为策划/美术开发了对话编辑器、数值配置工具、关卡编排工具、投掷物设计器，将"改代码"变为"拖拽编辑"' }
    ]
  },

  'zhongming': {
    name: '钟鸣九州',
    nameEn: 'Bell Ring Over World',
    role: '全部程序开发 & 玩法、关卡策划',
    desc: '2025中国大学生计算机设计大赛。五人团队(3美术1音效)，负责全部程序开发及玩法、关卡策划。获省二等奖。',
    tags: ['计设参赛','Unity', 'C#', '2D横版过关', '5人团队'],
    cover: 'Resource/ProjectLook/ZhongMing.png',
    links: [
      { label: '📄 文档', url: 'https://my.feishu.cn/wiki/Y8wjw3xlUiXZQak4bg0crE2Bnpg', type: 'doc' },
      { label: '📹 视频', url: null, type: 'video', videoIndex: 0 },
      { label: '🎮 Demo', url: 'https://zyxccnu.itch.io/bell-ring-over-world', type: 'play' }
    ],
    docUrl: 'https://my.feishu.cn/wiki/Y8wjw3xlUiXZQak4bg0crE2Bnpg',
    entries: [
      { title: '声波物理共振系统', desc: '双声波碰撞产生"共振波纹"作为核心机制，通过时间窗口(≤0.2s)+空间位置判定实现物理驱动玩法' },
      { title: '音游制谱系统', desc: '独立开发 C# WinForms 谱面编辑器，可视化时间轴配置五声音阶，导出 txt 格式供游戏运行时解析' },
      { title: '平台跳跃 × 音游融合', desc: '通过"节奏机关"将平台解谜与编钟演奏自然过渡，最终关要求按谱面演奏编钟完成通关' }
    ]
  },

  'guzhang': {
    name: '故障回放',
    nameEn: 'Fault Playback',
    role: '程序、机制设计、关卡设计及运营',
    desc: '2025 TapTap 聚光灯21天挑战赛。三人团队(1策划1技美)，负责程序、机制设计、关卡设计及运营。入围前30提名奖。',
    tags: ['21day聚光灯gj','Unity', 'C#', '回放机制', '3人团队'],
    cover: 'Resource/ProjectLook/Guzhang.png',
    links: [
      { label: '📄 文档', url: 'https://my.feishu.cn/wiki/UHoTw5hCRir0Ink0HCjcvw3unx0', type: 'doc' },
      { label: '📹 视频', url: null, type: 'video', videoIndex: 2 },
      { label: '🎮 游玩', url: 'https://www.taptap.cn/app/781805?os=pc', type: 'play' }
    ],
    docUrl: 'https://my.feishu.cn/wiki/UHoTw5hCRir0Ink0HCjcvw3unx0',
    entries: [
      { title: '时间线双操作系统', desc: '将"视频故障"转化为机制——灵体预操作录制路径，本体实时执行，两角色在同一物理世界交互' },
      { title: '移动条 · 策略资源管理', desc: '玩家移动距离受限于磁带缓存条，每次灵体操作消耗缓存不可恢复，让每步操作都需要权衡' },
      { title: '模块化机关系统', desc: '"触发源-响应器"解耦架构，压力板/刷卡机/开关 × 闸门/限时门/电梯，搭积木式关卡搭建' },
      { title: '光源驱动敌人 AI', desc: 'SCP 风格"不安娃娃"只在光照下活动，玩家通过电箱机关控制灯光来反制敌人' }
    ]
  },

  'fps-demo': {
    name: 'FPS 多人联机 Demo',
    nameEn: 'Network FPS Demo',
    role: '全部开发',
    desc: '腾讯开局一课游戏客户端大作业。基于UE5实现完整多人FPS，含大厅系统、武器系统、AI行为树、网络同步。',
    tags: ['学习demo','UE5', 'Blueprint', ' 本地多人  ', 'AI'],
    cover: '',
    links: [
      { label: '📄 文档', url: 'https://my.feishu.cn/wiki/F7OEwssS6iVzMAkEpSLcbQDsnNe', type: 'doc' },
      { label: '📹 视频', url: null, type: 'video', videoIndex: 3 }
    ],
    docUrl: 'https://my.feishu.cn/wiki/F7OEwssS6iVzMAkEpSLcbQDsnNe',
    entries: [
      { title: '完整大厅系统', desc: 'UE5 Session 机制实现组队/聊天/换色/ServerTravel 全流程，支持多人无缝进入游戏' },
      { title: '解耦武器架构', desc: '武器为独立 Actor + 配置表驱动，继承基类即可快速创建新武器，通过 RepNotify 全端同步' },
      { title: '双模型视角策略', desc: '第一人称手臂(Only Owner See) + 第三人称全身(Owner No See)，死亡后切换布娃娃观战' },
      { title: '行为树 AI 系统', desc: '服务器权威的行为树 + PawnSensing 感知，巡逻→追逐→攻击状态机，伤害蒙太奇全端组播' }
    ]
  },

  'xiuzhi': {
    name: '休止铃',
    nameEn: 'Rest Bell',
    role: '玩法策划 & 全部程序实现',
    desc: '2025 TapTap 武汉聚光灯 48h GameJam。五人团队(2美术1策划1音效)，负责玩法策划和全部程序实现。',
    tags: ['GameJam','48h','Unity','5人团队'],
    cover: 'Resource/ProjectLook/XiuZhi.jpg',
    links: [
      { label: '📹 视频', url: null, type: 'video', videoIndex: 1 },
      { label: '🎮 游玩', url: 'https://zyxccnu.itch.io/restbell', type: 'play' }
    ],
    docUrl: 'https://zyxccnu.itch.io/restbell',
    entries: []
    // 无词条 → 面板提示"双击打开项目页面"
  },

  'mask-beast': {
    name: '面具困兽',
    nameEn: 'Mask Beast',
    role: '玩法策划 & 部分程序',
    desc: '2026 Global Game Jam 武汉微派场 48h 开发。五人团队(1美术1策划1音效1程序)。',
    tags: ['GGJ','48h','Unity','5人团队'],
    cover: 'Resource/ProjectLook/MaskAndMonster.png',
    links: [
      { label: '📹 视频', url: null, type: 'video', videoIndex: 4 },
      { label: '🎮 游玩', url: 'https://www.gmhub.com/game/9316', type: 'play' }
    ],
    docUrl: 'https://www.gmhub.com/game/9316',
    entries: []
    // 无词条 → 面板提示"双击打开项目页面"
  }

};
