export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  }

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);

  // 🟡 Load tekst fra backend
  fetch('http://localhost:8080')
    .then(res => res.text())
    .then(text => {
      document.getElementById('backend-text').innerText = text;
    })
    .catch(() => {
      document.getElementById('backend-text').innerText = 'Failed to load backend message';
    });

  // 💾 Save-knap
  document.getElementById('save-btn').addEventListener('click', () => {
    fetch('http://localhost:8080/counter', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(counter)
    });
  });

  // 🔄 Load-knap
  document.getElementById('load-btn').addEventListener('click', async () => {
    const res = await fetch('http://localhost:8080/counter');
    const data = await res.json();
    setCounter(data);
  });
}
