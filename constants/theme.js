import { Dimensions } from 'react-native'

const color = {
    COFFE: '#2B2B2B',
    CAPPUCCINO: '#CFAB57',
    ROSE: '#D50000',
    CREAM: '#FCFCFC',
    //      ¯\_(ツ)_/¯      //
    GRAY: '#00000029',
    LIGHT_GRAY: '#E6E6E6'
}

const mockupWidth = 375
const mockupHeight = 667

const { width, height } = Dimensions.get('window')

export const scale = size => width / mockupWidth * size
export const verticalScale = size => height / mockupHeight * size

export { color }