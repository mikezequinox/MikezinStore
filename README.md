Como funciona o pool de conexões?

Basicamente, ele armazena uma quantidade especifica de conexoes(connection limit) em cache(em aberto), para que assim nao precise sempre ficar tentando se conectar ao banco de dados sempre que uma requisicao é feita. Quando uma requisicao é feita, ela busca no pool uma conexao, quando ele termina a conexao, ela é devolvida ao pool. Se todas estao em uso, entao essa requisicao é colocada em uma fila de espera. Se uma conexao nao for usada por um determinado tempo, ela é fechada.

//loggers sao mais colocados em partes criticas, que realmente tem erro
