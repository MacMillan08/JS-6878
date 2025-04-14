function showTab(tabNumber) {
    // Tüm içerikleri gizle
    document.getElementById("tab1-content").classList.add("hidden");
    document.getElementById("tab2-content").classList.add("hidden");
    document.getElementById("tab3-content").classList.add("hidden");
  
    // Tüm butonlardan 'active' class'ını kaldır
    document.getElementById("tab1-button").classList.remove("active");
    document.getElementById("tab2-button").classList.remove("active");
    document.getElementById("tab3-button").classList.remove("active");
  
    // Seçilen sekmeyi göster
    document.getElementById(`tab${tabNumber}-content`).classList.remove("hidden");
  
    // Seçilen butonu vurgula
    document.getElementById(`tab${tabNumber}-button`).classList.add("active");
  }
  