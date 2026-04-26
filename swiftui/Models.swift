import SwiftUI

// MARK: - Models
struct Subject: Identifiable {
    let id = UUID()
    let name: String
    let iconName: String
    let color: Color
}

struct MenuItem: Identifiable {
    let id = UUID()
    let title: String
    let subtitle: String
    let iconName: String
    let colors: [Color]
}

struct Recommendation: Identifiable {
    let id = UUID()
    let title: String
    let type: String
    let questions: Int
    let grade: String
    let backgroundColor: Color
    let accentColor: Color
}

// MARK: - Mock Data
struct MockData {
    static let subjects = [
        Subject(name: "Matematika", iconName: "plus.forwardslash.minus", color: .green),
        Subject(name: "Bahasa Indonesia", iconName: "book.text.fill", color: .orange),
        Subject(name: "IPA", iconName: "flask.fill", color: .blue),
        Subject(name: "IPS", iconName: "globe.americas.fill", color: .purple),
        Subject(name: "PKN", iconName: "flag.fill", color: .red)
    ]
    
    static let menuItems = [
        MenuItem(title: "Latihan Soal", subtitle: "Latihan setiap hari", iconName: "doc.text.fill", colors: [.blue, .cyan]),
        MenuItem(title: "Ulangan", subtitle: "Persiapan ulangan harian", iconName: "checkmark.seal.fill", colors: [.green, .mint]),
        MenuItem(title: "Quiz", subtitle: "Kuis seru dan menantang", iconName: "trophy.fill", colors: [.yellow, .orange]),
        MenuItem(title: "Latihan TKA", subtitle: "Persiapan ujian TKA", iconName: "graduationcap.fill", colors: [.indigo, .purple]),
        MenuItem(title: "Bank Soal", subtitle: "Ribuan soal lengkap", iconName: "archivebox.fill", colors: [.pink, .rose])
    ]
}
