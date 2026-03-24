"use client";
import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;
    const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 48 : 120;

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.size = Math.random() * 2;
      }
      update(w: number, h: number) {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const draw = () => {
      time += 0.0022;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.5 + Math.sin(time) * canvas.width * 0.06;
      const cy = canvas.height * 0.45 + Math.cos(time * 0.73) * canvas.height * 0.05;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.72);
      gradient.addColorStop(0, "#0c1222");
      gradient.addColorStop(0.45, "#020617");
      gradient.addColorStop(1, "#010409");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.85 - Math.sin(time * 0.5) * 40,
        canvas.height * 0.2,
        0,
        canvas.width * 0.85,
        canvas.height * 0.2,
        canvas.width * 0.4
      );
      g2.addColorStop(0, "rgba(34, 211, 238, 0.07)");
      g2.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g3 = ctx.createRadialGradient(
        canvas.width * 0.12 + Math.cos(time * 0.4) * 30,
        canvas.height * 0.75,
        0,
        canvas.width * 0.12,
        canvas.height * 0.75,
        canvas.width * 0.35
      );
      g3.addColorStop(0, "rgba(167, 139, 250, 0.06)");
      g3.addColorStop(1, "rgba(167, 139, 250, 0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(148, 163, 184, 0.07)";
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        ctx.fillStyle = "rgba(148, 163, 184, 0.3)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.globalAlpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ filter: "blur(0.5px)" }}
    />
  );
};

export default AnimatedBackground;