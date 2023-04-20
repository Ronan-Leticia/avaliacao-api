const fastify =  require('fastify')();

fastify.get('/calcular-media', (req, res)=> {
    try {
        const notaUm = Number(req.query.notaUm);
        const notaDois = Number(req.query.notaDois);
        const media = (notaUm + notaDois) /2;
        const aluno = req.query.aluno;
    
        if(isNaN(notaUm) || isNaN(notaDois) || !aluno){
            throw "É necessário colocar o nome do aluno, nota um e a nota dois";
        }
        if(media < 6){
            res.send({"mensagem" : `O aluno ${aluno} obteve média ${media} por isso foi reprovado`});
        }else if(media >= 6){
            res.send({"mensagem": `O aluno ${aluno} obteve média ${media} por isso foi aprovado`});
        }
    } catch(err){
        res.send({"erro":err});
    }
    
});

const PORT = 3000;
fastify.listen(PORT, (err) => {
    if (err) throw err 
    console.log(`servidor rodando na porta ${PORT}` );
});