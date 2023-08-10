import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
function LoadingParticle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#000",
        },
        fpsLimit: 120,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 800,
          },
          move: {
            direction: "inside",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 9,
            straight: false,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: { min: 0, max: 1 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
}

export default LoadingParticle;
