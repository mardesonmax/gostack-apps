# Recuperação de senha

<!-- Requisitos funcionais -->

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O Usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder definir uma nova senha;

<!-- Requisítos não funcionais -->

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

<!-- Regras de negócio -->

**RN**

- O link enviado por email para criar nova senha, deve espirar em 2h;
- O usuário precisa confirmar a nova senha ao defini-la;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um que já esteja em outro cadastro;
- Para atualiziar sua senha, o usuário deve informar a senha antiga;
- Para atualizar a senha, o usuário precisa confimar a mesma;

# Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de uma dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RnF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador deve ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de uma mês com pelo menos um dia disponível para cada prestador;
- O usuário deve poder listar horários disponíveis em um dia específico para cada prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser amazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
