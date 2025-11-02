describe('Meus agendamentos', () => {
  it('deve criar um novo agendamento com sucesso', () => {
    cy.visit('/');
    cy.prompt([
      "Click in Novo button",
      "Enter nome do cliente 'Gabriel Schmitt'",
      "Enter Telefone '61993347347'",
      "Enter Tipo de Procedimento 'Corte de Cabelo'",
      "Enter Valor '100'",
      "Click on calendar button",
      "Click on 1 day button",
      "Click no icone de hora",
      "Click on button 17:00 option",
      "Click on Confirmar button",
      "Click on Tipo de pagamento 'Credito'",
      "Enter Observações 'Valor teste'",
      "Click on Agendar button",
      "Should verify page contain 'Agendamento Criado'"
    ])
  })
})