class Escritorio {
    constructor(material, color, cajones) {
        this.material = material;
        this.color = color;
        this.cajones = cajones;
    }
  
    describir() {
        console.log(`Este escritorio es de ${this.material} y de color ${this.color}. Tiene ${this.cajones} cajones.`);
    }
  
    agregarCajon() {
        this.cajones++;
        console.log("Se ha añadido un cajón al escritorio.");
    }
  }
  
  // Creando 3 objetos Escritorio
    const escritorio1 = new Escritorio("madera", "marrón", 3);
    const escritorio2 = new Escritorio("metal", "negro", 2);
    const escritorio3 = new Escritorio("vidrio", "blanco", 1);
  
  // Imprimiendo la descripción de cada escritorio
    escritorio1.describir();
    escritorio2.describir();
    escritorio3.describir();
  
  // Añadiendo un cajón al primer escritorio
    escritorio1.agregarCajon();
    escritorio1.describir();