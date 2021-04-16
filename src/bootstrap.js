import { Image } from "react-native";
import * as Font from "expo-font";

//preload fonts & SVG images
export async function bootstrap() {
  await Font.loadAsync({
    "norms-bold": require("../assets/fonts/TT-Norms-Pro-Bold.otf"),
    "norms-medium": require("../assets/fonts/TT-Norms-Pro-Medium.otf"),
    "norms-regular": require("../assets/fonts/TT-Norms-Pro-Regular.otf"),
  });

  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      }
    });
  }
  
  cacheImages([
    // require("../assets/imgs/manbutt.jpg"),
    require("../assets/imgs/manButt.jpg"),
    require("../assets/imgs/manStrong1.jpg"),
    require("../assets/imgs/manStrong2.jpg"),
    require("../assets/imgs/manStrong3.jpg"),
    require("../assets/gifs/push-ups.gif"),
  ]);
}
