import { useEffect, useRef, useState } from 'react';

interface LiquidBackgroundProps {
  children: React.ReactNode;
}

export default function LiquidBackground({ children }: LiquidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovered(true); // Set hovered when mouse moves
    };

    // Mouse leave handler
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation variables
    const liquidParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

         // Initialize particles
     for (let i = 0; i < 15; i++) {
       liquidParticles.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         vx: (Math.random() - 0.5) * 0.5,
         vy: (Math.random() - 0.5) * 0.5,
         size: Math.random() * 60 + 30,
         opacity: 0.1, // Start with slight visibility for debugging
       });
     }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Update and draw particles
        liquidParticles.forEach((particle) => {
          // Always check mouse interaction (more responsive)
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 250) {
            const force = (250 - distance) / 250;
            particle.vx += (dx / distance) * force * 0.03;
            particle.vy += (dy / distance) * force * 0.03;
            particle.opacity = Math.min(1, particle.opacity + 0.15);
          } else {
            particle.opacity = Math.max(0.1, particle.opacity - 0.05);
          }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Dampen velocity
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle if visible
        if (particle.opacity > 0.01) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          
          gradient.addColorStop(0, `rgba(100, 150, 255, ${particle.opacity * 0.8})`);
          gradient.addColorStop(0.7, `rgba(100, 150, 255, ${particle.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mousePosition, isHovered]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
} 