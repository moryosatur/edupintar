import SwiftUI

struct HomeView: View {
    let userName: String
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                HeaderView(name: userName)
                
                // Hero Banner
                ZStack(alignment: .leading) {
                    LinearGradient(colors: [.blue, .blue.opacity(0.8)], startPoint: .topLeading, endPoint: .bottomTrailing)
                        .cornerRadius(32)
                    
                    VStack(alignment: .leading, spacing: 8) {
                        Text("Belajar, Latihan, Ulangan,\nQuiz, dan Ujian TKA")
                            .font(.title3)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                        
                        Text("Semua untuk bantu kamu belajar lebih mudah dan seru.")
                            .font(.caption)
                            .foregroundColor(.blue.opacity(0.2))
                        
                        Button("Mulai Sekarang") {}
                            .padding(.horizontal, 16)
                            .padding(.vertical, 8)
                            .background(Color.white)
                            .foregroundColor(.blue)
                            .cornerRadius(20)
                            .font(.caption.bold())
                    }
                    .padding(24)
                }
                .frame(height: 180)
                
                // Menu Grid
                VStack(alignment: .leading, spacing: 16) {
                    Text("Menu Utama")
                        .font(.headline)
                    HStack(spacing: 12) {
                        ForEach(MockData.menuItems) { item in
                            VStack {
                                LinearGradient(colors: item.colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                                    .frame(width: 50, height: 50)
                                    .cornerRadius(12)
                                    .overlay(Image(systemName: item.iconName).foregroundColor(.white))
                                Text(item.title)
                                    .font(.system(size: 10, weight: .bold))
                                    .multilineTextAlignment(.center)
                            }
                        }
                    }
                }
                
                // Progress Section
                IOSCard {
                    VStack(spacing: 16) {
                        HStack {
                            Text("Progress Belajarmu")
                                .font(.headline)
                            Spacer()
                            Text("Lihat Detail >").font(.caption.bold()).foregroundColor(.blue)
                        }
                        
                        HStack(spacing: 20) {
                            CircularProgressView(progress: 0.75)
                                .frame(width: 80, height: 80)
                            
                            VStack(alignment: .leading, spacing: 4) {
                                Text("Kamu sudah mengerjakan")
                                    .font(.caption)
                                    .foregroundColor(.secondary)
                                HStack(alignment: .bottom, spacing: 4) {
                                    Text("15").font(.title.bold())
                                    Text("DARI 20 LATIHAN").font(.caption2.bold()).foregroundColor(.secondary)
                                }
                                ProgressView(value: 0.75)
                            }
                        }
                    }
                    .padding()
                }
                
                // Subjects
                VStack(alignment: .leading, spacing: 16) {
                    Text("Pilih Mata Pelajaran")
                        .font(.headline)
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 16) {
                            ForEach(MockData.subjects) { sub in
                                VStack {
                                    Circle().fill(sub.color).frame(width: 60, height: 60)
                                        .overlay(Image(systemName: sub.iconName).foregroundColor(.white))
                                    Text(sub.name).font(.caption.bold())
                                }
                            }
                        }
                    }
                }
            }
            .padding()
        }
        .background(Color(.systemGray6))
    }
}
