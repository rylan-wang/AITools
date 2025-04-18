"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { categories, tools } from "@/data/tools"
import { Tool } from "@/types/tools"
import { ToolCard } from "@/components/tool-card"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Tool[]>([])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = tools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      )
    })
    setSearchResults(results)
  }, [searchQuery])

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-purple-100">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold gradient-text text-lg sm:inline-block">AI工具导航</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 text-purple-700 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 border-r border-purple-100">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold gradient-text">
                  AI工具导航
                </Link>
                <div className="grid gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center gap-2 transition-colors hover:text-purple-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden gap-6 md:flex">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-purple-700"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          {isSearchOpen ? (
            <div className="relative flex w-full max-w-sm items-center space-x-2">
              <Input
                type="search"
                placeholder="搜索工具..."
                className="h-9 border-purple-200 focus-visible:ring-purple-500"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="ghost" size="icon" onClick={() => {
                setIsSearchOpen(false)
                setSearchQuery("")
                setSearchResults([])
              }} className="text-purple-700">
                <X className="h-5 w-5" />
                <span className="sr-only">关闭搜索</span>
              </Button>
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 max-h-[80vh] overflow-y-auto rounded-md border border-purple-100 bg-white p-4 shadow-lg">
                  <div className="grid gap-4">
                    {searchResults.map((tool) => {
                      const category = categories.find((c) => c.id === tool.category)
                      return (
                        <ToolCard
                          key={tool.id}
                          tool={tool}
                          categoryName={category?.name || ""}
                        />
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="shrink-0 text-purple-700"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">搜索</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
