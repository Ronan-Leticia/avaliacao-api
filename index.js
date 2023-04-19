const fastify =  require('fastify')();

fastify.get('/calcular-media', (req, res)=> {
    const notaUm = Number(req.query.notaUm);
    const notaDois = Number(req.query.notaDois);
    const media = (notaUm + notaDois) /2;
    const aluno = req.query.aluno;

    if(media < 6){
        res.send({"mensagem" : `O aluno ${aluno} obteve média ${media} por isso foi reprovado`});
    }else if(media >= 6){
        res.send({"mensagem": `O aluno ${aluno} obteve média ${media} por isso foi aprovado`});
    }else{
        res.send("É necessário colocar o nome do aluno, nota um e a nota dois");
    }
});

const PORT = 3000;
fastify.listen(PORT, (err) => {
    if (err) throw err 
    console.log(`servidor rodando na porta ${PORT}` );
});