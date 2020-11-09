type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';


/**
 * Flex Prop Types
 * @see https://reactnative.dev/docs/flexbox#proptypes
 * @see https://reactnative.dev/docs/layout-props
 * @see https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/LayoutPropTypes.js
 */
interface FlexStyle {
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    alignItems?: FlexAlignType;
    alignSelf?: 'auto' | FlexAlignType;
    aspectRatio?: number;
    borderBottomWidth?: number;
    borderEndWidth?: number | string;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderStartWidth?: number | string;
    borderTopWidth?: number;
    borderWidth?: number;
    bottom?: number | string;
    display?: 'none' | 'flex';
    end?: number | string;
    flex?: number;
    flexBasis?: number | string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexGrow?: number;
    flexShrink?: number;
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    height?: number | string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    left?: number | string;
    margin?: number | string;
    marginBottom?: number | string;
    marginEnd?: number | string;
    marginHorizontal?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginStart?: number | string;
    marginTop?: number | string;
    marginVertical?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: 'visible' | 'hidden' | 'scroll';
    padding?: number | string;
    paddingBottom?: number | string;
    paddingEnd?: number | string;
    paddingHorizontal?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingStart?: number | string;
    paddingTop?: number | string;
    paddingVertical?: number | string;
    position?: 'absolute' | 'relative';
    right?: number | string;
    start?: number | string;
    top?: number | string;
    width?: number | string;
    zIndex?: number;

    /**
     * @platform ios
     */
    direction?: 'inherit' | 'ltr' | 'rtl';
}



interface ShadowStyleIOS {
    shadowColor?: ColorValue;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
}


declare const OpaqueColorValue: unique symbol;
type OpaqueColorValue = typeof OpaqueColorValue;

type ColorValue = string | OpaqueColorValue;



interface PerpectiveTransform {
    perspective: number;
}

interface RotateTransform {
    rotate: string;
}

interface RotateXTransform {
    rotateX: string;
}

interface RotateYTransform {
    rotateY: string;
}

interface RotateZTransform {
    rotateZ: string;
}

interface ScaleTransform {
    scale: number;
}

interface ScaleXTransform {
    scaleX: number;
}

interface ScaleYTransform {
    scaleY: number;
}

interface TranslateXTransform {
    translateX: number;
}

interface TranslateYTransform {
    translateY: number;
}

interface SkewXTransform {
    skewX: string;
}

interface SkewYTransform {
    skewY: string;
}

interface MatrixTransform {
    matrix: number[];
}

interface TransformsStyle {
    transform?: (
        | PerpectiveTransform
        | RotateTransform
        | RotateXTransform
        | RotateYTransform
        | RotateZTransform
        | ScaleTransform
        | ScaleXTransform
        | ScaleYTransform
        | TranslateXTransform
        | TranslateYTransform
        | SkewXTransform
        | SkewYTransform
        | MatrixTransform)[];
    /**
     * @deprecated Use matrix in transform prop instead.
     */
    transformMatrix?: Array<number>;
    /**
     * @deprecated Use rotate in transform prop instead.
     */
    rotation?: number;
    /**
     * @deprecated Use scaleX in transform prop instead.
     */
    scaleX?: number;
    /**
     * @deprecated Use scaleY in transform prop instead.
     */
    scaleY?: number;
    /**
     * @deprecated Use translateX in transform prop instead.
     */
    translateX?: number;
    /**
     * @deprecated Use translateY in transform prop instead.
     */
    translateY?: number;
}



/**
 * @see https://reactnative.dev/docs/view#style
 * @see https://github.com/facebook/react-native/blob/master/Libraries/Components/View/ViewStylePropTypes.js
 */
export interface ViewStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    backfaceVisibility?: 'visible' | 'hidden';
    backgroundColor?: ColorValue;
    borderBottomColor?: ColorValue;
    borderBottomEndRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderBottomStartRadius?: number;
    borderBottomWidth?: number;
    borderColor?: ColorValue;
    borderEndColor?: ColorValue;
    borderLeftColor?: ColorValue;
    borderLeftWidth?: number;
    borderRadius?: number;
    borderRightColor?: ColorValue;
    borderRightWidth?: number;
    borderStartColor?: ColorValue;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    borderTopColor?: ColorValue;
    borderTopEndRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderTopStartRadius?: number;
    borderTopWidth?: number;
    borderWidth?: number;
    opacity?: number;
    testID?: string;
    /**
     * Sets the elevation of a view, using Android's underlying
     * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
     * This adds a drop shadow to the item and affects z-order for overlapping views.
     * Only supported on Android 5.0+, has no effect on earlier versions.
     *
     * @platform android
     */
    elevation?: number;
}


type FontVariant = 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums';

interface TextStyleIOS extends ViewStyle {
    fontVariant?: FontVariant[];
    letterSpacing?: number;
    textDecorationColor?: ColorValue;
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
    writingDirection?: 'auto' | 'ltr' | 'rtl';
}

interface TextStyleAndroid extends ViewStyle {
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
    includeFontPadding?: boolean;
}

// @see https://reactnative.dev/docs/text#style
export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
    color?: ColorValue;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: 'normal' | 'italic';
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported
     * for most fonts. Not all fonts have a variant for each of the numeric
     * values, in that case the closest one is chosen.
     */
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    letterSpacing?: number;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
    textDecorationColor?: ColorValue;
    textShadowColor?: ColorValue;
    textShadowOffset?: { width: number; height: number };
    textShadowRadius?: number;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    testID?: string;
}



export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

/**
 * Image style
 * @see https://reactnative.dev/docs/image#style
 * @see https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageStylePropTypes.js
 */
export interface ImageStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    resizeMode?: ImageResizeMode;
    backfaceVisibility?: 'visible' | 'hidden';
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    backgroundColor?: ColorValue;
    borderColor?: ColorValue;
    borderWidth?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    overflow?: 'visible' | 'hidden';
    overlayColor?: ColorValue;
    tintColor?: ColorValue;
    opacity?: number;
}
