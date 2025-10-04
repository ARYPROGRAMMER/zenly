import { StyleSheet, View } from "react-native";
import { Canvas, RadialGradient, Rect, vec } from "@shopify/react-native-skia";

export function Gradient() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Canvas
        style={{
          flex: 1,
        }}
      >
        <Rect x={0} y={0} width={256} height={256}>
          <RadialGradient
            c={vec(128, 128)}
            r={128}
            colors={["#0000FF","#FFFF00"]} 
          />

          
        </Rect>
      </Canvas>
    </View>
  );
}
