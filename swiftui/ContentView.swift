import SwiftUI

@main
struct CerdasSDApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var isOnboardingViewed = false
    
    var body: some View {
        if !isOnboardingViewed {
            OnboardingView(isComplete: $isOnboardingViewed)
        } else {
            TabView {
                HomeView(userName: "Adik")
                    .tabItem {
                        Label("Beranda", systemImage: "house.fill")
                    }
                
                Text("Bank Soal")
                    .tabItem {
                        Label("Bank Soal", systemImage: "archivebox.fill")
                    }
                
                Text("Kerjakan")
                    .tabItem {
                        Label("Kerjakan", systemImage: "pencil.and.outline")
                    }
                
                Text("Riwayat")
                    .tabItem {
                        Label("Riwayat", systemImage: "clock.fill")
                    }
                
                Text("Profil")
                    .tabItem {
                        Label("Profil", systemImage: "person.fill")
                    }
            }
            .accentColor(.blue)
        }
    }
}
