import { useEffect, useRef } from 'react';
import cursorImage from '../assets/cursor.svg';

function PlayfulCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const cursor = cursorRef.current;

    if (!finePointer.matches || !cursor) {
      return undefined;
    }

    let pointerX = 0;
    let pointerY = 0;
    let hasPointerPosition = false;
    const updateCursorPosition = () => {
      if (!hasPointerPosition || document.hidden) {
        return;
      }

      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      cursor.classList.add('playful-cursor--visible');
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      hasPointerPosition = true;
      cursor.classList.toggle(
        'playful-cursor--editing',
        Boolean(event.target.closest?.('input, textarea, select, [contenteditable="true"]'))
      );
      updateCursorPosition();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cursor.classList.remove('playful-cursor--visible');
      } else {
        updateCursorPosition();
      }
    };

    document.documentElement.classList.add('has-playful-cursor');
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', updateCursorPosition);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.documentElement.classList.remove('has-playful-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateCursorPosition);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="playful-cursor" aria-hidden="true" ref={cursorRef}>
      <img src={cursorImage} alt="" draggable="false" />
    </div>
  );
}

export default PlayfulCursor;
