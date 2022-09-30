export const colorTypeGradients = (type1, type2, length) => {

    // debugger
    let color1, color2;

    switch (type1) {
        case "grass":
            color1 = "#c0d4c8";
            break;
        case "poison":
            color1 = "#cfb7ed";
            break;
        case "normal":
            color1 = "#ddcbd0";
            break;
        case "fire":
            color1 = "#edc2c4";
            break;
        case "water":
            color1 = "#cbd5ed";
            break;
        case "electric":
            color1 = "#e2e2a0";
            break;
        case "ice":
            color1 = "#c7d7df";
            break;
        case "fighting":
            color1 = "#fcc1b0";
            break;
        case "ground":
            color1 = "#f4d1a6";
            break;
        case "flying":
            color1 = "#b2d2e8";
            break;
        case "psychic":
            color1 = "#ddc0cf";
            break;
        case "bug":
            color1 = "#c1e0c8";
            break;
        case "rock":
            color1 = "#c5aea8";
            break;
        case "ghost":
            color1 = "#d7c2d7";
            break;
        case "dark":
            color1 = "#c6c5e3";
            break;
        case "dragon":
            color1 = "#cadcdf";
            break;
        case "steel":
            color1 = "#c2d4ce";
            break;
        case "fairy":
            color1 = "#e4c0cf";
            break;
        case "shadow":
            color1 = "#cacaca";
            break;
        default:
            color1 = "#c0dfdd";
            break;
    }

    if (length === 2) {

        switch (type2) {
            case "grass":
                color2 = "#c0d4c8";
                break;
            case "poison":
                color2 = "#cfb7ed";
                break;
            case "normal":
                color2 = "#ddcbd0";
                break;
            case "fire":
                color2 = "#edc2c4";
                break;
            case "water":
                color2 = "#cbd5ed";
                break;
            case "electric":
                color2 = "#e2e2a0";
                break;
            case "ice":
                color2 = "#c7d7df";
                break;
            case "fighting":
                color2 = "#fcc1b0";
                break;
            case "ground":
                color2 = "#f4d1a6";
                break;
            case "flying":
                color2 = "#b2d2e8";
                break;
            case "psychic":
                color2 = "#ddc0cf";
                break;
            case "bug":
                color2 = "#c1e0c8";
                break;
            case "rock":
                color2 = "#c5aea8";
                break;
            case "ghost":
                color2 = "#d7c2d7";
                break;
            case "dark":
                color2 = "#c6c5e3";
                break;
            case "dragon":
                color2 = "#cadcdf";
                break;
            case "steel":
                color2 = "#c2d4ce";
                break;
            case "fairy":
                color2 = "#e4c0cf";
                break;
            case "shadow":
                color2 = "#cacaca";
                break;
            default:
                color2 = "#c0dfdd";
                break;
        }
    } else if (length === 1) {
        color2 = color1;
    }

    const finalColor = [color1,color2];

    return finalColor;

}