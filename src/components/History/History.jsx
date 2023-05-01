import React from 'react';
import * as TTabss from '@radix-ui/react-tabs';
import './History.css';

const History = () => (
  <TTabss.Root className="TabsRoot" defaultValue="tab1">
    <TTabss.List className="TabsList" aria-label="História do Canal De Lutas">
      <TTabss.Trigger className="TabsTrigger" value="tab1">
        Um pouquinho
      </TTabss.Trigger>
      <TTabss.Trigger className="TabsTrigger" value="tab2">
        Sobre a gente
      </TTabss.Trigger>
    </TTabss.List>
    <TTabss.Content className="TabsContent" value="tab1">
      <p className="Text">

      Meu nome é Marcos e sou professor de Jiu-Jitsu. Desde jovem, eu sempre fui apaixonado pelas artes marciais e comecei a treinar Jiu-Jitsu aos 16 anos. O que começou como um hobby rapidamente se tornou uma paixão e uma carreira para mim. Eu competi em campeonatos de Jiu-Jitsu e MMA profissional, mas sempre soube que queria ensinar a arte para outras pessoas.

Depois de muitos anos treinando e competindo, decidi que era hora de seguir o meu sonho e abrir a minha própria academia de artes marciais. Eu queria criar um lugar onde as pessoas pudessem aprender Jiu-Jitsu e outras artes marciais de forma segura e amigável, independentemente de suas idades ou níveis de habilidade. Além disso, eu queria criar um ambiente onde os alunos se sentissem bem-vindos e em casa.

      </p>
    </TTabss.Content>
    <TTabss.Content className="TabsContent" value="tab2">
      <p className="Text">

      Abrir minha academia foi um desafio, mas também foi uma das melhores decisões que já tomei. Eu tenho a oportunidade de compartilhar minha paixão pelo Jiu-Jitsu com outros todos os dias, e ver meus alunos crescerem e alcançarem seus objetivos é extremamente gratificante. Não há nada melhor do que ver um aluno dominar uma nova técnica ou ganhar uma luta.

Ao longo dos anos, aprendi que a chave para ser um bom professor é ser paciente, dedicado e apaixonado pelo que você faz. Eu sempre tento inspirar meus alunos a se esforçarem ao máximo e nunca desistirem, não apenas no tatame, mas também na vida. Acredito que as artes marciais são mais do que apenas uma forma de luta; elas ensinam disciplina, respeito e perseverança, e espero passar esses valores para meus alunos.

No final das contas, abrir minha própria academia de artes marciais me permitiu compartilhar minha paixão pelo Jiu-Jitsu com outras pessoas e ajudá-las a se tornarem as melhores versões de si mesmas. Não há nada mais gratificante do que isso.

      </p>
    </TTabss.Content>
  </TTabss.Root>
);

export default History;
