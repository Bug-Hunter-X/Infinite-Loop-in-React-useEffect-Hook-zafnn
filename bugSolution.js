```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDataReceived(true);
    };

    if (!dataReceived) {
        fetchData()
    }
    else if (dataReceived && count < 10) {
      setCount(count + 1);
    }
  }, [count, dataReceived]);

  return <div>Count: {count}</div>;
}
```