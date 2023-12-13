Scenario: cadastrar restaurante novo
    Given eu estou na página "cadastro de restaurante"
    And o restaurante "Marcelinho Salgados" não está cadastrada no site
    When eu preencho o campo "nome" com "Marcelinho Salgados"
    And eu preencho o campo "localização" com "Recife, Cidade Universitária"
    And eu preencho o campo "tipo de comida" com "salgados"
    And eu salvo o cadastro
    Then eu estou na página "visualização de conteúdo"
    And eu vejo a mensagem "Marcelinho Salgados foi cadastrado com sucesso"
    And eu vejo "Marcelinho Salgados" como nome do restaurante
    And eu vejo "salgados" como tipo de comida
    And eu vejo "Recife, Cidade Universitária" como localização

Scenario: editar restaurante cadastrado
    Given eu estou na página "visualização de restaurante"
    And eu vejo "Domino's" como nome do restaurante
    And eu vejo "confeitaria" como tipo de comida
    When eu seleciono edição
    And eu atualizo o campo "tipo de comida" para "pizza"
    And salvo a edição
    Then eu vejo a mensagem "Edição realizada com sucesso"
    And eu vejo "Domino's" como nome do restaurante
    And eu vejo "pizza" como tipo de comida

Scenario: deletar restaurante cadastrado
    Given eu estou na página "visualização de restaurante"
    And eu vejo "Almir refeições" como nome do restaurante
    And eu vejo "Recife, Cidade Universitária" como nome do restaurante
    When eu deleto "Almir refeições"
    Then eu vejo a mensagem "Almir refeições foi deletado com sucesso"
    And eu estou na página "restaurantes"
    And não vejo "Almir refeições" com localização "Recife, Cidade Universitária"

Scenario: cadastrar restaurante repetido
    Given eu estou na página "cadastro de restaurante"
    And o restaurante "Brazzetus" com localização "Recife, Várzea" já está cadastrada no site 
    And eu preencho o campo "nome" com "Brazzetus"
    And eu preencho "localização" com "Recife, Várzea"
    When eu salvo o cadastro
    Then eu vejo a mensagem "Brazzetus (Recife, Várzea) já foi cadastrado por outro usuário"

Scenario: visualizar restaurante
    Given eu estou na página "restaurantes"
    And o restaurante "Brazzetus" com localização "Recife, Várzea" já está cadastrada no site 
    When eu seleciono "Brazzetus" com localização "Recife, Várzea"
    Then eu estou na página "visualização de restaurante"
    And eu vejo "Brazzetus" como nome do restaurante
    And eu vejo "Recife, Várzea" como localização

Scenario: cadastrar restaurante sem nome
    Given eu estou na página "cadastro de conteúdo"
    And o campo "nome" está vazio
    And eu preencho "localização" com "Recife, Boa Viagem"
    When eu salvo o cadastro
    Then eu vejo a mensagem "Restaurante sem título não pode ser cadastrado"

Scenario: cadastrar restaurante sem localização
    Given eu estou na página "cadastro de restaurante"
    And eu o campo "localização" está vazio
    And eu preencho o campo "nome" com "Tay San"
    And eu preencho "tipo de comida" com "asiática"
    When eu salvo o cadastro
    Then eu vejo a mensagem "Restaurante sem localização não pode ser cadastrado"