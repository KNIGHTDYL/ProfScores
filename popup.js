document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.querySelector('.container').appendChild(resultDiv);

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        resultDiv.innerHTML = '<div class="alert alert-info">Searching...</div>';
        
        const formData = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            uname: document.getElementById('uname').value
        };
        
        try {
            const response = await fetch('http://localhost:5000/search_professor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                resultDiv.innerHTML = `<div class="alert alert-danger mt-3">${data.error}</div>`;
                return;
            }
            
            resultDiv.innerHTML = `
                <div class="alert alert-success mt-3">
                    <p><strong>${data.name}</strong> works in the ${data.department} Department of ${data.school}.</p>
                    <p>Rating: ${data.rating}/5.0</p>
                    <p>Difficulty: ${data.difficulty}/5.0</p>
                    <p>Total Ratings: ${data.numRatings}</p>
                    <p>Would Take Again: ${data.wouldTakeAgain ? data.wouldTakeAgain.toFixed(1) + '%' : 'N/A'}</p>
                </div>
            `;
        } catch (error) {
            resultDiv.innerHTML = `<div class="alert alert-danger mt-3">Error connecting to server. Make sure the Python script is running.</div>`;
        }
    });
});