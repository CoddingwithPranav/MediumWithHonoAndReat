import { Link } from "react-router-dom"


const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence: Promises and Perils",
    excerpt: "As AI continues to evolve, we explore the potential benefits and risks that come with this powerful technology.",
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "Mastering the Art of Productivity: 5 Strategies for Success",
    excerpt: "Discover proven techniques to boost your productivity and achieve your goals faster than ever before.",
    author: "Sarah Lee",
    date: "May 12, 2023",
    readTime: "6 min read",
    category: "Productivity",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "The Rise of Sustainable Fashion: Eco-Friendly Trends to Watch",
    excerpt: "Explore how the fashion industry is embracing sustainability and the emerging trends that are shaping its future.",
    author: "Emma Davis",
    date: "May 10, 2023",
    readTime: "7 min read",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 4,
    title: "Unlocking the Secrets of a Healthy Diet: Nutrition Myths Debunked",
    excerpt: "Separate fact from fiction as we dive into common nutrition myths and reveal the truth about healthy eating.",
    author: "Dr. Michael Chen",
    date: "May 8, 2023",
    readTime: "9 min read",
    category: "Health",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-3xl font-bold text-green-600">Medium</Link>
            <nav className="flex space-x-4">
              <Link to="/our-story" className="text-gray-500 hover:text-gray-900">Our story</Link>
              <Link to="/membership" className="text-gray-500 hover:text-gray-900">Membership</Link>
              <Link to="/write" className="text-gray-500 hover:text-gray-900">Write</Link>
              <Link to="/signin" className="text-gray-500 hover:text-gray-900">Sign In</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-auto">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">{articles[0].category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                <Link to={`/article/${articles[0].id}`} className="hover:underline">
                  {articles[0].title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{articles[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{articles[0].author}</span>
                <span className="mx-2">·</span>
                <span>{articles[0].date}</span>
                <span className="mx-2">·</span>
                <span>{articles[0].readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="border-b border-gray-200 pb-8">
                <div className="relative h-48 mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="text-sm text-gray-500">{article.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">
                  <Link to={`/article/${article.id}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span className="mx-2">·</span>
                  <span>{article.date}</span>
                  <span className="mx-2">·</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Medium</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">About us</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Writing on Medium</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Writer Guidelines</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Join our Partner Program</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Writing Prompts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get the Medium app</h3>
              <div className="space-y-2">
                <Link to="#" className="inline-block">
                  <img src="/placeholder.svg?height=40&width=120" alt="Download on the App Store" className="h-10" />
                </Link>
                <Link to="#" className="inline-block">
                  <img src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" className="h-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © 2023 Medium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

