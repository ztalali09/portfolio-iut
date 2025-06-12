export const menuSlide = {
    initial: { x: "100%" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slideUp = {
    initial: { y: 80 },
    enter: { y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: 80, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}