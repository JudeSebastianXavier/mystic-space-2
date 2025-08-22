import { useTypingEffect } from '../hooks/use-typing-effect';
import LiquidBackground from './LiquidBackground';

export default function HeroSection() {
  const { displayedText: typingName } = useTypingEffect({
    text: 'Lemuria Fay',
    speed: 150,
    delay: 1000,
    bidirectional: true,
    loop: true,
  });

  return (
    <LiquidBackground>
      <section className="w-full bg-transparent py-16 sm:py-24 lg:py-32 xl:py-[216px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main headline */}
            <div className="mb-6 lg:mb-8">
              <h1 className="font-inter font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-foreground leading-tight">
                <span className="block sm:inline">Hello, I am </span>
                <span className="gradient-text block sm:inline relative overflow-visible">
                  <span className="invisible">Lemuria Fay</span>
                  <span className="absolute top-0 left-0 gradient-text leading-tight">
                    {typingName}
                  </span>
                </span>
              </h1>
            </div>
            
            {/* Tagline with mixed gradient text */}
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-light leading-relaxed max-w-4xl mx-auto">
              <span className="text-foreground-muted">A </span>
              <span className="gradient-text-alt">product designer</span>
              <span className="text-foreground-muted"> architecting </span>
              <span className="gradient-text-alt">digital experiences</span>
              <span className="text-foreground-muted"> with clarity, intention, and the quiet </span>
              <span className="gradient-text-alt">confidence</span>
              <span className="text-foreground-muted"> of things that simply work ✨</span>
            </div>
          </div>
        </div>
      </section>
    </LiquidBackground>
  );
}
