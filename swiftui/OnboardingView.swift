import SwiftUI

struct OnboardingView: View {
    @Binding var isComplete: Bool
    @State private var currentStep = 0
    @State private var name = ""
    @State private var selectedGrade = ""
    
    let grades = ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"]
    
    var body: some View {
        VStack(spacing: 30) {
            Spacer()
            
            if currentStep == 0 {
                VStack(spacing: 20) {
                    Text("👋")
                        .font(.system(size: 80))
                    Text("Selamat Datang!")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Text("Ayo mulai petualangan belajarmu hari ini.")
                        .multilineTextAlignment(.center)
                        .foregroundColor(.secondary)
                }
            } else if currentStep == 1 {
                VStack(spacing: 20) {
                    Text("Siapa Namamu?")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Text("Masukkan nama panggilanmu ya.")
                        .foregroundColor(.secondary)
                    TextField("Nama kamu...", text: $name)
                        .padding()
                        .background(Color(.systemGray6))
                        .cornerRadius(16)
                        .padding(.horizontal)
                }
            } else if currentStep == 2 {
                VStack(spacing: 20) {
                    Text("Kelas Berapa?")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 15) {
                        ForEach(grades, id: \.self) { grade in
                            Button(action: { selectedGrade = grade }) {
                                Text(grade)
                                    .padding()
                                    .frame(maxWidth: .infinity)
                                    .background(selectedGrade == grade ? Color.blue : Color(.systemGray6))
                                    .foregroundColor(selectedGrade == grade ? .white : .primary)
                                    .cornerRadius(12)
                            }
                        }
                    }
                    .padding(.horizontal)
                }
            } else if currentStep == 3 {
                // Paywall step
                VStack(spacing: 20) {
                    Text("Cerdas Premium")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    VStack {
                        Text("Rp 29.000/bln")
                            .font(.title)
                            .fontWeight(.black)
                        Text("Akses semua fitur tanpa batas")
                            .font(.caption)
                    }
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(24)
                    .padding(.horizontal)
                }
            } else {
                VStack(spacing: 20) {
                    Text("🚀")
                        .font(.system(size: 80))
                    Text("Siap Belajar?")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                }
            }
            
            Spacer()
            
            Button(action: {
                if currentStep < 4 {
                    currentStep += 1
                } else {
                    isComplete = true
                }
            }) {
                Text(currentStep == 4 ? "Mulai Sekarang" : "Lanjut")
                    .fontWeight(.bold)
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(16)
            }
            .padding(.horizontal)
        }
        .padding(.bottom, 50)
    }
}
