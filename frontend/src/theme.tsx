import { createSystem, defaultConfig } from "@chakra-ui/react"


export const system = createSystem(defaultConfig, {
    globalCss: {
        body: {
            colorPalette: 'purple',
        },
    },
    theme: {
        tokens: {
            fonts: {
                body: { value: 'var(--font-geist)' },
            },
        },
        semanticTokens: {
            radii: {
                l1: { value: '0.5rem' },
                l2: { value: '0.75rem' },
                l3: { value: '1rem' },
            },
        },
    },
})