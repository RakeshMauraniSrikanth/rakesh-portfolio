import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 200, max: 900, default: 400 },
}

const renderText = ({ text, className, baseWeight = 400 }: { text: string, className?: string, baseWeight?: number }) => {
    return [...text].map((char, index) => {
        return (
            <span
                key={index}
                style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
                className={className}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        )
    })
}

const setupTextHover = (container: HTMLElement ,
    type: keyof typeof FONT_WEIGHTS) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll('span');
    const { min, max, default: baseWeight } = FONT_WEIGHTS[type];

    const animateLetter = (letter: HTMLElement, weight: number, duration = 0.25) => {

        return gsap.to(
            letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    }

    const handleMouseMove = (e: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach(letter => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000)

            animateLetter(letter, min + (max - min) * intensity)
        })
    }
    const handleMouseLeave = () => {
        letters.forEach(letter => {
            animateLetter(letter, baseWeight, 0.5);
        });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
}

const Welcome = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        setupTextHover(titleRef.current as HTMLElement, 'title');
        setupTextHover(subtitleRef.current as HTMLElement, 'subtitle');
    }, [])
    return (

        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText({ text: "Hello, I'm Rakesh Srikanth, Welcome to my", className: 'text-3xl font-georama', baseWeight: 100 })}

            </p>

            <h1 ref={titleRef}>
                {renderText({ text: "portfolio", className: 'text-9xl italic font-georama' })}
            </h1>

            <div className='small-screen'>
                <p>
                    This Portfolio is only optimized for larger screens. Please visit on a desktop or tablet for the best experience.
                </p>

            </div>
        </section>
    )
}

export default Welcome