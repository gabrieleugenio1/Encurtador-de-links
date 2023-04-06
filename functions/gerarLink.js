module.exports = (link) => {
    let linkEncurtado;
    let linkGerado;
    const a = link.split("a");
    const b = link.split("b");
    const c = link.split("c");
    const d = link.split("e");
    const e = link.split("h");
    const f = link.split("l");
    const g = link.split("k");
    let array = [a,b,c,d,e,f,g]
    for(let arr of array){
        linkGerado = (arr[0].length - 5)*Math.floor(10040 + Math.random() * 91000);
    };
    linkEncurtado = (linkGerado * Math.floor(1000 + Math.random() * 9000));
    return linkEncurtado;
}