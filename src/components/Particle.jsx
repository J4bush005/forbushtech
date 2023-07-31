import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { MoveDirection, OutMode } from "tsparticles-engine";
function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
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
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
        number: {
            value: 100,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.5,
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

export default Particle;
