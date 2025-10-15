const fetchContent = async (labNumber) => {
    const res = await fetch(`/data/lab/sections.json`);
    if (!res.ok) {
        throw new Error(`Помилка завантаження: ${res.status}`);
    }
    const data = await res.json();
    return data[labNumber - 1];
}
export default fetchContent;