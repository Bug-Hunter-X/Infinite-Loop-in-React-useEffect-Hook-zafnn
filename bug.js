```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition.  This will cause an infinite loop because count will always be greater than -1
    if (count > -1) {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```