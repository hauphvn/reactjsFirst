### Form

- Cách lưu multiple input trong vào ``state`` :

```javascript
 onHandleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
        [name] : value
    })
}
```

