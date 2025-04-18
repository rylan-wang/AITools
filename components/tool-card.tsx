import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/types/tools"

interface ToolCardProps {
  tool: Tool
  categoryName: string
}

export function ToolCard({ tool, categoryName }: ToolCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all gradient-border group">
      <CardHeader className="p-4 gradient-bg-card rounded-t-lg">
        <div className="flex flex-col">
          <h3 className="font-semibold text-purple-900 group-hover:text-purple-700 transition-colors">{tool.name}</h3>
          <Badge variant="outline" className="w-fit mt-1 bg-white/50 text-purple-700 border-purple-200">
            {categoryName}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <p className="text-sm text-muted-foreground">{tool.description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full gradient-button text-white hover:shadow-md hover:shadow-purple-200/50">
          <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            访问官网
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
