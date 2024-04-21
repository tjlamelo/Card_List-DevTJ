class InfiniteClock {
    constructor() {
      this.dayCount = 430; // Initialisation du délai (jour)
      this.hour = 23;
      this.minute = 59;
      this.second = 59;
      this.updateClock(); // Mettre à jour l'heure chaque seconde
      setInterval(this.updateClock.bind(this), 1000);
    }
  
    updateClock() {
      // Mettre à jour les éléments HTML avec les nouvelles valeurs
      document.getElementById('dayInfinite').textContent = this.dayCount;
      document.getElementById('hour').textContent = this.formatTime(this.hour);
      document.getElementById('minute').textContent = this.formatTime(this.minute);
      document.getElementById('second').textContent = this.formatTime(this.second);
  
      // Décrémenter le temps
      this.second--;
      if (this.second < 0) {
        this.second = 59;
        this.minute--;
        if (this.minute < 0) {
          this.minute = 59;
          this.hour--;
          if (this.hour < 0) {
            this.hour = 23;
            this.dayCount--;
            if (this.dayCount <= 0) {
              clearInterval(this.timer);
            }
          }
        }
      }
  
      // Si l'heure est 00:00:00, décrémenter le jour
      if (this.hour === 0 && this.minute === 0 && this.second === 0) {
        this.dayCount--;
      }
    }
  
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  }
  
  // Initialisation de l'horloge infinie
  const infiniteClock = new InfiniteClock();
  
