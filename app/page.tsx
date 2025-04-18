import { Navbar } from "@/components/navbar"
import { CategorySection } from "@/components/category-section"
import { categories, tools } from "@/data/tools"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-white"></div>
          <div className="absolute inset-0 tech-pattern opacity-70"></div>

          {/* 装饰元素 */}
          <div
            className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-purple-400/10 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute bottom-20 right-[10%] w-32 h-32 rounded-full bg-indigo-400/10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 right-[20%] w-16 h-16 rounded-full bg-purple-400/10 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
                  AI工具导航
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  发现和探索最新、最强大的AI工具，提升您的工作效率和创造力
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              tools={tools.filter((tool) => tool.category === category.id)}
            />
          ))}
        </div>
      </main>
      <footer className="w-full py-6 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-purple-700">
            &copy; {new Date().getFullYear()} AI工具导航. 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  )
}
