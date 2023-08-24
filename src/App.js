import "./styles.css";
import Text from "./Text";
export default function App() {
  const image = [
    "https://picsum.photos/500/300?grayscale",
    "https://picsum.photos/500/300",
    "https://picsum.photos/id/237/500/300",
    "https://picsum.photos/seed/picsum/500/300"
  ];
  return (
    <div className="App">
      <Text image={image} />
    </div>
  );
}
