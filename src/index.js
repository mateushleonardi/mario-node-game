const player1 = 
{
    nome : "Mario",
    velocidade : 4,
    manobrabilidade : 3,
    poder : 3,
    pontos : 0
};

const player2 = 
{
    nome : "Bowser",
    velocidade : 5,
    manobrabilidade : 2,
    poder : 5,
    pontos : 0
};

const player3 = 
{
    nome : "Peach",
    velocidade : 3,
    manobrabilidade : 4,
    poder : 2,
    pontos : 0
};

const player4 = 
{
    nome : "Luigi",
    velocidade : 3,
    manobrabilidade : 4,
    poder : 4,
    pontos : 0
};

const player5 = 
{
    nome : "Yoshi",
    velocidade : 2,
    manobrabilidade : 4,
    poder : 3,
    pontos : 0
};

const player6 = 
{
    nome : "Donkey Kong",
    velocidade : 2,
    manobrabilidade : 2,
    poder : 5,
    pontos : 0
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1; 
}

async function getRandomBlock(){
    let random = Math.random();
    let result;
    switch (true) {
        case random < 0.33:
            result = "reta";
            break;
        case random < 0.66:
            result = "curva";
            break;
        default:
            result = "confronto";     
    }
    return result;
}

async function logResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} Rolou um dado de ${block} e obteve ${diceResult}. Atributo base: ${attribute}`);
}

async function playRaceEngine(character1, character2, character3, character4){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
       
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        let diceResult3 = await rollDice();
        let diceResult4 = await rollDice();
        
        let testeSkill1 = 0;
        let testeSkill2 = 0;
        let testeSkill3 = 0;
        let testeSkill4 = 0;
    
        if(block === "reta"){
            testeSkill1 = character1.velocidade + diceResult1;
            testeSkill2 = character2.velocidade + diceResult2;
            testeSkill3 = character3.velocidade + diceResult3;
            testeSkill4 = character4.velocidade + diceResult4;
    
            await logResult(character1.nome, "velocidade", diceResult1, character1.velocidade);
            await logResult(character2.nome, "velocidade", diceResult2, character2.velocidade);
            await logResult(character3.nome, "velocidade", diceResult3, character3.velocidade);
            await logResult(character4.nome, "velocidade", diceResult4, character4.velocidade);
        }
        if(block === "curva"){
            testeSkill1 = character1.manobrabilidade + diceResult1;
            testeSkill2 = character2.manobrabilidade + diceResult2;
            testeSkill3 = character3.manobrabilidade + diceResult3;
            testeSkill4 = character4.manobrabilidade + diceResult4;
    
            await logResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);
            await logResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);
            await logResult(character3.nome, "manobrabilidade", diceResult3, character3.manobrabilidade);
            await logResult(character4.nome, "manobrabilidade", diceResult4, character4.manobrabilidade);
        }
        if(block === "confronto"){
            testeSkill1 = character1.poder + diceResult1;
            testeSkill2 = character2.poder + diceResult2;
            testeSkill3 = character3.poder + diceResult3;
            testeSkill4 = character4.poder + diceResult4;
    
            await logResult(character1.nome, "poder", diceResult1, character1.poder);
            await logResult(character2.nome, "poder", diceResult2, character2.poder);
            await logResult(character3.nome, "poder", diceResult3, character3.poder);
            await logResult(character4.nome, "poder", diceResult4, character4.poder);
        }

        // Determinar o vencedor da rodada
        let maxSkill = Math.max(testeSkill1, testeSkill2, testeSkill3, testeSkill4);
        if(testeSkill1 === maxSkill) character1.pontos++;
        if(testeSkill2 === maxSkill) character2.pontos++;
        if(testeSkill3 === maxSkill) character3.pontos++;
        if(testeSkill4 === maxSkill) character4.pontos++;

        console.log(`Vencedores da rodada ${round}:`);
        if(testeSkill1 === maxSkill) console.log(`${character1.nome} venceu a rodada!`);
        if(testeSkill2 === maxSkill) console.log(`${character2.nome} venceu a rodada!`);
        if(testeSkill3 === maxSkill) console.log(`${character3.nome} venceu a rodada!`);
        if(testeSkill4 === maxSkill) console.log(`${character4.nome} venceu a rodada!`);
    }

    console.log(`\nResultado final:`);
    console.log(`${character1.nome} - ${character1.pontos} pontos`);
    console.log(`${character2.nome} - ${character2.pontos} pontos`);
    console.log(`${character3.nome} - ${character3.pontos} pontos`);
    console.log(`${character4.nome} - ${character4.pontos} pontos`);

    let maxPoints = Math.max(character1.pontos, character2.pontos, character3.pontos, character4.pontos);
    if(character1.pontos === maxPoints) console.log(`${character1.nome} é o vencedor!`);
    if(character2.pontos === maxPoints) console.log(`${character2.nome} é o vencedor!`);
    if(character3.pontos === maxPoints) console.log(`${character3.nome} é o vencedor!`);
    if(character4.pontos === maxPoints) console.log(`${character4.nome} é o vencedor!`);
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.nome}, ${player2.nome}, ${player3.nome}, e ${player4.nome} começando... \n`);
    await playRaceEngine(player1, player2, player3, player4);
})();
