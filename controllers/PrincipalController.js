const {Link} = require("../models/indexModels");
const gerarLink = require("../functions/gerarLink");

module.exports = class PrincipalController {

    static async principal (req, res) {
        return res.status(200).render("index", { title: "Encurtador de link", mensagem: req.flash("mensagem"), erros: req.flash("erros")});     
    };

    static async enviarLink (req, res) {
        let link = req.body.link;
        let linkGerado = gerarLink(link);
        console.log(linkGerado)
        let linkEncurtado = `http://localhost:${process.env.PORT || 3000}/link/${linkGerado}`
        const http = link.split("http");

        if((http.length - 1) < 1) {
            link = `https://${link}`
        };

        let linkExiste = await Link.count({where: {linkEncurtado: linkEncurtado}});
        while (linkExiste >= 1){
            linkGerado = linkGerado + 11;
            linkEncurtado = `http://localhost:${process.env.PORT || 3000}/link/${linkGerado}`
            linkExiste = await Link.count({where: {linkEncurtado: linkEncurtado}});
        };

        await Link.create({linkOriginal: link, linkEncurtado: linkEncurtado});
        req.flash("link", linkEncurtado);
        return res.status(200).redirect(`/linkGerado`);

    };

    static async linkGerado (req, res) {
        return res.status(200).render("linkGerado", { title: "Encurtador de link", link: req.flash("link"), erros: req.flash("erros")});     
    };

    static async redirecionar (req, res) {
        const linkEncurtado = `http://localhost:${process.env.PORT || 3000}/link/${req.params.codigoLink}`
        await Link.findOne({raw:true, where:{linkEncurtado: linkEncurtado}}).then((link) => { 
         console.log(link)
         if(link){
             res.status(301).redirect(link.linkOriginal);
         }else{
            res.status(200).redirect("/");
         };
        }).catch(() => res.status(200).redirect(`/`));

    }
};