document.getElementById("loadBtn").addEventListener("click", () => {
    fetch("http://13.233.227.192:3000/api/data")
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h3>Data From Backend</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
        })
        .catch(err => {
            document.getElementById("result").innerHTML = "<p>Error fetching data!</p>";
            console.error(err); 
        });
});
