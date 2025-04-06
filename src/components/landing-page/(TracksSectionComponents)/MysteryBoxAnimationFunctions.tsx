import gsap from "gsap";

const shakeMysteryBox = (
    tlRef: React.RefObject<gsap.core.Timeline | null>,
    mysteryBox: HTMLButtonElement,
) => {
    if (!tlRef.current) return;

    const shake = () => {
        if (!tlRef.current) return;

        tlRef.current.to(mysteryBox, {
            x: 5,
            rotate: "2.5deg",
            duration: 0.15,
            ease: "power1.out",
        });
        tlRef.current.to(mysteryBox, {
            x: -5,
            rotate: "-2.5deg",
            duration: 0.15,
            ease: "power1.out",
        });
    };

    tlRef.current.to(mysteryBox, {
        y: "-2vh",
        duration: 0.75,
        ease: "bounce.in",
    });
    for (let idx = 0; idx < 3; idx++) {
        shake();
    }
    tlRef.current.to(mysteryBox, { x: 0, y: 0, rotate: 0, duration: 0.3 });
};

const bounceBox = (
    tlRef: React.RefObject<gsap.core.Timeline | null>,
    mysteryBox: HTMLButtonElement,
    mysteryBoxLid: SVGSVGElement,
    i: number,
) => {
    if (!tlRef.current) return;
    tlRef.current.to(mysteryBox, {
        delay: 0.5,
        duration: 0.2,
        y: -10 + i * -5,
        ease: "power2.out",
        onStart: () => {
            gsap.to(mysteryBoxLid, {
                x: (i + 1) * (i % 2 == 0 ? -5 : 5),
                y: (i + 1) * -10,
                rotate: (i + 1) * (i % 2 == 0 ? -2.5 : 2.5),
            });
        },
        onComplete: () => {
            gsap.to(mysteryBoxLid, { x: 0, y: 0, rotate: 0 });
        },
    });
    tlRef.current.to(mysteryBox, {
        y: 0,
        duration: 0.2,
        ease: "power2.in",
    });
};

const popLid = (
    tlRef: React.RefObject<gsap.core.Timeline | null>,
    mysteryBoxLid: SVGSVGElement,
) => {
    if (!tlRef.current) return;
    const lidPopLeft = Math.random() >= 0.5 ? true : false;

    tlRef.current.to(mysteryBoxLid, {
        delay: 0.5,
        scale: 0.8,
        y: "-50vh",
        x: lidPopLeft ? "-35%" : "35%",
        rotate: lidPopLeft ? "-50deg" : "50deg",
        duration: 0.2,
    });

    tlRef.current.set(mysteryBoxLid, { zIndex: -5 });

    tlRef.current.to(mysteryBoxLid, {
        delay: 0.75,
        scale: 0,
        y: "100vh",
        x: lidPopLeft ? "-75%" : "75%",
        rotate: lidPopLeft ? "-120deg" : "120deg",
        duration: 1,
    });
};

export { shakeMysteryBox, bounceBox, popLid };
