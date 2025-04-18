import * as LucideIcons from "lucide-react"
import { ToolCard } from "@/components/tool-card"
import type { Category, Tool } from "@/types/tools"

interface CategorySectionProps {
  category: Category
  tools: Tool[]
}

export function CategorySection({ category, tools }: CategorySectionProps) {
  // 动态获取图标组件
  const IconComponent = (LucideIcons as any)[category.icon]

  return (
    <section id={category.id} className="py-12 scroll-mt-16 odd:gradient-section">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          {IconComponent && (
            <div className="p-2 rounded-lg gradient-bg-purple text-white">
              <IconComponent className="h-6 w-6" />
            </div>
          )}
          <h2 className="text-2xl font-bold tracking-tight gradient-text">{category.name}</h2>
        </div>
        <p className="text-muted-foreground mb-8 max-w-3xl">{category.description}</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} categoryName={category.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
