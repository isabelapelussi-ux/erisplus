## Plano de alterações — ErisPlus IPTV

### 1. Atualizar contato WhatsApp

- Trocar `WHATSAPP_NUMBER` em `src/routes/index.tsx` de `5511999999999` para `5519958711611`.
- Garantir que todos os botões "Teste Grátis" e CTAs dos planos continuem usando a função `wa()`.

### 2. Nova seção chamativa: "Tudo o que você assiste. Em um só lugar."

Inserir entre a seção Sobre e Depoimentos uma seção visual com três blocos:

- **Futebol ao vivo** — "Assista a qualquer jogo, de qualquer campeonato, ao vivo."
- **Filmes** — "Dezenas de milhares de filmes de todos os streamings."
- **Séries** — "Milhares de séries de todos os streamings."

Cada bloco terá imagem de fundo temática, título grande e descrição curta, com animação sutil de hover.

### 3. Trocar as 6 imagens do grid do hero

Substituir os cartazes genéricos do grid de 6 imagens por imagens temáticas de alta qualidade:

1. Jogo de futebol ao vivo (estádio/chute)
2. Anime de ação (estilo épico, sem violar direitos autorais — personagem genérico ou cena de ação)
3. Filme famoso/cena cinematográfica icônica
4. Série popular/cena dramática
5. Filme de ação/blockbuster
6. Conteúdo infantil/família ou outro tema variado

> **Nota sobre direitos autorais:** para evitar problemas, usarei imagens geradas no estilo solicitado (futebol, anime, cinema, séries) sem reproduzir personagens ou pôsteres protegidos. Se o usuário quiser imagens específicas de filmes/séries, precisará fornecer as próprias fotos ou licenças.

### 4. Adicionar número de celular no rodapé

- Incluir "Fale conosco: +55 19 95871-1611" no footer.
- Tornar o número clicável para WhatsApp.

### 5. Ajustes de metadados

- Atualizar título, descrição e autor em `src/routes/__root.tsx` de "SuaMarca IPTV" para "ErisPlus IPTV".

### 6. Verificação

- Rodar `bun run build` para garantir que não há erros.
- Verificar preview para confirmar layout responsivo e imagens carregando.

---

**Resultado esperado:** landing mais rica, com seção de conteúdos, imagens temáticas no hero, número real do WhatsApp em todos os CTAs e visível no rodapé.
