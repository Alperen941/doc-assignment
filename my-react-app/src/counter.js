export async function setupCounter(element) {
  let counter = 0;
  const setCounter = (c) => { counter = c; element.innerHTML = `count is ${c}` }

  /* ───── Load initial value from backend ───── */
  try {
    const res  = await fetch(`${import.meta.env.VITE_API_BASE_URL}/counter`);
    const data = await res.json();
    setCounter(data);
    document.getElementById('backend-text').innerText = 'Backend OK ✔';
  } catch {
    document.getElementById('backend-text').innerText = 'Failed to load backend message';
  }

  /* ───── save / load buttons ───── */
  document.getElementById('save-btn').onclick = () =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/counter`, {
        method : 'PUT',
        headers: { 'Content-Type':'application/json' },
        body   : JSON.stringify(counter)
      });

  document.getElementById('load-btn').onclick = async () => {
    const r = await fetch(`${import.meta.env.VITE_API_BASE_URL}/counter`);
    setCounter(await r.json());
  };
}
