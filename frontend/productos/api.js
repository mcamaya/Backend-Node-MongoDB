const urlApi = 'http://localhost:7000/productos';

const obtainAll = async () => {
    try {
        const res = await fetch(`${urlApi}/all`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const obtainOne = async (id) => {
    try {
        const res = await fetch(`${urlApi}/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const insertData = async (registro) => {
    try {
        await fetch(`${urlApi}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registro)
        })
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id) => {
    try {
        await fetch(`${urlApi}/delete/${id}`, {
            method: "DELETE"
        })
    } catch (error) {
        console.error(error);
    }
}

const updateData = async (id, data) => {
    try {
        console.log(data);
        await fetch(`${urlApi}/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    obtainAll,
    obtainOne,
    insertData,
    deleteData,
    updateData
}