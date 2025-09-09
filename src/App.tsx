import './App.css'

function App() {

  const payload = {
    type: "greeting",
    user: "John Doe",
    message: "Hello from React Web!",
    timestamp: Date.now(),
  };

  // Define the Android interface type once to avoid repetition
  type AndroidBridge = {
    Android?: {
      postMessage: (message: string) => void;
    };
  };

  // Helper function to get the Android interface
  const getAndroidInterface = (): AndroidBridge => {
    return window as unknown as AndroidBridge;
  };

  const postMessageToAndroid = (message: string) => {
    const androidInterface = getAndroidInterface();
    if (androidInterface.Android?.postMessage) {
      androidInterface.Android.postMessage(message);
    } else {
      console.log("Android interface not found");
    }
  };


  // Send a text message to the Android app
  const sendTextMessage = () => {
    postMessageToAndroid("Hello from React WebView 🚀");
  };

  // Send a JSON payload to the Android app
  const sendJsonPayload = () => {
    postMessageToAndroid(JSON.stringify(payload));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Web App inside WebView</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={sendTextMessage}>Send Message to Android</button>
        <button onClick={sendJsonPayload}>Send JSON payload to Android</button>
      </div>
    </div>
  );
}

export default App
