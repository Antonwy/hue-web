
const toHSL = (item) => {
    return {
        h: Math.round(item.state.hue * 0.00549),
        s: Math.round(item.state.sat / 254 * 100),
        l: map(item.state.bri, 0, 255, 0, 100)
    };
}

export const hsbToRgb = (hue, sat, value) => {
    let satNormal = sat / 255,
        valueNormal = value / 255,
        hueNormal = (hue / 65535) * 360,
        c = valueNormal * satNormal,
        x = c * (1 - Math.abs(((hueNormal / 60) % 2) - 1)),
        m = valueNormal - c,
        red = 0,
        green = 0,
        blue = 0;
    if ((hueNormal >= 0) && (hueNormal < 60)) {
        red = c;
        green = x;
        blue = 0;
    } else if ((hueNormal >= 60) && (hueNormal < 120)) {
        red = x;
        green = c;
        blue = 0;
    } else if ((hueNormal >= 120) && (hueNormal < 180)) {
        red = 0;
        green = c;
        blue = x;
    } else if ((hueNormal >= 180) && (hueNormal < 240)) {
        red = 0;
        green = x;
        blue = c;
    } else if ((hueNormal >= 240) && (hueNormal < 300)) {
        red = x;
        green = 0;
        blue = c;
    } else {
        red = c;
        green = 0;
        blue = x;
    }
    return {
        r: colorNormalizedToEightBit(red + m), 
        g: colorNormalizedToEightBit(green + m), 
        b: colorNormalizedToEightBit(blue + m)
    }
};

const colorNormalizedToEightBit = (value) => {
    return (Math.round(value * 255));
};

const map = (n, start1, stop1, start2, stop2) => {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};   


export default toHSL;


