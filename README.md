# Polish Clean | Estética Automotiva & Residencial Premium

**Polish Clean** é uma landing page cinematográfica de alta performance, desenvolvida para um estúdio de estética automotiva e higienização premium. O projeto apresenta o conceito de design "Midnight Luxe" (Luxo da Meia-Noite), focado em um estilo escuro de estúdio moderno, com micro-animações interativas e um layout totalmente responsivo projetado para converter clientes do segmento automotivo e residencial de luxo.

## 🌟 Principais Diferenciais

- **Vídeo Herói Cinematográfico:** Vídeo de fundo imersivo (com reprodução automática e mudo) que reflete a essência premium dos tratamentos logo na primeira impressão.
- **Animações de Rolagem (GSAP):** Implementação avançada do *ScrollTrigger* para revelações de elementos fluídas, além de um sistema exclusivo de "Sticky Stacking" (Empilhamento Fixo) para exibir as etapas do protocolo de serviço.
- **Micro-interações de Interface:** 
  - Botões que criam uma área magnética sutil acompanhando o mouse.
  - "Diagnostic Shuffler" animado para simular análise técnica da pintura.
  - "Live Feed Typewriter", simulando painéis de telemetria durante a etapa de vitrificação química.
- **Arquitetura de Fluxo Duplo:** Caminhos visuais separados de forma inteligente para **Detailing Automotivo** e **Serviços Residenciais (Sofás e Mobílias)**, garantindo uma comunicação de nicho que não confunde o cliente.
- **Totalmente Responsivo:** Tela desenhada minuciosamente para brilhar desde monitores ultra-wide até smartphones, mantendo a experiência em 100% de estabilidade cinematográfica.

## 🔒 Segurança Estrutural Nível Enterprise

Apesar de ser uma Landing Page, a aplicação conta com proteção rígida no código e servidor contra as vulnerabilidades web mais comuns:
- **Blindagem contra Tabnabbing:** Todos os links de saída e roteamento externo (WhatsApp, Instagram) utilizando `target="_blank"` estão protegidos com o atributo irrevogável `rel="noreferrer"`.
- **Cabeçalhos HTTP Estritos (Vercel):** Implementação nativa do arquivo `vercel.json` injetando restrições de conexão avançadas diretas no servidor (`X-Frame-Options: DENY` eliminando tentativas de Clickjacking, `X-XSS-Protection` em modo de bloqueio e `Strict-Transport-Security` / HSTS).
- **Código Auditado:** Ausência total de injeções irresponsáveis e suscetíveis (`dangerouslySetInnerHTML`) e árvore de plugins de produção auditada contra falhas conhecidas de injeção (`npm audit`).

## 🛠️ Stack Tecnológico Utilizado

- **Frontend:** [React 19](https://react.dev/)
- **Ferramenta de Build:** [Vite](https://vitejs.dev/)
- **Estilização e Layout:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animações e Interação:** [GSAP](https://gsap.com/) (GreenSock Animation Platform) e ScrollTrigger
- **Iconografia Clássica:** [Lucide React](https://lucide.dev/)

## 📝 Licença Restrita

Estrutura visual desenvolvida exclusivamente sob diretrizes da **Polish Clean**. Direitos particulares resguardados.

