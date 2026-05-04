import { useEffect, useRef } from "react";
import "../../styles/sections/hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const particles = [];
    const particleCount = 1200;

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const interactionRadius = 260;
    const maxDepth = 1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles.length = 0;

      const originX = canvas.width / 2;
      const originY = canvas.height * 1.16;

      for (let i = 0; i < particleCount; i++) {
        const angle =
          (-Math.PI / 1.15) +
          Math.random() * (Math.PI / 0.58);

        const distance = 120 + Math.random() * 480;
        const depth = Math.random() * maxDepth;

        const baseX =
          originX + Math.cos(angle) * distance;

        const baseY =
          originY + Math.sin(angle) * distance;

        particles.push({
          originX,
          originY,
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          z: depth,

          driftX: (Math.random() - 0.5) * 0.4,
          driftY: (Math.random() - 0.5) * 0.4,

          offset: Math.random() * 1000,
          speed: 0.00025 + Math.random() * 0.0006,
        });
      }
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft Stripe-like sky blue background
      ctx.fillStyle = "#eaf6ff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Smooth floating motion in pseudo-3D
        const floatX =
          Math.sin(time * p.speed + p.offset) * 18;

        const floatY =
          Math.cos(time * p.speed + p.offset) * 14;

        const depthShift =
          Math.sin(time * p.speed * 0.6 + p.offset) * 120;

        let x = p.baseX + floatX + p.driftX * depthShift;
        let y = p.baseY + floatY + p.driftY * depthShift;

        // Cursor affects whole field
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < interactionRadius) {
          const force =
            (interactionRadius - distance) /
            interactionRadius;

          const angle = Math.atan2(dy, dx);

          // Deeper particles react less
          const depthFactor = 1 - p.z / maxDepth;

          x +=
            Math.cos(angle) *
            force *
            30 *
            depthFactor;

          y +=
            Math.sin(angle) *
            force *
            30 *
            depthFactor;
        }

        const opacity =
          0.14 + (1 - p.z / maxDepth) * 0.28;

        const pointSize =
          1.2 + (1 - p.z / maxDepth) * 2;

        // Line
        ctx.beginPath();
        ctx.moveTo(p.originX, p.originY);
        ctx.lineTo(x, y);

        ctx.strokeStyle = `rgba(0, 102, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Endpoint
        ctx.beginPath();
        ctx.arc(
          x,
          y,
          pointSize,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(0, 102, 255, ${
          opacity + 0.08
        })`;

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resizeCanvas();
    draw(0);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <canvas
        ref={canvasRef}
        className="hero-canvas"
      ></canvas>

      <div className="hero-content">
        <h1>
          Building Intelligent Platforms for
          <br />
          Modern Businesses
        </h1>

        <p>
          From HRMS to intelligent automation and custom
          digital solutions Inkonsul helps organizations
          and individuals grow faster with technology
        </p>

        <button className="cta-btn">
          Get in Touch
        </button>
      </div>

      {/* <img
        src="/logo2.png"
        alt="Inkonsul Logo"
        className="hero-logo"
      /> */}
    </section>
  );
};

export default Hero;