import React, {useCallback, useMemo} from 'react';
import Particles from 'react-tsparticles';
import {Container,Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";

const ParticlesBackground: React.FC = React.memo(() => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Init function body
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Loaded function body
        console.log(container);
    }, []);

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: "#000000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.9,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
    }), []); 

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
});

export default ParticlesBackground;
