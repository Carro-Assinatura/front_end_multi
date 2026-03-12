import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import carCorolla from "@/assets/car-corolla.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carHatch from "@/assets/car-hatch.jpg";
import carCompact from "@/assets/car-compact.jpg";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

const cars = [
  { name: "Sedan Executive", category: "Sedan", price: "R$ 2.490", image: carCorolla },
  { name: "SUV Premium", category: "SUV", price: "R$ 3.290", image: carSuv },
  { name: "Crossover Urban", category: "Crossover", price: "R$ 2.890", image: carHatch },
  { name: "Compact Sport", category: "Compacto", price: "R$ 1.990", image: carCompact },
];

const CarsSection = () => {
  return (
    <section id="modelos" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Frota</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Modelos disponíveis
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o carro ideal para o seu estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group rounded-2xl bg-card border border-border/50 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={car.image}
                  alt={`${car.name} - carro por assinatura`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{car.category}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{car.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A partir de <span className="text-2xl font-bold text-foreground">{car.price}</span>/mês
                </p>
                <Button variant="cta" className="w-full mt-4" asChild>
                  <a
                    href={`${WHATSAPP_BASE}Olá! Tenho interesse no modelo ${car.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} className="mr-1" />
                    Quero esse
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
