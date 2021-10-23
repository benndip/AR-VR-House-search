import { ViroMaterials, ViroAnimations } from '@viro-community/react-viro'

const styles = ViroMaterials.createMaterials({
    boxside: {
        lightingModel: "Blinn",
        // diffuseTexture: require('./res/Heart_D3.jpg'),
        // specularTexture: require('./res/Heart_S2.jpg'),
    },
});

const animations = ViroAnimations.registerAnimations({
    animateImage: {
        properties: {
            scaleX: 1.0, scaleY: 0.6, scaleZ: 1.0,
            opacity: 1.0
        },
        easing: "Bounce",
        duration: 5000
    },
});

export {

    styles,
    animations
}