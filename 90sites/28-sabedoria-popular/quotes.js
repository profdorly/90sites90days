const arrayOfQuotes = [
    { 
    'quote': 'Quem não quer ser lobo não lhe vista a pele.'
    },
    {
     'quote': 'Águas passadas não movem moinho'
    },
    {
     'quote': 'Um pouco de perfume sempre fica nas mãos de quem oferece flores.'
    },
    {
     'quote': 'Espere o melhor, prepare-se para o pior e aceite o que vier.'
    },
    {
     'quote': 'Lembre-se de cavar o poço bem antes de sentir sede.'
    },
    {
     'quote': 'Observe o comportamento de uma pessoa e corrija seu próprio comportamento.'
    },
    {
    'quote': 'Não se pode esconder a fumaça se você acendeu um fogo.'
    },
    {
    'quote': 'Se empurrar não funcionar, tente puxar.'
    },
    {
     'quote': 'Uma longa viagem começa por um passo.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;    
}
