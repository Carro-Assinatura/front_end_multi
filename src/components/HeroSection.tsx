import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre carros por assinatura.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Carro premium por assinatura Multi Experiências"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero opacity-70" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent-foreground mb-6 animate-fade-up">
            Carro por assinatura
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Dirija um carro zero<br />
            <span className="text-gradient">sem entrada</span> e sem preocupação.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Assinatura de carros com manutenção inclusa, seguro e planos flexíveis. 
            Sem burocracia, sem financiamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="lg" className="text-base h-14 px-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="hero" size="lg" className="text-base h-14 px-8" asChild>
              <a href="#modelos">
                Ver modelos disponíveis
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {["Sem Entrada", "Carro 0km", "Manutenção Inclusa"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
