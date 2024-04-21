class InfiniteClock {
    constructor() {
      this.dayCount = 430; // Initialisation du délai (jour)
      this.updateTime(); // Mettre à jour l'heure lors de la création de l'instance
      this.updateClock(); // Mettre à jour l'heure chaque seconde
      setInterval(this.updateClock.bind(this), 1000);
    }
  
    updateTime() {
      let dayInfinite = this.dayCount - 1; // Décrémenter le délai chaque seconde
      let hour = 0;
      let minute = 0;
      let second = 0;
  
      // Mettre à jour les valeurs d'heure, de minute et de seconde si nécessaire
      if (dayInfinite < 0) {
        dayInfinite = 0; // Empêcher le délai d'être négatif
        clearInterval(this.timer); // Arrêter le compte à rebours une fois que le délai est atteint
      }
  
      // Mettre à jour les éléments HTML avec les nouvelles valeurs
      document.getElementById('dayInfinite').textContent = dayInfinite;
      document.getElementById('hour').textContent = this.formatTime(hour);
      document.getElementById('minute').textContent = this.formatTime(minute);
      document.getElementById('second').textContent = this.formatTime(second);
  
      // Mettre à jour le délai actuel
      this.dayCount = dayInfinite;
    }
  
    updateClock() {
      this.timer = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  
    formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  }
  
  // Initialisation de l'horloge infinie
  const infiniteClock = new InfiniteClock();
  