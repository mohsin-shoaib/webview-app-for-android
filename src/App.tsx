import './App.css'

function App() {
  const sendMessage = () => {
    const androidInterface = window as unknown as { Android?: { postMessage: (message: string) => void } };
    
    if (androidInterface.Android?.postMessage) {
      androidInterface.Android.postMessage("Hello from React WebView 🚀");
    } else {
      console.log("Android interface not found");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Web App inside WebView</h2>
      <button onClick={sendMessage}>Send Message to Android</button>
    </div>
  );
}

export default App
