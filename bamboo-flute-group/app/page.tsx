import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Music, Users, Star } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const founders = ["Lê Đức Anh", "Đỗ Trung Nghĩa", "Phạm Khắc Nguyên"]

  const notableMembers = ["Phan Văn Kiên", "Nguyễn Đình Anh", "Trần Trung Tính", "Phước Nguyên"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Music className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-900">Tiếng Sáo Làng Đại Học</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">Tiếng Sáo Làng Đại Học</h2>
            <p className="text-xl text-amber-700 mb-8 leading-relaxed">
              Nơi hội tụ những tâm hồn yêu âm nhạc dân tộc, lan tỏa tiếng sáo trúc du dương trong không gian đại học
              tươi đẹp
            </p>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Nhóm sáo trúc biểu diễn"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founding Date */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-amber-900 mb-2">Ngày Thành Lập</h3>
              <p className="text-lg text-amber-700">
                Nhóm chính thức hoạt động từ ngày <span className="font-bold">20/09/2024</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Người Sáng Lập</h3>
            <p className="text-lg text-amber-700">Những người đã khởi xướng và thành lập nhóm</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow bg-white/70">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-amber-900">{founder}</CardTitle>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 w-fit mx-auto">
                    Người sáng lập
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Members Section */}
      <section className="py-16 px-4 bg-white/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Thành Viên Đáng Chú Ý</h3>
            <p className="text-lg text-amber-700">Những thành viên tích cực và có đóng góp nổi bật cho nhóm</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {notableMembers.map((member, index) => (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow bg-white/70">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-amber-900 text-lg">{member}</CardTitle>
                  <Badge variant="outline" className="border-amber-300 text-amber-700 w-fit mx-auto">
                    Thành viên
                  </Badge>
                </CardHeader>
              </Card>
            ))}

            {/* More members indicator */}
            <Card className="border-amber-200 border-dashed bg-amber-50/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">...</span>
                </div>
                <CardTitle className="text-amber-700 text-lg">Và nhiều thành viên khác</CardTitle>
                <Badge variant="outline" className="border-amber-300 text-amber-600 w-fit mx-auto">
                  Đang phát triển
                </Badge>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-amber-200 bg-gradient-to-br from-white to-amber-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-amber-900 mb-4">Về Nhóm Chúng Tôi</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    <strong>Tiếng Sáo Làng Đại Học</strong> là một nhóm âm nhạc được thành lập với mục đích bảo tồn và
                    phát triển nghệ thuật sáo trúc truyền thống Việt Nam trong môi trường đại học.
                  </p>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    Chúng tôi tập hợp những bạn trẻ có chung đam mê với âm nhạc dân tộc, cùng nhau học hỏi, luyện tập và
                    biểu diễn những giai điệu du dương của sáo trúc.
                  </p>
                  <p className="text-amber-700 leading-relaxed">
                    Với tinh thần đoàn kết và yêu thương âm nhạc, nhóm không ngừng phát triển và mang đến những màn
                    trình diễn ấn tượng cho cộng đồng.
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=250&width=300"
                    alt="Sáo trúc truyền thống"
                    width={300}
                    height={250}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="h-6 w-6" />
            <span className="text-xl font-semibold">Tiếng Sáo Làng Đại Học</span>
          </div>
          <p className="text-amber-200">Lan tỏa âm nhạc dân tộc - Kết nối tâm hồn yêu sáo trúc</p>
          <p className="text-amber-300 text-sm mt-2">Thành lập ngày 20/09/2024</p>
        </div>
      </footer>
    </div>
  )
}
