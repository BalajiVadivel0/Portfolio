import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    // Use refs for mutable state to avoid re-renders
    const cursorPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        const onMouseMove = (e) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };

            // Update dot immediately
            if (dot) {
                dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        const animateRing = () => {
            // Linear interpolation (lerp) for smooth trailing
            const ease = 0.15;

            ringPos.current.x += (cursorPos.current.x - ringPos.current.x) * ease;
            ringPos.current.y += (cursorPos.current.y - ringPos.current.y) * ease;

            if (ring) {
                ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
            }

            requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="custom-cursor">
            <div ref={ringRef} className="cursor-ring"></div>
            <div ref={dotRef} className="cursor-dot"></div>
        </div>
    );
};

export default Cursor;
