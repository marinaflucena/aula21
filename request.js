tnBuscar.onclick = async () => {
    let value = cep.value;

    const result = await (await
        fetch('viacep.com.br/ws/${value}/json/')).json();
}

content.innerHTML = JSON.stringify(result);
