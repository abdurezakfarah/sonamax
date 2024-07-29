type Direction = "left" | "right" | "up" | "down";

export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  delay?: number,
  duration?: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "20px" : direction === "right" ? "-20px" : 0,
      y: direction === "up" ? "20px" : direction === "down" ? "-20" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay?: number, duration?: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  delay?: number,
  duration?: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "-50px" : direction === "right" ? "50px" : 0,
      y: direction === "up" ? "50px" : direction === "down" ? "-50px" : 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.3,
  delayChildren: number = 0.2,
) => {
  return {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
};
