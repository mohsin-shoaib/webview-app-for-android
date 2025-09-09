import './App.css'

function App() {
  const sendTextMessage = () => {
    const androidInterface = window as unknown as { Android?: { postMessage: (message: string) => void } };
    
    if (androidInterface.Android?.postMessage) {
      androidInterface.Android.postMessage("Hello from React WebView 🚀");
    } else {
      console.log("Android interface not found");
    }
  };

  const sendJsonPayload = () => {
    const androidInterface = window as unknown as { Android?: { postMessage: (message: any) => void } };
    
    if (androidInterface.Android?.postMessage) {
      androidInterface.Android.postMessage({ message: "Hello from React WebView 🚀" });
    } else {
      console.log("Android interface not found");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Web App inside WebView</h2>
      <button onClick={sendTextMessage}>Send Message to Android</button>
      <button onClick={sendJsonPayload}>Send JSON payload to Android</button>
    </div>
  );
}

export default App
