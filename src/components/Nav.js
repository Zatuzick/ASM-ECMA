
const Nav = () => {
    useEffect(() => {
        fetch("http://localhost:3000/menus")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    <div>Nav</div>
  `;
}

export default Nav