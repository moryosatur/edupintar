import SwiftUI

struct IOSCard<Content: View>: View {
    var content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        content
            .background(Color(.systemBackground))
            .cornerRadius(24)
            .shadow(color: Color.black.opacity(0.05), radius: 10, x: 0, y: 5)
    }
}

struct CircularProgressView: View {
    let progress: Double
    
    var body: some View {
        ZStack {
            Circle()
                .stroke(Color(.systemGray5), lineWidth: 8)
            Circle()
                .stroke(Color.blue, style: StrokeStyle(lineWidth: 8, lineCap: .round))
                .rotationEffect(.degrees(-90))
                .trim(from: 0, to: progress)
            
            VStack {
                Text("\(Int(progress * 100))%")
                    .font(.system(size: 20, weight: .black, design: .rounded))
                Text("Hebat! 🚀")
                    .font(.system(size: 8, weight: .bold))
                    .foregroundColor(.blue)
            }
        }
    }
}

struct HeaderView: View {
    let name: String
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: "person.crop.circle.fill")
                .resizable()
                .frame(width: 48, height: 48)
                .foregroundColor(.gray)
                .background(Circle().fill(Color(.systemGray6)))
            
            VStack(alignment: .leading, spacing: 2) {
                Text("Hai, \(name)! 👋")
                    .font(.headline)
                    .fontWeight(.bold)
                Text("Semangat belajar hari ini!")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            HStack(spacing: 8) {
                Button(action: {}) {
                    Image(systemName: "bell.fill")
                        .font(.system(size: 18))
                        .padding(10)
                        .background(Circle().fill(Color(.systemBackground)))
                        .shadow(radius: 2)
                }
                .foregroundColor(.primary)
                
                HStack(spacing: 4) {
                    Text("⭐")
                    Text("120")
                        .font(.system(size: 14, weight: .bold))
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 6)
                .background(Color(.systemBackground))
                .cornerRadius(20)
                .shadow(radius: 2)
            }
        }
    }
}
