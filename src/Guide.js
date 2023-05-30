import { useEffect, useState } from 'react';

const Guide = ({ className, children }) => {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const handleKeybinding = (event) => {
      if (event.ctrlKey && event.shiftKey && event.code === 'Digit4') {
        setShow((value) => !value);
      }

      const key = event.key.toLowerCase();

      const number = parseInt(key, 10);
      if (number === 0) {
        setOpacity(100);
        return;
      }

      if (!isNaN(number)) {
        setOpacity(Math.max(0, Math.min(100, number * 10)));
      }
    };

    document.addEventListener('keydown', handleKeybinding, false);

    return () => document.removeEventListener('keydown', handleKeybinding);
  }, []);

  return (
    <div
      className={[
        'pointer-events-none absolute left-0 top-0 h-full w-full',
        show ? '' : 'invisible',
        className,
      ].join(' ')}
      style={{
        opacity: opacity / 100,
      }}
    >
      {children}
    </div>
  );
};

export default Guide;
