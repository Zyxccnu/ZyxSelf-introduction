/**
 * 项目词条数据 - 用于悬浮面板展示
 * 每个项目包含：id、词条列表(entries)、飞书文档链接(docUrl)
 * 
 * 编辑说明：
 *   - entries 数组中每一项是一个词条 { title, desc }
 *   - 有 entries 的项目：hover/单击时逐条展示词条
 *   - 没有 entries 的项目：提示用户双击打开链接
 *   - docUrl: 双击时跳转的链接（飞书文档或项目页面）
 */

const PROJECT_DATA = {

  'aurora-academy': {
    name: '极光学院战',
    docUrl: 'https://my.feishu.cn/wiki/JIq2wZKd5iiHBEklehPc2YnbnWd',
    entries: [
      {
        title: '数值系统 · ScriptableObject 驱动',
        desc: '数据与逻辑分离架构，策划通过右键菜单创建角色数值配置，迭代周期从30分钟缩短至2分钟'
      },
      {
        title: '可扩展 Buff 系统',
        desc: '将触发时机抽象为"回调点"(被攻击/攻击/每秒/死亡等)，策划通过 SO 配置组合即可创造新 Buff，无需程序介入'
      },
      {
        title: '投掷物系统 · 数据驱动物理模拟',
        desc: '支持重力抛物线/直线/正弦波/自定义曲线，一个投掷物 = 一个预制件 + 一张配置表，策划10分钟完成新投掷物'
      },
      {
        title: '对话系统 · 可视化节点编辑器',
        desc: '基于 UI Toolkit 的有向图结构对话树编辑器，支持拖拽连线、自动查找根节点、最小生成树容错'
      },
      {
        title: '程序化头发系统',
        desc: '参考《蔚蓝》Verlet 积分实现双锚点带端点硬度的头发物理，可配置粗细曲线、阻尼系数、节点密度'
      },
      {
        title: '工具链开发',
        desc: '为策划/美术开发了对话编辑器、数值配置工具、关卡编排工具、投掷物设计器，将"改代码"变为"拖拽编辑"'
      }
    ]
  },

  'zhongming': {
    name: '钟鸣九州',
    docUrl: 'https://my.feishu.cn/wiki/Y8wjw3xlUiXZQak4bg0crE2Bnpg',
    entries: [
      {
        title: '声波物理共振系统',
        desc: '双声波碰撞产生"共振波纹"作为核心机制，通过时间窗口(≤0.2s)+空间位置判定实现物理驱动玩法'
      },
      {
        title: '音游制谱系统',
        desc: '独立开发 C# WinForms 谱面编辑器，可视化时间轴配置五声音阶，导出 txt 格式供游戏运行时解析'
      },
      {
        title: '平台跳跃 × 音游融合',
        desc: '通过"节奏机关"将平台解谜与编钟演奏自然过渡，最终关要求按谱面演奏编钟完成通关'
      }
    ]
  },

  'guzhang': {
    name: '故障回放',
    docUrl: 'https://my.feishu.cn/wiki/UHoTw5hCRir0Ink0HCjcvw3unx0',
    entries: [
      {
        title: '时间线双操作系统',
        desc: '将"视频故障"转化为机制——灵体预操作录制路径，本体实时执行，两角色在同一物理世界交互'
      },
      {
        title: '移动条 · 策略资源管理',
        desc: '玩家移动距离受限于磁带缓存条，每次灵体操作消耗缓存不可恢复，让每步操作都需要权衡'
      },
      {
        title: '模块化机关系统',
        desc: '"触发源-响应器"解耦架构，压力板/刷卡机/开关 × 闸门/限时门/电梯，搭积木式关卡搭建'
      },
      {
        title: '光源驱动敌人 AI',
        desc: 'SCP 风格"不安娃娃"只在光照下活动，玩家通过电箱机关控制灯光来反制敌人'
      }
    ]
  },

  'fps-demo': {
    name: 'FPS 多人联机 Demo',
    docUrl: 'https://my.feishu.cn/wiki/F7OEwssS6iVzMAkEpSLcbQDsnNe',
    entries: [
      {
        title: '完整大厅系统',
        desc: 'UE5 Session 机制实现组队/聊天/换色/ServerTravel 全流程，支持多人无缝进入游戏'
      },
      {
        title: '解耦武器架构',
        desc: '武器为独立 Actor + 配置表驱动，继承基类即可快速创建新武器，通过 RepNotify 全端同步'
      },
      {
        title: '双模型视角策略',
        desc: '第一人称手臂(Only Owner See) + 第三人称全身(Owner No See)，死亡后切换布娃娃观战'
      },
      {
        title: '行为树 AI 系统',
        desc: '服务器权威的行为树 + PawnSensing 感知，巡逻→追逐→攻击状态机，伤害蒙太奇全端组播'
      }
    ]
  },

  'xiuzhi': {
    name: '休止铃',
    docUrl: 'https://zyxccnu.itch.io/restbell',
    entries: []
    // 无词条 → 面板提示"双击打开项目页面"
  },

  'mask-beast': {
    name: '面具困兽',
    docUrl: 'https://www.gmhub.com/game/9316',
    entries: []
    // 无词条 → 面板提示"双击打开项目页面"
  }

};
