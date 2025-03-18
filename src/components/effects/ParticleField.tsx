
import React, { useRef, useEffect } from 'react';

interface ParticleFieldProps {
  className?: string;
  color?: string;
  density?: number;
  speed?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  className = "",
  color = "#0A84FF",
  density = 50,
  speed = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: undefined, y: undefined, radius: 150 };
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      
      // Recreate particles after resize
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      baseColor: string;
      density: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 2 + 0.5;
        this.baseRadius = this.radius;
        this.color = color;
        this.baseColor = color;
        this.density = Math.random() * 30 + 1;
      }
      
      update() {
        // Mouse interaction
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          // Maximum distance, past which the force is 0
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            // Calculate directional force
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            // Repel particle from mouse
            this.x -= directionX;
            this.y -= directionY;
            
            // Change color and size when affected by mouse
            this.color = '#FF3366'; // Neon magenta
            this.radius = this.baseRadius * 1.5;
          } else {
            // Return to original properties when not affected
            if (this.color !== this.baseColor) {
              this.color = this.baseColor;
              this.radius = this.baseRadius;
            }
          }
        }
        
        // Regular movement
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / (10000 / density));
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const drawLines = (ctx: CanvasRenderingContext2D, p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only draw lines between particles that are close enough
      const maxDistance = 100;
      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `${color}${Math.floor((1 - distance / maxDistance) * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          drawLines(ctx, particles[i], particles[j]);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
      mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
    };
    
    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    // Initialize and start animation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, density, speed]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};
