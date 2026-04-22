import useSound from 'use-sound';

// Modern, minimal UI sounds
const SOUNDS = {
  hover: 'https://assets.mixkit.co/sfx/preview/mixkit-simple-click-630.mp3',
  select: 'https://assets.mixkit.co/sfx/preview/mixkit-selection-click-1109.mp3',
  action: 'https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3',
  transition: 'https://assets.mixkit.co/sfx/preview/mixkit-camera-shutter-click-1133.mp3',
  success: 'https://assets.mixkit.co/sfx/preview/mixkit-digital-quick-win-sound-2819.mp3'
};

export const useAppSounds = () => {
  const [playHover] = useSound(SOUNDS.hover, { volume: 0.25 });
  const [playSelect] = useSound(SOUNDS.select, { volume: 0.4 });
  const [playAction] = useSound(SOUNDS.action, { volume: 0.35 });
  const [playTransition] = useSound(SOUNDS.transition, { volume: 0.3 });
  const [playSuccess] = useSound(SOUNDS.success, { volume: 0.4 });

  return {
    playHover,
    playSelect,
    playAction,
    playTransition,
    playSuccess
  };
};
