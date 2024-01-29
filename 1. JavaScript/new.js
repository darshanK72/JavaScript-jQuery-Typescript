for (let i = 1; i <= 100; i++) {
    fetch(`https://dummyjson.com/products/${i}`)
        .then(res => res.json())
        .then(data => (data) => {
            console.log(data);
        });
}