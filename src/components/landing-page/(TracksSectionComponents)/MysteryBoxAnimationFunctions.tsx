import gsap from "gsap";

const bounceBox = (
    tl: gsap.core.Timeline,
    mysteryBox: HTMLButtonElement,
    mysteryBoxLid: HTMLDivElement,
    i: number,
) => {
    if (!tl) return;
    tl.to(mysteryBox, {
        delay: 0.4,
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
    tl.to(mysteryBox, {
        y: 0,
        duration: 0.2,
        ease: "power2.in",
    });
};

const popLid = (
    tl: gsap.core.Timeline,
    mysteryBox: HTMLButtonElement,
    mysteryBoxLid: HTMLDivElement,
) => {
    if (!tl) return;
    const lidPopLeft = Math.random() >= 0.5 ? true : false;

    tl.to(
        mysteryBoxLid,
        {
            delay: 0.5,
            scale: 0.8,
            y: "-50vh",
            x: lidPopLeft ? "-35%" : "35%",
            rotate: lidPopLeft ? "-50deg" : "50deg",
            duration: 0.2,
        },
        "start",
    );

    tl.to(
        mysteryBox,
        {
            delay: 0.5,
            y: "-15px",
            x: lidPopLeft ? "-3px" : "3px",
            rotate: lidPopLeft ? "-2deg" : "2deg",
            duration: 0.2,
            ease: "power1.out",
        },
        "start",
    );

    tl.to(mysteryBox, {
        y: 0,
        x: lidPopLeft ? "3px" : "-3px",
        rotate: lidPopLeft ? "2deg" : "-2deg",
        duration: 0.2,
        ease: "power1.out",
    });

    tl.to(mysteryBox, {
        y: 0,
        x: 0,
        rotate: 0,
        duration: 0.2,
    });

    tl.set(mysteryBoxLid, { zIndex: -5 });

    tl.to(mysteryBoxLid, {
        delay: 0.75,
        scale: 0,
        y: "100vh",
        x: lidPopLeft ? "-75%" : "75%",
        rotate: lidPopLeft ? "-120deg" : "120deg",
        duration: 1,
    });
};

export { bounceBox, popLid };
