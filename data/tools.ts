import type { Tool, Category } from "@/types/tools"

export const categories: Category[] = [
  {
    id: "image-generation",
    name: "图像生成",
    description: "AI驱动的图像生成工具，可以根据文本描述创建图像",
    icon: "ImageIcon",
  },
  {
    id: "text-generation",
    name: "文本生成",
    description: "用于生成文章、故事、代码等文本内容的AI工具",
    icon: "FileTextIcon",
  },
  {
    id: "audio-generation",
    name: "音频生成",
    description: "AI驱动的音频和音乐生成工具",
    icon: "HeadphonesIcon",
  },
  {
    id: "video-generation",
    name: "视频生成",
    description: "AI驱动的视频生成和编辑工具",
    icon: "VideoIcon",
  },
  {
    id: "productivity",
    name: "生产力工具",
    description: "提高工作效率的AI助手和工具",
    icon: "RocketIcon",
  },
  {
    id: "coding",
    name: "编程开发",
    description: "辅助编程和开发的AI工具",
    icon: "CodeIcon",
  },
]

export const tools: Tool[] = [
  // 图像生成类工具
  {
    id: "midjourney",
    name: "Midjourney",
    description: "一款强大的AI图像生成工具，可以根据文本提示创建高质量艺术图像",
    category: "image-generation",
    url: "https://www.midjourney.com",
  },
  {
    id: "dall-e",
    name: "DALL-E",
    description: "OpenAI开发的AI系统，能够从文本描述创建逼真的图像和艺术作品",
    category: "image-generation",
    url: "https://openai.com/dall-e-3",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "开源的AI图像生成模型，可以创建详细的图像，基于文本描述",
    category: "image-generation",
    url: "https://stability.ai",
  },
  {
    id: "leonardo-ai",
    name: "Leonardo.AI",
    description: "AI创意工具，可以生成和编辑高质量图像，支持多种艺术风格",
    category: "image-generation",
    url: "https://leonardo.ai",
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "Adobe推出的生成式AI创意工具，可以创建、编辑和增强图像",
    category: "image-generation",
    url: "https://firefly.adobe.com",
  },

  // 文本生成类工具 - 已更新
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI开发的对话式AI，能够生成类人文本回复和内容",
    category: "text-generation",
    url: "https://chat.openai.com",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "专注于深度学习的AI模型，提供强大的文本生成和理解能力",
    category: "text-generation",
    url: "https://deepseek.com",
  },
  {
    id: "kimi",
    name: "Kimi",
    description: "中文大语言模型，擅长中文内容创作和对话",
    category: "text-generation",
    url: "https://kimi.moonshot.cn",
  },
  {
    id: "tongyi",
    name: "通义",
    description: "阿里巴巴开发的大语言模型，提供中英双语能力",
    category: "text-generation",
    url: "https://tongyi.aliyun.com",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic开发的AI助手，专注于有帮助、无害和诚实的对话",
    category: "text-generation",
    url: "https://claude.ai",
  },

  // 音频生成类工具
  {
    id: "suno",
    name: "Suno",
    description: "AI音乐生成平台，可以创建原创音乐和歌曲",
    category: "audio-generation",
    url: "https://suno.ai",
  },
  {
    id: "mubert",
    name: "Mubert",
    description: "AI音乐生成工具，为内容创作者提供免版税音乐",
    category: "audio-generation",
    url: "https://mubert.com",
  },
  {
    id: "eleven-labs",
    name: "ElevenLabs",
    description: "AI语音合成平台，可以创建逼真的人工语音",
    category: "audio-generation",
    url: "https://elevenlabs.io",
  },
  {
    id: "soundraw",
    name: "Soundraw",
    description: "AI音乐创作平台，可以根据情绪、风格和长度生成原创音乐",
    category: "audio-generation",
    url: "https://soundraw.io",
  },
  {
    id: "play-ht",
    name: "Play.ht",
    description: "AI语音生成器，可以将文本转换为自然的人声",
    category: "audio-generation",
    url: "https://play.ht",
  },

  // 视频生成类工具
  {
    id: "runway",
    name: "Runway",
    description: "AI视频编辑和生成工具，提供多种创意视频功能",
    category: "video-generation",
    url: "https://runwayml.com",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI视频生成平台，可以创建逼真的AI视频演示者",
    category: "video-generation",
    url: "https://www.synthesia.io",
  },
  {
    id: "pika",
    name: "Pika",
    description: "AI视频创作工具，可以从文本描述生成视频",
    category: "video-generation",
    url: "https://pika.art",
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI视频生成平台，可以创建多语言AI视频演示者",
    category: "video-generation",
    url: "https://www.heygen.com",
  },
  {
    id: "d-id",
    name: "D-ID",
    description: "AI数字人视频生成平台，可以从静态图像创建会说话的视频",
    category: "video-generation",
    url: "https://www.d-id.com",
  },

  // 生产力工具类
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "集成在Notion中的AI助手，帮助用户撰写、编辑和总结内容",
    category: "productivity",
    url: "https://www.notion.so/product/ai",
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    description: "AI语音转文字和会议记录工具",
    category: "productivity",
    url: "https://otter.ai",
  },
  {
    id: "mem",
    name: "Mem",
    description: "AI驱动的笔记和知识管理工具，可以自动组织和连接信息",
    category: "productivity",
    url: "https://mem.ai",
  },
  {
    id: "taskade",
    name: "Taskade",
    description: "AI驱动的项目管理和协作工具，集成了任务、笔记和聊天功能",
    category: "productivity",
    url: "https://www.taskade.com",
  },
  {
    id: "krisp",
    name: "Krisp",
    description: "AI降噪工具，可以消除背景噪音，提高通话和会议质量",
    category: "productivity",
    url: "https://krisp.ai",
  },

  // 编程开发类工具
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI编程助手，可以根据注释和现有代码提供代码建议",
    category: "coding",
    url: "https://github.com/features/copilot",
  },
  {
    id: "codeium",
    name: "Codeium",
    description: "免费的AI编码助手，支持多种编程语言和IDE",
    category: "coding",
    url: "https://codeium.com",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI代码补全工具，支持多种编程语言和IDE",
    category: "coding",
    url: "https://www.tabnine.com",
  },
  {
    id: "replit-ghostwriter",
    name: "Replit Ghostwriter",
    description: "Replit的AI编程助手，可以生成、解释和调试代码",
    category: "coding",
    url: "https://replit.com/ghostwriter",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI驱动的代码编辑器，可以理解和生成代码",
    category: "coding",
    url: "https://cursor.sh",
  },
]
